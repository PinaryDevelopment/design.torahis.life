import { StoryObj } from '@storybook/web-components';
import { PredefinedColorPalette } from './PredefinedColorPalette.ts'
import { ColorPalette } from './ColorPalette.ts'
import { html } from 'lit';

const meta = {
    title: 'Tokens',
};

export default meta;

type Story = StoryObj;

export const Colors: Story = {
    render: () => html`
        <h2>Brand Colors</h2>
        ${PredefinedColorPalette({ colorName: 'Blue'})}
        ${PredefinedColorPalette({ colorName: 'Brown'})}
        ${PredefinedColorPalette({ colorName: 'Orange'})}
        <h2>Neutral Colors</h2>
        ${PredefinedColorPalette({ colorName: 'Neutral'})}
        <h2>Brand Colors</h2>
        ${ColorPalette({ colorNames: ['Primary', 'Primary Light', 'Secondary', 'Secondary Light', 'Accent'] })}
    `,
    name: 'Brand Colors'
};
