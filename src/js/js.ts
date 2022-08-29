// 获取设置
var store = JSON.parse(localStorage.getItem("config"));
var 设置_el = document.getElementById("设置");
if (!store) {
    save_setting();
}

function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

// 工具栏
document.getElementById("文件").click();

if (window.showOpenFilePicker) {
    document.getElementById("绑定文件").onclick = file_load;
} else {
    document.getElementById("绑定文件").style.display = "none";
}
document.getElementById("导出文件").onclick = () => {
    download_file(json2md(get_data()));
};

document.getElementById("从云加载").onclick = () => {
    if (集.meta.url) get_xln_value(集.meta.url);
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
(<HTMLDivElement>设置_el.querySelector("#close")).onclick = () => {
    设置_el.style.display = "";
    save_setting();
};
document.getElementById("新建元素").onclick = () => {
    const margin = 8;
    creat_x_x(-el_offset(O).x + margin, -el_offset(O).y + margin, 画布.offsetWidth - margin * 2);
};
document.getElementById("删除元素").onclick = () => {
    for (let i of selected_el) {
        i.remove();
    }
    if (focus_md) focus_md.remove();
};

document.getElementById("新建页").onclick = () => {
    let page = <x>document.createElement("x-x");
    z.push(page);
    page.fixed = true;
};

document.getElementById("新建画板").onclick = () => {
    let xel = <x>document.createElement("x-x");
    xel.style.left = -el_offset(O).x / zoom + "px";
    xel.style.top = -el_offset(O).y / zoom + "px";
    let draw = document.createElement("x-draw") as draw;
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
            document.querySelectorAll("#侧栏 > #items > div").forEach((iel: HTMLDivElement, j) => {
                if (i == j) {
                    iel.style.height = "100%";
                } else {
                    iel.style.height = "0";
                }
            });
        }
    });
};
document.getElementById("切换侧栏").onclick = () => {
    侧栏.classList.toggle("侧栏显示");
};
var handle_e: TouchEvent, handle_e1: TouchEvent, handle_a: number;
document.getElementById("handle").onclick = () => {
    侧栏.classList.toggle("侧栏显示");
};
document.getElementById("handle").ontouchstart = (e) => {
    handle_e = e;
    侧栏.style.transition = "0s";
};
document.getElementById("handle").ontouchmove = (e) => {
    if (!handle_e) return;
    let dy = e.changedTouches[0].clientY - handle_e.changedTouches[0].clientY;
    if (dy < 0) dy = 0;
    侧栏.style.transform = `translateY(${dy}px)`;
    if (handle_e1) handle_a = e.changedTouches[0].clientY - handle_e1.changedTouches[0].clientY;
    handle_e1 = e;
};
document.getElementById("handle").ontouchend = (e) => {
    侧栏.style.transform = ``;
    侧栏.style.transition = "";
    handle_e = null;
    handle_e1 = null;
    if (handle_a > 0) 侧栏.classList.toggle("侧栏显示");
};

