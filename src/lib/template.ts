// 元素
class x extends HTMLElement {
    constructor() {
        super();
    }

    fixed = false;

    connectedCallback() {
        var bar = document.createElement("div");
        bar.id = "x-x_bar";
        var xywh = document.createElement("input");
        var f = document.createElement("div");
        f.innerHTML = `<img src="./assets/icons/ding.svg" class="icon">`;
        var d = document.createElement("div");
        d.innerHTML = `<img src="./assets/icons/close.svg" class="icon">`;

        bar.append(xywh);
        bar.append(f);
        bar.append(d);
        this.append(bar);

        this.addEventListener("mousedown", (e) => {
            if (e.button != 2) return;
            if (this.fixed) return;
            free_o_e = e;
            document.getElementById("画布").style.cursor = "move";

            if (selected_el.length != 0 && selected_el.includes(this)) {
                free_o_rects = [];
                for (const el of selected_el) {
                    free_o_rects.push({ el, x: el.offsetLeft, y: el.offsetTop });
                }
            } else {
                free_o_rects = [{ el: this, x: this.offsetLeft, y: this.offsetTop }];
            }
        });

        this.onclick = () => {
            z.focus(this);
        };

        this.onfocus = () => {
            z.focus(this);
        };

        xywh.value = `${this.offsetLeft}, ${this.offsetTop}, ${this.offsetWidth}, ${this.offsetHeight}`;

        xywh.onfocus = () => {
            xywh.value = `${this.offsetLeft}, ${this.offsetTop}, ${this.offsetWidth}, ${this.offsetHeight}`;
        };

        xywh.oninput = () => {
            let l = xywh.value.split(",").map((v) => Number(v));
            this.style.left = l[0] + "px";
            this.style.top = l[1] + "px";
            this.style.width = l[2] + "px";
            this.style.height = l[3] + "px";

            data_changed();
        };

        f.onclick = () => {
            this.fixed = !this.fixed;
        };

        d.onclick = () => {
            this.remove();
            selected_el = selected_el.filter((el) => el != this);
            z.remove(this);
        };
    }
}

window.customElements.define("x-x", x);

var parse;

// markdown
class markdown extends HTMLElement {
    constructor() {
        super();
    }

    _value = "";

    index;

    text: HTMLTextAreaElement;

