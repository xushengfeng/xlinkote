// 元素
class x extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var bar = document.createElement("div");
        bar.id = "x-x_bar";
        var size = document.createElement("input");
        var d = document.createElement("div");

        bar.append(size);
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

        d.onclick = () => {
            this.remove();
            selected_el = selected_el.filter((el) => el != this);
        };
    }
}

window.customElements.define("x-x", x);

// markdown
class markdown extends HTMLElement {
    constructor() {
        super();
    }

    _value = "";

    connectedCallback() {
        var b = document.createElement("div");
        b.id = "t_md";
        var s = document.createElement("div");
        var text = document.createElement("textarea");
        this.append(b);
        this.append(s);
        this.append(text);

        b.onclick = () => {
            text.classList.toggle("show_md");
            text.focus();
        };
        text.oninput = () => {
            this._value = text.value;
            s.innerHTML = md.render(text.value);
        };
    }

    edit() {
        (<HTMLElement>this.querySelector("#t_md")).click();
    }

    set value(v) {
        this._value = this.querySelector("textarea").value = v;
        this.querySelector("div:nth-child(2)").innerHTML = md.render(v);
    }

    get value() {
        return this._value;
    }
}

window.customElements.define("x-md", markdown);
