// 获取设置
var store = JSON.parse(localStorage.getItem("config"));
var 设置_el = document.getElementById("设置");
if (!store) {
    save_setting();
}
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
// 工具栏
document.getElementById("文件").click();
if (window.showOpenFilePicker) {
    document.getElementById("绑定文件").onclick = file_load;
}
else {
    document.getElementById("绑定文件").style.display = "none";
}
document.getElementById("导出文件").onclick = () => {
    download_file(json2md(get_data()));
};
document.getElementById("从云加载").onclick = () => {
    if (集.meta.url)
        get_xln_value(集.meta.url);
};
document.getElementById("上传到云").onclick = put_xln_value;
document.getElementById("加载数据库").onclick = () => {
    document.getElementById("db_load").click();
};
document.getElementById("下载数据库").onclick = db_download;
document.getElementById("新建集").onclick = () => {
    window.open(location.href);
};
document.getElementById("新建画布").onclick = () => {
    add_画布();
    data_changed();
};
document.getElementById("偏好设置").onclick = () => {
    设置_el.style.display = "block";
    show_setting();
};
设置_el.querySelector("#close").onclick = () => {
    设置_el.style.display = "";
    save_setting();
};
document.getElementById("新建元素").onclick = () => {
    const margin = 8;
    creat_x_x(-O.offsetLeft + margin, -O.offsetTop + margin, 画布.offsetWidth - margin * 2);
};
document.getElementById("删除元素").onclick = () => {
    for (let i of selected_el) {
        i.remove();
    }
    if (focus_md)
        focus_md.remove();
};
document.getElementById("新建页").onclick = () => {
    let page = document.createElement("x-x");
    z.push(page);
    page.fixed = true;
};
document.getElementById("新建画板").onclick = () => {
    let xel = document.createElement("x-x");
    xel.style.left = -O.offsetLeft / zoom + "px";
    xel.style.top = -O.offsetTop / zoom + "px";
    let draw = document.createElement("x-draw");
    draw.setAttribute("width", String(画布.offsetWidth / zoom));
    draw.setAttribute("height", String(画布.offsetHeight / zoom));
    xel.append(draw);
    set_模式("绘制");
    z.push(xel);
    z.focus(xel);
};
var 侧栏 = document.getElementById("侧栏");
侧栏.onclick = (e) => {
    document.querySelectorAll("#侧栏 > #tabs > div").forEach((el, i) => {
        if (el == e.target) {
            document.querySelectorAll("#侧栏 > #items > div").forEach((iel, j) => {
                if (i == j) {
                    iel.style.height = "100%";
                }
                else {
                    iel.style.height = "0";
                }
            });
        }
    });
};
document.getElementById("切换侧栏").onclick = () => {
    侧栏.classList.toggle("侧栏显示");
};
var handle_e, handle_e1, handle_a;
document.getElementById("handle").onclick = () => {
    侧栏.classList.toggle("侧栏显示");
};
document.getElementById("handle").ontouchstart = (e) => {
    handle_e = e;
    侧栏.style.transition = "0s";
};
document.getElementById("handle").ontouchmove = (e) => {
    if (!handle_e)
        return;
    let dy = e.changedTouches[0].clientY - handle_e.changedTouches[0].clientY;
    if (dy < 0)
        dy = 0;
    侧栏.style.transform = `translateY(${dy}px)`;
    if (handle_e1)
        handle_a = e.changedTouches[0].clientY - handle_e1.changedTouches[0].clientY;
    handle_e1 = e;
};
document.getElementById("handle").ontouchend = (e) => {
    侧栏.style.transform = ``;
    侧栏.style.transition = "";
    handle_e = null;
    handle_e1 = null;
    if (handle_a > 0)
        侧栏.classList.toggle("侧栏显示");
};
for (let el of document.querySelectorAll(".tools")) {
    for (let i of el.children) {
        for (let u of document.querySelectorAll("#nav > div > div")) {
            if (i.id == u.id) {
                let x = i;
                x.style.display = "none";
            }
        }
    }
}
document.getElementById("底层").onclick = () => {
    z.底层(z.聚焦元素);
};
document.getElementById("下一层").onclick = () => {
    z.下一层(z.聚焦元素);
};
document.getElementById("上一层").onclick = () => {
    z.上一层(z.聚焦元素);
};
document.getElementById("顶层").onclick = () => {
    z.顶层(z.聚焦元素);
};
const toast = document.getElementById("toast");
function put_toast(t) {
    toast.innerText = t;
    toast.classList.add("toast_show");
    setTimeout(() => {
        toast.classList.remove("toast_show");
    }, 1000);
}
var nav = document.getElementById("nav");
// 模式切换
var 模式;
document.getElementById("浏览").onclick = () => {
    set_模式("浏览");
};
document.getElementById("设计").onclick = () => {
    set_模式("设计");
};
document.getElementById("绘制").onclick = () => {
    set_模式("绘制");
};
function set_模式(模式) {
    window.模式 = 模式;
    nav.querySelectorAll("#mode_bar > div").forEach((v) => {
        v.classList.remove("模式突出");
    });
    nav.querySelector(`#${模式}`).classList.add("模式突出");
    switch (模式) {
        case "浏览":
            if (focus_draw_el) {
                focus_draw_el = null;
            }
            if (O)
                O.style.pointerEvents = "";
            if (O)
                for (let el of O.querySelectorAll("x-draw")) {
                    el.clip();
                }
            break;
        case "设计":
            if (focus_draw_el) {
                focus_draw_el = null;
            }
            document.querySelectorAll("x-md").forEach((el) => {
                el.edit = false;
            });
            if (O)
                O.style.pointerEvents = "";
            if (O)
                for (let el of O.querySelectorAll("x-draw")) {
                    el.clip();
                }
            break;
        case "绘制":
            document.querySelectorAll("x-md").forEach((el) => {
                el.edit = false;
            });
            if (O)
                O.style.pointerEvents = "none";
            for (let el of O.querySelectorAll("x-draw")) {
                el.style.pointerEvents = "auto";
            }
            break;
    }
}
set_模式("设计");
// markdown
document.getElementById("toggle_md").onclick = () => {
    if (focus_md) {
        focus_md.edit = !focus_md.edit;
    }
};
function set_md_v(s, e) {
    let text = focus_md.text;
    let sn = text.selectionStart, en = text.selectionEnd;
    let select_text = text.value.slice(sn, en);
    text.setRangeText(s + select_text + e);
    text.selectionStart = sn + s.length;
    text.selectionEnd = en + s.length + e.length;
    text.dispatchEvent(new InputEvent("input"));
}
document.getElementById("md_h1").onclick = () => {
    set_md_v("# ", "");
};
document.getElementById("md_h2").onclick = () => {
    set_md_v("## ", "");
};
document.getElementById("md_h3").onclick = () => {
    set_md_v("### ", "");
};
document.getElementById("md_h4").onclick = () => {
    set_md_v("#### ", "");
};
document.getElementById("md_h5").onclick = () => {
    set_md_v("##### ", "");
};
document.getElementById("md_h6").onclick = () => {
    set_md_v("###### ", "");
};
document.getElementById("md_list").onclick = () => {
    set_md_v("- ", "");
};
document.getElementById("md_task").onclick = () => {
    set_md_v("- [ ] ", "");
};
document.getElementById("md_b").onclick = () => {
    set_md_v("**", "**");
};
document.getElementById("md_i").onclick = () => {
    set_md_v("*", "*");
};
document.getElementById("md_s").onclick = () => {
    set_md_v("~~", "~~");
};
document.getElementById("md_link").onclick = () => {
    set_md_v("[]()", "");
};
document.getElementById("md_img").onclick = () => {
    set_md_v("~[]()", "");
};
document.getElementById("md_mathi").onclick = () => {
    set_md_v("$", "$");
};
document.getElementById("md_mathb").onclick = () => {
    set_md_v("$$\n", "\n$$");
};
// 画布
var 画布 = document.getElementById("画布");
var O = document.getElementById("O");
var o_e;
var o_rect;
var move = false;
var select_id = "";
var fxsd_el = document.getElementById("方向锁定");
var fxsd = 0;
fxsd_el.onclick = () => {
    let o = { 0: 1, 1: 2, 2: 0 };
    fxsd = o[fxsd];
    let os = { 0: "./assets/icons/x_y.svg", 1: "./assets/icons/y.svg", 2: "./assets/icons/x.svg" };
    fxsd_el.querySelector("img").src = os[fxsd];
};
document.onmousedown = (e) => {
    if (e.target == document.querySelector("#画布")) {
        if (e.button == 0) {
            if (模式 != "设计")
                return;
            o_e = e;
            let select = document.createElement("div");
            select_id = select.id = `s${new Date().getTime()}`;
            document.getElementById("选择").append(select);
            画布.style.userSelect = "none";
        }
    }
};
document.onmousemove = (e) => {
    let el = e.target;
    if (el == 画布) {
        画布.style.cursor = "crosshair";
    }
    else {
        if (画布.style.cursor == "crosshair") {
            画布.style.cursor = "";
        }
    }
    mouse(e);
    if (o_e)
        move = true;
};
document.onmouseup = (e) => {
    mouse(e);
    if (e.button == 0 && selected_el.length == 0 && move && o_e) {
        if (模式 != "设计")
            return;
        let r = e2rect(o_e, e);
        creat_x_x(r.x - O.offsetLeft, r.y - O.offsetTop, r.w);
    }
    o_e = null;
    move = false;
    document.getElementById("画布").style.cursor = "auto";
    画布.style.userSelect = "auto";
    if (select_id)
        document.getElementById(select_id).remove();
    select_id = "";
};
var mouse = (e) => {
    if (o_e) {
        if (e.buttons == 2) {
            let x = o_rect.x + (fxsd == 0 || fxsd == 2 ? e.clientX - o_e.clientX : 0), y = o_rect.y + (fxsd == 0 || fxsd == 1 ? e.clientY - o_e.clientY : 0);
            O.style.left = x + "px";
            O.style.top = y + "px";
        }
        else if (e.button == 0) {
            if (select_id) {
                画布.querySelectorAll(".x-x_selected").forEach((el) => {
                    el.classList.remove("x-x_selected");
                    selected_el = [];
                });
                let rect = e2rect(o_e, e);
                let select = document.getElementById(select_id);
                select.id = select_id;
                select.style.left = rect.x + "px";
                select.style.top = rect.y + "px";
                select.style.width = rect.w + "px";
                select.style.height = rect.h + "px";
                select_x_x(rect);
            }
        }
    }
};
var o_touch_e;
var o_touch_zoom_e;
var o_zoom = NaN;
document.ontouchstart = (e) => {
    let el = e.changedTouches[0].target;
    if (!画布.contains(el))
        return;
    if (!(el.isContentEditable ||
        el.tagName == "INPUT" ||
        el.tagName == "SELECT" ||
        el.tagName == "TEXTAREA" ||
        el.parentElement.tagName == "X-DRAW") &&
        !document.querySelector("x-sinppet").contains(el)) {
        o_touch_e = o_touch_zoom_e = e;
        o_rect = { x: O.offsetLeft, y: O.offsetTop };
        o_zoom = zoom;
        if (e.targetTouches.length == 1) {
            document.getElementById("画布").style.cursor = "move";
        }
        else if (e.targetTouches.length == 2) {
        }
    }
};
document.ontouchmove = (e) => {
    if (e.targetTouches.length == 1) {
        touch_move(e);
        if (o_touch_e)
            move = true;
    }
    else if (e.targetTouches.length == 2) {
        e.preventDefault();
        touch_zoom(e);
        if (o_touch_zoom_e)
            move = true;
    }
};
document.ontouchend = (e) => {
    o_touch_e = null;
    move = false;
    o_touch_zoom_e = null;
    o_zoom = NaN;
    if (e.targetTouches.length == 1) {
        touch_move(e);
        document.getElementById("画布").style.cursor = "auto";
        if (select_id)
            document.getElementById(select_id).remove();
        select_id = "";
    }
    else if (e.targetTouches.length == 2) {
        touch_zoom(e);
    }
};
var pointer_move = true;
var touch_move = (e) => {
    if (o_touch_e) {
        if (pointer_move) {
            let x = o_rect.x +
                (fxsd == 0 || fxsd == 2 ? e.changedTouches[0].clientX - o_touch_e.changedTouches[0].clientX : 0), y = o_rect.y +
                (fxsd == 0 || fxsd == 1 ? e.changedTouches[0].clientY - o_touch_e.changedTouches[0].clientY : 0);
            O.style.left = x + "px";
            O.style.top = y + "px";
        }
    }
};
var touch_zoom = (e) => {
    if (o_touch_zoom_e) {
        if (pointer_move) {
            let r0 = Math.sqrt((o_touch_zoom_e.targetTouches[0].clientX - o_touch_zoom_e.targetTouches[1].clientX) ** 2 +
                (o_touch_zoom_e.targetTouches[0].clientY - o_touch_zoom_e.targetTouches[1].clientY) ** 2);
            let r1 = Math.sqrt((e.targetTouches[0].clientX - e.targetTouches[1].clientX) ** 2 +
                (e.targetTouches[0].clientY - e.targetTouches[1].clientY) ** 2);
            let z = (r1 / r0) * o_zoom;
            let p = [
                (o_touch_zoom_e.targetTouches[0].clientX + o_touch_zoom_e.targetTouches[1].clientX) / 2,
                (o_touch_zoom_e.targetTouches[0].clientY + o_touch_zoom_e.targetTouches[1].clientY) / 2,
            ];
            let ozoom = zoom, dzoom = z - zoom;
            let dx = p[0] - O.getBoundingClientRect().x, dy = p[1] - O.getBoundingClientRect().y;
            O.style.left = O.offsetLeft - dx * (dzoom / ozoom) + "px";
            O.style.top = O.offsetTop - dy * (dzoom / ozoom) + "px";
            zoom_o(z);
        }
    }
};
function e2rect(e0, e1) {
    let r0 = { x: e0.clientX - 画布.getBoundingClientRect().x, y: e0.clientY - 画布.getBoundingClientRect().y }, r1 = { x: e1.clientX - 画布.getBoundingClientRect().x, y: e1.clientY - 画布.getBoundingClientRect().y };
    return { x: Math.min(r0.x, r1.x), y: Math.min(r0.y, r1.y), w: Math.abs(r0.x - r1.x), h: Math.abs(r0.y - r1.y) };
}
var selected_el = [];
function select_x_x(rect) {
    for (const el of 画布.querySelectorAll("x-x")) {
        let r = el.getBoundingClientRect();
        let rr = {
            left: r.left - 画布.getBoundingClientRect().x,
            top: r.top - 画布.getBoundingClientRect().y,
            right: r.right - 画布.getBoundingClientRect().x,
            bottom: r.bottom - 画布.getBoundingClientRect().y,
        };
        if (rect.x <= rr.left && rr.right <= rect.x + rect.w && rect.y <= rr.top && rr.bottom <= rect.y + rect.h) {
            el.classList.add("x-x_selected");
            selected_el.push(el);
        }
    }
}
document.getElementById("归位").onclick = () => {
    O.style.transition = "0.4s";
    O.style.left = "0px";
    O.style.top = "0px";
    zoom_o(1);
    setTimeout(() => {
        O.style.transition = "";
    }, 400);
    data_changed();
};
var zoom = 1;
function zoom_o(z) {
    zoom = z;
    O.style.transform = `scale(${z})`;
}
document.getElementById("画布").onwheel = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        let ozoom = zoom, dzoom = -e.deltaY / 500;
        zoom += dzoom;
        let dx = e.clientX - O.getBoundingClientRect().x, dy = e.clientY - O.getBoundingClientRect().y;
        O.style.left = O.offsetLeft - dx * (dzoom / ozoom) + "px";
        O.style.top = O.offsetTop - dy * (dzoom / ozoom) + "px";
        zoom_o(zoom);
    }
    else {
        let el = e.target;
        if (el.tagName == "TEXTAREA")
            return;
        if (document.querySelector("x-sinppet").contains(el))
            return;
        if (e.shiftKey && !e.deltaX) {
            if (fxsd == 0 || fxsd == 2)
                O.style.left = O.offsetLeft - e.deltaY + "px";
        }
        else {
            if (fxsd == 0 || fxsd == 2)
                O.style.left = O.offsetLeft - e.deltaX + "px";
            if (fxsd == 0 || fxsd == 1)
                O.style.top = O.offsetTop - e.deltaY + "px";
        }
    }
    data_changed();
};
var now_mouse_e = null;
document.addEventListener("mousemove", (e) => {
    now_mouse_e = e;
});
画布.oncontextmenu = (e) => {
    if (模式 != "浏览")
        e.preventDefault();
};
// 自由元素移动
let free_o_e;
let free_o_rects = [];
document.addEventListener("mousemove", (e) => {
    free_mouse(e);
    if (free_o_e)
        move = true;
});
document.addEventListener("mouseup", (e) => {
    free_mouse(e);
    free_o_e = null;
    move = false;
    document.getElementById("画布").style.cursor = "auto";
    free_o_rects = [];
    data_changed();
});
var free_mouse = (e) => {
    if (free_o_e) {
        for (const xel of free_o_rects) {
            let x = xel.x + (e.clientX - free_o_e.clientX) / zoom, y = xel.y + (e.clientY - free_o_e.clientY) / zoom;
            xel.el.style.left = x + "px";
            xel.el.style.top = y + "px";
        }
    }
};
function creat_x_x(x, y, w) {
    let xel = document.createElement("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    xel.style.width = w / zoom + "px";
    z.push(xel);
    var md = document.createElement("x-md");
    xel.append(md);
    md.edit = true;
    set_模式("浏览");
}
// 快捷键
document.onkeydown = (e) => {
    switch (e.key) {
        case "F11":
            e.preventDefault();
            画布.requestFullscreen();
            break;
        case "Delete":
            for (let el of selected_el) {
                el.remove();
            }
            selected_el = [];
            break;
        case "Home":
            if (e.ctrlKey) {
                document.getElementById("归位").click();
            }
            break;
        case "/":
            if (e.ctrlKey) {
                e.preventDefault();
                document.getElementById("toggle_md").click();
            }
            break;
        case "0":
            let ozoom = zoom, dzoom = 1 - zoom;
            zoom += dzoom;
            let dx = now_mouse_e.clientX - O.getBoundingClientRect().x, dy = now_mouse_e.clientY - O.getBoundingClientRect().y;
            O.style.left = O.offsetLeft - dx * (dzoom / ozoom) + "px";
            O.style.top = O.offsetTop - dy * (dzoom / ozoom) + "px";
            zoom_o(1);
            data_changed();
            break;
        case "k":
            if (e.ctrlKey) {
                e.preventDefault();
                e.preventDefault();
                search_el.focus();
            }
            break;
        case "z":
            if (e.ctrlKey) {
                e.preventDefault();
                undo(true);
            }
            break;
        case "y":
            if (e.ctrlKey) {
                e.preventDefault();
                undo(false);
            }
    }
};
// 文件数据
let pname = `画布${uuid().slice(0, 7)}`;
var 集 = {
    meta: {
        focus_page: pname,
        url: "",
        UUID: uuid(),
        file_name: "",
    },
    数据: [{ name: pname, p: { x: 0, y: 0, zoom: 1 }, data: [] }],
    链接: {},
    assets: {},
};
function get_data() {
    let l = 集;
    let data = [];
    for (let i of O.childNodes) {
        let el = i;
        let values = {};
        for (let k of el.childNodes) {
            let eel = k;
            if (eel.id == "x-x_bar" || eel.id == "x-x_page")
                continue;
            values[eel.tagName] = { value: eel.value, ...(eel.edit ? { edit: eel.edit } : {}) };
        }
        data.push({ id: el.id, style: el.getAttribute("style"), values, fixed: el.fixed });
    }
    for (let p of 集.数据) {
        if (p.name == 集.meta.focus_page) {
            p.data = data;
            p.p = { x: O.offsetLeft, y: O.offsetTop, zoom };
        }
    }
    return l;
}
function rename_el() {
    let el = document.createElement("input");
    el.type = "text";
    el.readOnly = true;
    el.onkeydown = (e) => {
        if (e.key == "F2") {
            el.readOnly = false;
            el.select();
        }
    };
    el.onblur = () => {
        el.readOnly = true;
    };
    return el;
}
function set_data(l) {
    集 = l;
    O.innerHTML = "";
    document.getElementById("集").innerHTML = "";
    for (const p of 集.数据) {
        let div = rename_el();
        document.getElementById("集").append(div);
        div.value = p.name;
        div.onclick = () => {
            render_data(p);
            集.meta.focus_page = p.name;
            data_changed();
        };
        div.onchange = () => {
            if (div.value) {
                集.meta.focus_page = div.value;
                p.name = div.value;
            }
            else {
                div.remove();
                集.数据 = 集.数据.filter((d) => d != p);
                if (集.数据.length == 0) {
                    集.数据.push({ name: pname, p: { x: 0, y: 0, zoom: 1 }, data: [] });
                }
                集.meta.focus_page = 集.数据[0].name;
            }
            data_changed();
            set_data(集);
        };
        if (集.meta.focus_page == p.name) {
            render_data(p);
            集.meta.focus_page = p.name;
        }
    }
}
function render_data(inputdata) {
    O.innerHTML = "";
    z.z = [];
    for (const x of inputdata.data) {
        try {
            let el = document.createElement("x-x");
            el.fixed = x.fixed;
            el.id = x.id;
            z.push(el, true);
            el.setAttribute("style", x.style);
            setTimeout(() => {
                el.setAttribute("style", x.style);
            }, 0);
            if (!集.链接[x.id])
                集.链接[x.id] = { 值: 1, 目标: [] };
            for (let i in x.values) {
                let eel = document.createElement(i);
                el.append(eel);
                eel.value = x.values[i].value;
                if (x.values[i].edit)
                    eel.edit = "cr";
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    O.style.left = (inputdata?.p?.x || 0) + "px";
    O.style.top = (inputdata?.p?.y || 0) + "px";
    zoom_o(inputdata?.p?.zoom || 1);
}
function json2md(obj) {
    let t = JSON.stringify(obj, (k, v) => {
        if (k == "value") {
            return ` -->\n${v}\n<!-- `;
        }
        return v;
    });
    return `<!-- ${t.replace(/\\n/g, "\n")} -->`;
}
function md2json(t) {
    if (!t.match(/<!-- (.*?) -->/))
        return {
            meta: { focus_page: "上传的md", url: "", UUID: uuid(), file_name: "" },
            数据: [
                {
                    name: "上传的md",
                    data: [
                        {
                            id: "上传的md",
                            style: `left: 0px; top: 0px; z-index: ${z.z.length};`,
                            values: { "X-MD": { value: t, edit: true } },
                            fixed: false,
                        },
                    ],
                },
            ],
        };
    t = t.slice(5, t.length - 4).replace(/\n/g, "\\n");
    let obj = JSON.parse(t, (k, v) => {
        if (k == "value") {
            return v.slice(5, v.length - 6);
        }
        return v;
    });
    return obj;
}
window.MathJax = {
    tex: {
        inlineMath: [["$", "$"]],
    },
    options: {
        enableMenu: false,
    },
};
// 绑定文件
var fileHandle;
async function file_load() {
    let file;
    if (window.showOpenFilePicker) {
        [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "markdown 文件",
                    accept: {
                        "text/*": [".md"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
        });
        if (fileHandle.kind != "file")
            return;
        fileHandle.requestPermission({ mode: "readwrite" });
        file = await fileHandle.getFile();
    }
    集.meta.file_name = file.name.replace(/\.md$/, "");
    document.title = get_title();
    let reader = new FileReader();
    reader.onload = () => {
        let o = md2json(reader.result);
        set_data(o);
        data_changed();
    };
    reader.readAsText(file);
}
var saved = true;
function get_file_name() {
    return 集.meta.file_name || document.querySelector("h1")?.innerText || `xlinkote`;
}
function get_title() {
    return `${集.meta.file_name} - xlinkote`;
}
function set_title(t) {
    document.title = `${t} - xlinkote`;
}
async function write_file(text) {
    saved = true;
    document.title = get_title();
    if (fileHandle && (await fileHandle.requestPermission({ mode: "readwrite" })) === "granted") {
        const writable = await fileHandle.createWritable();
        await writable.write(text);
        await writable.close();
    }
}
// 数据库
var request = indexedDB.open("files");
var db_store_name = "files";
var db;
request.onsuccess = (event) => {
    db = event.target.result;
    db_get();
};
request.onerror = (event) => {
    console.error(new Error(event.target.error));
};
request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore(db_store_name, { keyPath: "meta.UUID" });
};
var db_writing = false;
function db_put(obj) {
    if (db_writing)
        return;
    db_writing = true;
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.put(obj);
    r.onerror = (event) => {
        console.error(new Error(event.target.error));
    };
    r.onsuccess = () => {
        db_writing = false;
    };
}
var files;
function db_get() {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.getAll();
    r.onsuccess = () => {
        files = r.result;
        document.getElementById("文件").innerHTML = "";
        let load_dav = document.createElement("div");
        load_dav.innerHTML = `<img src="./assets/icons/cloud_down.svg" class="icon">`;
        document.getElementById("文件").append(load_dav);
        load_dav.onclick = () => {
            get_all_xln(r.result);
        };
        let new_d = document.createElement("div");
        let new_t = rename_el();
        new_t.onchange = () => {
            if (new_t.value) {
                集.meta.file_name = new_t.value;
                data_changed();
            }
        };
        new_t.value = `新建集${uuid().slice(0, 7)}`;
        let dav = document.createElement("div");
        new_d.append(dav, new_t);
        new_d.onclick = () => {
            let fn = prompt("文件名");
            if (fn) {
                集.meta.file_name = new_t.value = fn;
                data_changed();
            }
        };
        document.getElementById("文件").append(new_d);
        for (let f of r.result) {
            let d = document.createElement("div");
            let t = rename_el();
            t.onclick = () => {
                if (!集.meta.file_name)
                    new_d.remove();
                set_data(f);
                侧栏.classList.remove("侧栏显示");
            };
            t.onchange = () => {
                集.meta.file_name = t.value;
                data_changed();
            };
            t.value = f.meta.file_name || "";
            if (f.meta.url)
                t.title = f.meta.url;
            let dav = document.createElement("div");
            d.append(dav, t);
            document.getElementById("文件").append(d);
        }
    };
}
function db_download() {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.getAll();
    r.onsuccess = () => {
        let t = JSON.stringify(r.result);
        let a = document.createElement("a");
        let blob = new Blob([t]);
        a.download = `xlinkote_db.json`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    };
}
function db_load(t) {
    let o = JSON.parse(t);
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    for (let obj of o) {
        let r = customerObjectStore.put(obj);
        r.onerror = (event) => {
            console.error(new Error(event.target.error));
        };
    }
    db_get();
}
document.getElementById("db_load").onchange = () => {
    let file = document.getElementById("db_load").files[0];
    let reader = new FileReader();
    reader.onload = () => {
        db_load(reader.result);
    };
    reader.readAsText(file);
};
var undo_stack = [], undo_i = -1;
function undo(v) {
    if (v) {
        undo_i--;
        if (undo_i < 0)
            undo_i = 0;
    }
    else {
        undo_i++;
        if (undo_i >= undo_stack.length)
            undo_i = undo_stack.length - 1;
    }
    set_data(JSON.parse(undo_stack[undo_i]));
}
async function download_file(text) {
    if (window.showSaveFilePicker) {
        fileHandle = await window.showSaveFilePicker({
            suggestedName: get_file_name(),
            types: [
                {
                    description: "markdown 文件",
                    accept: { "text/*": [".md"] },
                },
            ],
        });
        const writable = await fileHandle.createWritable();
        await writable.write(text);
        await writable.close();
    }
    else {
        let a = document.createElement("a");
        let blob = new Blob([text]);
        let name = get_file_name();
        a.download = `${name}.md`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    }
}
var save_timeout = NaN, save_dt = 200;
function data_changed() {
    clearTimeout(save_timeout);
    save_timeout = window.setTimeout(() => {
        if (saved) {
            document.title = `● ` + get_title();
            saved = false;
        }
        if (集.meta.file_name) {
            write_file(json2md(get_data()));
            db_put(get_data());
        }
        if (undo_i != undo_stack.length - 1) {
            undo_stack.push(undo_stack[undo_i]);
        }
        undo_stack.push(JSON.stringify(get_data()));
        undo_i = undo_stack.length - 1;
    }, save_dt);
}
function add_画布(xname) {
    get_data(); /* 保存之前的画布 */
    let name = xname || `画布${uuid().slice(0, 7)}`;
    集.数据.push({ name, p: { x: 0, y: 0, zoom: 1 }, data: [] });
    集.meta.focus_page = name;
    set_data(集);
    data_changed();
}
var focus_md = null;
// 拖放
function put_datatransfer(data, x, y) {
    if (data.files.length != 0) {
        for (let f of data.files) {
            let type = f.type.split("/")[0];
            if (type == "text") {
                let reader = new FileReader();
                reader.readAsText(f);
                reader.onload = () => {
                    add_file(f.type, reader.result, null, x, y);
                };
            }
            else {
                let reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = () => {
                    add_file(f.type, null, reader.result, x, y);
                };
            }
        }
    }
    else {
        let html = data.getData("text/html");
        add_file("text/html", html, null, x, y);
    }
}
画布.ondragover = (e) => {
    if (e.target != 画布)
        return;
    e.preventDefault();
};
画布.ondrop = (e) => {
    if (e.target != 画布)
        return;
    e.preventDefault();
    put_datatransfer(e.dataTransfer, e.offsetX - O.offsetLeft, e.offsetY - O.offsetTop);
};
// 添加文件或文字
function add_file(type, text, data, x, y) {
    let types = type.split("/");
    let xel = document.createElement("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    if (types[0] == "text") {
        let md = document.createElement("x-md");
        xel.append(md);
        if (type == "text/html") {
            let turndownService = new window.TurndownService({ headingStyle: "atx" });
            md.value = turndownService.turndown(text);
        }
        else {
            md.value = text;
        }
    }
    else if (types[0] == "image" || types[0] == "video") {
        let id = put_assets("", data);
        let file = document.createElement("x-file");
        xel.append(file);
        file.value = JSON.stringify({ r: true, id });
    }
}
document.addEventListener("message", (msg) => {
    alert(msg.data);
    const data = JSON.parse(msg.data);
    if (data.m == "add") {
        if (集.meta.file_name != "摘录") {
            // 是否存在摘录文件
            for (let i of files) {
                if (i.meta.file_name == "摘录") {
                    set_data(i);
                }
            }
            // 新建摘录文件
            if (集.meta.file_name != "摘录") {
                let j;
                // 避免影响当前已打开文件
                if (集.meta.file_name) {
                    j = {
                        meta: {
                            focus_page: "",
                            url: "",
                            UUID: uuid(),
                            file_name: "摘录",
                        },
                        数据: [],
                        链接: {},
                        assets: {},
                    };
                }
                else {
                    j = 集;
                    j.meta.file_name = "摘录";
                }
                set_data(j);
            }
        }
        add_画布();
        add_file(data.type, data.text, data.data, 0, 0);
        data_changed();
    }
});
// 资源
function put_assets(url, base64) {
    let id = uuid().slice(0, 7);
    let sha = "";
    if (base64)
        sha = window.CryptoJS.SHA256(base64).toString();
    集.assets[id] = { url, base64, sha };
    return id;
}
// 画板
var focus_draw_el = null;
画布.onpointerdown = (e) => {
    let el = e.target;
    if (el.parentElement.tagName == "X-DRAW") {
        if (模式 == "绘制") {
            el.parentElement?.draw(e);
            z.focus(el.parentElement.parentElement);
            document.getElementById("penc").value = focus_draw_el.pen.color;
        }
    }
};
画布.onpointermove = (e) => {
    if (focus_draw_el) {
        focus_draw_el.draw(e);
    }
};
画布.onpointerup = (e) => {
    if (focus_draw_el) {
        focus_draw_el.draw(e);
        focus_draw_el.points = [{ x: NaN, y: NaN, p: NaN }];
        focus_draw_el.complete();
        data_changed();
    }
};
document.getElementById("penc").onchange = () => {
    focus_draw_el.pen.color = document.getElementById("penc").value;
};
document.getElementById("橡皮").onclick = () => {
    if (focus_draw_el.pen.gco == "source-over") {
        focus_draw_el.pen.gco = "destination-out";
    }
    else {
        focus_draw_el.pen.gco = "source-over";
    }
};
window.onbeforeunload = () => {
    if (!集.meta.file_name)
        return true;
};
// 导出
function to_canvas() {
    for (let m of document.querySelectorAll("mjx-assistive-mml")) {
        m.remove();
    }
    window.html2canvas(画布).then(function (canvas) {
        let url = canvas.toDataURL();
        let a = document.createElement("a");
        let name = get_file_name();
        a.download = `${name}.png`;
        a.href = url;
        a.click();
    });
}
class 图层 {
    constructor() {
        this.z = [];
        this.聚焦元素 = null;
    }
    reflash(el, nosave) {
        document.getElementById("层").innerHTML = "";
        for (let i in this.z) {
            this.z[i].style.zIndex = i;
            let div = document.createElement("div");
            let r = document.createElement("input");
            r.type = "radio";
            r.name = "层";
            r.value = i;
            if (this.z[i] == el)
                r.checked = true;
            let t = rename_el();
            t.value = this.z[i].id;
            t.onclick = () => {
                r.checked = true;
            };
            t.onchange = () => {
                this.z[i].id = t.value;
                this.reflash(this.z[i]);
            };
            div.append(r);
            div.append(t);
            div.onclick = () => {
                this.聚焦元素 = this.z[i];
                for (let x of this.z) {
                    x.classList.remove("x-x_selected");
                }
                this.z[i].classList.add("x-x_selected");
                selected_el.push(this.z[i]);
                el_style.value = this.z[i].getAttribute("style");
            };
            document.getElementById("层").insertBefore(div, document.getElementById("层").firstChild);
        }
        document.documentElement.style.setProperty("--zest-index", String(this.z.length - 1));
        if (!nosave)
            data_changed();
    }
    push(el, nosave) {
        el.id = el.id === "undefined" || !el.id ? `${uuid().slice(0, 7)}` : el.id;
        O.append(el);
        this.z.push(el);
        this.reflash(el, nosave);
        if (!集.链接)
            集.链接 = {};
        集.链接[el.id] = { 值: 1, 目标: [] };
    }
    remove(el) {
        for (let i in this.z) {
            if (this.z[i] == el) {
                this.z.splice(Number(i), 1);
                this.reflash(el);
                return;
            }
        }
    }
    focus(el) {
        this.聚焦元素 = el;
        for (let l of document.getElementById("层").querySelectorAll("div")) {
            if (el.id == l.querySelector("input[type='text']").value)
                l.querySelector("input[type='radio']").checked = true;
        }
        if (模式 == "浏览")
            if (el.children[0].tagName == "X-MD") {
                focus_md = el.children[0];
                focus_draw_el = null;
            }
            else if (el.children?.[1]?.tagName == "X-MD") {
                focus_md = el.children[1];
                focus_draw_el = null;
            }
            else {
                focus_md = null;
            }
        if (模式 == "绘制")
            if (el.children[0].tagName == "X-DRAW") {
                focus_draw_el = el.children[0];
                focus_md = null;
            }
            else if (el.children?.[1]?.tagName == "X-DRAW") {
                focus_draw_el = el.children[1];
                focus_md = null;
            }
            else {
                focus_draw_el = null;
            }
    }
    get(el) {
        return this.z.indexOf(el);
    }
    底层(el) {
        this.remove(el);
        this.z.unshift(el);
        this.reflash(el);
    }
    下一层(el) {
        let i = this.get(el);
        if (i == 0)
            return;
        this.remove(el);
        this.z.splice(i - 1, 0, el);
        this.reflash(el);
    }
    上一层(el) {
        let i = this.get(el);
        if (i == this.z.length - 1)
            return;
        this.remove(el);
        this.z.splice(i + 1, 0, el);
        this.reflash(el);
    }
    顶层(el) {
        this.remove(el);
        this.z.push(el);
        this.reflash(el);
    }
}
var z = new 图层();
var el_style = document.getElementById("el_style");
el_style.oninput = () => {
    z.聚焦元素.setAttribute("style", el_style.value);
};
set_data(集);
// 云
var client = window.WebDAV.createClient(store.webdav.网址, {
    username: store.webdav.用户名,
    password: store.webdav.密码,
});
async function get_all_xln(r) {
    let dav_files = (await client.getDirectoryContents("/", { deep: true, glob: "**.xln" }));
    let rp = await client.getDirectoryContents("/");
    let 删除路径 = "";
    let rplf = rp[rp.length - 1];
    let b = new RegExp(`${rplf.basename}$`);
    删除路径 = rplf.filename.replace(b, "");
    for (let f of r) {
        let dav;
        for (let el of document.getElementById("文件").querySelectorAll("input")) {
            if (el.value == f.meta.file_name) {
                dav = el.previousElementSibling;
                break;
            }
        }
        for (let fi of dav_files) {
            if ("/" + fi.filename.replace(new RegExp(`^${删除路径}`), "") == f.meta.url) {
                dav.onclick = () => {
                    get_xln_value("/" + fi.filename.replace(new RegExp(`^${删除路径}`), ""));
                    document.title = get_title();
                    侧栏.classList.remove("侧栏显示");
                };
                dav.innerHTML = `<img src="./assets/icons/cloud_down.svg" class="icon">`;
                dav_files = dav_files.filter((v) => v != fi);
                break;
            }
        }
    }
    for (let fi of dav_files) {
        let new_t = document.getElementById("文件").querySelector("div:nth-child(2)");
        let d = document.createElement("div");
        let t = rename_el();
        t.value = fi.basename.replace(/\.xln$/, "") || "";
        t.title = "/" + fi.filename.replace(new RegExp(`^${删除路径}`), "");
        let dav = document.createElement("div");
        dav.innerHTML = `<img src="./assets/icons/cloud.svg" class="icon">`;
        d.append(dav, t);
        document.getElementById("文件").append(d);
        t.onclick = dav.onclick = () => {
            if (!集.meta.file_name)
                new_t.remove();
            get_xln_value("/" + fi.filename.replace(new RegExp(`^${删除路径}`), ""));
            document.title = get_title();
            侧栏.classList.remove("侧栏显示");
        };
    }
}
var now_dav_data = "";
async function get_xln_value(path) {
    let str = await client.getFileContents(path, { format: "text" });
    let o;
    try {
        o = JSON.parse(str);
    }
    catch (e) {
        if (store.webdav.加密密钥) {
            let bytes = window.CryptoJS.AES.decrypt(str, store.webdav.加密密钥);
            str = bytes.toString(window.CryptoJS.enc.Utf8);
            if (!str) {
                let password = prompt("密钥错误，请输入其他密钥");
                let bytes = window.CryptoJS.AES.decrypt(str, password);
                str = bytes.toString(window.CryptoJS.enc.Utf8);
            }
            str = 解压(str);
            o = JSON.parse(str);
        }
    }
    now_dav_data = str;
    set_data(o);
    data_changed();
    if (fileHandle)
        fileHandle = null;
    集.meta.url = path;
}
async function put_xln_value() {
    let path = 集.meta.url;
    if (!path) {
        let n = window.prompt("上传的文件名", get_file_name());
        if (!n)
            return;
        set_title(n);
        path = `/${n}.xln`;
        集.meta.url = path;
        data_changed();
    }
    let t = JSON.stringify(get_data());
    if (store.webdav.加密密钥) {
        t = 压缩(t);
        t = window.CryptoJS.AES.encrypt(t, store.webdav.加密密钥).toString();
    }
    let v = await client.putFileContents(path, t);
    if (v)
        put_toast("文件上传成功");
}
var auto_put_xln_t = NaN;
function auto_put_xln() {
    if (Number(store.webdav.自动上传)) {
        auto_put_xln_t = window.setTimeout(() => {
            if (now_dav_data != JSON.stringify(get_data())) {
                put_xln_value();
            }
        }, Number(store.webdav.自动上传) * 60 * 1000);
    }
}
function 压缩(t) {
    let c = window.pako.deflate(t);
    let res = "";
    let chunk = 8 * 1024;
    let i;
    for (i = 0; i < c.length / chunk; i++) {
        res += String.fromCharCode.apply(null, c.slice(i * chunk, (i + 1) * chunk));
    }
    res += String.fromCharCode.apply(null, c.slice(i * chunk));
    return res;
}
function 解压(t) {
    let arr = [];
    for (var i = 0, j = t.length; i < j; ++i) {
        arr.push(t.charCodeAt(i));
    }
    let tmpUint8Array = new Uint8Array(arr);
    let r = window.pako.inflate(tmpUint8Array, { to: "string" });
    return r;
}
// 设置
function save_setting() {
    let o = {};
    for (let f of 设置_el.querySelectorAll("form")) {
        o[f.name] = {};
        let form = new FormData(f);
        for (let v of form) {
            o[f.name][v[0]] = v[1];
        }
    }
    store = o;
    localStorage.setItem("config", JSON.stringify(o));
    arter_save_setting();
}
function arter_save_setting() {
    client = window.WebDAV.createClient(store.webdav.网址, {
        username: store.webdav.用户名,
        password: store.webdav.密码,
    });
    clearTimeout(auto_put_xln_t);
    auto_put_xln();
}
function show_setting() {
    let setting = JSON.parse(localStorage.getItem("config"));
    for (let f in setting) {
        let fel = document.querySelector(`form[name="${f}"]`);
        for (let k in setting[f]) {
            fel[k].value = setting[f][k];
        }
    }
}
// 搜索
function search(s, type) {
    let result = [];
    switch (type) {
        case "str":
            for (let t of document.querySelectorAll("textarea")) {
                const fuse = new window.Fuse(t.value.split("\n"), {
                    includeMatches: true,
                    findAllMatches: true,
                    useExtendedSearch: true,
                });
                let fr = fuse.search(s);
                for (let i of fr) {
                    result.push({ el: t, l: i.matches, n: i.refIndex, type: "str" });
                }
            }
            break;
        case "regex":
            for (let t of document.querySelectorAll("textarea")) {
                let r;
                try {
                    r = eval("/" + s + "/g");
                }
                catch (error) {
                    console.error(error);
                }
                let rl = Array.from(new Set(t.value.match(r)));
                let l = [];
                for (let i of rl) {
                    l.push({ value: i, indices: s_i(i, t.value).map((v) => [v, v + i.length]) });
                }
                if (l.length != 0) {
                    result.push({ el: t, l });
                }
            }
            break;
    }
    function s_i(t, st) {
        let l = [];
        if (t == "")
            return l;
        let n = 0;
        while (st.indexOf(t, n) != -1) {
            n = st.indexOf(t, n);
            l.push(n);
            n++;
        }
        return l;
    }
    return result;
}
var search_el = document.getElementById("search");
var search_r = document.getElementById("搜索结果");
search_el.oninput = () => {
    let l = search(search_el.value, "str");
    console.log(l);
    show_search_l(l);
    let r = search_el.getBoundingClientRect();
    let x = r.x, w = r.width, y = r.y + r.height;
    if (window.matchMedia("(orientation: portrait)").matches) {
        search_r.style.left = "0";
        search_r.style.top = r.y - 4 - search_r.offsetHeight + "px";
        search_r.style.width = "100vw";
    }
    else {
        search_r.style.left = x + "px";
        search_r.style.top = y + 4 + "px";
        search_r.style.width = w + "px";
    }
};
function show_search_l(l) {
    search_r.innerHTML = "";
    for (let i of l) {
        for (let j of i.l) {
            for (let k of j.indices) {
                let div = document.createElement("div");
                let p = document.createElement("span");
                let h = document.createElement("span");
                h.innerText = j.value.slice(k[0], k[1] + 1);
                p.append(j.value.slice(0, k[0]), h, j.value.slice(k[1] + 1));
                div.append(p);
                search_r.append(div);
                div.onclick = () => {
                    let el = i.el;
                    let x = el.parentElement.parentElement.offsetLeft, y = el.parentElement.parentElement.offsetTop;
                    O.style.left = -x + "px";
                    O.style.top = -y + "px";
                    show_search_l([]);
                };
            }
        }
    }
}