    connectedCallback() {
        var s = document.createElement("div");
        s.id = "h";
        var text = document.createElement("textarea");
        this.text = text;
        this.append(s);
        this.append(text);

        var l = md.parse(text.value, {
            references: {},
        });
        this.index = line_el(l);
        text.oninput = () => {
            this._value = text.value;
            data_changed();
            setTimeout(() => {
                s.innerHTML = md.render(text.value);
                l = md.parse(text.value, {
                    references: {},
                });
                parse = l;
                this.index = line_el(l);
            }, 0);
        };
        text.onkeydown = (e) => {
            if (e.key == "Enter") {
                data_changed();
                let last_line_start = text.value.lastIndexOf("\n", text.selectionStart - 1) + 1;
                let last_line = text.value.slice(last_line_start, text.selectionStart);
                let l_task = last_line.match(/^ *[-+*] +\[[x\s]\] +/i);
                if (l_task) {
                    e.preventDefault();
                    text.setRangeText("\n" + l_task[0]);
                    text.selectionStart = text.selectionEnd += l_task[0].length + 1;
                    text.dispatchEvent(new Event("input"));
                } else {
                    let l_l = last_line.match(/^ *[-+*] +/);
                    if (l_l) {
                        e.preventDefault();
                        text.setRangeText("\n" + l_l[0]);
                        text.selectionStart = text.selectionEnd += l_l[0].length + 1;
                        text.dispatchEvent(new Event("input"));
                    }
                }
                let l_n = last_line.match(/^ *\d+\. +/);
                if (l_n) {
                    e.preventDefault();
                    let t = "\n" + l_n[0].replace(/\d+/, (n) => String(Number(n) + 1));
                    text.setRangeText(t);
                    text.selectionStart = text.selectionEnd += t.length;
                    text.dispatchEvent(new Event("input"));
                }
            } else {
                let l_l = [
                    ["(", ")"],
                    ["[", "]"],
                    ["{", "}"],
                    ["<", ">"],
                    ["'", "'"],
                    ['"', '"'],
                    ["$", "$"],
                    ["*", "*"],
                    ["~", "~"],
                ];
                for (let i of l_l) {
                    if (e.key == i[0] && text.value.charAt(text.selectionStart) != i[1]) {
                        e.preventDefault();
                        let t = text.value.slice(text.selectionStart, text.selectionEnd);
                        let s = text.selectionStart;
                        text.setRangeText(i[0] + t + i[1]);
                        text.selectionStart = s + i[0].length;
                        text.selectionEnd = s + i[0].length + t.length;
                        text.dispatchEvent(new Event("input"));
                    }
                }
            }
        };
        // text.addEventListener("keyup",(e)=>{})
        // 光标移动或点击以移动光标时定位到相应元素
        text.onclick = text.onkeyup = () => {
            let l_i = text_get_line(text);
            let index_i: any;
            for (let i = 0; i < this.index.length; i++) {
                if (this.index[i][2][0] <= l_i && l_i < this.index[i][2][1]) {
                    index_i = this.index[i];
                    // break;
                } else if (i != 0 && this.index[i - 1][2][1] <= l_i && l_i <= this.index[i][2][0]) {
                    // 空行处无map
                    index_i = this.index[i];
                    break;
                }
            }
            if (index_i) {
                let el = <HTMLElement>s.querySelector(`#h > ${index_i[0]}`);
                let x = el.offsetLeft,
                    y = el.offsetTop + el.offsetHeight;
                O.style.left = O.offsetLeft - (x - text.offsetLeft) + "px";
                O.style.top = O.offsetTop - (y - text.offsetTop) + "px";
                text.style.left = x + "px";
                text.style.top = y + "px";
            }
        };
        this.onclick = text.onfocus = () => {
            focus_md = this;
        };
        // 输入框失焦且无内容时删除元素的容器
        text.onblur = () => {
            if (text.value == "" && this.parentElement.childElementCount == 2) {
                this.parentElement.remove();
                z.remove(<x>this.parentElement);
            }
        };
        // 点击元素定位到源文本行
        s.onclick = (e) => {
            let el = <HTMLElement>e.target;
            if (el.tagName == "TEXTAREA") return;
            if ((<HTMLInputElement>el).type == "checkbox") {
                // 待办与源文本同步
                let ln = el_line(text, this.index, s, el.parentElement)[0];
                let l = text.value.split("\n");
                l[ln] = l[ln].replace(/(^ *[-+*] +\[)[x\s](\] +)/, `$1${(<HTMLInputElement>el).checked ? "x" : " "}$2`);
                text.value = l.join("\n");
                this._value = text.value;
                data_changed();
            }
            if (!this.edit) return;
            text.style.left = el.offsetLeft + "px";
            text.style.top = el.offsetTop + el.offsetHeight + "px";
            let line = NaN;
            if (el.tagName == "LI") {
                line = el_line(text, this.index, s, el)[0] + 1;
            } else {
                line = el_line(text, this.index, s, el)[1];
            }
            text_set_line(text, line);
            text.focus();
        };
    }

    set edit(v: boolean | "cr") {
        var text = <HTMLTextAreaElement>this.childNodes[1];
        if (v) {
            text.classList.add("show_md");
            if (v != "cr") text.focus();
        } else {
            text.classList.remove("show_md");
            text.blur();
        }

        if (v != "cr") data_changed();
    }

    get edit() {
        var text = <HTMLTextAreaElement>this.childNodes[1];
        return text.classList.contains("show_md");
    }

    set value(v) {
        this._value = (<HTMLTextAreaElement>this.childNodes[1]).value = v;
        this.querySelector("div:nth-child(1)").innerHTML = md.render(v);
        var l = md.parse(v, {
            references: {},
        });
        this.index = line_el(l);
    }

    get value() {
        return this._value;
    }
}

window.customElements.define("x-md", markdown);

