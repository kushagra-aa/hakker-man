import { LitElement as c } from "lit-element";
import { property as y, customElement as a } from "lit-element/lib/decorators";
var h = Object.defineProperty,
  m = Object.getOwnPropertyDescriptor,
  l = (e, r, i, s) => {
    for (
      var t = s > 1 ? void 0 : s ? m(r, i) : r, o = e.length - 1, p;
      o >= 0;
      o--
    )
      (p = e[o]) && (t = (s ? p(r, i, t) : p(t)) || t);
    return s && t && h(r, i, t), t;
  };
let n = class extends c {
  constructor() {
    super(),
      (this.typing = ""),
      (this.blackListedKeys = [
        "Shift",
        "Control",
        "Alt",
        "Enter",
        "Backspace",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ScrollLock",
        "End",
        "Home",
        "PageUp",
        "PageDown",
        "Home",
        "Insert",
        "Delete",
        "Escape",
        "Tab",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12",
        "Pause",
        "NumLock",
        "CapsLock",
        "OS",
      ]),
      window.addEventListener("keydown", (e) => {
        e.key === "Backspace"
          ? (this.typing = this.typing.slice(0, -1))
          : (this.typing = this.typing + e.key),
          this.removeKeys();
      });
  }
  render() {
    return this.typing;
  }
  removeKeys() {
    this.typing = this.blackListedKeys.reduce(
      (e, r) => e.replaceAll(r, ""),
      this.typing
    );
  }
};
l([y()], n.prototype, "typing", 2);
n = l([a("text-element")], n);
export { n as textElement };
