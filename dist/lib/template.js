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
        var o_e;
        var o_rect;
        var o_rects = [];
        this.addEventListener("mousedown", (e) => {
            if (e.button != 2)
                return;
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
            if (o_e)
                move = true;
        });
        document.addEventListener("mouseup", (e) => {
            mouse(e);
            o_e = null;
            move = false;
            document.getElementById("画布").style.cursor = "auto";
            o_rects = [];
        });
        var mouse = (e) => {
            if (o_e) {
                if (o_rects.length != 0) {
                    for (const xel of o_rects) {
                        let x = xel.x + (e.clientX - o_e.clientX) / zoom, y = xel.y + (e.clientY - o_e.clientY) / zoom;
                        xel.el.style.left = x + "px";
                        xel.el.style.top = y + "px";
                    }
                }
                else {
                    let x = o_rect.x + (e.clientX - o_e.clientX) / zoom, y = o_rect.y + (e.clientY - o_e.clientY) / zoom;
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
var x_x_types = ["x-md", "x-graph"];
// 非自由 页
class page extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var bar = document.createElement("div");
        bar.id = "x-page_bar";
        var style = document.createElement("input");
        var type = document.createElement("select");
        var b = document.createElement("div");
        var d = document.createElement("div");
        bar.append(style);
        bar.append(type);
        bar.append(b);
        bar.append(d);
        this.append(bar);
        style.value = this.getAttribute("style");
        style.onfocus = () => {
            style.value = this.getAttribute("style");
        };
        style.oninput = () => {
            this.setAttribute("style", style.value);
        };
        for (const i of x_x_types) {
            let op = document.createElement("option");
            op.value = i;
            op.innerText = i;
            type.append(op);
        }
        b.onclick = () => {
            this.append(document.createElement(type.value));
        };
        d.onclick = () => {
            this.remove();
            selected_el = selected_el.filter((el) => el != this);
        };
    }
}
window.customElements.define("x-page", page);
var parse;
// markdown
class markdown extends HTMLElement {
    constructor() {
        super();
        this._value = "";
    }
    connectedCallback() {
        var s = document.createElement("div");
        s.id = "h";
        var text = document.createElement("textarea");
        this.append(s);
        this.append(text);
        var l = md.parse(this.zy(text.value), {
            references: {},
        });
        this.index = line_el(l);
        text.oninput = () => {
            this._value = text.value;
            s.innerHTML = md.render(this.zy(text.value));
            l = md.parse(this.zy(text.value), {
                references: {},
            });
            parse = l;
            this.index = line_el(l);
            window.MathJax.typeset();
            data_changed();
        };
        text.onkeydown = (e) => {
            if (e.key == "Enter") {
                if (fileHandle)
                    document.getElementById("保存文件").click();
            }
        };
        // 光标移动或点击以移动光标时定位到相应元素
        text.onclick = text.onkeyup = () => {
            let l_i = text_get_line(text);
            while (!this.index[l_i] && l_i <= Object.keys(this.index).length) {
                l_i++;
            }
            let t_l = this.index[l_i];
            if (t_l) {
                let el = s.querySelectorAll(`${this.index[l_i][0]}`)[this.index[l_i][1] - 1];
                let x = el.offsetLeft, y = el.offsetTop + el.offsetHeight;
                O.style.left = O.offsetLeft - (x - text.offsetLeft) + "px";
                O.style.top = O.offsetTop - (y - text.offsetTop) + "px";
                text.style.left = x + "px";
                text.style.top = y + "px";
            }
        };
        this.onclick = text.onfocus = () => {
            focus_md = this;
        };
        // 点击元素定位到源文本行
        s.onclick = (e) => {
            let el = e.target;
            if (el.tagName == "TEXTAREA")
                return;
            if (!this.edit)
                return;
            text.style.left = el.offsetLeft + "px";
            text.style.top = el.offsetTop + el.offsetHeight + "px";
            let line = el_line(text, this.index, s, el);
            text_set_line(text, line);
            text.focus();
        };
    }
    set edit(v) {
        var text = this.childNodes[1];
        if (v) {
            text.classList.add("show_md");
            text.focus();
        }
        else {
            text.classList.remove("show_md");
            text.blur();
        }
    }
    get edit() {
        var text = this.childNodes[1];
        return text.classList.contains("show_md");
    }
    set value(v) {
        this._value = this.childNodes[1].value = v;
        this.querySelector("div:nth-child(1)").innerHTML = md.render(this.zy(v));
        var l = md.parse(this.zy(v), {
            references: {},
        });
        this.index = line_el(l);
        window.MathJax.typeset();
    }
    get value() {
        return this._value;
    }
    zy(v) {
        v = v.replace(/\$\$([\w\W]*?)\$\$/g, (t) => t.replaceAll("\\\\", "\\\\\\\\"));
        return v;
    }
}
window.customElements.define("x-md", markdown);
// 获取行->元素
function line_el(l) {
    let o = {};
    let line2el = {};
    let list = false;
    for (let i of l) {
        if (i.type == "bullet_list_open")
            list = true;
        if (i.type == "bullet_list_close")
            list = false;
        if (i.type.includes("open")) {
            if (i.tag == "p") {
                if (list)
                    continue;
            }
            if (o[i.tag]) {
                o[i.tag]++;
            }
            else {
                o[i.tag] = 1;
            }
            line2el[i.map[1]] = [i.tag, o[i.tag]];
        }
    }
    return line2el;
}
// 获取当前定位的行数
function text_get_line(text) {
    let value = text.value;
    let line = 1;
    for (let t in value) {
        if (value[t] == "\n")
            line++;
        if (Number(t) + 1 == text.selectionStart)
            return line;
    }
    return 1;
}
// 获取元素->行
function el_line(text, index, s, iel) {
    for (let l_i of Object.keys(index)) {
        let t_l = index[l_i];
        if (t_l) {
            let el = s.querySelectorAll(`#h > ${index[l_i][0]}`)[index[l_i][1] - 1];
            if (el == iel)
                return Number(l_i);
        }
    }
}
// 定位到行
function text_set_line(text, n) {
    let line = 1;
    let value = text.value;
    for (let t in value) {
        if (line == n)
            text.selectionStart = text.selectionEnd = Number(t) + (Number(t) == value.length - 1 ? 1 : 0);
        if (value[t] == "\n")
            line++;
    }
}
// 几何图形
class graph extends HTMLElement {
    constructor() {
        super();
        this._value = "";
    }
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
        }
        else {
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
                        eval(this.querySelector("textarea").value.replace("gid", this.querySelector("div:not(#t_md)").id));
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
            f(e.target);
        };
        this.ontouchstart = (e) => {
            e.stopPropagation();
            let el = e.changedTouches[0].target;
            f(el);
        };
        var f = (el) => {
            let text = document.activeElement;
            if (text.tagName != "TEXTAREA")
                return;
            if (el.parentElement.id.includes("snippet")) {
                for (let i in mathSymbols) {
                    for (let j of mathSymbols[i]) {
                        if ("snippet_" + j.source == el.parentElement.id) {
                            let v = text.value;
                            let se = v.substring(text.selectionStart, text.selectionEnd);
                            let s = j.snippet;
                            let ss = s.replace(/\$\d/g, "");
                            let sss = ss.replace(/\${\d:(.*?)}/g, "$1");
                            let ssss = sss.replace(/\${(TM_SELECTED_TEXT)}/g, se);
                            let ts = text.selectionStart, es = text.selectionEnd;
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
    connectedCallback() {
        var v = this.getAttribute("src");
        var img = document.createElement("img");
        this.append(img);
        if (v)
            img.src = v;
    }
    set src(s) {
        this.querySelector("img").src = s;
    }
}
window.customElements.define("x-img", img);
class video extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var v = this.getAttribute("src");
        var video = document.createElement("video");
        this.append(video);
        if (v)
            video.src = v;
    }
    set src(s) {
        this.querySelector("video").src = s;
    }
}
window.customElements.define("x-video", video);
class draw extends HTMLElement {
    constructor() {
        super();
        this.z = [];
        this.points = { x: NaN, y: NaN };
    }
    connectedCallback() {
        if (this.getAttribute("value")) {
            this.set_v(this.getAttribute("value"));
        }
        else {
            this.main_canvas = document.createElement("canvas");
            this.append(this.main_canvas);
            this.z[0] = this.main_canvas;
        }
    }
    draw(e) {
        let canvas = this.main_canvas;
        if (!e.pressure)
            return;
        if (e.target != this.main_canvas)
            return;
        let ctx = this.main_canvas.getContext("2d");
        let x = e.offsetX, y = e.offsetY;
        let dd = 100, xx = 100;
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
    set_v(v) {
        this.z = JSON.parse(v);
        this.innerHTML = "";
        for (let c of this.z) {
            let img = new Image();
            img.src = c;
            let canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            img.onload = () => {
                canvas.getContext("2d").drawImage(img, 0, 0);
            };
            this.append(canvas);
        }
        this.main_canvas = this.querySelector("canvas");
    }
    get value() {
        return JSON.stringify(this.z.map((v) => v.toDataURL()));
    }
    set value(v) {
        this.set_v(v);
    }
    clip() {
        let t_c = document.createElement("canvas");
        t_c.width = this.main_canvas.width;
        t_c.height = this.main_canvas.height;
        for (let c of this.querySelectorAll("canvas")) {
            t_c.getContext("2d").drawImage(c, 0, 0);
        }
        let min_x = 0, min_y = 0, max_x = this.main_canvas.width, max_y = this.main_canvas.height, min_x_c = false, min_y_c = false;
        for (let x = 0; x < this.main_canvas.width; x++) {
            let c = t_c.getContext("2d").getImageData(x, 0, 1, this.main_canvas.height).data;
            for (const i of c) {
                if (i != 0) {
                    if (!min_x_c) {
                        min_x = x;
                        min_x_c = true;
                    }
                    else {
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
                    }
                    else {
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
        for (let c of this.querySelectorAll("canvas")) {
            let img = c.getContext("2d").getImageData(min_x, min_y, max_x - min_x, max_y - min_y);
            c.width = max_x - min_x;
            c.height = max_y - min_y;
            c.getContext("2d").putImageData(img, 0, 0);
        }
        if (this.parentElement.tagName == "X-X") {
            let pel = this.parentElement;
            pel.style.left = pel.offsetLeft + min_x + "px";
            pel.style.top = pel.offsetTop + min_y + "px";
        }
    }
}
window.customElements.define("x-draw", draw);