// 获取行->元素
function line_el(l: Array<any>) {
    let o = {};
    let line2el = [];
    let list = false;
    let el_n = [],
        n = -1,
        el_path = [];
    for (let i of l) {
        if (i.nesting == -1) {
            n += i.nesting;
            continue;
        }
        if (i.type == "html_block") {
            i.tag = i.content.match(/<(\S*?)>/)?.[1] || "";
            i.nesting = 1;
        }
        if (i.type == "mathjax_block") i.nesting = 1;
        if (i.type == "container_spoiler_open") {
            i.tag = "details";
        }
        n += i.nesting;
        el_n = el_n.slice(0, n + 1);
        if (i.type == "inline") continue;
        if (n == -1) continue;
        if (!el_n[n]) el_n[n] = {};
        if (i.nesting != -1) el_n[n][i.tag] = (el_n[n]?.[i.tag] || 0) + i.nesting;
        el_path[n] = i.tag;
        if (i.tag == "p" && el_path?.[n - 1] == "li") continue;
        let t = [];
        for (let e = 0; e <= n; e++) {
            t.push(`${el_path[e]}:nth-of-type(${el_n[e][el_path[e]]})`);
        }
        line2el.push([t.join(">"), null, i.map]);
        if (i.type == "html_block") n--;
        if (i.type == "mathjax_block") n--;
    }
    return line2el;
}

// 获取当前定位的行数
function text_get_line(text: HTMLTextAreaElement) {
    let value = <any>text.value;
    let line = 1;
    for (let t in value) {
        if (value[t] == "\n") line++;
        if (Number(t) + 1 == text.selectionStart) return line - 1;
    }
    return 0;
}

// 获取元素->行
function el_line(
    text: HTMLTextAreaElement,
    index: Array<[number, number, [number, number]]>,
    s: HTMLElement,
    iel: HTMLElement
) {
    for (let l_i of index) {
        let el = <HTMLElement>s.querySelector(`#h > ${l_i[0]}`);
        if (el == iel) return l_i[2];
    }
    let o = null;
    for (let l_i of index) {
        let el = <HTMLElement>s.querySelector(`#h > ${l_i[0]}`);
        if (el.contains(iel)) o = l_i[2];
    }
    return o;
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

function set_el_text_value(el: HTMLElement, value: any) {
    let pel = el.parentElement as markdown;
    while (pel && el.parentElement != document.body) {
        if ("X-MD" == pel.tagName) break;
        pel = pel.parentElement as markdown;
    }
    let ln = el_line(null, pel.index, pel.querySelector("#h"), el);
    let l = pel.querySelector("textarea").value.split("\n");
    let r = new RegExp(`(<${el.tagName.toLowerCase()}.*?value=)(.*?)([>\s"])`);
    l[ln[0]] = l[ln[0]].replace(r, `$1${value}$3`);
    pel.querySelector("textarea").value = l.join("\n");
}

// 几何图形
class graph extends HTMLElement {
    constructor() {
        super();
    }

    _value = "";

    connectedCallback() {
        var b = document.createElement("div");
        b.id = "t_md";
        var s = document.createElement("div");
        s.id = `g${new Date().getTime()}`;
        // s.style.width = "500px";
        // s.style.height = "500px";
        var text = document.createElement("textarea");
        text.value = this.getAttribute("value") || this.innerText;
        this.setAttribute("value", text.value);
        this.innerHTML = "";
        this.append(b);
        this.append(s);
        this.append(text);

        if (window.JXG) {
            if (text.value)
                eval(this.querySelector("textarea").value.replace("gid", this.querySelector("div:not(#t_md)").id));
        } else {
            let script = document.createElement("script");
            script.src = "./node_modules/jsxgraph/distrib/jsxgraphcore.js";
            this.append(script);
            let style = document.createElement("link");
            style.href = "./node_modules/jsxgraph/distrib/jsxgraph.css";
            this.append(style);
            script.onload = () => {
                if (text.value)
                    eval(this.querySelector("textarea").value.replace("gid", this.querySelector("div:not(#t_md)").id));
            };
            script.onerror = () => {
                let script = document.createElement("script");
                script.src = "./node/jsxgraph/distrib/jsxgraphcore.js";
                this.append(script);
                let style = document.createElement("link");
                style.href = "./node/jsxgraph/distrib/jsxgraph.css";
                this.append(style);
                script.onload = () => {
                    if (text.value)
                        eval(
                            this.querySelector("textarea").value.replace("gid", this.querySelector("div:not(#t_md)").id)
                        );
                };
            };
        }

        b.onclick = () => {
            text.classList.toggle("show_md");
            text.focus();
        };
        text.oninput = () => {
            this._value = text.value;
            this.setAttribute("value", text.value);
        };
        text.onchange = () => {
            eval(text.value.replace("gid", s.id));
        };
    }

    set value(v) {
        this._value = this.querySelector("textarea").value = v;
        eval(this.querySelector("textarea").value.replace("gid", this.querySelector("div:not(#t_md)").id));
    }

    get value() {
        return this._value;
    }
}

window.customElements.define("x-graph", graph);

class symbols extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var h = document.createElement("div");
        this.append(h);
        var div = document.createElement("div");
        this.append(div);
        h.onclick = () => {
            this.classList.toggle("sinppet_h");
        };
        for (const i in mathSymbols) {
            for (const j of mathSymbols[i]) {
                let span = document.createElement("span");
                span.title = j.name;
                span.id = `snippet_${j.source}`;
                span.innerHTML = j.svg;
                div.append(span);
            }
        }

        this.onmousedown = (e) => {
            e.stopPropagation();
            f(<HTMLElement>e.target);
        };
        this.ontouchstart = (e) => {
            e.stopPropagation();
            let el = <HTMLElement>e.changedTouches[0].target;
            f(el);
        };
        var f = (el: HTMLElement) => {
            let text = <HTMLTextAreaElement>document.activeElement;
            if (text.tagName != "TEXTAREA") return;
            if (el.parentElement.id.includes("snippet")) {
                for (let i in mathSymbols) {
                    for (let j of mathSymbols[i]) {
                        if ("snippet_" + j.source == el.parentElement.id) {
                            let v = text.value;
                            let se = v.substring(text.selectionStart, text.selectionEnd);
                            let s = <string>j.snippet;
                            let ss = s.replace(/\$\d/g, "");
                            let sss = ss.replace(/\${\d:(.*?)}/g, "$1");
                            let ssss = sss.replace(/\${(TM_SELECTED_TEXT)}/g, se);
                            let ts = text.selectionStart,
                                es = text.selectionEnd;
                            let e_v = v.substring(0, ts) + ssss + v.substring(es, v.length);
                            text.value = e_v;
                            text.selectionStart = ts;
                            text.selectionEnd = ts;
                            setTimeout(() => {
                                text.focus();
                            }, 10);
                            text.dispatchEvent(new InputEvent("input"));
                        }
                    }
                }
            }
        };
    }
}

