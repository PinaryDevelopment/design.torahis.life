import type { Preview } from "@storybook/web-components";
import '../src/design-system/til-design-system.css';
import { html } from 'lit';

/* theme-switcher tutorial: https://storybook.js.org/blog/how-to-add-a-theme-switcher-to-storybook/ */
const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
          { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
        ],
        showName: true,
      },
    },
  },

  decorators: [
    (story, { globals: { theme } }) => {
      switch (theme) {
        case 'side-by-side': {
          document.querySelector('html')?.setAttribute('data-theme', 'light');
          return html`
            <style>
              main {
                display: flex;
                max-width: 100%;
              }

              section.theme {
                flex: 0 0 50%;
                overflow: auto;
              }
            </style>
            <main>
              <section class="theme" data-theme="light">${story()}</section>
              <section class="theme" data-theme="dark">${story()}</section>
            </main>
          `;
        }
        default: {
          document.querySelector('html')?.setAttribute('data-theme', theme);
          return story();
        }
      }
    }
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
