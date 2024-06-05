import { LitElement, css, html, nothing, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from '../design-system/components/_buttons.css?inline'

@customElement('pd-button')
export class PdButtonElement extends LitElement {
  static styles = [
    css`${unsafeCSS(styles)}`
  ];

  @property({ type: String, reflect: true })
  text = ''

  @property({ type: String, reflect: true })
  type = 'button'

  @property({ type: String, reflect: false })
  classes = ['up']

  @property({ type: String, reflect: true })
  disabled = undefined

  render() {
    return html`
    <button
      class="${this.classes.join(' ')}"
      type="${this.type}"
      ?disabled="${this.disabled === ''}"
      @mousedown="${this.onButtonPress}"
      @mouseup="${this.onButtonRelease}"
      @focus="${this.onButtonFocus}"
      @blur="${this.onButtonBlur}"
      @keydown="${this.onButtonKeydown}"
      @keyup="${this.onButtonKeyup}"
    >
      <slot name="start"></slot>
      ${this.text}
      <slot name="end"></slot>
    </button>
    `
  }

  private onButtonKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.replaceClassWith('up', 'down');
    }
  }

  private onButtonKeyup(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      (e.target as HTMLElement)?.blur();
      setTimeout(() => this.replaceClassWith('down', 'up'), 200);
    }
  }

  private onButtonFocus(e: Event) {
    setTimeout(
      () => {
        if((e.target as HTMLElement) === document.activeElement) {
          this.addClass('focus')
        }
      },
      100);
  }

  private onButtonBlur(e: Event) {
    this.removeClass('focus');
  }

  private onButtonPress(e: MouseEvent) {
    this.replaceClassWith('up', 'down');
  }

  private onButtonRelease(e: MouseEvent) {
    (e.target as HTMLElement)?.blur();
    setTimeout(() => this.replaceClassWith('down', 'up'), 200);
  }

  private addClass(className: string) {
    this.classes = this.classes.concat([className]);
  }

  private removeClass(className: string) {
    this.classes = this.classes.filter(c => c !== className);
  }

  private replaceClassWith(classNameToRemove: string, classNameToAdd: string) {
    this.removeClass(classNameToRemove);
    this.addClass(classNameToAdd);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pd-button': PdButtonElement
  }
}
