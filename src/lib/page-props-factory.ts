import { AxiosError } from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import {
  ComponentPropsService,
  DictionaryService,
  LayoutService,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { componentModule } from 'temp/componentFactory';
import { layoutService } from 'lib/layout-service';
import { dictionaryService } from 'lib/dictionary-service';
import { config as packageConfig } from '../../package.json';
import nextConfig from '../../next.config';

/**
 * Extract normalized Sitecore item path from query
 */
const extractPath = function (
  params: ParsedUrlQuery | undefined,
  isExportMode?: boolean,
  locale?: string
): string {
  if (params === undefined) {
    return '/';
  }

  if (isExportMode) {
    // home page
    if (!params.path) return '/';
    console.log('FINAL PATH:::::', (params.path as string[]).join('/').replace(`${locale}/`, '/'));
    return (params.path as string[]).join('/').replace(`${locale}/`, '/');
  }

  let path = Array.isArray(params.path) ? params.path.join('/') : params.path ?? '/';

  // Ensure leading '/'
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  return path;
};

/**
 * Determines whether context is GetServerSidePropsContext (SSR) or GetStaticPropsContext (SSG)
 * @param context {GetServerSidePropsContext | GetStaticPropsContext}
 */
const isServerSidePropsContext = function (
  context: GetServerSidePropsContext | GetStaticPropsContext
): context is GetServerSidePropsContext {
  return (<GetServerSidePropsContext>context).req !== undefined;
};

export class SitecorePagePropsFactory {
  private componentPropsService: ComponentPropsService;

  constructor() {
    this.componentPropsService = new ComponentPropsService();
  }

  private get layoutService(): LayoutService {
    // Just returning our REST layout service atm, but in the very
    // near future we'll also have a GraphQL-based layout service.
    // Stubbed out as getter for potential logic here (e.g. based on constructor props)...
    return layoutService;
  }

  private get dictionaryService(): DictionaryService {
    // Just returning our REST dictionary service atm, but in the very
    // near future we'll also have a GraphQL-based dictionary service.
    // Stubbed out as getter for potential logic here (e.g. based on constructor props)...
    return dictionaryService;
  }

  public detectLocale(context: GetServerSidePropsContext | GetStaticPropsContext): string {
    const defaultLanguage = packageConfig.language;

    if (!context.params || !context.params.path) return defaultLanguage;

    const paths = context.params.path;

    if (paths[0] === '') return defaultLanguage;

    return nextConfig.languages.find((lang: string) => lang === paths[0]) || defaultLanguage;
  }

  /**
   * Create SitecorePageProps for given context (SSR / GetServerSidePropsContext or SSG / GetStaticPropsContext)
   * @param context {GetServerSidePropsContext | GetStaticPropsContext}
   * @see SitecorePageProps
   */
  public async create(
    context: GetServerSidePropsContext | GetStaticPropsContext
  ): Promise<SitecorePageProps> {
    // Use context locale if Next.js i18n is configured, otherwise use language defined in package.json
    const locale = this.detectLocale(context);

    // Get normalized Sitecore item path
    // i18n disabled when use nextjs Export
    const path = extractPath(context.params, !context.locale, locale);

    console.log('DETECTED LOCALE AND PATH', locale, path);

    let notFound = false;

    // Fetch layoutData from Layout Service, passing on req/res for SSR
    const layoutData = await this.layoutService
      .fetchLayoutData(
        path,
        locale,
        isServerSidePropsContext(context) ? (context as GetServerSidePropsContext).req : undefined,
        isServerSidePropsContext(context) ? (context as GetServerSidePropsContext).res : undefined
      )
      .catch((error: AxiosError<LayoutServiceData>) => {
        if (error.response?.status === 404) {
          // Let 404s (invalid path) through.
          // layoutData.sitecore.route will be missing, but
          // layoutData.sitecore.context will provide valuable information
          notFound = true;
          return error.response.data;
        }
        throw error;
      });

    // Fetch dictionary data from Dictionary Service
    const dictionary = await this.dictionaryService.fetchDictionaryData(locale);

    // Retrieve component props using side-effects defined on components level
    let componentProps = {};
    if (layoutData.sitecore.route) {
      if (isServerSidePropsContext(context)) {
        componentProps = await this.componentPropsService.fetchServerSideComponentProps({
          layoutData: layoutData,
          context,
          componentModule,
        });
      } else {
        componentProps = await this.componentPropsService.fetchStaticComponentProps({
          layoutData: layoutData,
          context,
          componentModule,
        });
      }
    }
    return {
      locale,
      layoutData,
      dictionary,
      componentProps,
      notFound,
    };
  }
}

export const sitecorePagePropsFactory = new SitecorePagePropsFactory();
