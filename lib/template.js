// 元素
class x extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {}
}

window.customElements.define("x-x", x);
