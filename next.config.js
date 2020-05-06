const path = require('path');
const withImages = require('next-images');
const dev = process.env.NODE_ENV !== 'production';

global.navigator = () => null;
module.exports = withImages();

module.exports = {
  env: {
    CLOUDINARY_CLOUD_NAME: 'dq1embvfh',
  },
  target: 'server',
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.resolve.alias['data'] = path.join(__dirname, 'data');

    return config;
  },
};
