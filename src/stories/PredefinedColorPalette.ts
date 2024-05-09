import { html } from 'lit';
import './color-palettes.css';

export interface PredefinedColorPaletteProps {
    colorName: string;
}
export const PredefinedColorPalette = ({ colorName }: PredefinedColorPaletteProps) => {
    const hues = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colorClassName = colorName.split(' ').reduce((pv, cv) => pv ? `${pv}-${cv.toLocaleLowerCase()}` : cv.toLocaleLowerCase(), '');
    return html`
        <section>
            <h3>${colorName}</h3>
            <div class="row">
                ${hues.map((hue) =>
                    html`<div class="token">
                            <span class="small-circle ${colorClassName}-${hue}"></span>
                            <label>${hue}</label>
                        </div>` )}
            </div>
        </section>
    `;
};