window.customElements.define("x-sinppet", symbols);

class progress extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var v = this.getAttribute("value");
        var div = document.createElement("div");
        var p = document.createElement("span");
        this.append(div);
        this.append(p);

        div.style.width = `${v}%`;

        p.innerText = `${v}%`;
    }
}

window.customElements.define("x-pro", progress);

class img extends HTMLElement {
    constructor() {
        super();
    }

    _value: string;

    connectedCallback() {
        this._value = this.getAttribute("value");
        var img = document.createElement("img");

        this.append(img);

        if (集.assets[this._value]) img.src = 集.assets[this._value].base64;
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.querySelector("img").src = 集.assets[s].base64;
    }
}

window.customElements.define("x-img", img);

class video extends HTMLElement {
    constructor() {
        super();
    }

    _value: string;

    connectedCallback() {
        this._value = this.getAttribute("value");
        var video = document.createElement("video");

        this.append(video);

        if (集.assets[this._value]) video.src = 集.assets[this._value].base64;
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.querySelector("video").src = 集.assets[s].base64;
    }
}

window.customElements.define("x-video", video);

class draw extends HTMLElement {
    constructor() {
        super();
    }

    main_canvas: HTMLCanvasElement;
    z = [];

    connectedCallback() {
        if (this.getAttribute("value")) {
            this.set_v(this.getAttribute("value"));
        } else {
            this.main_canvas = document.createElement("canvas");

            if (this.getAttribute("width")) this.main_canvas.width = Number(this.getAttribute("width"));
            if (this.getAttribute("height")) this.main_canvas.height = Number(this.getAttribute("height"));

            this.append(this.main_canvas);

            this.z[0] = this.main_canvas;
        }
    }

