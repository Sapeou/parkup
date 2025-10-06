export default {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },
};
