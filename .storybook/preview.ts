import type { Preview } from "@storybook/web-components";
import '../src/design-system/til-design-system.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
