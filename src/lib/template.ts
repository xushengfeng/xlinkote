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

    index;

    connectedCallback() {
        var b = document.createElement("div");
        b.id = "t_md";
        var s = document.createElement("div");
        s.id = "h";
        var text = document.createElement("textarea");
        this.append(b);
        this.append(s);
        this.append(text);

        b.onclick = () => {
            text.classList.toggle("show_md");
            text.focus();
        };
        var l = md.parse(text.value, {
            references: {},
        });
        this.index = line_el(l);
        text.oninput = () => {
            this._value = text.value;
            s.innerHTML = md.render(text.value);
            l = md.parse(text.value, {
                references: {},
            });
            this.index = line_el(l);
            window.MathJax.typeset();
        };
        // 光标移动或点击以移动光标时定位到相应元素
        text.onclick = text.onkeyup = () => {
            let l_i = text_get_line(text);
            while (!this.index[l_i] && l_i <= Object.keys(this.index).length) {
                l_i++;
            }
            let t_l = this.index[l_i];
            if (t_l) {
                let el = <HTMLElement>s.querySelectorAll(`#h > ${this.index[l_i][0]}`)[this.index[l_i][1] - 1];
                let x = el.offsetLeft,
                    y = el.offsetTop + el.offsetHeight;
                O.style.left = O.offsetLeft - (x - text.offsetLeft) + "px";
                O.style.top = O.offsetTop - (y - text.offsetTop) + "px";
                text.style.left = x + "px";
                text.style.top = y + "px";
            }
        };
        // 点击元素定位到源文本行
        s.onclick = (e) => {
            let el = <HTMLElement>e.target;
            text.style.left = el.offsetLeft + "px";
            text.style.top = el.offsetTop + el.offsetHeight + "px";
            let line = el_line(text, this.index, s, el);
            text_set_line(text, line);
            text.focus();
        };
    }

    edit() {
        (<HTMLElement>this.querySelector("#t_md")).click();
    }

    set value(v) {
        this._value = this.querySelector("textarea").value = v;
        this.querySelector("div:nth-child(2)").innerHTML = md.render(v);
        var l = md.parse(v, {
            references: {},
        });
        this.index = line_el(l);
        window.MathJax.typeset();
    }

    get value() {
        return this._value;
    }
}

window.customElements.define("x-md", markdown);

// 获取行->元素
function line_el(l: Array<any>) {
    let o = {};
    let line2el = {};
    for (let i of l) {
        if ((<string>i.type).includes("open")) {
            if (o[i.tag]) {
                o[i.tag]++;
            } else {
                o[i.tag] = 1;
            }
            line2el[i.map[1]] = [i.tag, o[i.tag]];
        }
    }
    return line2el;
}

// 获取当前定位的行数
function text_get_line(text: HTMLTextAreaElement) {
    let value = <any>text.value;
    let line = 1;
    for (let t in value) {
        if (value[t] == "\n") line++;
        if (Number(t) + 1 == text.selectionStart) return line;
    }
    return 1;
}

// 获取元素->行
function el_line(text: HTMLTextAreaElement, index: object, s: HTMLElement, iel: HTMLElement) {
    for (let l_i of Object.keys(index)) {
        let t_l = index[l_i];
        if (t_l) {
            let el = <HTMLElement>s.querySelectorAll(`#h > ${index[l_i][0]}`)[index[l_i][1] - 1];
            if (el == iel) return Number(l_i);
        }
    }
}

// 定位到行
function text_set_line(text: HTMLTextAreaElement, n: number) {
    let line = 1;
    let value = <any>text.value;
    for (let t in value) {
        if (line == n) text.selectionStart = text.selectionEnd = Number(t) + (Number(t) == value.length - 1 ? 1 : 0);
        if (value[t] == "\n") line++;
    }
}
