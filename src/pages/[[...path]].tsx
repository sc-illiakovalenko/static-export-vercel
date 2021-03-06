import { GetStaticPaths, GetStaticProps } from 'next';
import NotFound from 'components/NotFound';
import Layout from 'components/Layout';
import { SitecoreContext, ComponentPropsContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { componentFactory } from 'temp/componentFactory';
// import config from 'temp/config';

const SitecorePage = ({ notFound, layoutData, componentProps }: SitecorePageProps): JSX.Element => {
  console.log('----', notFound, layoutData, componentProps);
  if (notFound) {
    return <NotFound context={layoutData?.sitecore?.context} />;
  }

  const context: StyleguideSitecoreContextValue = {
    route: layoutData.sitecore.route,
    itemId: layoutData.sitecore.route?.itemId,
    ...layoutData.sitecore.context,
  };

  const routeData = layoutData.sitecore.route;

  const PageLayout = () => (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext<StyleguideSitecoreContextValue>
        componentFactory={componentFactory}
        context={context}
      >
        <Layout route={routeData} />
      </SitecoreContext>
    </ComponentPropsContext>
  );

  return <PageLayout />;
};

// This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).
export const getStaticPaths: GetStaticPaths = async () => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request.
  // See https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
  //
  // Ultimately, this is where we'll also be able to request a "sitemap" from Sitecore.

  return {
    paths: [
      {
        params: {
          path: [''],
        },
      },
      {
        params: {
          path: ['styleguide'],
        },
      },
      {
        params: {
          path: ['styleguide', 'custom-route-type'],
        },
      },
      {
        params: {
          path: ['graphql'],
        },
      },
      {
        params: {
          path: ['graphql', 'sample-1'],
        },
      },
      {
        params: {
          path: ['graphql', 'sample-2'],
        },
      },
      {
        params: {
          path: ['da-DK', 'styleguide'],
        },
      },
    ],
    fallback: false,
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps: GetStaticProps = async (context) => {
  const props = await sitecorePagePropsFactory.create(context);

  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
  };
};

export default SitecorePage;
