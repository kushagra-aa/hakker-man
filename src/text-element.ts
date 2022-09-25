import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('text-element')
export class textElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  typing = ''

  render() {
    return this.typing
  }
  constructor() {
    super()
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Backspace") this.typing = this.typing.slice(0, -1);
      else this.typing = this.typing + event.key;
      this.removeKeys()
    });
  }
  blackListedKeys: Array<string> = ["Shift", "Control", "Alt", "Enter", "Backspace", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "ScrollLock", "End", "Home", "PageUp", "PageDown", "Home", "Insert", "Delete", "Escape", "Tab", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Pause", "NumLock", "CapsLock"];
  private removeKeys(): void {
    this.typing = this.blackListedKeys.reduce((result, key) => result.replaceAll(key, ''), this.typing)
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'text-element': textElement
  }
}
