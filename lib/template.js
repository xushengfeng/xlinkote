// 元素
class x extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var bar = document.createElement("div");
        bar.id = "x-x_bar";
        var move = document.createElement("div");
        var d = document.createElement("div");

        bar.append(move);
        bar.append(d);
        this.append(bar);

        var o_e;
        var o_rect;

        document.addEventListener("mousedown", (e) => {
            if (e.target == move) {
                o_e = e;
                o_rect = this.getBoundingClientRect();
            }
        });

        document.addEventListener("mousemove", (e) => {
            mouse(e);
        });
        document.addEventListener("mouseup", (e) => {
            mouse(e);
            o_e = null;
        });
        var mouse = (e) => {
            if (o_e) {
                let x = o_rect.x + (e.clientX - o_e.clientX),
                    y = o_rect.y + (e.clientY - o_e.clientY);
                this.style.left = x + "px";
                this.style.top = y + "px";
            }
        };

        d.onclick = () => {
            this.remove();
        };
    }
}

window.customElements.define("x-x", x);
