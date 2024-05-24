import { html } from 'lit';

export interface PredefinedColorPaletteProps {
    colorName: string;
}
export const PredefinedColorPalette = ({ colorName }: PredefinedColorPaletteProps) => {
    const hues = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colorClassName = colorName.split(' ').reduce((pv, cv) => pv ? `${pv}-${cv.toLocaleLowerCase()}` : cv.toLocaleLowerCase(), '');
    return html`
        <section class="colors">
            <h3>${colorName}</h3>
            <div class="row">
                ${hues.map((hue) =>
                    html`<div class="token">
                            <span class="small-circle ${colorClassName}-${hue}"></span>
                            <label>--${colorClassName}-${hue}</label>
                        </div>` )}
            </div>
        </section>
    `;
};
