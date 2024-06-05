import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../../components/pd-icon';

const meta: Meta = {
    title: 'Components',
    component: 'pd-icon'
};

export default meta;

type Story = StoryObj;

export const SpinnerIcon: Story = {
    render: () => html`
      <style>
      pd-icon {
        display: block;

      }
      </style>
      <pd-icon pd-spin icon="circle-notch"></pd-icon>
    `,
    name: 'Icons'
};
