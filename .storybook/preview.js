/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
import {initialize, mswLoader} from "msw-storybook-addon";

initialize();

const preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
