module.exports = {
  // Automatically import all the files ending with *.stories.js
  stories: ['../stories/**/*.stories.js'],
  // addon which we are going to use...
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions', 
    '@storybook/addon-links'
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
