// 元素
class x extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var bar = document.createElement("div");
        bar.id = "x-x_bar";
        var size = document.createElement("input");
        var tag_type = document.createElement("input");
        var d = document.createElement("div");

        bar.append(size);
        bar.append(tag_type);
        bar.append(d);
        this.append(bar);

        var o_e: MouseEvent;
        var o_rect: { x: number; y: number };
        var o_rects = [];

        this.addEventListener("mousedown", (e) => {
            if (e.button != 2) return;
            o_e = e;
            o_rect = { x: this.offsetLeft, y: this.offsetTop };
            document.getElementById("画布").style.cursor = "move";

            if (selected_el.length != 0 && selected_el.includes(this)) {
                o_rects = [];
                for (const el of selected_el) {
                    o_rects.push({ el, x: el.offsetLeft, y: el.offsetTop });
                }
            }
        });

        document.addEventListener("mousemove", (e) => {
            mouse(e);
            if (o_e) move = true;
        });
        document.addEventListener("mouseup", (e) => {
            mouse(e);
            o_e = null;
            move = false;
            document.getElementById("画布").style.cursor = "auto";
            o_rects = [];
        });
        var mouse = (e: MouseEvent) => {
            if (o_e) {
                if (o_rects.length != 0) {
                    for (const xel of o_rects) {
                        let x = xel.x + (e.clientX - o_e.clientX),
                            y = xel.y + (e.clientY - o_e.clientY);
                        xel.el.style.left = x + "px";
                        xel.el.style.top = y + "px";
                    }
                } else {
                    let x = o_rect.x + (e.clientX - o_e.clientX),
                        y = o_rect.y + (e.clientY - o_e.clientY);
                    this.style.left = x + "px";
                    this.style.top = y + "px";
                }
            }
        };

        size.oninput = () => {
            let l = size.value.split(",");
            this.style.width = l[0];
            this.style.height = l[1];
        };

        tag_type.setAttribute("list", "tags");
        tag_type.onchange = () => {
            if (this.childNodes[1]) {
                let n_tag = document.createElement(tag_type.value);
                n_tag.contentEditable = "true";
                n_tag.innerHTML =
                    (<HTMLInputElement>this.childNodes[1]).value || (<HTMLElement>this.childNodes[1]).innerHTML;
                this.childNodes[1].replaceWith(n_tag);
                tag_type.value = "";
                tag_type.blur();
            }
        };

        d.onclick = () => {
            this.remove();
        };
    }
}

window.customElements.define("x-x", x);
