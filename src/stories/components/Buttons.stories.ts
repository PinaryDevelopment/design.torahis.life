import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../components/pd-button';
import './buttons.css';

const meta: Meta = {
    title: 'Components',
    component: 'pd-button'
};

export default meta;

type Story = StoryObj;

export const Colors: Story = {
    render: () => html`
      <div class="row">
        <pd-button text="Submit"></pd-button>
        <pd-button disabled text="Submit"></pd-button>
      </div>
    `,
    name: 'Buttons'
};