    points = { x: NaN, y: NaN };

    draw(e: PointerEvent) {
        let canvas = this.main_canvas;
        if (!e.pressure) return;
        if (e.target != this.main_canvas) return;
        if (e.pointerType == "mouse" && e.buttons == 2) return;
        let ctx = this.main_canvas.getContext("2d");
        let x = e.offsetX,
            y = e.offsetY;

        let dd = 100,
            xx = 100;

        // 无限画板
        if (x > canvas.width - dd) {
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            canvas.width += xx;
            ctx.putImageData(imageData, 0, 0);
        }
        if (y > canvas.height - dd) {
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            canvas.height += xx;
            ctx.putImageData(imageData, 0, 0);
        }
        if (x < dd) {
            if (this.parentElement.tagName == "X-X") {
                let pel = this.parentElement;
                pel.style.left = pel.offsetLeft - xx + "px";
            }
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            canvas.width += xx;
            ctx.putImageData(imageData, xx, 0);
            this.points.x += xx;
            x += xx;
        }
        if (y < dd) {
            if (this.parentElement.tagName == "X-X") {
                let pel = this.parentElement;
                pel.style.top = pel.offsetTop - xx + "px";
            }
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            canvas.height += xx;
            ctx.putImageData(imageData, 0, xx);
            this.points.y += xx;
            y += xx;
        }

        // 画
        if (!isNaN(this.points.x)) {
            ctx.beginPath();
            ctx.lineWidth = e.pressure * 2;
            ctx.moveTo(this.points.x, this.points.y);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        this.points = { x, y };
    }

    set_v(v: string) {
        let x = JSON.parse(v);
        this.innerHTML = "";
        for (let c of x) {
            let img = new Image();
            img.src = c;
            let canvas = document.createElement("canvas");
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                canvas.getContext("2d").drawImage(img, 0, 0);
            };
            this.append(canvas);
        }
        this.main_canvas = this.querySelector("canvas");
        this.z = Array<any>(...this.querySelectorAll("canvas"));
    }

    get value() {
        return JSON.stringify(this.z.map((v) => v.toDataURL("image/webp")));
    }

    set value(v: string) {
        this.set_v(v);
    }

    clip() {
        let t_c = document.createElement("canvas");
        t_c.width = this.main_canvas.width;
        t_c.height = this.main_canvas.height;
        for (let c of this.querySelectorAll("canvas")) {
            t_c.getContext("2d").drawImage(c, 0, 0);
        }
        let min_x = 0,
            min_y = 0,
            max_x = this.main_canvas.width,
            max_y = this.main_canvas.height,
            min_x_c = false,
            min_y_c = false;
        for (let x = 0; x < this.main_canvas.width; x++) {
            let c = t_c.getContext("2d").getImageData(x, 0, 1, this.main_canvas.height).data;
            for (const i of c) {
                if (i != 0) {
                    if (!min_x_c) {
                        min_x = x;
                        min_x_c = true;
                    } else {
                        max_x = x;
                    }
                    break;
                }
            }
        }
        for (let y = 0; y < this.main_canvas.height; y++) {
            let c = t_c.getContext("2d").getImageData(0, y, this.main_canvas.width, 1).data;
            for (const i of c) {
                if (i != 0) {
                    if (!min_y_c) {
                        min_y = y;
                        min_y_c = true;
                    } else {
                        max_y = y;
                    }
                    break;
                }
            }
        }
        min_x--;
        min_y--;
        max_x++;
        max_y++;
        let dx = 36,
            dy = 36;
        for (let c of this.querySelectorAll("canvas")) {
            let img = c
                .getContext("2d")
                .getImageData(min_x - dx, min_y - dy, max_x - min_x + 2 * dx, max_y - min_y + 2 * dy);
            c.width = max_x - min_x + 2 * dx;
            c.height = max_y - min_y + 2 * dy;
            c.getContext("2d").putImageData(img, 0, 0);
        }
        if (this.parentElement.tagName == "X-X") {
            let pel = this.parentElement;
            pel.style.left = pel.offsetLeft + min_x - dx + "px";
            pel.style.top = pel.offsetTop + min_y - dy + "px";
        }
    }
}

window.customElements.define("x-draw", draw);
