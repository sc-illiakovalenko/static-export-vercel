/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory.ts to modify the generation of this file.
import * as ContentBlock from 'components/ContentBlock';
import * as GraphQLConnectedDemo from 'components/GraphQL-ConnectedDemo';
import * as GraphQLIntegratedDemo from 'components/GraphQL-IntegratedDemo';
import * as GraphQLLayout from 'components/GraphQL-Layout';
import * as StyleguideComponentParams from 'components/Styleguide-ComponentParams';
import * as StyleguideCustomRouteType from 'components/Styleguide-CustomRouteType';
import * as StyleguideFieldUsageCheckbox from 'components/Styleguide-FieldUsage-Checkbox';
import * as StyleguideFieldUsageContentList from 'components/Styleguide-FieldUsage-ContentList';
import * as StyleguideFieldUsageCustom from 'components/Styleguide-FieldUsage-Custom';
import * as StyleguideFieldUsageDate from 'components/Styleguide-FieldUsage-Date';
import * as StyleguideFieldUsageFile from 'components/Styleguide-FieldUsage-File';
import * as StyleguideFieldUsageImage from 'components/Styleguide-FieldUsage-Image';
import * as StyleguideFieldUsageItemLink from 'components/Styleguide-FieldUsage-ItemLink';
import * as StyleguideFieldUsageLink from 'components/Styleguide-FieldUsage-Link';
import * as StyleguideFieldUsageNumber from 'components/Styleguide-FieldUsage-Number';
import * as StyleguideFieldUsageRichText from 'components/Styleguide-FieldUsage-RichText';
import * as StyleguideFieldUsageText from 'components/Styleguide-FieldUsage-Text';
import * as StyleguideLayout from 'components/Styleguide-Layout';
import * as StyleguideLayoutReuse from 'components/Styleguide-Layout-Reuse';
import * as StyleguideLayoutTabs from 'components/Styleguide-Layout-Tabs';
import * as StyleguideLayoutTabsTab from 'components/Styleguide-Layout-Tabs-Tab';
import * as StyleguideMultilingual from 'components/Styleguide-Multilingual';
import * as StyleguideRouteFields from 'components/Styleguide-RouteFields';
import * as StyleguideSection from 'components/Styleguide-Section';
import * as StyleguideSitecoreContext from 'components/Styleguide-SitecoreContext';
import * as StyleguideTracking from 'components/Styleguide-Tracking';

const components = new Map();
components.set('ContentBlock', ContentBlock);
components.set('GraphQL-ConnectedDemo', GraphQLConnectedDemo);
components.set('GraphQL-IntegratedDemo', GraphQLIntegratedDemo);
components.set('GraphQL-Layout', GraphQLLayout);
components.set('Styleguide-ComponentParams', StyleguideComponentParams);
components.set('Styleguide-CustomRouteType', StyleguideCustomRouteType);
components.set('Styleguide-FieldUsage-Checkbox', StyleguideFieldUsageCheckbox);
components.set('Styleguide-FieldUsage-ContentList', StyleguideFieldUsageContentList);
components.set('Styleguide-FieldUsage-Custom', StyleguideFieldUsageCustom);
components.set('Styleguide-FieldUsage-Date', StyleguideFieldUsageDate);
components.set('Styleguide-FieldUsage-File', StyleguideFieldUsageFile);
components.set('Styleguide-FieldUsage-Image', StyleguideFieldUsageImage);
components.set('Styleguide-FieldUsage-ItemLink', StyleguideFieldUsageItemLink);
components.set('Styleguide-FieldUsage-Link', StyleguideFieldUsageLink);
components.set('Styleguide-FieldUsage-Number', StyleguideFieldUsageNumber);
components.set('Styleguide-FieldUsage-RichText', StyleguideFieldUsageRichText);
components.set('Styleguide-FieldUsage-Text', StyleguideFieldUsageText);
components.set('Styleguide-Layout', StyleguideLayout);
components.set('Styleguide-Layout-Reuse', StyleguideLayoutReuse);
components.set('Styleguide-Layout-Tabs', StyleguideLayoutTabs);
components.set('Styleguide-Layout-Tabs-Tab', StyleguideLayoutTabsTab);
components.set('Styleguide-Multilingual', StyleguideMultilingual);
components.set('Styleguide-RouteFields', StyleguideRouteFields);
components.set('Styleguide-Section', StyleguideSection);
components.set('Styleguide-SitecoreContext', StyleguideSitecoreContext);
components.set('Styleguide-Tracking', StyleguideTracking);

export function componentModule(componentName: string) {
  return components.get(componentName);
};

export function componentFactory(componentName: string) {
  return components.get(componentName)?.default;
};
