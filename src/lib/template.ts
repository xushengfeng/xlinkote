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

        var bar_hide_t = NaN;
        this.onmouseenter = () => {
            if (模式 == "设计") {
                clearTimeout(bar_hide_t);
                bar.classList.add("x-x_bar_show");
            }
        };
        this.onmouseleave = () => {
            if (模式 == "设计") {
                bar_hide_t = window.setTimeout(() => {
                    bar.classList.remove("x-x_bar_show");
                }, 200);
            }
        };

        this.addEventListener("mousedown", (e) => {
            if (模式 != "设计") return;
            if (this.fixed) return;
            if (bar.contains(e.target as HTMLElement)) return;
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
            let l = xywh.value.split(",").map((v) => v.trim());
            this.style.left = Number(l[0]) ? l[0] + "px" : l[0];
            this.style.top = Number(l[1]) ? l[1] + "px" : l[1];
            this.style.width = Number(l[2]) ? l[2] + "px" : l[2];
            this.style.height = Number(l[3]) ? l[3] + "px" : l[3];

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

    h: HTMLElement;

    connectedCallback() {
        var s = document.createElement("div");
        s.id = "h";
        this.h = s;
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
            if (模式 != "浏览") e.preventDefault();
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
                if (e.key == "[" && text.value.charAt(text.selectionStart - 1) == "[") {
                    text.setRangeText(`#${uuid().slice(0, 7)}]]`);
                }
            }
        };
        // text.addEventListener("keyup",(e)=>{})
        // 光标移动或点击以移动光标时定位到相应元素
        text.onclick = text.onkeyup = () => {
            if (模式 != "浏览") return;
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
            z.focus(this.parentElement as x);
        };
        text.onblur = () => {
            if (模式 == "浏览") this.edit = false;
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
            text.style.left = el.offsetLeft + "px";
            text.style.top = el.offsetTop + el.offsetHeight + "px";
            let line = NaN;
            if (el.tagName == "LI") {
                line = el_line(text, this.index, s, el)[0] + 1;
            } else {
                line = el_line(text, this.index, s, el)[1];
            }
            text_set_line(text, line);
            if (模式 == "浏览" && document.getSelection().anchorOffset == document.getSelection().focusOffset)
                this.edit = true;
            text.focus();
        };
    }

    set edit(v: boolean | "cr") {
        var text = <HTMLTextAreaElement>this.childNodes[1];
        if (v) {
            text.classList.add("show_md");
            if (v != "cr") text.focus();
            set_模式("浏览");
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

    reload() {
        let s = this.h;
        let text = this.text;
        s.innerHTML = md.render(text.value);
        let l = md.parse(text.value, {
            references: {},
        });
        parse = l;
        this.index = line_el(l);
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
        var div = document.createElement("div");
        this.append(div);
        for (const i in mathSymbols) {
            for (const j of mathSymbols[i]) {
                let span = document.createElement("span");
                span.title = j.name;
                span.id = `snippet_${j.source}`;
                span.innerHTML = j.svg;
                div.append(span);
            }
        }

        this.onclick = (e) => {
            e.stopPropagation();
            f(<HTMLElement>e.target);
        };
        var f = (el: HTMLElement) => {
            let text = focus_md.text;
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

class file extends HTMLElement {
    constructor() {
        super();
    }

    _value: { r: boolean; id: string };
    div: HTMLDivElement;

    connectedCallback() {
        this.ondblclick = () => {
            this._value.r = !this._value.r;
            this.set_m();
        };
        this.div = document.createElement("div");
        this.append(this.div);
        if (this.getAttribute("value")) {
            this._value = JSON.parse(this.getAttribute("value"));
            this.set_m();
        }
    }

    set_m() {
        this.div.innerHTML = "";
        if (this._value.r) {
            this.div.classList.remove("file");
            let f = 集.assets[this._value.id];
            if (!f) return;
            let type = f.base64.match(/data:(.*?);/)[1].split("/");
            if (type[0] == "image") {
                let img = document.createElement("img");
                this.div.append(img);
                img.src = f.base64;
            }
            if (type[0] == "video") {
                let video = document.createElement("video");
                this.div.append(video);
                video.src = f.base64;
            }
        } else {
            this.div.classList.add("file");
            let i = document.createElement("div");
            i.innerHTML = `<img src="./assets/icons/file.svg" class="icon">`;
            let file_name_el = document.createElement("p");
            this.div.append(i);
            this.div.append(file_name_el);
        }
    }

    get value() {
        return JSON.stringify(this._value);
    }
    set value(s) {
        this._value = JSON.parse(s);
        this.set_m();
    }
}

window.customElements.define("x-file", file);
class draw extends HTMLElement {
    constructor() {
        super();
    }

    main_svg: SVGSVGElement;
    tmp_svg: SVGSVGElement;

    pen = { color: "#000000", gco: "source-over", width: 5, zoom: false };

    connectedCallback() {
        if (this.getAttribute("value")) {
            this.set_v(this.getAttribute("value"));
        } else {
            this.tmp_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

            if (this.getAttribute("width")) this.tmp_svg.setAttribute("width", this.getAttribute("width"));
            if (this.getAttribute("height")) this.tmp_svg.setAttribute("height", this.getAttribute("height"));
            this.append(this.tmp_svg);

            this.main_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

            if (this.getAttribute("width")) this.main_svg.setAttribute("width", this.getAttribute("width"));
            if (this.getAttribute("height")) this.main_svg.setAttribute("height", this.getAttribute("height"));
            this.append(this.main_svg);

            this.width = Number(this.getAttribute("width"));
            this.height = Number(this.getAttribute("height"));
        }
        this.ondrag = (e) => {
            e.preventDefault();
        };
    }

    points = [{ x: NaN, y: NaN, p: NaN }];

    ox = 0;
    oy = 0;
    width = NaN;
    height = NaN;

    draw(e: PointerEvent) {
        if (!e.pressure) return;
        if (e.pointerType == "mouse" && e.buttons == 2) return;
        let x = e.clientX / zoom - this.getBoundingClientRect().x / zoom - this.ox,
            y = e.clientY / zoom - this.getBoundingClientRect().y / zoom - this.oy;
        let dd = 20,
            xx = 20;

        // 无限画板
        // 向右延伸
        if (e.clientX > this.getBoundingClientRect().right - dd) {
            this.width += xx;
        }
        // 下
        if (e.clientY > this.getBoundingClientRect().bottom - dd) {
            this.height += xx;
        }
        // 左
        if (x + this.ox < dd) {
            if (this.parentElement.tagName == "X-X") {
                let pel = this.parentElement;
                pel.style.left = pel.offsetLeft - xx + "px";
            }
            this.ox += xx;
            this.width += xx;
        }
        // 上
        if (y + this.oy < dd) {
            if (this.parentElement.tagName == "X-X") {
                let pel = this.parentElement;
                pel.style.top = pel.offsetTop - xx + "px";
            }
            this.oy += xx;
            this.height += xx;
        }
        this.main_svg.setAttribute("width", String(this.width));
        this.main_svg.setAttribute("height", String(this.height));
        this.tmp_svg.setAttribute("width", String(this.width));
        this.tmp_svg.setAttribute("height", String(this.height));

        for (let el of this.main_svg.children) {
            let t = `translate(${this.ox},${this.oy})`;
            el.setAttribute("transform", t);
        }

        // 画
        if (this.points.length != 1) {
            let ps1 = [],
                ps2 = [];
            let at = `M${this.points[1].x} ${this.points[1].y}Q`;

            let so = (i: number) => {
                let w = this.points[i - 1].p * this.pen.width;
                if (this.pen.zoom) w = w / zoom;
                let x0 = this.points[i - 2].x,
                    y0 = this.points[i - 2].y,
                    x1 = this.points[i - 1].x,
                    y1 = this.points[i - 1].y,
                    x2 = this.points?.[i]?.x || x,
                    y2 = this.points?.[i]?.y || y;
                let a = Math.atan2(y2 - y0, x2 - x0);
                let p1 = { x: x1 + w * Math.cos(a + Math.PI / 2), y: y1 + w * Math.sin(a + Math.PI / 2) };
                let p2 = { x: x1 + w * Math.cos(a - Math.PI / 2), y: y1 + w * Math.sin(a - Math.PI / 2) };
                ps1.push(p1);
                ps2.push(p2);
            };
            for (let i = 3; i < this.points.length; i++) {
                so(i);
            }
            so(this.points.length);
            ps1.push({ x, y });

            let ps = [];
            for (let i of ps1) {
                ps.push(i);
            }
            for (let i = ps2.length - 1; i >= 0; i--) {
                ps.push(ps2[i]);
            }
            for (let i = 2; i < ps.length; i += 1) {
                let a = Math.atan2(ps[i].y - ps[i - 2].y, ps[i].x - ps[i - 2].x);
                let s = Math.sqrt((ps[i - 1].x - ps[i - 2].x) ** 2 + (ps[i - 1].y - ps[i - 2].y) ** 2);
                at += `${ps[i - 1].x + (s / 2) * Math.cos(a)} ${ps[i - 1].y + (s / 2) * Math.sin(a)} ${ps[i].x} ${
                    ps[i].y
                } `;
            }
            let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let t = `translate(${this.ox},${this.oy})`;
            p.setAttribute("transform", t);
            if (this.points.length != 2) p.setAttribute("d", at);
            p.setAttribute("fill", this.pen.color);

            this.tmp_svg.innerHTML = "";

            this.tmp_svg.append(p);
        }
        if (this.points.length == 1 || this.points.length == 2) {
            this.points.push({ x, y, p: e.pressure });
        } else {
            let a1 = Math.atan2(
                this.points[this.points.length - 1].y - this.points[this.points.length - 2].y,
                this.points[this.points.length - 1].x - this.points[this.points.length - 2].x
            );
            let a2 = Math.atan2(this.points[this.points.length - 1].y - y, this.points[this.points.length - 1].x - x);
            let s = Math.sqrt(
                (this.points[this.points.length - 1].y - y) ** 2 + (this.points[this.points.length - 1].x - x) ** 2
            );
            if (
                s >
                    (this.pen.width * (e.pressure + this.points[this.points.length - 1].p)) /
                        (this.pen.zoom ? zoom : 1) ||
                Math.abs(a1 - a2) < Math.PI / 2
            ) {
                this.points.push({ x, y, p: e.pressure });
            }
        }
    }

    complete() {
        this.main_svg.append(this.tmp_svg.childNodes[0]);
    }

    set_v(v: string) {
        let x = JSON.parse(v);
        this.width = x.w;
        this.height = x.h;
        this.main_svg.setAttribute("width", String(this.width));
        this.main_svg.setAttribute("height", String(this.height));
        this.tmp_svg.setAttribute("width", String(this.width));
        this.tmp_svg.setAttribute("height", String(this.height));
        this.main_svg.innerHTML = x.i;
    }

    get value() {
        return JSON.stringify({ i: this.main_svg.innerHTML, w: this.width, h: this.height });
    }

    set value(v: string) {
        this.set_v(v);
    }

    clip() {
        let min_x = this.main_svg.children[0].getBoundingClientRect().left,
            min_y = this.main_svg.children[0].getBoundingClientRect().top,
            max_x = this.main_svg.children[0].getBoundingClientRect().right,
            max_y = this.main_svg.children[0].getBoundingClientRect().bottom;
        let els = this.main_svg.children;
        for (let el of els) {
            let b = el.getBoundingClientRect();
            if (b.left < min_x) min_x = b.left;
            if (b.top < min_y) min_y = b.top;
            if (b.right > max_x) max_x = b.right;
            if (b.bottom > max_y) max_y = b.bottom;
        }
        min_x = min_x / zoom;
        min_y = min_y / zoom;
        max_x = max_x / zoom;
        max_y = max_y / zoom;
        let pb = this.getBoundingClientRect();
        if (this.parentElement.tagName == "X-X") {
            let pel = this.parentElement;
            pel.style.left = pel.offsetLeft + (min_x - pb.left / zoom) + "px";
            pel.style.top = pel.offsetTop + (min_y - pb.top / zoom) + "px";
        }
        this.ox -= min_x - pb.left / zoom;
        this.oy -= min_y - pb.top / zoom;
        for (let el of els) {
            let t = `translate(${this.ox},${this.oy})`;
            el.setAttribute("transform", t);
        }

        this.width = max_x - min_x;
        this.height = max_y - min_y;
        this.main_svg.setAttribute("width", String(this.width));
        this.main_svg.setAttribute("height", String(this.height));
        this.tmp_svg.setAttribute("width", String(this.width));
        this.tmp_svg.setAttribute("height", String(this.height));
    }
}

window.customElements.define("x-draw", draw);

const link_bar = document.getElementById("link_bar");
const link_ids = document.getElementById("link_ids");
class link extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var id = this.getAttribute("id");
        if (!集.链接[id]) {
            集.链接[id] = { 值: 1, 目标: [] };
            let r = search_el.getBoundingClientRect();
            let x = r.x,
                w = r.width,
                y = r.y + r.height;
            if (window.matchMedia("(orientation: portrait)").matches) {
                search_r.style.left = "0";
                search_r.style.top = r.y - 4 - search_r.offsetHeight + "px";
                search_r.style.width = "100vw";
            } else {
                search_r.style.left = x + "px";
                search_r.style.top = y + 4 + "px";
                search_r.style.width = w + "px";
            }
            search_r.innerHTML = "";
            for (let i in 集.链接) {
                if (i == id) continue;
                let d = document.createElement("div");
                let t = document.createElement("span");
                let idv = document.createElement("span");
                t.innerText = document.getElementById(i).innerText;
                idv.innerText = i;
                d.append(t, idv);
                search_r.append(d);
                d.onclick = () => {
                    集.链接[id].目标.push(i);
                    集.链接[i].值++;
                    search_r.innerHTML = "";
                };
            }
            let cl = document.createElement("div");
            search_r.append(cl);
            cl.onclick = () => {
                search_r.innerHTML = "";
            };
        }
    }
}

window.customElements.define("x-link", link);

// 录音
class record extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.id) this.id = uuid().slice(0, 7);
        let mediaRecorder = null;
        let i = document.createElement("input");
        i.type = "checkbox";
        let b = document.createElement("div");
        b.onclick = () => {
            i.checked = !i.checked;
            if (i.checked) {
                navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                    let chunks = [];
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start();
                    mediaRecorder.onstart = () => {
                        console.log("开始录制");
                    };

                    mediaRecorder.ondataavailable = (e) => {
                        chunks.push(e.data);
                    };

                    mediaRecorder.onstop = () => {
                        console.log("录制结束");
                        let blob = new Blob(chunks, { type: "audio/webm;codecs=opus" });
                        let a = new FileReader();
                        a.onload = () => {
                            audio.src = a.result as string;
                            if (!集.assets[this.id]) 集.assets[this.id] = { url: "", base64: "", sha: "" };
                            集.assets[this.id].base64 = a.result as string;
                            集.assets[this.id].sha = window.CryptoJS.SHA256(a.result as string).toString();
                        };
                        a.readAsDataURL(blob);
                        stream.getAudioTracks()[0].stop();
                    };
                });
                b.classList.add("recording");
            } else {
                mediaRecorder.stop();
                b.classList.remove("recording");
            }
        };
        let audio = document.createElement("audio");
        audio.controls = true;
        this.append(i);
        this.append(b);
        this.append(audio);
    }
}

window.customElements.define("x-record", record);