for (let el of document.querySelectorAll(".tools")) {
    for (let i of el.children) {
        for (let u of document.querySelectorAll("#nav > div > div")) {
            if (i.id == u.id) {
                let x = i as HTMLElement;
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

function put_toast(t: string) {
    toast.innerText = t;
    toast.classList.add("toast_show");
    setTimeout(() => {
        toast.classList.remove("toast_show");
    }, 1000);
}

var nav = document.getElementById("nav");

// 模式切换

var 模式: "浏览" | "设计" | "绘制";

document.getElementById("浏览").onclick = () => {
    set_模式("浏览");
};
document.getElementById("设计").onclick = () => {
    set_模式("设计");
};
document.getElementById("绘制").onclick = () => {
    set_模式("绘制");
};
function set_模式(模式: "浏览" | "设计" | "绘制") {
    window.模式 = 模式;
    nav.querySelectorAll("#mode_bar > div").forEach((v) => {
        v.classList.remove("模式突出");
    });
    nav.querySelector(`#${模式}`).classList.add("模式突出");
    switch (模式) {
        case "浏览":
            if (<draw>focus_draw_el) {
                focus_draw_el = null;
            }
            if (O) O.style.pointerEvents = "";
            if (O)
                for (let el of O.querySelectorAll("x-draw")) {
                    (el as draw).clip();
                }
            break;
        case "设计":
            if (<draw>focus_draw_el) {
                focus_draw_el = null;
            }
            document.querySelectorAll("x-md").forEach((el) => {
                (<markdown>el).edit = false;
            });
            if (O) O.style.pointerEvents = "";
            if (O)
                for (let el of O.querySelectorAll("x-draw")) {
                    (el as draw).clip();
                }
            break;
        case "绘制":
            document.querySelectorAll("x-md").forEach((el) => {
                (<markdown>el).edit = false;
            });
            if (O) O.style.pointerEvents = "none";
            for (let el of O.querySelectorAll("x-draw")) {
                (el as draw).style.pointerEvents = "auto";
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
function set_md_v(s: string, e: string) {
    let text = focus_md.text;
    let sn = text.selectionStart,
        en = text.selectionEnd;
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

var o_e: MouseEvent;
var o_rect;
var move: boolean = false;
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
            if (模式 != "设计") return;
            o_e = e;
            let select = document.createElement("div");
            select_id = select.id = `s${new Date().getTime()}`;
            document.getElementById("选择").append(select);
            画布.style.userSelect = "none";
        }
    }
};

document.onmousemove = (e) => {
    let el = e.target as HTMLElement;
    if (el == 画布) {
        画布.style.cursor = "crosshair";
    } else {
        if (画布.style.cursor == "crosshair") {
            画布.style.cursor = "";
        }
    }
    mouse(e);
    if (o_e) move = true;
};
document.onmouseup = (e) => {
    mouse(e);
    if (e.button == 0 && selected_el.length == 0 && move && o_e) {
        if (模式 != "设计") return;
        let r = e2rect(o_e, e);
        creat_x_x(r.x - el_offset(O).x, r.y - el_offset(O).y, r.w);
    }
    o_e = null;
    move = false;
    document.getElementById("画布").style.cursor = "auto";
    画布.style.userSelect = "auto";
    if (select_id) document.getElementById(select_id).remove();
    select_id = "";
};
var mouse = (e: MouseEvent) => {
    if (o_e) {
        if (e.buttons == 2) {
            let x = o_rect.x + (fxsd == 0 || fxsd == 2 ? e.clientX - o_e.clientX : 0),
                y = o_rect.y + (fxsd == 0 || fxsd == 1 ? e.clientY - o_e.clientY : 0);
            O.style.left = x + "px";
            O.style.top = y + "px";
        } else if (e.button == 0) {
            if (select_id) {
                画布.querySelectorAll(".x-x_selected").forEach((el) => {
                    el.classList.remove("x-x_selected");
                    selected_el = [];
                });
                let rect = e2rect(o_e, e);
                let select = <HTMLDivElement>document.getElementById(select_id);
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

var o_touch_e: TouchEvent;
var o_touch_zoom_e: TouchEvent;
var o_zoom = NaN;
document.ontouchstart = (e) => {
    let el = <HTMLElement>e.changedTouches[0].target;
    if (!画布.contains(el)) return;
    if (
        !(
            el.isContentEditable ||
            el.tagName == "INPUT" ||
            el.tagName == "SELECT" ||
            el.tagName == "TEXTAREA" ||
            el.parentElement.tagName == "X-DRAW"
        ) &&
        !document.querySelector("x-sinppet").contains(el)
    ) {
        o_touch_e = o_touch_zoom_e = e;
        o_rect = { x: el_offset(O).x, y: el_offset(O).y };
        o_zoom = zoom;
        if (e.targetTouches.length == 1) {
            document.getElementById("画布").style.cursor = "move";
        } else if (e.targetTouches.length == 2) {
        }
    }
};
document.ontouchmove = (e) => {
    if (e.targetTouches.length == 1) {
        touch_move(e);
        if (o_touch_e) move = true;
    } else if (e.targetTouches.length == 2) {
        e.preventDefault();
        touch_zoom(e);
        if (o_touch_zoom_e) move = true;
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
        if (select_id) document.getElementById(select_id).remove();
        select_id = "";
    } else if (e.targetTouches.length == 2) {
        touch_zoom(e);
    }
};

var pointer_move = true;

var touch_move = (e: TouchEvent) => {
    if (o_touch_e) {
        if (pointer_move) {
            let x =
                    o_rect.x +
                    (fxsd == 0 || fxsd == 2 ? e.changedTouches[0].clientX - o_touch_e.changedTouches[0].clientX : 0),
                y =
                    o_rect.y +
                    (fxsd == 0 || fxsd == 1 ? e.changedTouches[0].clientY - o_touch_e.changedTouches[0].clientY : 0);
            O.style.left = x + "px";
            O.style.top = y + "px";
        }
    }
};

var touch_zoom = (e: TouchEvent) => {
    if (o_touch_zoom_e) {
        if (pointer_move) {
            let r0 = Math.sqrt(
                (o_touch_zoom_e.targetTouches[0].clientX - o_touch_zoom_e.targetTouches[1].clientX) ** 2 +
                    (o_touch_zoom_e.targetTouches[0].clientY - o_touch_zoom_e.targetTouches[1].clientY) ** 2
            );
            let r1 = Math.sqrt(
                (e.targetTouches[0].clientX - e.targetTouches[1].clientX) ** 2 +
                    (e.targetTouches[0].clientY - e.targetTouches[1].clientY) ** 2
            );
            let z = (r1 / r0) * o_zoom;
            let p = [
                (o_touch_zoom_e.targetTouches[0].clientX + o_touch_zoom_e.targetTouches[1].clientX) / 2,
                (o_touch_zoom_e.targetTouches[0].clientY + o_touch_zoom_e.targetTouches[1].clientY) / 2,
            ];
            let ozoom = zoom,
                dzoom = z - zoom;
            let dx = p[0] - O.getBoundingClientRect().x,
                dy = p[1] - O.getBoundingClientRect().y;
            O.style.left = el_offset(O).x - dx * (dzoom / ozoom) + "px";
            O.style.top = el_offset(O).y - dy * (dzoom / ozoom) + "px";
            zoom_o(z);
        }
    }
};

function e2rect(e0: MouseEvent, e1: MouseEvent) {
    let r0 = { x: e0.clientX - 画布.getBoundingClientRect().x, y: e0.clientY - 画布.getBoundingClientRect().y },
        r1 = { x: e1.clientX - 画布.getBoundingClientRect().x, y: e1.clientY - 画布.getBoundingClientRect().y };
    return { x: Math.min(r0.x, r1.x), y: Math.min(r0.y, r1.y), w: Math.abs(r0.x - r1.x), h: Math.abs(r0.y - r1.y) };
}

var selected_el: Array<HTMLElement> = [];

function select_x_x(rect: { x: number; y: number; w: number; h: number }) {
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
            selected_el.push(<HTMLElement>el);
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
const zoom_el = document.getElementById("缩放");

function zoom_o(z: number) {
    zoom = z;
    O.style.transform = `scale(${z})`;
    zoom_el.innerText = `${(z * 100).toFixed(1)}%`;
}

function el_offset(el: HTMLElement, pel?: HTMLElement) {
    if (!pel) pel = el.parentElement;
    let ox = el.getBoundingClientRect().x - pel.getBoundingClientRect().x,
        oy = el.getBoundingClientRect().y - pel.getBoundingClientRect().y;
    return { x: ox, y: oy };
}
function el_offset2(el: HTMLElement, pel?: HTMLElement) {
    if (!pel) pel = el.parentElement;
    let ox = el.getBoundingClientRect().x - pel.getBoundingClientRect().x,
        oy = el.getBoundingClientRect().y - pel.getBoundingClientRect().y;
    return { x: ox / zoom, y: oy / zoom };
}

document.getElementById("画布").onwheel = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        let ozoom = zoom,
            dzoom = -e.deltaY / (800 / zoom);
        zoom += dzoom;
        let dx = e.clientX - O.getBoundingClientRect().x,
            dy = e.clientY - O.getBoundingClientRect().y;
        O.style.left = el_offset(O).x - dx * (dzoom / ozoom) + "px";
        O.style.top = el_offset(O).y - dy * (dzoom / ozoom) + "px";
        zoom_o(zoom);
    } else {
        let el = <HTMLElement>e.target;
        if (el.tagName == "TEXTAREA") return;
        if (document.querySelector("x-sinppet").contains(el)) return;
        if (e.shiftKey && !e.deltaX) {
            if (fxsd == 0 || fxsd == 2) O.style.left = el_offset(O).x - e.deltaY + "px";
        } else {
            if (fxsd == 0 || fxsd == 2) O.style.left = el_offset(O).x - e.deltaX + "px";
            if (fxsd == 0 || fxsd == 1) O.style.top = el_offset(O).y - e.deltaY + "px";
        }
    }
    data_changed();
};

zoom_o(1);

var now_mouse_e = null;
document.addEventListener("mousemove", (e: MouseEvent) => {
    now_mouse_e = e;
});

画布.oncontextmenu = (e) => {
    if (模式 != "浏览") e.preventDefault();
};

// 自由元素移动
let free_o_e: MouseEvent;
let free_o_rects = [];
document.addEventListener("mousemove", (e: MouseEvent) => {
    if (模式 == "设计") e.preventDefault();
    free_mouse(e);
    if (free_o_e) move = true;
});
document.addEventListener("mouseup", (e: MouseEvent) => {
    free_mouse(e);
    free_o_e = null;
    move = false;
    document.getElementById("画布").style.cursor = "auto";
    free_o_rects = [];

    data_changed();
});
var free_mouse = (e: MouseEvent) => {
    if (free_o_e) {
        for (const xel of free_o_rects) {
            let x = xel.x + (e.clientX - free_o_e.clientX) / zoom,
                y = xel.y + (e.clientY - free_o_e.clientY) / zoom;
            xel.el.style.left = x + "px";
            xel.el.style.top = y + "px";
        }
    }
};

function creat_x_x(x: number, y: number, w: number) {
    let xel = <x>document.createElement("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    xel.style.width = w / zoom + "px";
    z.push(xel);
    var md = document.createElement("x-md");
    xel.append(md);
    (<markdown>md).edit = true;
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
            let ozoom = zoom,
                dzoom = 1 - zoom;
            zoom += dzoom;
            let dx = now_mouse_e.clientX - O.getBoundingClientRect().x,
                dy = now_mouse_e.clientY - O.getBoundingClientRect().y;
            O.style.left = el_offset(O).x - dx * (dzoom / ozoom) + "px";
            O.style.top = el_offset(O).y - dy * (dzoom / ozoom) + "px";
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
type 集type = {
    meta: {
        focus_page: string;
        url: string;
        UUID: string;
        file_name: string;
    };
    数据: Array<{ name: string; p: { x: number; y: number; zoom: number }; data: data }>;
    链接: { [key: string]: { 值: number; 目标: string[] } };
    assets: { [key: string]: { url: string; base64: string; sha: string } };
};

var 集: 集type = {
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
        let el = <x>i;
        let values = {};
        for (let k of el.childNodes) {
            let eel = <markdown>k;
            if (eel.id == "x-x_bar" || eel.id == "x-x_page") continue;
            values[eel.tagName] = { value: eel.value, ...((<markdown>eel).edit ? { edit: (<markdown>eel).edit } : {}) };
        }
        data.push({ id: el.id, style: el.getAttribute("style"), values, fixed: el.fixed });
    }
    for (let p of 集.数据) {
        if (p.name == 集.meta.focus_page) {
            p.data = data;
            p.p = { x: el_offset(O).x, y: el_offset(O).y, zoom };
        }
    }
    return l;
}

type data = Array<{ id: string; style: string; values: object; fixed: boolean }>;

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

function set_data(l: 集type) {
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
            } else {
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
    location.hash = `#${集.meta.UUID}`;
    document.title = get_title();
}

function render_data(inputdata: { name: string; p: { x: number; y: number; zoom: number }; data: data }) {
    O.innerHTML = "";
    z.z = [];
    let t = "";
    for (const x of inputdata.data) {
        try {
            if (!集.链接[x.id]) 集.链接[x.id] = { 值: 1, 目标: [] };
            let eels = "";
            for (let i in x.values) {
                eels += `<${i} value='${x.values[i].value}'`;
                if (x.values[i].edit) eels += `edit = "cr"`;
                eels += `></${i}>`;
            }
            t += `<x-x id="${x.id}" fixed="${x.fixed}" style="${x.style}">${eels}</x-x>`;
        } catch (e) {
            console.error(e);
        }
    }
    O.innerHTML = t;
    O.style.left = (inputdata?.p?.x || 0) + "px";
    O.style.top = (inputdata?.p?.y || 0) + "px";
    zoom_o(inputdata?.p?.zoom || 1);
    for (const el of O.children) {
        z.z.push(el as x);
    }
    z.reflash(O.children[O.children.length - 1] as x, true);
}

function json2md(obj: 集type) {
    let t = JSON.stringify(obj, (k, v) => {
        if (k == "value") {
            return ` -->\n${v}\n<!-- `;
        }
        return v;
    });
    return `<!-- ${t.replace(/\\n/g, "\n")} -->`;
}

function md2json(t: string) {
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
    let file: File;
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
        if (fileHandle.kind != "file") return;
        fileHandle.requestPermission({ mode: "readwrite" });
        file = await fileHandle.getFile();
    }
    集.meta.file_name = file.name.replace(/\.md$/, "");
    document.title = get_title();

    let reader = new FileReader();
    reader.onload = () => {
        let o = md2json(<string>reader.result) as any;
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

function set_title(t: string) {
    document.title = `${t} - xlinkote`;
}

async function write_file(text: string) {
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
var db: IDBDatabase;

request.onsuccess = (event) => {
    db = (<any>event.target).result;
    db_get();
};
request.onerror = (event) => {
    console.error(new Error((<any>event.target).error));
};
request.onupgradeneeded = (event) => {
    db = (<any>event.target).result;
    db.createObjectStore(db_store_name, { keyPath: "meta.UUID" });
};

var db_writing = false;
function db_put(obj: object) {
    if (db_writing) return;
    db_writing = true;
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.put(obj);
    r.onerror = (event) => {
        console.error(new Error((<any>event.target).error));
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
                if (!集.meta.file_name) new_d.remove();
                set_data(f);
                侧栏.classList.remove("侧栏显示");
            };
            t.onchange = () => {
                集.meta.file_name = t.value;
                data_changed();
            };
            t.value = f.meta.file_name || "";
            if (f.meta.url) t.title = f.meta.url;
            let dav = document.createElement("div");
            d.append(dav, t);
            document.getElementById("文件").append(d);
        }

        if (`#${集.meta.UUID}` != location.hash) {
            for (let f of r.result) {
                if (`#${f.meta.UUID}` == location.hash) {
                    set_data(f);
                }
            }
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

function db_load(t: string) {
    let o = JSON.parse(t);
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    for (let obj of o) {
        let r = customerObjectStore.put(obj);
        r.onerror = (event) => {
            console.error(new Error((<any>event.target).error));
        };
    }
    db_get();
}

document.getElementById("db_load").onchange = () => {
    let file = (<HTMLInputElement>document.getElementById("db_load")).files[0];
    let reader = new FileReader();
    reader.onload = () => {
        db_load(<string>reader.result);
    };
    reader.readAsText(file);
};

var undo_stack = [],
    undo_i = -1;

function undo(v: boolean) {
    if (v) {
        undo_i--;
        if (undo_i < 0) undo_i = 0;
    } else {
        undo_i++;
        if (undo_i >= undo_stack.length) undo_i = undo_stack.length - 1;
    }
    set_data(JSON.parse(undo_stack[undo_i]));
}

async function download_file(text: string) {
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
    } else {
        let a = document.createElement("a");
        let blob = new Blob([text]);
        let name = get_file_name();
        a.download = `${name}.md`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    }
}

var save_timeout = NaN,
    save_dt = 200;
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

function add_画布(xname?: string) {
    get_data(); /* 保存之前的画布 */
    let name = xname || `画布${uuid().slice(0, 7)}`;
    集.数据.push({ name, p: { x: 0, y: 0, zoom: 1 }, data: [] });
    集.meta.focus_page = name;
    set_data(集);
    data_changed();
}

var focus_md: markdown = null;

// 拖放
function put_datatransfer(data: DataTransfer, x: number, y: number) {
    if (data.files.length != 0) {
        for (let f of data.files) {
            let type = f.type.split("/")[0];
            if (type == "text") {
                let reader = new FileReader();
                reader.readAsText(f);
                reader.onload = () => {
                    add_file(f.type, reader.result as string, null, x, y);
                };
            } else {
                let reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = () => {
                    add_file(f.type, null, reader.result as string, x, y);
                };
            }
        }
    } else {
        let html = data.getData("text/html");
        add_file("text/html", html, null, x, y);
    }
}

画布.ondragover = (e) => {
    if (e.target != 画布) return;
    e.preventDefault();
};
画布.ondrop = (e) => {
    if (e.target != 画布) return;
    e.preventDefault();
    put_datatransfer(e.dataTransfer, e.offsetX - el_offset(O).x, e.offsetY - el_offset(O).y);
};

// 添加文件或文字
function add_file(type: string, text: string, data: string, x: number, y: number) {
    let types = type.split("/");
    let xel = <x>document.createElement("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    if (types[0] == "text") {
        let md = <markdown>document.createElement("x-md");
        xel.append(md);
        if (type == "text/html") {
            let turndownService = new window.TurndownService({ headingStyle: "atx" });
            md.value = turndownService.turndown(text);
        } else {
            md.value = text;
        }
    } else if (types[0] == "image" || types[0] == "video") {
        let id = put_assets("", data);
        let file = <file>document.createElement("x-file");
        xel.append(file);
        file.value = JSON.stringify({ r: true, id });
    }
}

document.addEventListener("message", (msg: any) => {
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
                let j: 集type;
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
                } else {
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
function put_assets(url: string, base64: string) {
    let id = uuid().slice(0, 7);
    let sha = "";
    if (base64) sha = window.CryptoJS.SHA256(base64).toString();
    集.assets[id] = { url, base64, sha };
    return id;
}

// 画板
var focus_draw_el = null;
画布.onpointerdown = (e) => {
    let el = e.target as HTMLElement;
    if (el.parentElement.tagName == "X-DRAW") {
        if (模式 == "绘制") {
            (<draw>el.parentElement)?.draw(e);
            z.focus(el.parentElement.parentElement as x);
            (<HTMLInputElement>document.getElementById("penc")).value = (<draw>focus_draw_el).pen.color;
        }
    }
};

画布.onpointermove = (e) => {
    if (focus_draw_el) {
        (<draw>focus_draw_el).draw(e);
    }
};
画布.onpointerup = (e) => {
    if (focus_draw_el) {
        (<draw>focus_draw_el).draw(e);
        (<draw>focus_draw_el).points = [{ x: NaN, y: NaN, p: NaN }];
        (<draw>focus_draw_el).complete();
        data_changed();
    }
};

(<HTMLInputElement>document.getElementById("penc")).onchange = () => {
    (<draw>focus_draw_el).pen.color = (<HTMLInputElement>document.getElementById("penc")).value;
};

document.getElementById("橡皮").onclick = () => {
    if ((<draw>focus_draw_el).pen.gco == "source-over") {
        (<draw>focus_draw_el).pen.gco = "destination-out";
    } else {
        (<draw>focus_draw_el).pen.gco = "source-over";
    }
};

document.getElementById("录音").onclick = () => {
    let x = -el_offset(O).x + 8,
        y = -el_offset(O).y + 8;
    let xel = <x>document.createElement("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    let r = document.createElement("x-record");
    xel.append(r);
    set_模式("浏览");
};

window.onbeforeunload = () => {
    if (!集.meta.file_name) return true;
};

// 导出
function to_canvas() {
    for (let m of document.querySelectorAll("mjx-assistive-mml")) {
        m.remove();
    }
    window.html2canvas(画布).then(function (canvas: HTMLCanvasElement) {
        let url = canvas.toDataURL();
        let a = document.createElement("a");
        let name = get_file_name();
        a.download = `${name}.png`;
        a.href = url;
        a.click();
    });
}

class 图层 {
    z: Array<x> = [];

    聚焦元素 = <x>null;

    reflash(el: x, nosave?: boolean) {
        document.getElementById("层").innerHTML = "";
        for (let i in this.z) {
            this.z[i].style.zIndex = i;

            let div = document.createElement("div");
            let r = document.createElement("input");
            r.type = "radio";
            r.name = "层";
            r.value = i;
            if (this.z[i] == el) r.checked = true;
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
                selected_el.push(<x>this.z[i]);
                el_style.value = this.z[i].getAttribute("style");
            };
            document.getElementById("层").insertBefore(div, document.getElementById("层").firstChild);
        }
        document.documentElement.style.setProperty("--zest-index", String(this.z.length - 1));

        if (!nosave) data_changed();
    }

    push(el: x) {
        el.id = el.id === "undefined" || !el.id ? `${uuid().slice(0, 7)}` : el.id;
        O.append(el);
        this.z.push(el);
        this.reflash(el);
        if (!集.链接) 集.链接 = {};
        集.链接[el.id] = { 值: 1, 目标: [] };
    }

    remove(el: x) {
        for (let i in this.z) {
            if (this.z[i] == el) {
                this.z.splice(Number(i), 1);
                this.reflash(el);
                return;
            }
        }
    }

    focus(el: x) {
        this.聚焦元素 = el;
        for (let l of document.getElementById("层").querySelectorAll("div")) {
            if (el.id == (<HTMLInputElement>l.querySelector("input[type='text']")).value)
                (<HTMLInputElement>l.querySelector("input[type='radio']")).checked = true;
        }
        if (模式 == "浏览")
            if (el.children[0].tagName == "X-MD") {
                focus_md = el.children[0] as markdown;
                focus_draw_el = null;
            } else if (el.children?.[1]?.tagName == "X-MD") {
                focus_md = el.children[1] as markdown;
                focus_draw_el = null;
            } else {
                focus_md = null;
            }
        if (模式 == "绘制")
            if (el.children[0].tagName == "X-DRAW") {
                focus_draw_el = el.children[0] as draw;
                focus_md = null;
            } else if (el.children?.[1]?.tagName == "X-DRAW") {
                focus_draw_el = el.children[1] as draw;
                focus_md = null;
            } else {
                focus_draw_el = null;
            }
    }

    get(el: x) {
        return this.z.indexOf(el);
    }

    底层(el: x) {
        this.remove(el);
        this.z.unshift(el);
        this.reflash(el);
    }
    下一层(el: x) {
        let i = this.get(el);
        if (i == 0) return;
        this.remove(el);
        this.z.splice(i - 1, 0, el);
        this.reflash(el);
    }
    上一层(el: x) {
        let i = this.get(el);
        if (i == this.z.length - 1) return;
        this.remove(el);
        this.z.splice(i + 1, 0, el);
        this.reflash(el);
    }
    顶层(el: x) {
        this.remove(el);
        this.z.push(el);
        this.reflash(el);
    }
}

var z = new 图层();

var el_style = <HTMLTextAreaElement>document.getElementById("el_style");

el_style.oninput = () => {
    z.聚焦元素.setAttribute("style", el_style.value);
};

if (!location.hash) set_data(集);

// 云

var client = window.WebDAV.createClient(store.webdav.网址, {
    username: store.webdav.用户名,
    password: store.webdav.密码,
});

async function get_all_xln(r) {
    let dav_files = (await client.getDirectoryContents("/", { deep: true, glob: "**.xln" })) as any[];
    let rp = await client.getDirectoryContents("/");
    let 删除路径 = "";
    let rplf = rp[rp.length - 1];
    let b = new RegExp(`${rplf.basename}$`);
    删除路径 = rplf.filename.replace(b, "");
    for (let f of r) {
        let dav: HTMLElement;
        for (let el of document.getElementById("文件").querySelectorAll("input")) {
            if (el.value == f.meta.file_name) {
                dav = el.previousElementSibling as HTMLElement;
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
        let new_t = document.getElementById("文件").querySelector("div:nth-child(2)") as HTMLElement;
        let d = document.createElement("div");
        let t = rename_el();
        t.value = fi.basename.replace(/\.xln$/, "") || "";
        t.title = "/" + fi.filename.replace(new RegExp(`^${删除路径}`), "");
        let dav = document.createElement("div");
        dav.innerHTML = `<img src="./assets/icons/cloud.svg" class="icon">`;
        d.append(dav, t);
        document.getElementById("文件").append(d);
        t.onclick = dav.onclick = () => {
            if (!集.meta.file_name) new_t.remove();
            get_xln_value("/" + fi.filename.replace(new RegExp(`^${删除路径}`), ""));
            document.title = get_title();
            侧栏.classList.remove("侧栏显示");
        };
    }
}

var now_dav_data = "";

async function get_xln_value(path: string) {
    let str = await client.getFileContents(path, { format: "text" });
    let o: any;
    try {
        o = JSON.parse(<string>str);
    } catch (e) {
        if (store.webdav.加密密钥) {
            let bytes = window.CryptoJS.AES.decrypt(str, store.webdav.加密密钥);
            str = bytes.toString(window.CryptoJS.enc.Utf8);
            if (!str) {
                let password = prompt("密钥错误，请输入其他密钥");
                let bytes = window.CryptoJS.AES.decrypt(str, password);
                str = bytes.toString(window.CryptoJS.enc.Utf8);
            }
            str = 解压(str);
            o = JSON.parse(<string>str);
        }
    }
    now_dav_data = str;
    set_data(o);
    data_changed();
    if (fileHandle) fileHandle = null;
    集.meta.url = path;
}

async function put_xln_value() {
    let path = 集.meta.url;
    if (!path) {
        let n = window.prompt("上传的文件名", get_file_name());
        if (!n) return;
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
    if (v) put_toast("文件上传成功");
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

function 压缩(t: string): string {
    let c = window.pako.deflate(t);
    let res = "";
    let chunk = 8 * 1024;
    let i: number;
    for (i = 0; i < c.length / chunk; i++) {
        res += String.fromCharCode.apply(null, c.slice(i * chunk, (i + 1) * chunk));
    }
    res += String.fromCharCode.apply(null, c.slice(i * chunk));
    return res;
}

function 解压(t: string): string {
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
function search(s: string, type: "str" | "regex") {
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
                let r: RegExp;
                try {
                    r = eval("/" + s + "/g");
                } catch (error) {
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

    function s_i(t: string, st: string) {
        let l = [];
        if (t == "") return l;
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

var search_el = document.getElementById("search") as HTMLInputElement;
var search_r = document.getElementById("搜索结果");
search_el.oninput = search_el.onfocus = () => {
    let l = search(search_el.value, "str");
    console.log(l);
    show_search_l(l);

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
                    let el = <HTMLTextAreaElement>i.el;
                    let x = el.parentElement.parentElement.offsetLeft,
                        y = el.parentElement.parentElement.offsetTop;
                    O.style.left = -x + "px";
                    O.style.top = -y + "px";
                    show_search_l([]);
                };
            }
        }
    }
}

// MD

var md = window
    .markdownit({
        html: true,
        linkify: true,
        typographer: true,
    })
    .use(window.markdownitTaskLists, { enabled: true })
    .use(window.markdownitContainer, "spoiler", {
        validate: function (params) {
            return params.trim().match(/^(.*)$/);
        },

        render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^(.*)$/);

            if (tokens[idx].nesting === 1) {
                // opening tag
                return "<details><summary>" + md.render(m[1]) + "</summary>\n";
            } else {
                // closing tag
                return "</details>\n";
            }
        },
        marker: "+",
    })
    .use(window.markdownitEmoji);

var defaultRender =
    md.renderer.rules.heading_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex("id");
    if (aIndex < 0) {
        tokens[idx].attrPush(["id", tokens[idx + 1].content]);
    }
    return defaultRender(tokens, idx, options, env, self);
};
md.renderer.rules.strong_open = function (tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex("id");
    if (aIndex < 0) {
        tokens[idx].attrPush(["id", tokens[idx + 1].content]);
    }
    return defaultRender(tokens, idx, options, env, self);
};
md.renderer.rules.em_open = function (tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex("id");
    if (aIndex < 0) {
        tokens[idx].attrPush(["id", tokens[idx + 1].content]);
    }
    return defaultRender(tokens, idx, options, env, self);
};
let f = md.renderer.rules.fence;
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "mermaid") {
        let o = "";
        window.mermaid.mermaidAPI.render("mgraph" + String(new Date().getTime()), tokens[idx].content, (svg) => {
            o = svg;
        });
        return o;
    }
    return f(tokens, idx, options, env, self);
};
md.renderer.rules.image = function (tokens, idx, options, env, self) {
    let value = tokens[idx].attrGet("src");
    let b = 集.assets?.[value]?.base64;
    if (b) tokens[idx].attrSet("src", b);
    return defaultRender(tokens, idx, options, env, self);
};

var will_load_math = false;
var mathjax_cache = {};
function get_svg(c: string) {
    let html: string,
        ca = mathjax_cache?.[c];
    if (ca) {
        html = ca[0];
        mathjax_cache[c][1] = 2;
    } else {
        if (window.MathJax.tex2svg) {
            html = window.MathJax.tex2svg(c).outerHTML;
            mathjax_cache[c] = [window.MathJax.tex2svg(c).outerHTML, 1];
        } else {
            html = "<mjx-container></mjx-container>";
            if (!will_load_math) {
                let s = document.createElement("script");
                s.src = "./node/mathjax/es5/tex-svg.js";
                will_load_math = true;
                s.onload = reload;
                document.body.append(s);
                s.onerror = () => {
                    let s = document.createElement("script");
                    s.src = "./node_modules/mathjax/es5/tex-svg.js";
                    document.body.append(s);
                    s.onload = reload;
                };
            }
            function reload() {
                console.log("加载数学组件完成");
                function l() {
                    画布.querySelectorAll("x-md").forEach((pel) => {
                        if (pel.querySelector("mjx-container")) {
                            (<markdown>pel).reload();
                        }
                    });
                }
                setTimeout(l, 600);
                setTimeout(l, 200);
                l();
            }
        }
    }
    return html;
}
setInterval(() => {
    for (let i in mathjax_cache) {
        if (mathjax_cache[i][1] == 1) {
            delete mathjax_cache[i];
        }
    }
}, 10000);
setInterval(() => {
    mathjax_cache = {};
}, 100000);

md.renderer.rules["mathjax_inline"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_inline = (tokens, idx, options, env, self) => {
    return get_svg(tokens[idx].content).replace(`display="true"`, "");
};
md.inline.ruler.after("escape", "mathjax_inline", function (state, silent) {
    var found,
        content,
        token,
        max = state.posMax,
        start = state.pos;

    if (state.src.charCodeAt(start) !== 36 /* $ */) {
        return false;
    }
    if (silent) {
        return false;
    } // don't run any pairs in validation mode
    if (start + 2 >= max) {
        return false;
    }

    state.pos = start + 1;

    while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === 36 /* $ */) {
            found = true;
            break;
        }

        state.md.inline.skipToken(state);
    }

    if (!found || start + 1 === state.pos) {
        state.pos = start;
        return false;
    }

    content = state.src.slice(start + 1, state.pos);

    // found!
    state.posMax = state.pos;
    state.pos = start + 1;

    token = state.push("mathjax_open", "span", 1);
    token.markup = "$";
    token = state.push("mathjax_inline", "", 0);
    token.content = content;
    token = state.push("mathjax_close", "span", -1);
    token.markup = "$";

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
});

md.renderer.rules["mathjax_block"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_block = (tokens, idx, options, env, self) => {
    return get_svg(`\\displaylines{${tokens[idx].content}}`);
};

function math_b(state, startLine, endLine, silent) {
    var nextLine,
        token,
        lineText,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
    }

    if (!state.md.options.html) {
        return false;
    }

    if (state.src.charCodeAt(pos) !== 36 /* $ */) {
        return false;
    }

    lineText = state.src.slice(pos, max);

    if (!lineText.includes("$$")) return false;

    if (silent) {
        return true;
    }

    nextLine = startLine + 1;

    if (lineText.match(/\$\$/g).length == 1) {
        for (; nextLine < endLine; nextLine++) {
            if (state.sCount[nextLine] < state.blkIndent) {
                break;
            }

            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            lineText = state.src.slice(pos, max);

            if (lineText.includes("$$")) {
                if (lineText.length !== 0) {
                    nextLine++;
                }
                break;
            }
        }
    }

    state.line = nextLine;

    token = state.push("mathjax_block", "mjx-container", 0);
    token.map = [startLine, nextLine];
    let t = state.getLines(startLine, nextLine, state.blkIndent, true).trim();

    token.content = t.slice(2, t.length - 2);

    return true;
}
md.block.ruler.after("blockquote", "mathjax_block", math_b, {
    alt: ["paragraph", "reference", "blockquote", "list"],
});

// https://github.com/jGleitz/markdown-it-kbd
const MARKER_OPEN = "[";
const MARKER_CLOSE = "]";
const ESCAPE_CHARACTER = "\\";
const TAG = "x-link";
function tlink(state, silent: boolean) {
    if (silent) {
        return false;
    }

    const start = state.pos;
    const max = state.posMax;
    let now_char = state.src.charAt(start);
    let next_char = state.src.charAt(start + 1);

    // We are looking for two times the open symbol.
    if (now_char !== MARKER_OPEN || next_char !== MARKER_OPEN) {
        return false;
    }

    // Find the end sequence
    let openTagCount = 1;
    let end = -1;
    let skipNext = false;
    let id_l = 0;
    let id = "";
    for (let i = start + 1; i < max && end === -1; i++) {
        now_char = next_char;
        next_char = state.src.charAt(i + 1);
        if (skipNext) {
            skipNext = false;
            continue;
        }
        if (now_char === MARKER_CLOSE && next_char === MARKER_CLOSE) {
            openTagCount -= 1;
            if (openTagCount == 0) {
                // Found the end!
                end = i;
            }
            // Skip second marker char, it is already counted.
            skipNext = true;
        } else if (now_char === MARKER_OPEN && next_char === MARKER_OPEN) {
            openTagCount += 1;
            // Skip second marker char, it is already counted.
            skipNext = true;
        } else if (now_char === "\n") {
            // Found end of line before the end sequence. Thus, ignore our start sequence!
            return false;
        } else if (now_char === ESCAPE_CHARACTER) {
            skipNext = true;
        } else if (now_char == "#") {
            end = i;
            id_l = state.src.indexOf("]", i) - i;
            id = state.src.slice(i + 1, state.src.indexOf("]", i));
        }
    }

    // Input ended before closing sequence.
    if (end === -1) {
        return false;
    }

    // start tag
    let t = state.push("x-link_open", TAG, 1);
    // parse inner
    state.pos += 2;
    state.posMax = end;
    state.md.inline.tokenize(state);
    t.attrPush(["id", id || state.tokens[state.tokens.length - 1].content]);
    state.pos = end + id_l + 2;
    state.posMax = max;
    // end tag
    state.push("x-link_close", TAG, -1);

    return true;
}

md.inline.ruler.before("link", "x-link", tlink);

// template
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

    drag = () => {
        let text = this.text;
        for (let i of this.index) {
            let el = this.h.querySelector(`:scope > ${i[0]}`) as HTMLElement;
            el.style.position = "relative";
            let handle = el.querySelector(".handle") as HTMLDivElement;
            if (!handle) {
                handle = document.createElement("div");
                handle.innerHTML = `<svg width="16" height="16">
            <path d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
          </svg>`;
                handle.classList.add("handle");
                handle.onmousedown = () => {
                    el.draggable = true;
                };
                el.insertAdjacentElement("afterbegin", handle);
            }
            el.ondragstart = (e) => {
                e.stopPropagation();
                let t = text.value.split("\n").slice(i[2][0], i[2][1]).join("\n");
                console.log(t);
                e.dataTransfer.setData("text/markdown", t);
                console.log(e.dataTransfer);
                if (!e.ctrlKey) {
                    let l = text.value.split("\n");
                    l.splice(i[2][0], i[2][1] - i[2][0]);
                    text.value = l.join("\n");
                    text.dispatchEvent(new Event("input"));
                }
            };
            el.ondragend = () => {
                el.draggable = false;
            };

            el.ondragover = (e) => {
                e.preventDefault();
            };
            el.ondragenter = (e) => {
                e.stopPropagation();
                if (e.offsetY < el.offsetHeight / 2) {
                    el.classList.add("drag_top");
                } else {
                    el.classList.add("drag_bottom");
                }
            };
            el.ondragleave = () => {
                el.classList.remove("drag_top");
                el.classList.remove("drag_bottom");
            };
            el.ondrop = (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(e);
                let t = e.dataTransfer.getData("text/markdown");
                let l = text.value.split("\n");
                if (e.offsetY < el.offsetHeight / 2) {
                    if (l[i[2][0]] == "") t = "\n" + t + "\n";
                    console.log("0" + l[i[2][0]]);
                    l.splice(i[2][0], 0, t);
                } else {
                    if (l[i[2][1]] == "") t = "\n" + t + "\n";
                    console.log("1" + l[i[2][1]]);
                    l.splice(i[2][1], 0, t);
                }
                text.value = l.join("\n");
                text.dispatchEvent(new Event("input"));
            };
        }
    };

    connectedCallback() {
        var s = document.createElement("div");
        s.id = "h";
        this.h = s;
        var text = document.createElement("textarea");
        this.text = text;
        this.append(s);
        this.append(text);

        if (this.getAttribute("value")) {
            let v = this.getAttribute("value");
            this._value = (<HTMLTextAreaElement>this.childNodes[1]).value = v;
            this.querySelector("div:nth-child(1)").innerHTML = md.render(v);
            var l = md.parse(v, {
                references: {},
            });
            this.index = line_el(l);
            this.drag();
        }

        var l = md.parse(text.value, {
            references: {},
        });
        this.index = line_el(l);

        this.drag();
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
                this.drag();
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

                if (e.ctrlKey) {
                    let xel = <x>document.createElement("x-x");
                    xel.style.left = this.parentElement.offsetLeft + "px";
                    xel.style.top = this.parentElement.offsetTop + this.parentElement.offsetHeight + "px";
                    xel.style.width = this.parentElement.offsetWidth + "px";
                    z.push(xel);
                    var md = document.createElement("x-md");
                    xel.append(md);
                    (<markdown>md).edit = true;
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
                let x = el_offset2(el, this.h).x,
                    y = el_offset2(el, this.h).y + el.offsetHeight;
                O.style.left = el_offset(O).x - (x - text.offsetLeft) + "px";
                O.style.top = el_offset(O).y - (y - text.offsetTop) + "px";
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
            text.style.left = el_offset2(el, this.h).x + "px";
            text.style.top = el_offset2(el, this.h).y + el.offsetHeight + "px";
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
        this.drag();
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
        this.drag();
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
            this.tmp_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.append(this.tmp_svg);
            this.main_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.append(this.main_svg);
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
        let tr = this.main_svg.children[0].getAttribute("transform");
        tr = tr.replace("translate(", "").replace(")", "");
        this.ox = Number(tr.split(",")[0]);
        this.oy = Number(tr.split(",")[1]);
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
