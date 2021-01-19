const jssConfig = require('./src/temp/config');
const packageConfig = require('./package.json').config;
const { JSS_MODE_DISCONNECTED } = require('@sitecore-jss/sitecore-jss-nextjs');

const disconnectedServerUrl = `http://localhost:${process.env.PROXY_PORT || 3042}/`;
const isDisconnected = process.env.JSS_MODE === JSS_MODE_DISCONNECTED;

// A public URL (and uses below) is required for Sitecore Experience Editor support.
// This is set to http://localhost:3000 by default. See .env for more details.
const publicUrl = process.env.PUBLIC_URL;

const nextConfig = {
  languages: ['en', 'da-DK'],
  // Make the same PUBLIC_URL available as an environment variable on the client bundle
  env: {
    PUBLIC_URL: publicUrl,
  },
  webpack: (config, options) => {
    applyGraphQLCodeGenerationLoaders(config, options);

    return config;
  },
};

const applyGraphQLCodeGenerationLoaders = (config, options) => {
  config.module.rules.push({
    test: /\.graphql$/,
    exclude: /node_modules/,
    use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
  });

  config.module.rules.push({
    test: /\.graphqls$/,
    exclude: /node_modules/,
    use: ['graphql-let/schema/loader'],
  });

  config.module.rules.push({
    test: /\.ya?ml$/,
    type: 'json',
    use: 'yaml-loader',
  });

  return config;
};

module.exports = nextConfig;
