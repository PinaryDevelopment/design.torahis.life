import { LitElement, css, nothing, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'
import styles from '../design-system/components/_icons.css?inline'
import { until } from 'lit/directives/until.js';

/* https://software-engineering-corner.zuehlke.com/creating-an-icon-web-component-with-lazy-loading-in-litelement */
@customElement('pd-icon')
export class PdIconElement extends LitElement {
  @property({ type: String, attribute: 'pd-spin' })
  public pdSpin = undefined;

  @property({ type: String })
  public icon?: string;

  static styles = [
    css`${unsafeCSS(styles)}`
  ];

  render() {
    const importedIcon = import(`../assets/icons/${this.icon}.svg?raw`)
                          .then(iconModule => {
                            let icon = iconModule.default;
                            if (this.pdSpin === '') {
                              icon = icon.replace('<svg', '<svg class="pd-spin"')
                            }
                            return unsafeSVG(icon);
                          });
    return until(importedIcon, nothing);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pd-icon': PdIconElement
  }
}
