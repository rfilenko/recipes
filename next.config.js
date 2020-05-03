const withImages = require('next-images');
module.exports = withImages();

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isDev) return 'http://localhost:3300/';
      if (isProd) {
        return 'https://recipes-app.rfilenko.now.sh/';
      }
    })(),
    CLOUDINARY_CLOUD_NAME: 'dq1embvfh',
  };

  // next.config.js object
  return {
    env,
    target: 'server',
  };
};
