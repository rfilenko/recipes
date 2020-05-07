const path = require('path');
const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production';

global.navigator = () => null;
module.exports = withImages();

module.exports = {
  env: {
    CLOUDINARY_CLOUD_NAME: 'dq1embvfh',
    // Use API_PROD_URL in prod and API_URL for dev.
    API_URL: isProd ? process.env.API_PROD_URL : process.env.API_URL,
  },
  target: 'serverless',
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.resolve.alias['data'] = path.join(__dirname, 'data');

    return config;
  },
};
