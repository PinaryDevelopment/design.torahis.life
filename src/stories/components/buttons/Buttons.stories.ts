import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../../components/pd-button';
import '../../../components/pd-icon';
import './buttons.css';

const meta: Meta = {
  title: 'Components',
  component: 'pd-button'
};

export default meta;

type Story = StoryObj;

export const Buttons: Story = {
  render: () => html`
      <div class="row">
        <pd-button text="Click me"></pd-button>
        <pd-button type="submit" text="Submit" disabled><pd-icon pd-spin class="muted" icon="circle-notch" slot="end"></pd-icon></pd-button>
        <pd-button disabled text="Submit"></pd-button>
      </div>
    `,
  name: 'Buttons'
};

