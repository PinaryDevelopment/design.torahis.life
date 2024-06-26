import { html } from 'lit';

export interface ColorPaletteProps {
    colorNames: string[]
}
export const ColorPalette = ({ colorNames }: ColorPaletteProps) => {
    const colors = colorNames.map(colorName => ({ name: colorName, className: colorName.split(' ').reduce((pv, cv) => pv ? `${pv}-${cv.toLocaleLowerCase()}` : cv.toLocaleLowerCase(), '') }));
    return html`
        <section class="colors">
            <div class="row">
                ${colors.map((color) =>
                    html`<div class="token">
                            <span class="small-circle ${color.className}"></span>
                            <label>--${color.name.split(' ').map(str => str.toLocaleLowerCase()).join('-')}</label>
                        </div>` )}
            </div>
        </section>
    `;
};
