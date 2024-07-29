import x_y_svg from "../../assets/icons/x_y.svg";
import y_svg from "../../assets/icons/y.svg";
import x_svg from "../../assets/icons/x.svg";
import cloud_up_svg from "../../assets/icons/cloud_up.svg";
import cloud_down from "../../assets/icons/cloud_down.svg";
import cloud from "../../assets/icons/cloud.svg";
import ding_svg from "../../assets/icons/ding.svg";
import close_svg from "../../assets/icons/close.svg";
import file_svg from "../../assets/icons/file.svg";
import handle_svg from "../../assets/icons/handle.svg";
import ul_show_svg from "../../assets/icons/ul_show.svg";
import add_svg from "../../assets/icons/add.svg";
import minus_svg from "../../assets/icons/minus.svg";
import remove_svg from "../../assets/icons/remove.svg";
import update_svg from "../../assets/icons/update.svg";
import edit_svg from "../../assets/icons/edit.svg";
import ocr_svg from "../../assets/icons/ocr.svg";
import play_svg from "../../assets/icons/play.svg";
import down_svg from "../../assets/icons/down.svg";
import binding_svg from "../../assets/icons/binding_file.svg";
import pause_svg from "../../assets/icons/pause.svg";
import yl0_svg from "../../assets/icons/yl0.svg";
import yl1_svg from "../../assets/icons/yl1.svg";
import yl2_svg from "../../assets/icons/yl2.svg";
import asr_svg from "../../assets/icons/asr.svg";
import right_svg from "../../assets/icons/right.svg";
import left_svg from "../../assets/icons/left.svg";
import copy_svg from "../../assets/icons/copy.svg";
import save_svg from "../../assets/icons/save.svg";
import lock_svg from "../../assets/icons/lock.svg";
import unlock_svg from "../../assets/icons/unlock.svg";
import reload_svg from "../../assets/icons/reload.svg";
import arrow_markers_svg from "../../assets/icons/arrow_markers.svg?raw";

interface x_tag_map {
    "x-x": x;
    "x-md": markdown;
    "x-sinppet": symbols;
    "x-pro": progress;
    "x-progress": progress2;
    "x-file": file;
    "x-pdf": pdf_viewer;
    "x-draw": draw;
    "x-color": xcolor;
    "x-draw-width": xdraw_width;
    "x-link": xlink;
    "x-link-value": link_value;
    "x-record": record;
    "x-audio": audio;
    "x-three": three;
    "x-img": img;
    "x-ggb": ggb;
    "x-calendar": calendar;
    "time-b": time_s;
    "x-time": time;
    "x-link-arrow": link_arrow;
    "x-link-add": add_link;
    "x-graph": graph;
}
function createEl<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
function createEl<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K): HTMLElementDeprecatedTagNameMap[K];
function createEl<K extends keyof x_tag_map>(tagName: K): x_tag_map[K];
function createEl(tagName: string): HTMLElement;
function createEl(tagname: string) {
    return document.createElement(tagname);
}
function elFromId(id: string) {
    return document.getElementById(id);
}

function is_input_el(el: HTMLElement) {
    return el.tagName == "INPUT" || el.tagName == "TEXTAREA" || el.isContentEditable;
}

// el
const upload_file = elFromId("upload") as HTMLInputElement;

var 设置_el = elFromId("设置");
var 侧栏 = elFromId("侧栏");
const 侧栏_tabs = document.querySelector("#侧栏 > #tabs");
const 侧栏_items = document.querySelector("#侧栏 > #items");
const toast = elFromId("toast");
const tips = elFromId("tips");

var nav = elFromId("nav");

const 画布 = elFromId("画布");
const 画布s = elFromId("画布们");
var O = elFromId("O");

const select_con = elFromId("选择");
const select_el = elFromId("选择框");

const x_bar_con = elFromId("控制");

const link_value_bar = createEl("x-link-value");
画布.append(link_value_bar);

const md_text = createEl("textarea");
画布.append(md_text);
const md_text2 = createEl("input");
md_text2.style.display = "none";
画布.append(md_text2);

const breadcrumbs_el = elFromId("breadcrumbs");

const 临时中转站 = elFromId("临时");

const 归位 = elFromId("归位");

const zoom_pel = elFromId("缩放");
const zoom_el = elFromId("zoom") as HTMLInputElement;
const zoom_list = elFromId("zooms");

const mini_map_el = elFromId("mini_map") as HTMLCanvasElement;

const 文件_el = elFromId("文件");

const assets_el = elFromId("资源");

const select_type_el = elFromId("select_type");
const select_rect_el = elFromId("select_rect");
const select_free_el = elFromId("select_free");

const pen_pel = elFromId("draw_bar");
const color_yl = elFromId("color_yl");
const penc_el = <xcolor>elFromId("penc").querySelector("x-color");
const pen_el = elFromId("笔").querySelector("div");
const pen_width_el = elFromId("笔").querySelector("x-draw-width") as xdraw_width;
const pen_zoom_el = elFromId("缩放跟随") as HTMLInputElement;
const pen_type_el = elFromId("笔刷");

const 图层_el = elFromId("层");

var el_style = elFromId("el_style");
var switch_global_style = elFromId("switch_global_style");
var style_list = elFromId("style_com_list");

var xywh_x_el = <HTMLInputElement>elFromId("xywh_x");
var xywh_y_el = <HTMLInputElement>elFromId("xywh_y");
var xywh_w_el = <HTMLInputElement>elFromId("xywh_w");
var xywh_h_el = <HTMLInputElement>elFromId("xywh_h");

const value_el = elFromId("值");

const about = elFromId("about");
const version_el = <HTMLElement>about.querySelector("#version");

var search_el = elFromId("search") as HTMLInputElement;
var search_r = elFromId("搜索结果");
var search_more = elFromId("更多结果");
var search_pel = elFromId("搜索");

const view_el = elFromId("viewer");
const view_children_el = elFromId("viewer_children");
const view_highlight_el = elFromId("viewer_highlight");

const ink_el = elFromId("ink") as HTMLCanvasElement;
let ink_cxt = ink_el.getContext("2d");
let ink_points: [number[], number[]][] = [];

const ys_list = elFromId("ys_list");
const ys_add = elFromId("ys_add");

const menu_el = elFromId("菜单");
const menu_new = elFromId("菜单_新建");

const css_style_el = elFromId("css");

function icon(src: string) {
    return `<img src="${src}" class="icon">`;
}

function xprompt(msg: string, d?: string) {
    let bg = createEl("div");
    let div = createEl("div");
    let text = createEl("span");
    let input = createEl("input");
    input.value = d;
    text.innerText = msg;
    let ok = createEl("div");
    let cancel = createEl("div");
    ok.innerText = "确定";
    cancel.innerText = "取消";
    div.append(text, input, cancel, ok);
    bg.append(div);
    bg.classList.add("dialog", "prompt");
    document.body.append(bg);
    input.focus();
    input.select();
    return new Promise((re: (value: string | null) => void) => {
        ok.onclick = () => {
            re(input.value);
            bg.remove();
        };
        cancel.onclick = () => {
            re(null);
            bg.remove();
        };
        input.onkeydown = (e) => {
            if (e.key == "Enter") {
                re(input.value);
                bg.remove();
            }
            if (e.key == "Escape") {
                re(null);
                bg.remove();
            }
        };
    });
}

function xconfirm(msg: string) {
    let bg = createEl("div");
    let div = createEl("div");
    let text = createEl("span");
    text.innerText = msg;
    let ok = createEl("div");
    let cancel = createEl("div");
    ok.innerText = "确定";
    cancel.innerText = "取消";
    div.append(text, cancel, ok);
    bg.append(div);
    bg.classList.add("dialog", "confirm");
    document.body.append(bg);
    return new Promise((re: (value: boolean) => void) => {
        ok.onclick = () => {
            re(true);
            bg.remove();
        };
        cancel.onclick = () => {
            re(false);
            bg.remove();
        };
    });
}

/**
 * 裁切值使之限定在一个范围
 * @param value 值
 * @param min 最小值
 * @param max 最大值
 * @returns 裁切后的值
 */
function clip(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}

// 获取设置
type setting = typeof default_setting;
var store: setting = JSON5.parse(localStorage.getItem("config"));
const default_setting = {
    webdav: { 网址: "", 用户名: "", 密码: "", 自动上传: "0", 加密密钥: "" },
    ink: {
        网址: "https://www.google.com/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8",
        语言: "zh_CN",
        延时: "0.6",
    },
    sort: { type: "change_time", reverse: false } as sort_type,
    ai: { key: "" },
    backup: { 频率: "0" },
};
if (!store) {
    localStorage.setItem("config", JSON.stringify(default_setting));
    store = default_setting;
} else {
    for (let i in default_setting) {
        if (!store[i]) {
            store[i] = default_setting[i];
        }
        for (let j in default_setting[i]) {
            if (store[i][j] === undefined) {
                store[i][j] = default_setting[i][j];
            }
        }
    }
    localStorage.setItem("config", JSON.stringify(store));
}

function uuid() {
    if (crypto.randomUUID) {
        return crypto.randomUUID();
    } else {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

/** 七位uuid */
function uuid_id() {
    return uuid().slice(0, 8);
}

if ("serviceWorker" in navigator) {
    if (import.meta.env.PROD) {
        navigator.serviceWorker.register("/sw.js");
    }
}

import pack from "../../package.json?raw";
const packagejson = JSON5.parse(pack);

// 工具栏

elFromId("重新加载").onclick = () => {
    location.reload();
};

elFromId("绑定文件").onclick = () => {
    upload_file.click();
};

upload_file.onchange = file_load;

elFromId("导出文件").onclick = () => {
    download_file();
};

elFromId("从云加载").onclick = async () => {
    if (集.meta.url) {
        let o = await get_xln_value(集.meta.url);
        set_data(o);
    }
};

const save_b = elFromId("保存");
save_b.onclick = save_file;
function set_save_icon() {
    if (db_can_save) {
        save_b.innerHTML = icon(cloud_up_svg);
        save_b.title = "上传到云";
    } else {
        save_b.innerHTML = icon(save_svg);
        save_b.title = "点击保存";
    }
}

elFromId("加载数据库").onclick = () => {
    elFromId("db_load").click();
};
elFromId("下载数据库").onclick = () => db_download;

elFromId("新建集").onclick = () => {
    window.open(location.origin);
};

elFromId("新建画布").onclick = () => {
    add_画布();
    data_changed();
};

elFromId("导入设置").onclick = () => {
    let file = createEl("input");
    file.type = "file";
    file.click();
    file.oninput = () => {
        let reader = new FileReader();
        reader.onload = () => {
            localStorage.setItem("config", <string>reader.result);
            show_setting();
        };
        reader.readAsText(file.files[0]);
    };
};
elFromId("导出设置").onclick = () => {
    let a = createEl("a");
    let blob = new Blob([localStorage.getItem("config")]);
    a.download = `xlinkote_config.json`;
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(String(blob));
};
elFromId("放弃设置").onclick = () => {
    show_setting();
};
elFromId("偏好设置").onclick = () => {
    save_setting();
};
elFromId("新建元素").onclick = () => {
    const margin = 8 / zoom;
    create_x_x(-el_offset2(O).x + margin, -el_offset2(O).y + margin);
};
elFromId("删除元素").onclick = () => {
    for (let i of selected_el) {
        z.remove(i);
    }
};

elFromId("撤销").onclick = () => {
    undo(true);
};
elFromId("重做").onclick = () => {
    undo(false);
};

elFromId("搜索操作").onclick = () => {
    show_g_search();
};

elFromId("资源tab").onclick = () => {
    assets_reflash();
};

侧栏.onclick = (e) => {
    document.querySelectorAll("#侧栏 > #tabs > div").forEach((el, i) => {
        if (el == e.target) {
            if (el.classList.contains("selected_item") && !el.classList.contains("selected_item_hide")) {
                el.classList.add("selected_item_hide");
                侧栏_items.classList.add("item_hide");
            } else {
                侧栏_tabs.querySelectorAll(".selected_item_hide").forEach((el) => {
                    el.classList.remove("selected_item_hide");
                });
                el.classList.remove("selected_item_hide");
                侧栏_items.classList.remove("item_hide");
            }
            document.querySelectorAll("#侧栏 > #items > div").forEach((iel: HTMLDivElement, j) => {
                if (i == j) {
                    iel.style.height = "100%";
                    侧栏.querySelectorAll("#tabs > .selected_item").forEach((el) => {
                        el.classList.remove("selected_item");
                    });
                    el.classList.add("selected_item");
                } else {
                    iel.style.height = "0";
                }
            });
        }
    });
};
elFromId("切换侧栏").onclick = () => {
    侧栏.classList.toggle("侧栏显示");
};
var handle_e: MouseEvent, handle_e1: MouseEvent, handle_a: number;

elFromId("handle").onpointerdown = (e) => {
    handle_e = e;
    侧栏.style.transition = "0s";
    let m = (e: MouseEvent) => {
        if (!handle_e) return;
        let dy = e.clientY - handle_e.clientY;
        if (dy < 0) dy = 0;
        侧栏.style.transform = `translateY(${dy}px)`;
        if (handle_e1) handle_a = e.clientY - handle_e1.clientY;
        handle_e1 = e;
    };
    let u = () => {
        侧栏.style.transform = ``;
        侧栏.style.transition = "";
        handle_e = null;
        handle_e1 = null;
        if (handle_a > 0) 侧栏.classList.toggle("侧栏显示");
        document.removeEventListener("pointermove", m);
        document.removeEventListener("pointerup", u);
    };
    document.addEventListener("pointermove", m);
    document.addEventListener("pointerup", u);
};

for (let el of document.querySelectorAll(".tools")) {
    for (let i of el.children) {
        for (let u of document.querySelectorAll("#nav > div > div")) {
            if (i.id && i.id == u.id) {
                let x = i as HTMLElement;
                x.style.display = "none";
            }
        }
    }
}

elFromId("底层").onclick = () => {
    z.底层(z.聚焦元素);
};
elFromId("下一层").onclick = () => {
    z.下一层(z.聚焦元素);
};
elFromId("上一层").onclick = () => {
    z.上一层(z.聚焦元素);
};
elFromId("顶层").onclick = () => {
    z.顶层(z.聚焦元素);
};

elFromId("纵向堆叠").onclick = () => {
    to_flex(selected_el, "y");
};
elFromId("横向堆叠").onclick = () => {
    to_flex(selected_el, "x");
};
elFromId("成组").onclick = () => {
    to_none_layout(selected_el);
};
elFromId("转为一行").onclick = () => {
    to_one_line(selected_el);
};
elFromId("拆分为多行").onclick = () => {
    to_more_line(selected_el);
};
elFromId("拆分组合").onclick = () => {
    out_group(selected_el);
};

elFromId("层handle").onclick = () => {
    style_list.parentElement.classList.toggle("层hide");
};

function add_tips(el: HTMLElement) {
    tips.append(el);
    el.id = uuid();
    return el.id;
}

function put_toast(t: string, time?: number) {
    if (!time) time = 1;
    toast.innerText = t;
    toast.classList.add("toast_show");
    setTimeout(() => {
        toast.classList.remove("toast_show");
    }, time * 1000);
}

// 模式切换

var 模式: "浏览" | "设计" | "绘制";

elFromId("浏览").onclick = () => {
    set_模式("浏览");
};
elFromId("设计").onclick = () => {
    set_模式("设计");
};
elFromId("绘制").onclick = () => {
    set_模式("绘制");

    add_none_layout();
};
/** 切换模式 */
function set_模式(模式x: "浏览" | "设计" | "绘制") {
    if (模式 == "绘制") {
        reflash_none_layout(O.lastElementChild as x);
    }
    模式 = 模式x;
    nav.querySelectorAll("#mode_bar > div").forEach((v) => {
        v.classList.remove("模式突出");
    });
    nav.querySelector(`#${模式x}`).classList.add("模式突出");
    画布.className = 模式x;
    switch (模式x) {
        case "浏览":
            if (<draw>focus_draw_el) {
                focus_draw_el = null;
            }

            blur_all();
            画布.style.cursor = "auto";
            document.documentElement.style.setProperty("--x-x-handle-d", "none");
            if (link_value_bar) link_value_bar.style.display = "";

            ink_el.parentElement.style.display = "";
            select_type_el.style.display = "none";
            pen_pel.style.display = "none";
            break;
        case "设计":
            if (<draw>focus_draw_el) {
                focus_draw_el = null;
            }
            document.querySelectorAll("x-md").forEach((el) => {
                (<markdown>el).edit = false;
            });
            画布.style.cursor = "crosshair";
            document.documentElement.style.setProperty("--x-x-handle-d", "block");
            if (link_value_bar) link_value_bar.style.display = "none";

            ink_reset();
            ink_el.classList.add("ink_hide");

            ink_el.parentElement.style.display = "none";
            select_type_el.style.display = "";
            pen_pel.style.display = "none";

            set_select_free_type(false);
            break;
        case "绘制":
            document.querySelectorAll("x-md").forEach((el) => {
                (<markdown>el).edit = false;
            });

            blur_all();
            画布.style.cursor = "crosshair";
            document.documentElement.style.setProperty("--x-x-handle-d", "none");
            if (link_value_bar) link_value_bar.style.display = "none";

            ink_reset();
            ink_el.classList.add("ink_hide");

            ink_el.parentElement.style.display = "none";
            select_type_el.style.display = "none";
            pen_pel.style.display = "";
            break;
    }
}
set_模式("设计");

/** 移除所有选择 */
function blur_all() {
    selected_el = [];
    select_con.innerHTML = "";
}

// markdown
function set_md_v(s: string, e: string) {
    let text = (elFromId(selections[0].id).querySelector("x-md") as markdown).text;
    let sn = text.selectionStart,
        en = text.selectionEnd;
    let select_text = text.value.slice(sn, en);
    text.setRangeText(s + select_text + e);
    text.selectionStart = sn + s.length;
    text.selectionEnd = en + s.length + e.length;
    text.dispatchEvent(new InputEvent("input"));
}

elFromId("md_b").onclick = () => {
    set_md_v("**", "**");
};
elFromId("md_i").onclick = () => {
    set_md_v("*", "*");
};
elFromId("md_s").onclick = () => {
    set_md_v("~~", "~~");
};
elFromId("md_link").onclick = () => {
    set_md_v("[]()", "");
};
elFromId("md_img").onclick = () => {
    set_md_v("~[]()", "");
};
elFromId("md_mathi").onclick = () => {
    set_md_v("$", "$");
};

var drag_block = false;

elFromId("常驻").onpointerdown = (e) => {
    console.log((<HTMLElement>e.target).id);
    let v = null;
    let el_n = "";
    if ((<HTMLElement>e.target).id && e.target != elFromId("常驻")) {
        el_n = (<HTMLElement>e.target).id;
    } else {
        el_n = "x-md";
    }
    let x = e.clientX - O.getBoundingClientRect().x,
        y = e.clientY - O.getBoundingClientRect().y;

    let xel = createX(null);
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    var md = createEl(el_n);
    xel.append(md);
    set_模式("浏览");
    if (v) (<markdown>md).value = v;
    set_模式("设计");
    free_o_rects = [{ el: xel.id, x: x / zoom, y: y / zoom }];
    free_old_point = e2p(e);
    drag_block = true;
};

// 画布

/** 画布坐标 */
type p_point = { x: number; y: number };
var o_e: MouseEvent;
var o_ab_p: p_point;
var o_rect;
var move: boolean = false;
var select_id = "";
var fxsd_el = elFromId("方向锁定");
var op = { x: NaN, y: NaN };
/**
 * - 0为全向移动
 * - 1为y
 * - 2为x
 * - 3为锁定
 */
var fxsd: 0 | 1 | 2 | 3 = 0;

function set_O_p(x: number | null, y: number | null, dx?: number | null, dy?: number | null) {
    if (dx) x = op.x + dx;
    if (dy) y = op.y + dy;
    if (x) {
        dx = x - op.x;
        link_value_bar.style.left = el_offset(link_value_bar).x + dx + "px";
        if (!search_pel.getAttribute("data-fid")) search_pel.style.left = el_offset(search_pel).x + dx + "px";
        md_text.style.left = el_offset(md_text).x + dx + "px";
        O.style.left = x + "px";
        op.x = x;
    }
    if (y) {
        dy = y - op.y;
        link_value_bar.style.top = el_offset(link_value_bar).y + dy + "px";
        if (!search_pel.getAttribute("data-fid")) search_pel.style.top = el_offset(search_pel).y + dy + "px";
        md_text.style.top = el_offset(md_text).y + dy + "px";
        O.style.top = y + "px";
        op.y = y;
    }
    render_map();
    render_select_rects();
    check_render_x();
}

fxsd_el.onclick = () => {
    let o = { 0: 1, 1: 2, 2: 3, 3: 0 };
    fxsd = o[fxsd] as 0 | 1 | 2 | 3;
    let os = { 0: x_y_svg, 1: y_svg, 2: x_svg, 3: lock_svg };
    fxsd_el.querySelector("img").src = os[fxsd];
};

/** 滚动或触摸在之上时，不改变画布，只作用于元素，使用query */
var ignore_el = [];

var free_select = false;

function set_select_free_type(b: boolean) {
    if (b) {
        select_free_el.style.display = "";
        select_rect_el.style.display = "none";
    } else {
        select_free_el.style.display = "none";
        select_rect_el.style.display = "";
    }
    free_select = b;
}

select_rect_el.onclick = () => {
    set_select_free_type(true);
};
select_free_el.onclick = () => {
    set_select_free_type(false);
};

document.onmousedown = (e) => {
    if (e.target == document.querySelector("#画布")) {
        if (e.button == 0 && !free_select) {
            if (模式 != "设计") return;
            o_e = e;
            o_ab_p = e2p(e);
            let select = createEl("div");
            select_id = select.id = `s${new Date().getTime()}`;
            elFromId("选择框").append(select);
            画布.style.userSelect = "none";
        }
    }
};

document.onmousemove = (e) => {
    mouse(e);
    if (o_e) move = true;
};
document.onmouseup = (e) => {
    mouse(e);
    if (e.button == 0 && selected_el.length == 0 && move && o_e) {
        if (模式 != "设计") return;
        if (e.shiftKey) {
            add_blank(o_ab_p, e2p(e));
        } else {
            let r = p2rect(o_ab_p, e2p(e));
            if (r.w > 8 && r.h > 8) create_x_x(r.x, r.y);
        }
    }
    o_e = null;
    move = false;
    画布.style.userSelect = "auto";
    if (select_id) elFromId(select_id).remove();
    select_id = "";
};

/** 鼠标事件处理，滚动，选择，画框创建 */
var mouse = (e: MouseEvent) => {
    render_select_rects();
    if (o_e) {
        let now_point: p_point = e2p(e);
        if (e.buttons == 2) {
            let x = o_rect.x + (fxsd == 0 || fxsd == 2 ? e.clientX - o_e.clientX : 0),
                y = o_rect.y + (fxsd == 0 || fxsd == 1 ? e.clientY - o_e.clientY : 0);
            set_O_p(x, y);
        } else if (e.button == 0) {
            if (select_id) {
                selected_el = [];
                render_select_rects();
                let rect = p2rect(o_ab_p, now_point);
                let select = <HTMLDivElement>elFromId(select_id);
                select.id = select_id;
                select.style.left = (rect.x + el_offset2(O, select.parentElement).x) * zoom + "px";
                select.style.top = (rect.y + el_offset2(O, select.parentElement).y) * zoom + "px";
                select.style.width = rect.w * zoom + "px";
                select.style.height = rect.h * zoom + "px";
                if (!e.shiftKey) select_x_x(rect);
            }
        }
    }
};

let select_points: [number, number][] = [];
document.addEventListener("mousedown", (e) => {
    if (e.target == document.querySelector("#画布")) {
        if (e.button == 0 && free_select) {
            if (模式 != "设计") return;
            let p = e2p(e);
            select_points.push([p.x, p.y]);
            let can = createEl("canvas");
            select_el.append(can);
            画布.style.userSelect = "none";
        }
    }
});

document.addEventListener("mousemove", (e) => {
    mouse2(e);
});
document.addEventListener("mouseup", (e) => {
    mouse2(e);
    if (select_points.length) {
        select_points = [];
        select_el.innerHTML = "";
        画布.style.userSelect = "auto";
    }
});

var mouse2 = (e: MouseEvent) => {
    if (select_points.length) {
        let p = e2p(e);
        select_points.push([p.x, p.y]);
        select_x_x2(select_points);

        let c = select_el.querySelector("canvas");
        let px = el_offset2(O, select_el).x;
        let py = el_offset2(O, select_el).y;
        let z = 2;
        let zz = zoom * z;
        c.width = 画布.offsetWidth * z;
        c.height = 画布.offsetHeight * z;
        let ctx = c.getContext("2d");
        if (select_points.length > 0) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo((select_points[0][0] + px) * zz, (select_points[0][1] + py) * zz);
            for (let i of select_points) {
                ctx.lineTo((i[0] + px) * zz, (i[1] + py) * zz);
                ctx.moveTo((i[0] + px) * zz, (i[1] + py) * zz);
            }
            ctx.lineTo((select_points[0][0] + px) * zz, (select_points[0][1] + py) * zz);
            ctx.closePath();
            ctx.stroke();
        }
    }
};

var o_touch_e: TouchEvent;
var o_touch_e_l: { e: TouchEvent; t: number }[] = [];
var o_touch_zoom_e: TouchEvent;
var o_zoom = NaN;
画布.ontouchstart = (e) => {
    if (模式 == "绘制") return;
    let el = <HTMLElement>e.changedTouches[0].target;
    if (模式 == "设计" && el != 画布) return;
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
        O.style.transition = "";
        o_touch_e = o_touch_zoom_e = e;
        o_rect = { x: el_offset(O).x, y: el_offset(O).y };
        o_zoom = zoom;
        if (e.targetTouches.length == 1) {
        } else if (e.targetTouches.length == 2) {
        }
    }
};
画布.ontouchmove = (e) => {
    if (e.targetTouches.length == 1) {
        touch_move(e);
        if (o_touch_e) move = true;
        o_touch_e_l.push({ e: e, t: new Date().getTime() });
    } else if (e.targetTouches.length == 2) {
        e.preventDefault();
        touch_zoom(e);
        if (o_touch_zoom_e) move = true;
    }
};
画布.ontouchend = (e) => {
    // 惯性滚动
    if (move) {
        let o_e = o_touch_e_l?.[o_touch_e_l.length - 2] || { e: e, t: 0 };
        let dt = new Date().getTime() - o_e.t;
        let dx = fxsd == 0 || fxsd == 2 ? e.changedTouches[0].clientX - o_e.e.changedTouches[0].clientX : 0,
            dy = fxsd == 0 || fxsd == 1 ? e.changedTouches[0].clientY - o_e.e.changedTouches[0].clientY : 0;
        let ds = Math.sqrt(dx ** 2 + dy ** 2);
        const m = 1,
            a = 0.0015;
        let p = 0.5 * m * (ds / dt / 2) ** 2;
        let s = p / (m * a);
        let t = Math.sqrt((2 * s) / a);
        console.log(dt, ds);
        if (dt < 15) {
            let x = el_offset(O).x + s * (dx / ds),
                y = el_offset(O).y + s * (dy / ds);
            O.style.transition = `${t / 1000}s`;
            O.style.transitionTimingFunction = "cubic-bezier(.17, .89, .45, 1)";
            setTimeout(() => {
                O.style.transition = ``;
                render_select_rects();
                data_changed();
            }, t);
            set_O_p(x, y);
        }
        o_touch_e_l = [];
    }

    o_touch_e = null;
    move = false;
    o_touch_zoom_e = null;
    o_zoom = NaN;
    if (e.targetTouches.length == 1) {
        touch_move(e);
        if (select_id) elFromId(select_id).remove();
        select_id = "";
    } else if (e.targetTouches.length == 2) {
        touch_zoom(e);
        data_changed();
    }

    o_touch_e = e;
    o_rect = { x: el_offset(O).x, y: el_offset(O).y };
};

var pointer_move = true;

/** 触控事件处理，移动画布 */
var touch_move = (e: TouchEvent) => {
    if (o_touch_e) {
        if (pointer_move) {
            if (free_o_a == -1) return;
            let dx = fxsd == 0 || fxsd == 2 ? e.changedTouches[0].clientX - o_touch_e.changedTouches[0].clientX : 0,
                dy = fxsd == 0 || fxsd == 1 ? e.changedTouches[0].clientY - o_touch_e.changedTouches[0].clientY : 0;
            let x = o_rect.x + dx,
                y = o_rect.y + dy;
            set_O_p(x, y);
        }
    }
};

/** 双指缩放 */
var touch_zoom = (e: TouchEvent) => {
    if (zoom_lock) return;
    if (o_touch_zoom_e) {
        if (pointer_move) {
            if (free_o_a == -1) return;
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
            zoom_o(z);
            set_O_p(el_offset(O).x - dx * (dzoom / ozoom), el_offset(O).y - dy * (dzoom / ozoom));
        }
    }
};

/** 两个画布坐标转为框 */
function p2rect(r0: p_point, r1: p_point) {
    return { x: Math.min(r0.x, r1.x), y: Math.min(r0.y, r1.y), w: Math.abs(r0.x - r1.x), h: Math.abs(r0.y - r1.y) };
}

/**定位指针到画布坐标 */
function e2p(e: MouseEvent) {
    return {
        x: (e.clientX - el_offset(O, document.body).x) / zoom,
        y: (e.clientY - el_offset(O, document.body).y) / zoom,
    } as p_point;
}

var selected_el: string[] = [];

/**选择元素 */
function select_x_x(rect: { x: number; y: number; w: number; h: number }) {
    集_for_each((el, p, path) => {
        if (p.id == 当前画布.id && path.length == 0) {
            if (rect_in_rect(el.rect, rect)) {
                selected_el.push(el.id);
                render_select_rects();
            }
        }
    });
}
function select_x_x2(points: [number, number][]) {
    selected_el = [];

    集_for_each((el, p, path) => {
        if (p.id == 当前画布.id && path.length == 0) {
            let r = el.rect;

            if (
                ray_casting([r.x, r.y], points) &&
                ray_casting([r.x, r.y + r.h], points) &&
                ray_casting([r.x + r.w, r.y], points) &&
                ray_casting([r.x + r.w, r.y + r.h], points)
            ) {
                selected_el.push(el.id);
                render_select_rects();
            }
        }
    });
}

function ray_casting(p: [number, number], poly: [number, number][]) {
    // px，py为p点的x和y坐标
    let px = p[0],
        py = p[1],
        flag = false;
    //这个for循环是为了遍历多边形的每一个线段
    for (let i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
        let sx = poly[i][0], //线段起点x坐标
            sy = poly[i][1], //线段起点y坐标
            tx = poly[j][0], //线段终点x坐标
            ty = poly[j][1]; //线段终点y坐标

        // 点与多边形顶点重合
        if ((sx === px && sy === py) || (tx === px && ty === py)) {
            return true;
        }

        // 判断线段两端点是否在射线两侧
        if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
            // 求射线和线段的交点x坐标，交点y坐标当然是py
            let x = sx + ((py - sy) * (tx - sx)) / (ty - sy);

            // 点在多边形的边上
            if (x === px) {
                return true;
            }

            // x大于px来保证射线是朝右的，往一个方向射，假如射线穿过多边形的边界，flag取反一下
            if (x > px) {
                flag = !flag;
            }
        }
    }
    // 射线穿过多边形边界的次数为奇数时点在多边形内
    return flag ? true : false;
}

function add_blank(op: p_point, p: p_point) {
    let r = p2rect(op, p);
    let a = 0; // 0123 上右下左
    if (r.w > r.h) {
        // 上下
        if (op.y < p.y) {
            a = 2;
        } else {
            a = 0;
        }
    } else {
        // 左右
        if (op.x < p.x) {
            a = 1;
        } else {
            a = 3;
        }
    }

    for (let i of 集.数据) {
        if (i.id == 当前画布.id) {
            for (let xelId of i.data) {
                const xel = getDataFromId(xelId);
                let el_o = xel.rect;
                switch (a) {
                    case 0:
                        if (el_o.y + el_o.h < op.y && r.x <= el_o.x && el_o.x + el_o.w <= r.x + r.w) {
                            set_data_style(xel, "top", el_o.y - r.h + "px");
                            xel.rect.y -= r.h;
                        }
                        break;
                    case 1:
                        if (el_o.x > op.x && r.y <= el_o.y && el_o.y + el_o.h <= r.y + r.h) {
                            set_data_style(xel, "left", el_o.x + r.w + "px");
                            xel.rect.x += r.w;
                        }
                        break;
                    case 2:
                        if (el_o.y > op.y && r.x <= el_o.x && el_o.x + el_o.w <= r.x + r.w) {
                            set_data_style(xel, "top", el_o.y + r.h + "px");
                            xel.rect.y += r.h;
                        }
                        break;
                    case 3:
                        if (el_o.x + el_o.w < op.x && r.y <= el_o.y && el_o.y + el_o.h <= r.y + r.h) {
                            set_data_style(xel, "left", el_o.x - r.w + "px");
                            xel.rect.x -= r.w;
                        }
                        break;
                }
                let el = elFromId(xel.id);
                if (el) {
                    el.setAttribute("style", xel.style);
                }
            }
        }
    }
}

function render_select_rects() {
    if (模式 != "设计") return;
    let xels: x[] = [];
    if (now_mouse_e) {
        let els = document.elementsFromPoint(now_mouse_e.clientX, now_mouse_e.clientY);
        if (els.length) {
            if (els[0].className == "x-x_bar" || els[1].className == "x-x_bar") {
                let x: Element;
                if (els[0].className == "x-x_bar") x = elFromId(els[0].getAttribute("data-id"));
                if (els[1].className == "x-x_bar") x = elFromId(els[1].getAttribute("data-id"));
                if (x) els = document.elementsFromPoint(x.getBoundingClientRect().x, x.getBoundingClientRect().y);
            }
        }
        for (let i of els) {
            if (i.tagName == "X-X") {
                xels.push(i as x);
                let select_bar = add_r(i as x);
                select_bar.classList.add("x-x_hover");
                break;
            }
        }
    }
    for (let i of selected_el) {
        let el = get_x_by_id(i);
        if (!el) continue;
        let select_bar = add_r(el);
        select_bar.classList.add("x-x_selected");
    }
    function add_r(i: x) {
        let rect = i.getBoundingClientRect();
        let select_bar = (select_con.querySelector(`[data-id="${i.id}"]`) as HTMLElement) || createEl("div");
        select_bar.setAttribute("data-id", i.id);
        select_bar.style.left = rect.x - select_con.getBoundingClientRect().left + "px";
        select_bar.style.top = rect.y - select_con.getBoundingClientRect().top + "px";
        select_bar.style.width = rect.width + "px";
        select_bar.style.height = rect.height + "px";
        if (select_con.querySelector(`[data-id="${i.id}"]`)) return select_bar;
        select_con.append(select_bar);
        var x_h = [
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
        ];

        for (const i in x_h) {
            x_h[i].classList.add(`xxhandle${i}`);
        }

        select_bar.id = "x-x_handle";

        select_bar.classList.add("xxhandle");
        select_bar.append(...x_h);

        select_bar.onpointerdown = (e) => {
            let el = e.target as HTMLDivElement;
            i = get_x_by_id(i.id);
            if (x_h.includes(el)) {
                e.preventDefault();
                e.stopPropagation();
                free_o_a = x_h.indexOf(el);
                free_old_point = e2p(e);
                free_o_rects = [{ el: i.id, x: i.offsetLeft, y: i.offsetTop, w: i.offsetWidth, h: i.offsetHeight }];
                if (selected_el.length <= 1) {
                    z.focus(i.id);
                }
                const data = get_x_data(i.id);
                set_data_style(data, "max-width", "");
                i.setAttribute("style", data.style);
            }
            clearTimeout(free_db_time);
        };

        return select_bar;
    }
    for (let i of select_con.children) {
        let has = false;
        for (let x of xels) {
            if (x.id == i.getAttribute("data-id")) {
                has = true;
                break;
            }
        }
        if (!has) {
            i.classList.remove("x-x_hover");
        }
        for (let x of selected_el) {
            if (x == i.getAttribute("data-id")) {
                has = true;
                break;
            }
        }
        if (!has) {
            i.remove();
        }
    }

    render_x_bar();
}

let last_hover_x = "";

function render_x_bar() {
    if (模式 != "设计") return;
    let xels: x[] = [];
    if (now_mouse_e) {
        let els = document.elementsFromPoint(now_mouse_e.clientX, now_mouse_e.clientY);
        if (els.length) {
            if (els[0].className == "x-x_bar" || els[1].className == "x-x_bar") {
                let x: Element;
                if (els[0].className == "x-x_bar") x = elFromId(els[0].getAttribute("data-id"));
                if (els[1].className == "x-x_bar") x = elFromId(els[1].getAttribute("data-id"));
                if (x?.id && x.id == last_hover_x) {
                    els = document.elementsFromPoint(x.getBoundingClientRect().x, x.getBoundingClientRect().y);
                }
            }
        }
        last_hover_x = "";
        for (let i of els) {
            if (i.tagName == "X-X") {
                xels.push(i as x);
                add_r(i as x);
                last_hover_x = i.id;
                break;
            }
        }
    }
    if (selected_el.length == 1) if (get_x_by_id(select_el[0])) xels.push(get_x_by_id(select_el[0]));

    for (let i of x_bar_con.children) {
        let has = false;
        for (let x of xels) {
            if (i.getAttribute("data-id") == x.id) {
                add_r(x);
                has = true;
            }
        }
        if (!has) {
            setTimeout(() => {
                if (!i.contains(document.elementFromPoint(now_mouse_e.clientX, now_mouse_e.clientY))) {
                    i.remove();
                }
            }, 10);
        }
    }
    function add_r(i: x) {
        let rect = i.getBoundingClientRect();
        let x_bar = (x_bar_con.querySelector(`[data-id="${i.id}"]`) as HTMLElement) || new_x_bar(i.id);
        x_bar.setAttribute("data-id", i.id);
        x_bar.style.left = rect.x - x_bar_con.getBoundingClientRect().left + "px";
        x_bar.style.top = rect.y - x_bar_con.getBoundingClientRect().top - 16 + "px";
        if (x_bar_con.querySelector(`[data-id="${i.id}"]`)) return x_bar;
        x_bar_con.append(x_bar);

        return x_bar;
    }
}

document.addEventListener("dblclick", () => {
    if (模式 == "设计") {
        console.log(free_o_a, z.聚焦元素);
        let el = get_x_by_id(z.聚焦元素);
        let xl = [1, 3, 4, 5, 6, 7],
            yl = [0, 2, 4, 5, 6, 7];
        if (xl.includes(free_o_a)) el.style.width = "";
        if (yl.includes(free_o_a)) el.style.height = "";
        render_select_rects();
    }
    clearTimeout(free_db_time);
});

归位.onclick = () => {
    O.style.transition = "0.4s";
    set_O_p(画布.offsetWidth / 2, 画布.offsetHeight / 2);
    setTimeout(() => {
        O.style.transition = "";
    }, 400);
    data_changed();
};

var zoom = 1;
var zoom_lock = false;

/** 缩放 */
function zoom_o(z: number) {
    z = Math.max(z, 0);
    zoom = z;
    O.style.transform = `scale(${z})`;
    zoom_el.value = `${(z * 100).toFixed(1)}`;
    zoom_el.style.width = zoom_el.value.length + "ch";
    document.documentElement.style.setProperty("--zoom", String(z));

    画布.querySelectorAll("x-pdf").forEach((el: pdf_viewer) => {
        let r = el.getBoundingClientRect();
        let w = window.innerWidth,
            h = window.innerHeight;
        if (r.x < w && r.y < h && r.x + r.width > 0 && r.y + r.height > 0) el.set_m();
    });

    画布.querySelectorAll("x-graph").forEach((el: graph) => {
        el.reflasth();
    });
}

zoom_el.oninput = () => {
    zoom_el.style.width = zoom_el.value.length + "ch";
};
zoom_el.onchange = () => {
    let nzoom = (Number(zoom_el.value) || 100) / 100;
    let ozoom = zoom,
        dzoom = nzoom - zoom;
    zoom += dzoom;
    let dx = window.innerWidth / 2 - O.getBoundingClientRect().x,
        dy = window.innerHeight / 2 - O.getBoundingClientRect().y;
    zoom_o(zoom);
    set_O_p(null, null, -dx * (dzoom / ozoom), -dy * (dzoom / ozoom));
    zoom_list.classList.add("zoom_list_hide");
};

zoom_el.onblur = zoom_pel.onblur = () => {
    zoom_list.classList.add("zoom_list_hide");
};
zoom_pel.onclick = () => {
    zoom_list.classList.toggle("zoom_list_hide");
};

let zoom_lock_b = createEl("div");
zoom_lock_b.innerHTML = icon(unlock_svg);
zoom_lock_b.onpointerdown = () => {
    zoom_lock = !zoom_lock;
    if (zoom_lock) {
        zoom_lock_b.innerHTML = icon(lock_svg);
    } else {
        zoom_lock_b.innerHTML = icon(unlock_svg);
    }
};
zoom_list.append(zoom_lock_b);
for (let i = 25; i <= 200; i += 25) {
    let op = createEl("div");
    op.innerText = `${i}%`;
    zoom_list.append(op);
    op.onpointerdown = () => {
        let nzoom = i / 100;
        let ozoom = zoom,
            dzoom = nzoom - zoom;
        let dx = window.innerWidth / 2 - O.getBoundingClientRect().x,
            dy = window.innerHeight / 2 - O.getBoundingClientRect().y;
        zoom_o(nzoom);
        set_O_p(null, null, -dx * (dzoom / ozoom), -dy * (dzoom / ozoom));
    };
}
set_O_p(画布.offsetWidth / 2, 画布.offsetHeight / 2);

mini_map_el.parentElement.classList.add("mini_map_hide");
mini_map_el.parentElement.parentElement.onclick = (e) => {
    if (e.target != mini_map_el.parentElement.parentElement) return;
    mini_map_el.parentElement.classList.toggle("mini_map_hide");
    render_map();
};

mini_map_el.onpointerdown = (e) => {
    e.stopPropagation();
    let main_rect = el_offset2(画布, O);
    let px = e.offsetX / mini_map_el.offsetWidth;
    let py = e.offsetY / mini_map_el.offsetHeight;
    const max = Math.max(main_rect.w, main_rect.h);
    let out_rect = {
        left: main_rect.x + main_rect.w / 2 - (max / 2) * mini_zoom,
        top: main_rect.y + main_rect.h / 2 - (max / 2) * mini_zoom,
    };

    let rx = px * (max * mini_zoom) + out_rect.left;
    let ry = py * (max * mini_zoom) + out_rect.top;
    set_O_p(-rx * zoom + 画布.offsetWidth / 2, -ry * zoom + 画布.offsetHeight / 2);
};
ignore_el.push("#mini_map");

mini_map_el.onwheel = (e) => {
    let zz = 1 + Math.abs(e.deltaY) / 300;
    if (e.deltaY > 0) {
        mini_zoom = mini_zoom * zz;
    } else {
        mini_zoom = mini_zoom / zz;
    }
    render_map();
};

/**元素相对位置（屏幕坐标） */
function el_offset(el: Element, pel?: Element) {
    if (!pel) pel = el.parentElement;
    let ox = el.getBoundingClientRect().x - pel.getBoundingClientRect().x,
        oy = el.getBoundingClientRect().y - pel.getBoundingClientRect().y;
    return { x: ox, y: oy, w: el.getBoundingClientRect().width, h: el.getBoundingClientRect().height };
}

/**范围相对位置（屏幕坐标） */
function range_offset(range: Range, pel?: Element) {
    if (!pel) pel = range.commonAncestorContainer.parentElement;
    let ox = range.getBoundingClientRect().x - pel.getBoundingClientRect().x,
        oy = range.getBoundingClientRect().y - pel.getBoundingClientRect().y;
    return { x: ox, y: oy, w: range.getBoundingClientRect().width, h: range.getBoundingClientRect().height };
}

type rect = { x: number; y: number; w: number; h: number };

/**元素大小和相对位置（画布坐标） */
function el_offset2(el: Element, pel?: Element, xz?: number): rect {
    if (!pel) pel = el.parentElement;
    let z = xz || zoom;
    let ox = el.getBoundingClientRect().x - pel.getBoundingClientRect().x,
        oy = el.getBoundingClientRect().y - pel.getBoundingClientRect().y;
    return {
        x: ox / z,
        y: oy / z,
        w: el.getBoundingClientRect().width / z,
        h: el.getBoundingClientRect().height / z,
    };
}

function el_has(data: srcData[0], id: string) {
    if (data.id == id) return true;
    if (!data.子元素) return false;
    w(data.子元素);
    function w(data: data) {
        for (let i of data) {
            if (i === id) return true;
            const el = getDataFromId(i);
            if (el.子元素) {
                w(el.子元素);
            }
        }
    }
    return false;
}

/** 框有交集 */
function rect_x_rect(rect0: rect, rect1: rect) {
    if (
        rect0.x <= rect1.x + rect1.w &&
        rect0.x + rect0.w >= rect1.x &&
        rect0.y <= rect1.y + rect1.h &&
        rect0.y + rect0.h >= rect1.y
    ) {
        return true;
    } else {
        return false;
    }
}
/** rect0是rect1的子集 */
function rect_in_rect(rect0: rect, rect1: rect) {
    if (
        rect0.x >= rect1.x &&
        rect0.x + rect0.w <= rect1.x + rect1.w &&
        rect0.y >= rect1.y &&
        rect0.y + rect0.h <= rect1.y + rect1.h
    ) {
        return true;
    } else {
        return false;
    }
}
/** 获取元素框 */
function reflash_rect() {
    let els_rect: { x: number; y: number; w: number; h: number }[] = [];
    if (集)
        for (let i of 集.数据) {
            if (i.id == 当前画布.id) w(i.data);
        }
    function w(data: data) {
        for (let id of data) {
            if (集.values?.[id]?.fixed) return;
            const i = getDataFromId(id);
            if (i.rect) els_rect.push(i.rect);
            if (i.子元素) {
                w(i.子元素);
            }
        }
    }
    return els_rect;
}

/** 获取最大框 */
function get_out_rect(rect: rect[]) {
    let out_rect = { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity };
    for (let i of rect) {
        const r = i;
        out_rect.left = Math.min(r.x, out_rect.left);
        out_rect.right = Math.max(r.x + r.w, out_rect.right);
        out_rect.top = Math.min(r.y, out_rect.top);
        out_rect.bottom = Math.max(r.y + r.h, out_rect.bottom);
    }
    return {
        ...out_rect,
        x: out_rect.left,
        y: out_rect.top,
        w: out_rect.right - out_rect.left,
        h: out_rect.bottom - out_rect.top,
    };
}

var mini_zoom = 3;

/** 渲染小地图 */
function render_map() {
    if (mini_map_el.parentElement.classList.contains("mini_map_hide")) return;
    let main_rect = el_offset2(画布, O);
    let els_rect = reflash_rect();
    let z = 1;
    const zz = 2;
    const min = 600,
        minstyle = `${600 / zz}px`,
        max = Math.max(main_rect.w, main_rect.h);
    z = min / max / mini_zoom;
    let out_rect = {
        left: main_rect.x + main_rect.w / 2 - (max / 2) * mini_zoom,
        top: main_rect.y + main_rect.h / 2 - (max / 2) * mini_zoom,
    };
    mini_map_el.style.height = minstyle;
    mini_map_el.style.width = minstyle;
    mini_map_el.height = min;
    mini_map_el.width = min;
    let ctx = mini_map_el.getContext("2d");
    ctx.clearRect(0, 0, mini_map_el.offsetWidth, mini_map_el.height);
    for (let i of els_rect) {
        const r = i;
        let x = (r.x - out_rect.left) * z;
        let y = (r.y - out_rect.top) * z;
        let w = r.w * z;
        let h = r.h * z;
        ctx.fillStyle = is_dark ? "#fff2" : "#0002";
        ctx.fillRect(x, y, w, h);
    }
    ctx.strokeStyle = "#00f";
    ctx.fillStyle = "#00f2";
    ctx.lineWidth = 1;
    ctx.fillRect((main_rect.x - out_rect.left) * z, (main_rect.y - out_rect.top) * z, main_rect.w * z, main_rect.h * z);
    ctx.strokeRect(
        (main_rect.x - out_rect.left) * z,
        (main_rect.y - out_rect.top) * z,
        main_rect.w * z,
        main_rect.h * z
    );
}

elFromId("画布").onwheel = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();

        if (zoom_lock) return;

        let zz = 1 + Math.abs(e.deltaY) / 1000;
        let ozoom = zoom;
        zoom = e.deltaY > 0 ? ozoom / zz : ozoom * zz;
        zoom = Math.abs(zoom);
        let dzoom = zoom - ozoom;
        let dx = e.clientX - O.getBoundingClientRect().x,
            dy = e.clientY - O.getBoundingClientRect().y;
        requestAnimationFrame(() => {
            zoom_o(zoom);
            set_O_p(null, null, -dx * (dzoom / ozoom), -dy * (dzoom / ozoom));
        });
    } else {
        let el = <HTMLElement>e.target;
        if (el.tagName == "TEXTAREA") return;
        if (document.querySelector("x-sinppet").contains(el)) return;
        for (let q of ignore_el) {
            for (let qel of 画布.querySelectorAll(q)) {
                if (qel.contains(el)) return;
            }
        }
        if (document.fullscreenElement != 画布s) {
            let dx = 0,
                dy = 0;
            if (e.shiftKey && !e.deltaX) {
                if (fxsd == 0 || fxsd == 2) dx = -e.deltaY;
            } else {
                if (fxsd == 0 || fxsd == 2) dx = -e.deltaX;
                if (fxsd == 0 || fxsd == 1) dy = -e.deltaY;
            }
            requestAnimationFrame(() => {
                set_O_p(null, null, +dx, +dy);
            });
        } else {
            let a = e.deltaY > 0 ? "next" : "back";
            ys_bn(a as "next" | "back");
        }
    }
    data_changed();
};

/** 中键移动画布 */
let middle_b: PointerEvent;
let middle_p = { x: 0, y: 0 };
画布.addEventListener("pointerdown", (e) => {
    if (e.target === 画布)
        if (
            (e.button === 1 && e.pointerType === "mouse") ||
            e.pointerType === "touch" ||
            (e.button === 0 && e.pointerType === "pen")
        ) {
            middle_b = e;
            middle_p.x = el_offset(O).x;
            middle_p.y = el_offset(O).y;
        }
});
document.addEventListener("pointermove", (e) => {
    if (middle_b) {
        let dx = e.clientX - middle_b.clientX,
            dy = e.clientY - middle_b.clientY;
        set_O_p(middle_p.x + dx, middle_p.y + dy);
    }
});
document.addEventListener("pointerup", () => {
    if (middle_b) {
        data_changed();
    }
    middle_b = null;
});

zoom_o(1);

var now_mouse_e: MouseEvent = null;
document.addEventListener("mousemove", (e: MouseEvent) => {
    now_mouse_e = e;
});

画布.oncontextmenu = (e) => {
    if (模式 != "浏览") e.preventDefault();
};

// 光标
type selection_type = {
    id: string; // md 父主元素
    start: number;
    end: number;
};
var selections = [{ id: "", start: 0, end: 0 }] as selection_type[];

// 自由元素移动
/** 触发调节时的位置 */
let free_old_point: p_point;
/** 所作用的元素及其原始位置大小 */
let free_o_rects = [] as { el: string; x: number; y: number; w?: number; h?: number }[];
/** 应该对元素执行的操作，移动还是调节大小 */
let free_o_a = NaN;
/** 是否移动过，可用于判断点击还是拖动 */
let free_move = false;
/** 是否在拖动元素 */
let free_drag = false;
/** 拖拽释放提示元素 */
let free_drag_tip: HTMLElement;
/** 箭头链接id */
let free_link: string;
/** 双击判断样式 */
let free_db_dtime = 300;
/** 双击计时器 */
let free_db_time;

/**
 * 是否按下shift
 * @param e 鼠标事件
 * @returns 是否按下shift
 */
function mu_sel_key(e: MouseEvent) {
    return e.shiftKey;
}
document.addEventListener("pointermove", (e: PointerEvent) => {
    if (模式 == "设计" && free_old_point) {
        e.preventDefault();
        free_mouse(e);
        free_move = true;
        if (free_drag) {
            let els = document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[];
            for (let el of els) {
                if (el.tagName == "X-X") {
                    let rect = el.getBoundingClientRect();
                    if (
                        el.parentElement.classList.contains("flex-column") ||
                        el.parentElement.classList.contains("flex-row")
                    ) {
                        free_drag_tip.style.opacity = "1";
                        if (el.parentElement.classList.contains("flex-column")) {
                            if (e.clientY - rect.y < rect.height / 2) {
                                free_drag_tip.style.top = rect.top + "px";
                            } else {
                                free_drag_tip.style.top = rect.bottom + "px";
                            }
                            free_drag_tip.style.left = rect.left + "px";
                            free_drag_tip.style.width = rect.width + "px";
                            free_drag_tip.style.height = "1px";
                        }
                        if (el.parentElement.classList.contains("flex-row")) {
                            if (e.clientX - rect.x < rect.width / 2) {
                                free_drag_tip.style.left = rect.left + "px";
                            } else {
                                free_drag_tip.style.left = rect.right + "px";
                            }
                            free_drag_tip.style.top = rect.top + "px";
                            free_drag_tip.style.width = "1px";
                            free_drag_tip.style.height = rect.height + "px";
                        }
                        return;
                    }
                }
            }
            free_drag_tip.style.opacity = "0";
        }
    }
    if (模式 == "设计") {
        if (free_link) {
            render_link_arrow(free_link, e);
        }
    }
});
document.addEventListener("pointerup", (e: PointerEvent) => {
    if (drag_block) {
        drag_block = false;
        data_changed();
    }

    free_mouse(e);

    if (free_drag) {
        画布.classList.remove("拖拽");
        free_drag_tip.remove();
        let els = document.elementsFromPoint(e.clientX, e.clientY);
        let in_el = false;
        for (let el of els) {
            if (el.tagName == "X-X") {
                in_el = true;
                let rect = el.getBoundingClientRect();
                let x = free_o_rects[0].el;
                if (
                    el.parentElement.classList.contains("flex-column") ||
                    el.parentElement.classList.contains("flex-row")
                ) {
                    if (el.parentElement.classList.contains("flex-column")) {
                        if (e.clientY - rect.y < rect.height / 2) {
                            cx(el, x, true);
                        } else {
                            cx(el, x, false);
                        }
                    }
                    if (el.parentElement.classList.contains("flex-row")) {
                        if (e.clientX - rect.x < rect.width / 2) {
                            cx(el, x, true);
                        } else {
                            cx(el, x, false);
                        }
                    }
                    free_o_rects = [];
                    break;
                }
            }
        }
        function cx(pel: Element, id: string, before: boolean) {
            let x = get_x_data(id);
            let xel = createX("x-x");
            xel.id = id;
            xel.setAttribute("style", x.style);
            xel.style.left = "";
            xel.style.top = "";
            xel.className = x.class;
            const xx = get_x_by_id(id);
            if (before) {
                pel.before(xel);
            } else {
                pel.after(xel);
            }
            xel.value = x.子元素;
            xx?.remove();
            let c = pel.parentElement.children;
            for (let i in c) {
                if (c[i] == xel) {
                    move_x_data(id, pel.parentElement.id, Number(i));
                    z.move(id, pel.parentElement.id, Number(i));
                    break;
                }
            }
            集_for_each((data) => {
                if (data.id == id) {
                    set_data_style(data, "left", "");
                    set_data_style(data, "top", "");
                    return true;
                }
            });
        }
        if (!in_el) {
            let id = free_o_rects[0].el;
            move_x_data(id, O.id);
            z.move(id, O.id);
        }
        free_drag = false;
        render_select_rects();
    }

    if (free_old_point && free_o_a == -1 && 临时中转站.contains(e.target as HTMLElement)) {
        for (let i of selected_el) {
            let had = false;
            for (let x of 集.中转站) {
                if (x == i) {
                    had = true;
                    break;
                }
            }
            if (had) continue;
            集.中转站.push(get_x_out_value(get_x_by_id(i)).id);
            z.remove(i, true);
        }
        free_o_rects = [];
        console.log(集.中转站);
        tmp_s_reflash();
        data_changed();
    }

    if (!free_move && free_old_point && !mu_sel_key(e)) {
        document.querySelectorAll("x-x").forEach((el: x) => {
            if (el.contains(e.target as x)) {
                z.focus(el.id);
                return;
            }
        });
        data_changed();
    }
    if (
        !free_drag &&
        !free_move &&
        free_old_point &&
        free_o_a != -1 &&
        !elFromId(free_o_rects[0].el)?.querySelector("x-link-arrow") &&
        is_smallest_data_el(free_o_rects[0].el)
    ) {
        if (!free_link) {
            let elid = free_o_rects[0].el;
            free_db_time = setTimeout(() => {
                let id = uuid_id();
                free_link = id;
                let x = createX("x-link-arrow");
                x.id = id;
                z.push(x);
                let arrow = createEl("x-link-arrow");
                x.append(arrow);
                arrow._value.start.id = elid;
                arrow._value.start.a = free_o_a;
                x.style.stroke = "var(--color6)";
                x.style.strokeWidth = "1";
                x.classList.add("link_arrow_p");
                selected_el = selected_el.filter((el) => el != x.id);
            }, free_db_dtime);
        } else {
            let arrow = elFromId(free_link).querySelector("x-link-arrow") as link_arrow;
            arrow._value.end.id = free_o_rects[0].el;
            arrow._value.end.a = free_o_a;
            render_link_arrow(free_link, e);
            link(arrow._value.start.id).add(free_o_rects[0].el);
            free_link = "";
        }
    }
    if (free_link) {
        let el = e.target as HTMLElement;
        if (
            !(
                typeof el?.className == "string" &&
                el.className.includes("xxhandle") &&
                is_smallest_el(elFromId(el.parentElement.getAttribute("data-id")) as x)
            )
        ) {
            z.remove(free_link);
        }
        free_link = "";
    }
    free_old_point = null;
    free_move = false;
    free_o_rects = [];
});

/** 调整元素大小、位置以及元素聚焦 */
var free_mouse = (e: MouseEvent) => {
    if (free_old_point) {
        for (const xel of free_o_rects) {
            集_for_each((data, p, path) => {
                if (data.id == xel.el) {
                    let f = path[path.length - 1]
                        ? is_data_flex(getDataFromId(path[path.length - 1])) == "flex"
                        : false;
                    let np = e2p(e);
                    let dx = np.x - free_old_point.x,
                        dy = np.y - free_old_point.y;
                    let w = xel.w,
                        h = xel.h;
                    switch (free_o_a) {
                        case -1:
                            c(-10, dx);
                            c(-11, dy);
                            break;
                        case 0:
                            c(0, -dy);
                            break;
                        case 1:
                            c(1, dx);
                            break;
                        case 2:
                            c(2, dy);
                            break;
                        case 3:
                            c(3, -dx);
                            break;
                        case 4:
                            // ↗
                            if (e.shiftKey) {
                                let j = dx * w - dy * h;
                                c(0, (j * h) / (w ** 2 + h ** 2));
                                c(1, (j * w) / (w ** 2 + h ** 2));
                            } else {
                                c(0, -dy);
                                c(1, dx);
                            }
                            break;
                        case 5:
                            // ↘
                            if (e.shiftKey) {
                                let j = dx * w + dy * h;
                                c(1, (j * w) / (w ** 2 + h ** 2));
                                c(2, (j * h) / (w ** 2 + h ** 2));
                            } else {
                                c(1, dx);
                                c(2, dy);
                            }
                            break;
                        case 6:
                            // ↙
                            if (e.shiftKey) {
                                let j = -dx * w + dy * h;
                                c(2, (j * h) / (w ** 2 + h ** 2));
                                c(3, (j * w) / (w ** 2 + h ** 2));
                            } else {
                                c(2, dy);
                                c(3, -dx);
                            }
                            break;
                        case 7:
                            // ↖
                            if (e.shiftKey) {
                                let j = -dx * w - dy * h;
                                c(3, (j * w) / (w ** 2 + h ** 2));
                                c(0, (j * h) / (w ** 2 + h ** 2));
                            } else {
                                c(3, -dx);
                                c(0, -dy);
                            }
                            break;
                    }
                    function c(a: number, d: number) {
                        let x = NaN,
                            y = NaN,
                            w = NaN,
                            h = NaN;
                        let i = 1,
                            j = 0;
                        if (e.ctrlKey) {
                            i = 2;
                            j = 1;
                        }
                        switch (a) {
                            case -10:
                                x = xel.x + dx;
                                break;
                            case -11:
                                y = xel.y + dy;
                                break;
                            case 0:
                                if (!f) y = xel.y - d;
                                h = xel.h + i * d;
                                break;
                            case 1:
                                w = xel.w + i * d;
                                if (!f) x = xel.x - j * d;
                                break;
                            case 2:
                                h = xel.h + i * d;
                                if (!f) y = xel.y - j * d;
                                break;
                            case 3:
                                if (!f) x = xel.x - d;
                                w = xel.w + i * d;
                                break;
                        }
                        if (!isNaN(x)) {
                            data.rect.x = x;
                            set_data_style(data, "left", x + "px");
                        }
                        if (!isNaN(y)) {
                            data.rect.y = y;
                            set_data_style(data, "top", y + "px");
                        }
                        if (!isNaN(w)) {
                            data.rect.w = w;
                            set_data_style(data, "width", w + "px");
                        }
                        if (!isNaN(h)) {
                            data.rect.h = h;
                            set_data_style(data, "height", h + "px");
                        }
                        elFromId(xel.el)?.setAttribute("style", data.style);
                    }

                    return true;
                }
            });
            if (xel.el == z.聚焦元素) {
                set_style(xel.el);
                load_xywh();
            }
        }
        render_select_rects();
    }
};

function new_free_drag_tip() {
    free_drag_tip = createEl("div");
    free_drag_tip.classList.add("free_drag_tip");
    document.body.append(free_drag_tip);
}

function render_link_arrow(id: string, e: PointerEvent) {
    let xel = elFromId(id);
    if (!xel) {
        free_link = "";
        return;
    }
    let svg = xel.querySelector("x-link-arrow") as link_arrow;
    svg.render(e);
}

type free_a = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

function get_link_arrow_p(id: string, a: free_a): p_point {
    let x = 0,
        y = 0,
        rect = get_x_data(id).rect;
    if (a == 7 || a == 3 || a == 6) x = rect.x;
    if (a == 0 || a == 2) x = rect.x + rect.w / 2;
    if (a == 4 || a == 1 || a == 5) x = rect.x + rect.w;
    if (a == 7 || a == 0 || a == 4) y = rect.y;
    if (a == 3 || a == 1) y = rect.y + rect.h / 2;
    if (a == 6 || a == 2 || a == 5) y = rect.y + rect.h;
    return { x, y };
}
function get_link_arrow_a(p: p_point, a: free_a, long: number): p_point {
    let dx = 0,
        dy = 0;
    const x = long,
        y = long;
    if (a == 7 || a == 3 || a == 6) dx = -x;
    if (a == 0 || a == 2) dx = 0;
    if (a == 4 || a == 1 || a == 5) dx = x;
    if (a == 7 || a == 0 || a == 4) dy = -y;
    if (a == 3 || a == 1) dy = 0;
    if (a == 6 || a == 2 || a == 5) dy = y;
    return { x: p.x + dx, y: p.y + dy };
}

function createX(type: keyof x_tag_map) {
    const el = createEl("x-x");
    if (type) el.type = type;
    return el;
}

/** 通过画布坐标创建主元素 */
function create_x_x(x: number, y: number) {
    let xel = createX("x-md");
    xel.style.left = x + "px";
    xel.style.top = y + "px";
    xel.style.maxWidth = "320px";
    z.push(xel);
    var md = createEl("x-md");
    xel.append(md);
    (<markdown>md).edit = true;
}

/** 中转站刷新 */
function tmp_s_reflash() {
    临时中转站.innerHTML = "";
    let l = [...集.中转站];
    for (let id of l) {
        const x = getDataFromId(id);
        let t = createEl("div");
        临时中转站.append(t);
        let xel = createX(x.type);
        xel.id = x.id;
        t.append(xel);
        let bar = new_x_bar(x.id);
        t.append(bar);
        xel.setAttribute("style", x.style);
        xel.style.left = "0px";
        xel.style.top = "0px";
        xel.className = x.class;
        xel.value = x.子元素;
    }
}

// 快捷键
document.onkeydown = (e) => {
    const target = e.target as HTMLElement;
    switch (e.key) {
        case "Delete":
            if (模式 != "设计") return;
            if (!is_input_el(target))
                for (let el of selected_el) {
                    z.remove(el);
                }
            selected_el = [];
            break;
        case "Home":
            if (e.ctrlKey) {
                归位.click();
            }
            break;
        case "0":
            if (e.ctrlKey) {
                let ozoom = zoom,
                    dzoom = 1 - zoom;
                zoom += dzoom;
                let dx = now_mouse_e.clientX - O.getBoundingClientRect().x,
                    dy = now_mouse_e.clientY - O.getBoundingClientRect().y;
                zoom_o(1);
                set_O_p(null, null, -dx * (dzoom / ozoom), -dy * (dzoom / ozoom));
                data_changed();
            }
            break;
        case "k":
            if (e.ctrlKey) {
                e.preventDefault();
                let s = document.getSelection().getRangeAt(0).toString();
                show_g_search();
                if (s) {
                    search_el.value = s;
                    search_el.select();
                }
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
            break;
        case "i":
            if (模式 != "浏览") {
                if (!is_input_el(target)) {
                    set_模式("浏览");
                    e.preventDefault();
                    if (get_x_by_id(z.聚焦元素).querySelector("x-md"))
                        (get_x_by_id(z.聚焦元素).querySelector("x-md") as markdown).edit = true;
                }
            }
            break;
        case "Escape":
            if (模式 == "浏览") {
                if (!侧栏.contains(target)) set_模式("设计");
            }
            if (free_link) {
                z.remove(free_link);
                free_link = "";
            }
            break;
        case "ArrowUp":
            ys_bn("back");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "up");
                jump_to_x_link(el, true);
            }
            break;
        case "ArrowDown":
            ys_bn("next");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "down");
                jump_to_x_link(el, true);
            }
            break;
        case "ArrowLeft":
            ys_bn("back");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "left");
                jump_to_x_link(el, true);
            }
            break;
        case "ArrowRight":
            ys_bn("next");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "right");
                jump_to_x_link(el, true);
            }
            break;
        case "s":
            if (e.ctrlKey) {
                e.preventDefault();
                save_file();
            }
            break;
    }
};

// 文件数据
let pname = `画布${uuid_id()}`;
/** 文件 */
type 集type = {
    meta: meta;
    extra: {
        style: string;
        slide?: ys_type;
    };
    data: srcData;
    数据: 画布type[];
    链接: { [key: string]: { [key: string]: { time: number } } };
    assets: {
        [key: string]: {
            source: Blob | File;
            type: [string, string];
        };
    };
    中转站: data;
    values: { [key: string]: { [key: string]: any } };
    links?: { [key: string]: { pid: string; rect: rect } };
};

type meta = {
    focus_page: string;
    url: string;
    UUID: string;
    file_name: string;
    version: string;
    create_time: number;
    change_time: number;
    author?: string;
    dependencies?: { url: string; version: string }[];
};

/** 主元素 */
type srcData = {
    [id: string]: {
        id: string;
        style: string;
        class: string;
        type: keyof x_tag_map;
        子元素?: data;
        value?: xelValue;
        rect?: rect;
    };
};
type data = string[];
/** 画布 */
type 画布type = {
    id: string;
    name: string;
    p: { x: number; y: number; zoom: number };
    data: data;
};

var 集 = new_集(pname);

/** 新建默认集 */
function new_集(pname: string): 集type {
    if (!pname) pname = `画布${uuid_id()}`;
    const pid = uuid_id();
    return {
        meta: {
            focus_page: pid,
            url: "",
            UUID: uuid(),
            file_name: "",
            version: packagejson.version,
            create_time: new Date().getTime(),
            change_time: new Date().getTime(),
        },
        extra: {
            style: "",
        },
        data: {},
        数据: [{ id: pid, name: pname, p: { x: 0, y: 0, zoom: 1 }, data: [] }],
        链接: { 0: {} },
        assets: {},
        中转站: [],
        values: {},
    };
}

/** 获取集 */
function get_data() {
    let l = 集;
    for (let O of 画布s.children) {
        let show = (O as HTMLElement).style.visibility != "hidden";
        for (let i of 集.数据) {
            if (i.id == O.id) {
                let els = O.querySelectorAll(":scope x-x");
                let z = get_zoom(i.id);
                els.forEach((el: x) => {
                    let data = i.data;
                    const id = data.find((i) => i === el.id);
                    if (!id && el.id && el.parentElement === O) {
                        data.push(el.id);
                    }

                    {
                        let i = getDataFromId(el.id);
                        if (!i && el.id)
                            i = 集.data[el.id] = {
                                id: el.id,
                                style: null,
                                type: el.type,
                                class: "",
                            };
                        if (el.getAttribute("style")) i.style = el.getAttribute("style");
                        i.class = el.className;
                        if (el.parentElement === O) i.rect = el_offset2(el, O, z);
                        i.type = el.type;
                        if (i.type === "x-x") i.子元素 = el.value as data;
                        else i.value = el.value as xelValue;
                    }
                });
                if (show)
                    i.p = {
                        x: (画布.offsetWidth / 2 - el_offset(O).x) / zoom,
                        y: (画布.offsetHeight / 2 - el_offset(O).y) / zoom,
                        zoom,
                    };
                i.name = O.getAttribute("data-name");
                if (show) 当前画布 = i;
            }
        }
        if (show) 集.meta.focus_page = O.id;
    }
    window["xln"]["集"] = l;
    return l;
}

function rename_el() {
    let el = createEl("input");
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

/**
 * 判断版本>=
 * @param v 版本
 * @param v2 版本
 * @returns if v>=v2
 */
function version_is_big(v: string, v2: string) {
    let vl = v.split(".");
    let vl2 = v2.split(".");
    let maxl = 0;
    for (let i of vl) {
        if (i.length > maxl) maxl = i.length;
    }
    for (let i of vl2) {
        if (i.length > maxl) maxl = i.length;
    }
    vl.map((s) => s.padStart(maxl, "0"));
    vl2.map((s) => s.padStart(maxl, "0"));
    return Number(vl.join("")) >= Number(vl2.join(""));
}

/**
 * 判断版本是否处于闭区间
 * @param v 版本
 * @param min 最小
 * @param max 最大
 */
function version_in(v: string, min: string, max: string) {
    return Boolean(version_is_big(v, min) && version_is_big(max, v));
}

/**
 * 转换旧版本集到新版本
 * @param obj 输入集
 * @returns 输出集
 */
function version_tr(obj): 集type {
    let v = obj.meta.version || "";
    switch (true) {
        case v == "":
            if (!obj.链接) obj["链接"] = { 0: {} };
            if (!obj.链接["0"]) obj.链接[0] = {};
            if (!obj.assets) obj["asstes"] = {};
            if (!obj.中转站) obj["中转站"] = [];
            for (let i in obj.链接) {
                if (!obj.链接[i].目标) continue;
                let o = {};
                for (let m of obj.链接[i].目标) {
                    o[m.key] = { value: m.value, time: m.time };
                }
                obj.链接[i] = o;
            }
            obj.meta["version"] = "0.4.2";
        case version_in(v, "0.4.2", "0.4.2"):
            for (let i of obj.数据) {
                for (let j of i.data) {
                    let type = "";
                    let value = "";
                    for (let v in j.values) {
                        if (v.includes("X")) {
                            type = v;
                            value = j.values[v].value;
                            break;
                        }
                    }
                    j.type = "X-X";
                    j.子元素 = [
                        {
                            id: "",
                            style: "",
                            value: value,
                            type: type,
                        },
                    ];
                    delete j.values;
                }
            }
            obj.meta.version = "0.5.0";
        case version_in(v, "0.5.0", "0.6.5"):
            for (let i of obj.数据) {
                i["id"] = uuid_id();
                if (obj.meta.focus_page == i.name) {
                    obj.meta.focus_page = i.id;
                }
            }
            obj.meta.version = "0.6.6";
        case version_in(v, "0.6.6", "0.10.3"):
            obj["extra"] = { style: "" };
            obj.meta.version = "0.10.4";
        case version_in(v, "0.10.4", "0.10.5"):
            for (let i of obj.数据) {
                w(i.data);
            }
            w(obj.中转站);
            function w(data) {
                for (let i of data) {
                    if (i.type == "X-MD") {
                        let text = i.value;
                        let o = { type: "text", text: text };
                        i.value = JSON.stringify(o);
                    } else {
                        if (i.子元素) w(i.子元素);
                    }
                }
            }
            obj.meta.version = "0.11.0";
        case version_in(v, "0.11.0", "0.11.1"):
            obj["values"] = {};
            obj.meta.version = "0.11.2";
        case version_in(v, "0.11.2", "0.13.0"):
            obj.meta["create_time"] = new Date().getTime();
            obj.meta["change_time"] = new Date().getTime();
            obj.meta.version = "0.13.1";
        case version_in(v, "0.13.1", "0.17.1"):
            {
                for (let i of obj.数据) {
                    w(i.data);
                }
                w(obj.中转站);
                function w(data) {
                    for (let i of data) {
                        delete i.fixed;
                    }
                }
            }
            obj.meta.version = "0.17.2";
        case version_in(v, "0.17.2", "0.17.3"):
            delete obj.链接[""];
            delete obj.链接["0"][""];
            delete obj.链接["0"]["0"];
            obj.meta.version = "0.17.4";
        case version_in(v, "0.17.4", "0.19.4"):
            const one_k = Math.E;
            for (let i in obj.链接) {
                for (let j in obj.链接[i]) {
                    // 归一
                    if (i == "0") {
                        obj.链接[i][j].value = Math.min(obj.链接[i][j].value, 1);
                    } else {
                        obj.链接[i][j].value = -one_k / (obj.链接[i][j].value + one_k) + 1;
                    }
                }
            }
            obj.meta.version = "0.20.0";
        case version_in(v, "0.20.0", "0.21.8"):
            for (let i in obj.链接) {
                for (let j in obj.链接[i]) {
                    obj.链接[i][j]["s"] = default_down_s;
                }
            }
            obj.meta.version = "0.22.0";
        case version_in(v, "0.22.0", "0.23.0"):
            for (let i in obj.assets) {
                if (!obj.assets[i].source) {
                    obj.assets[i]["source"] = base64_blob(obj.assets[i].base64);
                    obj.assets[i]["type"] = obj.assets[i]["source"].type.split("/");
                }
                if (!obj.assets[i].type) {
                    let type = [];
                    (obj.assets[i].base64 as string).replace(/data:(.*)\/(.*);/, (a, b, c) => {
                        type.push(b, c);
                        return "";
                    });
                    obj.assets[i]["type"] = type;
                }
                delete obj.assets[i]?.base64;
                delete obj.assets[i]?.sha;
                delete obj.assets[i]?.url;
            }
            obj.meta.version = "0.24.0";
        case version_in(v, "0.24.0", "0.24.1"):
            {
                for (let i of obj.数据) {
                    w(i.data);
                }
                w(obj.中转站);
                function w(data) {
                    for (let i of data) {
                        if (i.type == "X-MD") {
                            let o = JSON5.parse(i.value);
                            if (o.type == "math") o.type = "latex math";
                            i.value = JSON.stringify(o);
                        } else {
                            if (i.子元素) w(i.子元素);
                        }
                    }
                }
            }
            obj.meta.version = "0.25.0";
        case version_in(v, "0.25.0", "0.25.0"): {
            const o = obj;
            const n: 集type = {
                assets: obj.assets,
                data: {},
                extra: obj.extra,
                meta: obj.meta,
                values: obj.values,
                中转站: [],
                数据: structuredClone(o.数据),
                链接: obj.链接,
                links: obj.links,
            };
            // @ts-ignore
            n.数据.forEach((i) => (i.data = i.data.map((x) => x.id)));
            n.中转站 = o.中转站.map((i) => i.id);
            for (let x of obj.数据) {
                w(x.data);
            }
            w(obj.中转站);
            function w(data) {
                for (let i of data) {
                    if (i.type == "X-X") {
                        if (i.子元素.length && i.子元素[0]?.type != "X-X") {
                            n.data[i.id] = i;
                            i.type = i.子元素[0].type.toLowerCase();
                            i.class = i.子元素[0].class;
                            i.value = i.子元素[0].value;
                            if (i.type === "x-md") i.value = JSON5.parse(i.value);
                            delete i.子元素;
                        } else {
                            n.data[i.id] = i;
                            i.type = i.type.toLowerCase();
                            const c = structuredClone(i.子元素);
                            i.子元素 = i.子元素.map((x) => x.id);
                            if (c) w(c);
                        }
                    }
                }
            }
            obj = n;
            obj.meta.version = "0.26.0";
            console.log(n);
        }
        case version_in(v, "0.26.0", "0.26.0"):
            return obj;
        default:
            put_toast(`文件版本是 ${v}，与当前软件版本 ${packagejson.version} 不兼容，请升级软件`);
    }
}

var 当前画布 = 集.数据[0] as 画布type;

/** 设置集 */
async function set_data(l: 集type) {
    l = version_tr(l);
    for (let i in l) {
        if (集[i]) 集[i] = l[i];
    }

    document.title = get_title();

    画布s.innerHTML = "";

    await set_dependencies(集.meta.dependencies || []);

    for (let i in 集.assets) {
        const s = 集.assets[i];
        if (!s.source.type) 集.assets[i].source = new Blob([s.source], { type: s.type.join("/") });
    }

    let ps = {};
    for (const p of 集.数据) {
        ps[p.id] = render_data(p);
        if (集.meta.focus_page == p.id) {
            当前画布 = p;
            集.meta.focus_page = p.id;
            O = ps[p.id];
            O.style.visibility = "visible";
            zoom_o(Number(O.style.transform.match(/scale\((.*)\)/)[1] || p.p.zoom));
            op = { x: parseFloat(O.style.left), y: parseFloat(O.style.top) };
        }
    }
    reload_side();
    location.hash = `#${集.meta.UUID}`;

    set_css(l.extra.style);
    if (l.extra?.slide) ys_init(l.extra.slide);

    check_webdav_file();
}

/** 侧栏刷新 */
function reload_side() {
    if (O.children[O.children.length - 1]) {
        z.focus(O.children[O.children.length - 1].id);
    }
    l_latex_math();
    tmp_s_reflash();
    assets_reflash();
}

let rez = createEl("div");
rez.onclick = () => {
    z.reflash();
};
rez.innerHTML = icon(reload_svg);
rez.style.width = "16px";
rez.style.height = "16px";
rez.style.position = "relative";
图层_el.before(rez);

/** 渲染画布 */
function render_data(inputdata: 画布type) {
    // return
    let rect: rect = {
        x: inputdata.p.x - (10 + 画布.offsetWidth / 2) / inputdata.p.zoom,
        y: inputdata.p.y - (10 + 画布.offsetHeight / 2) / inputdata.p.zoom,
        w: (画布.offsetWidth + 20) / inputdata.p.zoom,
        h: (画布.offsetHeight + 20) / inputdata.p.zoom,
    };
    let el = createEl("div");
    el.style.visibility = "hidden";
    el.id = inputdata.id;
    el.setAttribute("data-name", inputdata.name);
    let values = {};
    function w(data: data, pid?: string) {
        let text = "";
        for (let id of data) {
            const i = getDataFromId(id);
            if (pid || can_rander_x(id, rect)) {
                let style = i.style ? `style='${i.style}'` : "";
                let _class = i.class ? `class='${i.class}'` : "";
                if (i.value) {
                    values[id] = i.value;
                }
                let s = i.子元素 ? w(i.子元素, i.id) : "";
                if (i.type == "x-x" && !i.id) i.id = uuid_id();
                text += `<x-x id='${i.id}' ${style} ${_class} data-type='${i.type}'>${s}</x-x>`;
            }
            link(i.id).add();
        }
        return text;
    }
    let t = w(inputdata.data);
    el.innerHTML = t;
    el.style.left = -(inputdata?.p?.x || 0) * inputdata.p.zoom + 画布.offsetWidth / 2 + "px";
    el.style.top = -(inputdata?.p?.y || 0) * inputdata.p.zoom + 画布.offsetHeight / 2 + "px";
    el.style.transform = `scale(${inputdata.p.zoom})`;
    画布s.append(el);

    fixed_el();

    function v(data: data) {
        try {
            for (let id of data) {
                const i = getDataFromId(id);
                if (values[id]) {
                    if (get_x_by_id(id)) get_x_by_id(id).value = values[id];
                }
                if (i.子元素) v(i.子元素);
            }
        } catch (error) {
            console.error(error);
        }
    }
    v(inputdata.data);
    values = null;
    return el;
}

/** 选择画布 */
function select_p(id: string) {
    for (let p of 集.数据) {
        if (p.id == id) {
            当前画布 = p;
            集.meta.focus_page = p.id;
        }
    }
    for (let el of 画布s.children) {
        if (el.id == id) {
            O = el as HTMLElement;
            O.style.visibility = "visible";
            set_zoom(O.style.transform);
            op = { x: parseFloat(O.style.left), y: parseFloat(O.style.top) };
        } else {
            (el as HTMLElement).style.visibility = "hidden";
        }
    }
    图层_el.querySelectorAll(":scope > ul > li").forEach((el: HTMLElement) => {
        if (el.getAttribute("data-id") == id) {
            el.classList.add("画布focus");
        } else {
            el.classList.remove("画布focus");
        }
    });
    selected_el = [];
}

/** 转换zoom */
function get_zoom(id: string) {
    let el = elFromId(id);
    let tran = el.style.transform;

    if (!tran || isNaN(Number(tran.match(/scale\((.*)\)/)[1]))) {
        for (let i of 集.数据) {
            if (i.id == id) {
                return i.p.zoom;
            }
        }
        return 1;
    } else {
        return Number(tran.match(/scale\((.*)\)/)[1]);
    }
}

function set_zoom(zooms: string) {
    zoom_o(Number(zooms.match(/scale\((.*)\)/)[1]) || zoom);
}

function render_x(data: srcData[0]) {
    if (O.contains(elFromId(data.id))) return;
    let xel = createX(data.type);
    xel.id = data.id;
    O.append(xel);
    xel.className = data.class;
    xel.setAttribute("style", data.style);
    if (data.type === "x-x") xel.value = data.子元素;
    else xel.value = data.value;
}

function can_rander_x(id: data[0], rect: rect) {
    const data = getDataFromId(id);
    const fc = data;
    let large = fc?.type == "x-file" || fc?.type == "x-graph" || fc?.type == "x-draw";
    let none_layout = !is_data_flex(data) && (data.子元素?.length > 1 || fc?.type == "x-x");
    if (none_layout) {
        let rects: rect[] = [];
        for (let id of data.子元素) {
            const i = getDataFromId(id);
            // if(!i)console.log();

            if (i.rect) rects.push(i.rect);
        }
        none_layout = rect_x_rect(get_out_rect(rects), rect);
    }
    return large || !data.rect || rect_x_rect(data.rect, rect) || none_layout;
}

function check_render_x() {
    if (!集?.数据) return;
    let w = (画布.offsetWidth + 20) / zoom;
    let h = (画布.offsetHeight + 20) / zoom;
    let x = (-el_offset(O).x - 10) / zoom;
    let y = (-el_offset(O).y - 10) / zoom;
    for (let i of 集.数据) {
        if (i.id == 当前画布.id) {
            for (let id of i.data) {
                if (can_rander_x(id, { x, y, w, h })) {
                    render_x(getDataFromId(id));
                } else {
                    elFromId(id)?.remove();
                }
            }
        }
    }
}

const default_style = "@import url('./md.css');";
set_css();

/** 设置文件css样式 */
function set_css(t?: string) {
    t = t || default_style;
    css_style_el.innerHTML = t;
}

function set_dependencies(ds: meta["dependencies"]) {
    let p = [];
    for (let i of ds) {
        let sc = createEl("script");
        sc.src = i.url;
        p.push(
            new Promise((re) => {
                sc.onload = () => {
                    re("");
                };
            })
        );
    }
    return Promise.all(p);
}

function xln_out(obj: 集type) {
    let t = JSON.stringify(obj, null, 2);
    return t;
}

function xln_in(t: string) {
    let obj = JSON5.parse(t);
    return obj;
}

// 绑定文件
var fileHandle;

async function file_load() {
    let file = upload_file.files[0];

    let reader = new FileReader();
    reader.onload = () => {};
    reader.readAsText(file);

    let fs = new zip.fs.FS();
    let o, str;
    await fs.importBlob(file);
    let assets: { [key: string]: Blob } = {};
    for (let i of fs.children) {
        if (i.name == "assets") {
            for (let a of i.children) {
                const zipWriter = new zip.BlobWriter();
                // @ts-ignore
                assets[a.name] = await a.data.getData(zipWriter, { password: store.webdav.加密密钥 });
            }
        } else if (i.name.includes(".xln")) {
            const zipWriter = new zip.TextWriter();
            // @ts-ignore
            str = await i.data.getData(zipWriter, { password: store.webdav.加密密钥 });
            o = JSON5.parse(<string>str);
        }
    }

    if (o.assets && Object.keys(assets).length)
        for (let i in o.assets) {
            let x = () => {
                o.assets[i].source = assets[i];
            };
            await x();
        }

    set_data(o);
    db_can_save = false;
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

// 持久化存储
navigator.storage?.persist();

request.onsuccess = (event) => {
    db = (<any>event.target).result;
    db_get();
    check_backup();
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

var file_list: meta[] = [];

function load_file_side_bar() {
    文件_el.innerHTML = "";
    let load_dav = createEl("div");
    load_dav.innerHTML = icon(cloud_down);
    文件_el.append(load_dav);
    load_dav.onclick = () => {
        get_all_xln();
    };
}

/** 获取文件并渲染 */
function db_get() {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.getAll();

    load_file_side_bar();

    r.onsuccess = () => {
        const result: 集type[] = r.result;
        for (let f of result) {
            file_list.push(f.meta);
        }

        reload_file_list();

        let ihash = false;

        for (let f of result) {
            if (`#${f.meta.UUID}` == location.hash || `#${f.meta.file_name}` == decodeURIComponent(location.hash)) {
                ihash = true;
                set_data(f);
                文件_el.querySelector(`[data-uuid="${f.meta.UUID}"]`).classList.add("selected_item2");
                db_can_save = true;
                set_save_icon();
            }
        }

        if (!ihash) {
            set_data(集);
        }
    };
}

let collator = new Intl.Collator("cn");
type sort_type = { type: "change_time" | "create_time" | "name"; reverse: boolean };

function reload_file_list() {
    file_list = file_list.sort((a, b) => {
        let n = 0;
        switch (store.sort.type) {
            case "change_time":
                n = b.change_time - a.change_time;
                break;
            case "create_time":
                n = b.create_time - a.create_time;
                break;
            case "name":
                n = collator.compare(a.file_name, b.file_name);
                break;
        }
        if (store.sort.reverse) {
            return -1 * n;
        } else {
            return 1 * n;
        }
    });
    for (let f of file_list) {
        let d = createEl("div");
        d.setAttribute("data-uuid", f.UUID);
        let t = createEl("a");
        t.target = "_blank";
        let url = new URL(location.origin);
        url.hash = f.UUID;
        t.href = url.toString();
        t.innerText = f.file_name;
        if (f.url) t.title = f.url;
        let dav = createEl("div");
        let more = createEl("div");
        more.classList.add("more");
        let rename = createEl("div");
        rename.innerHTML = icon(edit_svg);
        rename.onclick = async () => {
            let n = await xprompt("重命名文件", f.file_name);
            if (n) {
                let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
                let r = customerObjectStore.get(f.UUID);
                let j: 集type = null;
                r.onsuccess = () => {
                    j = r.result as 集type;
                    j.meta.file_name = n;
                    r = customerObjectStore.put(j);
                    r.onsuccess = () => {
                        t.innerText = n;
                    };
                };
            }
        };
        let rm = createEl("div");
        rm.innerHTML = icon(remove_svg);
        rm.onclick = async () => {
            let x = await xconfirm(`确定删除文件 ${f.file_name}`);
            if (!x) return;
            let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
            let r = customerObjectStore.delete(f.UUID);
            r.onsuccess = () => {
                d.remove();
                if (f.UUID == 集.meta.UUID) window.close();
            };
        };
        more.append(rm, rename);
        d.append(dav, t, more);
        文件_el.append(d);
    }
}

/** 通过uuid设置文件 */
function set_db_file(uuid: string) {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.get(uuid);
    r.onsuccess = () => {
        set_data(r.result);
    };
}

/** 下载数据库 */
function db_download(name?: string) {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.getAll();
    r.onsuccess = async () => {
        let fs = new zip.fs.FS();
        let assets_dir = fs.addDirectory("assets");
        let data1 = structuredClone(r.result);
        for (let x of data1) {
            for (let i in x.assets) {
                if (x.assets[i].source) {
                    assets_dir.addBlob(i, x.assets[i].source);
                    x.assets[i].source = null;
                }
            }
        }
        let t = JSON.stringify(data1, null, 2);
        fs.addText("xlinkote.json", t);
        let a = createEl("a");
        let blob = await fs.exportBlob();
        a.download = name || `xlinkote_db.zip`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    };
}

/** 上传数据库 */
async function db_load(file: File) {
    let fs = new zip.fs.FS();
    await fs.importBlob(file);
    let assets: { [key: string]: Blob } = {};
    let data;
    for (let i of fs.children) {
        if (i.name == "assets") {
            for (let a of i.children) {
                const zipWriter = new zip.BlobWriter();
                // @ts-ignore
                assets[a.name] = await a.data.getData(zipWriter);
            }
        } else {
            const zipWriter = new zip.TextWriter();
            console.log(i);

            // @ts-ignore
            let str = await i.data.getData(zipWriter);
            data = JSON5.parse(<string>str);
        }
    }

    for (let o of data) {
        if (o.assets && Object.keys(assets).length)
            for (let i in o.assets) {
                if (assets[i]) o.assets[i].source = assets[i];
            }
    }
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    for (let obj of data) {
        let r = customerObjectStore.put(obj);
        r.onerror = (event) => {
            console.error(new Error((<any>event.target).error));
        };
    }
    db_get();
}

elFromId("db_load").onchange = () => {
    let file = (<HTMLInputElement>elFromId("db_load")).files[0];
    db_load(file);
};

function check_backup() {
    let now = new Date();
    if (
        Number(store.backup.频率) &&
        (now.getTime() - Number(localStorage.getItem("backup_last_time"))) / 1000 / 60 / 60 / 24 >
            Number(store.backup.频率)
    ) {
        localStorage.setItem("backup_last_time", String(now.getTime()));
        setTimeout(() => {
            db_download(
                `xln_db_${now.getFullYear().toString().slice(-2)}${(now.getMonth() + 1)
                    .toString()
                    .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now
                    .getHours()
                    .toString()
                    .padStart(2, "0")}.zip`
            );
        }, 10);
    }
    setTimeout(() => {
        check_backup();
    }, 1000 * 60 * 60);
}

// 撤销
type undo_data = { s: any; data: 集type };
var undo_stack: undo_data[] = [],
    undo_i = -1;

function undo(v: boolean) {
    if (v) {
        undo_i--;
        if (undo_i < 0) undo_i = 0;
    } else {
        undo_i++;
        if (undo_i >= undo_stack.length) undo_i = undo_stack.length - 1;
    }
    let data = get_undo_s(undo_i);
    set_data(data.data);

    selections = data.s;
    if (selections[0].id) {
        (elFromId(selections[0].id).querySelector("x-md") as markdown).edit = true;
        let text = (elFromId(selections[0].id).querySelector("x-md") as markdown).text;
        text.selectionStart = selections[0].start;
        text.selectionEnd = selections[0].end;
    }
}

function get_undo_s(i: number): undo_data {
    return undo_stack[i];
}

function push_undo() {
    if (undo_i != undo_stack.length - 1 && undo_i != -1) {
        // 把当前位置的数据移到末
        let pre_data = get_undo_s(undo_i);
        if (!pre_data) return;
        undo_stack.push(pre_data);
        undo_i = undo_stack.length - 1;
    }

    let now_data = structuredClone(get_data());
    if (!now_data) return;
    undo_stack.push({ s: structuredClone(selections), data: now_data });
    if (undo_stack.length > 20) undo_stack.splice(0, 1);
    undo_i = undo_stack.length - 1;

    console.log(undo_stack);
}

/** 下载文件 */
async function download_file() {
    let a = createEl("a");
    let name = get_file_name();
    a.download = `${name}.xln`;
    let b = await 压缩(get_data());
    a.href = URL.createObjectURL(b);
    a.click();
    URL.revokeObjectURL(String(b));
}

var save_timeout = NaN,
    save_dt = 200;

/**
 * # 文件是否可以被保存
 * - 一般db文件可保存；
 * - 新建集不保存，除非设定保存；
 * - 网络来源不保存，除非设定保存；
 * - 本地文件不保存，除非设定保存；
 */
var db_can_save = false;

/**
 * 保存文件，can save时上传到云
 */
async function save_file() {
    if (db_can_save) {
        data_changed();
        put_xln_value();
    } else {
        if (!集.meta.file_name) {
            let fn = await xprompt("文件名", `新建集${uuid_id()}`);
            if (fn) {
                集.meta.file_name = fn;
            }
        }
        db_can_save = true;
        data_changed();
        file_list.push(集.meta);
        load_file_side_bar();
        reload_file_list();
        文件_el.querySelector(`[data-uuid="${集.meta.UUID}"]`).classList.add("selected_item");
    }
    set_save_icon();
}

/** 文件状态改变触发 */
function data_changed() {
    clearTimeout(save_timeout);
    save_timeout = window.setTimeout(() => {
        if (saved) {
            saved = false;
        }
        const data = get_data();
        data.meta.change_time = new Date().getTime();
        write_file(xln_out(data));
        if (db_can_save) {
            db_put(data);
        }
        push_undo();
    }, save_dt);
}

/** 添加画布 */
function add_画布(xname?: string) {
    get_data(); /* 保存之前的画布 */
    let name = xname || `画布${uuid_id()}`;
    let id = uuid_id();
    集.数据.push({ id: id, name, p: { x: 0, y: 0, zoom: 1 }, data: [] });
    集.meta.focus_page = id;
    set_data(集);
    data_changed();
}

/** 拖放数据处理 */
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
                add_file(f.type, null, f, x, y);
            }
        }
    } else {
        let type = data.types[data.types.length - 1] || "text/plain";
        let text = data.getData(type);
        add_file(type, text, null, x, y);
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
import TurndownService from "turndown";
/** 添加文件或文字到画布 */
function add_file(type: string, text: string, data: File, x: number, y: number) {
    let types = type.split("/");
    let xel = createX(null);
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    if (types[0] == "text") {
        let md = createEl("x-md");
        xel.type = "x-md";
        xel.append(md);
        if (type == "text/html") {
            let turndownService = new TurndownService({ headingStyle: "atx" });
            md.value = { type: "text", text: turndownService.turndown(text) };
        } else if (type == "text/xln") {
            let data = JSON5.parse(text) as { data: srcData[0]; links: [string, string][] };
            xel.setAttribute("class", data.data.class);
            xel.value = data.data.子元素;
            for (let i of data.links) {
                link(i[0]).add(i[1]);
            }
        } else {
            try {
                let data = JSON5.parse(text) as { data: srcData[0]; links: [string, string][] };
                xel.setAttribute("class", data.data.class);
                xel.value = data.data.子元素;
                for (let i of data.links) {
                    link(i[0]).add(i[1]);
                }
            } catch (error) {
                md.value = { type: "p", text };
            }
        }
    } else {
        let id = put_assets(null, data);
        let file = createEl("x-file");
        xel.type = "x-file";
        xel.append(file);
        file.value = JSON.stringify({ r: true, id });
    }

    get_data();
}

/** 摘录 */
document.addEventListener("message", (msg: any) => {
    alert(msg.data);
    const data = JSON5.parse(msg.data);
    if (data.m == "add") {
        if (集.meta.file_name != "摘录") {
            // 是否存在摘录文件
            for (let i of file_list) {
                if (i.file_name == "摘录") {
                    set_db_file(i.UUID);
                }
            }
            // 新建摘录文件
            if (集.meta.file_name != "摘录") {
                let j: 集type;
                // 避免影响当前已打开文件
                if (集.meta.file_name) {
                    j = new_集("");
                } else {
                    j = 集;
                }
                j.meta.file_name = "摘录";
                const id = uuid_id();
                j.中转站.push(id);
                j.data[id] = {
                    id: id,
                    style: "",
                    class: "",
                    value: data.text,
                    type: "x-md",
                };
                set_data(j);
            }
        }
        data_changed();
    }
});

/** 添加资源到assets */
function put_assets(blob: Blob, file: File) {
    let has: boolean | string = false;

    for (let i in 集.assets) {
        if (file && file.size == 集.assets[i].source.size && file.name == 集.assets[i].source["name"]) {
            has = i;
            break;
        }
    }

    if (!has) {
        let id = uuid_id();
        集.assets[id] = {
            type: (blob?.type || file?.type || "/").split("/") as [string, string],
            source: blob || file,
        };
        assets_reflash();
        return id;
    } else {
        return has;
    }
}

function get_assets(id: string) {
    let x = 集.assets[id];
    return URL.createObjectURL(x.source);
}

/** 刷新资源栏 */
function assets_reflash() {
    assets_el.innerHTML = "";
    for (let i in 集.assets) {
        let div = createEl("div");
        assets_el.append(div);
        let file = createEl("x-file");
        div.append(file);
        file.value = JSON.stringify({ r: true, id: i });

        let bar = createEl("div");
        let size_el = createEl("div");
        size_el.innerText = bytes_to_size(集.assets[i].source.size);
        let r = createEl("div");
        r.innerHTML = icon(remove_svg);
        let id_el = createEl("div");
        id_el.innerText = i;
        div.append(bar);
        r.onclick = () => {
            delete 集.assets[i];
            div.remove();
        };

        let goto = createEl("div");
        goto.classList.add("assets_goto");

        for (let i in 集.data) {
            const f = 集.data[i];
            if (f?.type == "x-file") {
                if (f.value.id == i) {
                    r.classList.add("not_click");
                    if (!集.中转站.includes(i)) {
                        let go = createEl("div");
                        go.onclick = () => {
                            jump_to_x_link(i);
                        };
                        goto.append(go);
                    }
                }
            }
        }

        function bytes_to_size(sizes: number) {
            let mYsize = sizes;
            if (mYsize == 0) return 0 + "B";
            if (mYsize > 1024 ** 3) {
                return (mYsize / 1024 / 1024 / 1024).toFixed(2) + "GB";
            } else if (mYsize > 1024 ** 2) {
                return (mYsize / 1024 / 1024).toFixed(2) + "MB";
            } else if (mYsize > 1024) {
                return (mYsize / 1024).toFixed(2) + "KB";
            } else {
                return mYsize.toFixed(2) + "B";
            }
        }

        let add = createEl("div");
        add.onclick = (e) => {
            let p = e2p(e);
            let xel = createX("x-file");
            xel.style.left = p.x + "px";
            xel.style.top = p.y + "px";
            z.push(xel);
            let file = createEl("x-file");
            xel.append(file);
            file.value = JSON.stringify({ r: true, id: i });
        };
        add.innerHTML = icon(add_svg);

        let fileHandle;
        let download = createEl("div");
        download.onclick = async () => {
            if (window.showSaveFilePicker) {
                fileHandle = await window.showSaveFilePicker({
                    suggestedName: `${get_file_name()}资源文件${i}`,
                });
                const writable = await fileHandle.createWritable();
                await writable.write(集.assets[i].source);
                await writable.close();
                async.style.display = "";
                async_init = true;
                async_file();
            } else {
                let a = createEl("a");
                let name = get_file_name();
                a.download = `${name}资源文件${i}`;
                a.href = get_assets(i);
                a.click();
                URL.revokeObjectURL(a.href);
            }
        };
        download.innerHTML = icon(down_svg);

        let async_init = false;
        let async = createEl("div");
        async.onclick = async () => {
            if (!fileHandle) return;
            if (async_init) {
                async_init = false;
            } else {
                async_init = true;
                async_file();
            }
        };
        async.innerHTML = icon(binding_svg);
        async function async_file() {
            let r: File = await fileHandle.getFile();
            if (r.size != 集.assets[i].source.size) {
                集.assets[i].source = r;
            }
            if (async_init) {
                setTimeout(async_file, 1000);
            }
        }
        async.style.display = "none";

        bar.append(id_el, size_el, goto, add, download, async, r);
    }
}

/** 新建绘制元素 */
function new_draw() {
    let xel = createX("x-draw");
    xel.id = uuid_id();
    xel.style.left = -el_offset(O).x / zoom + "px";
    xel.style.top = -el_offset(O).y / zoom + "px";
    let draw = createEl("x-draw");
    draw.setAttribute("width", String(画布.offsetWidth / zoom));
    draw.setAttribute("height", String(画布.offsetHeight / zoom));
    xel.append(draw);

    focus_draw_el = draw;
    z.push(xel, O.lastElementChild as x);
}
var focus_draw_el = null as draw;
画布.onpointerdown = () => {
    if (模式 == "绘制") {
        penc_el.classList.remove("color_show");
        pen_el.classList.remove("pen_show");
        new_draw(); // 一个笔画就创建一个元素
        penc_el.value = (<draw>focus_draw_el).pen.color;
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
        (<draw>focus_draw_el).clip();
        data_changed();
    }
};

// 色盘
color_yl.style.background = "#000";
color_yl.onclick = (e) => {
    if (e.target == color_yl) penc_el.classList.toggle("color_show");
};
penc_el.addEventListener("input", () => {
    let el = get_x_by_id(z.聚焦元素)?.querySelector("x-draw") as draw;
    if (el && 模式 == "设计") {
        el.main_svg.querySelectorAll("*").forEach((el) => {
            if (el.getAttribute("fill")) {
                el.setAttribute("fill", penc_el.value);
            }
            if (el.getAttribute("stroke-width")) {
                el.setAttribute("stroke-width", penc_el.value);
            }
        });
    }
    color_yl.style.background = penc_el.value;
    pen_width_el.color = penc_el.value;
});

elFromId("笔").onclick = (e) => {
    if (e.target == pen_el.parentElement) pen_el.classList.toggle("pen_show");
};

window.onbeforeunload = () => {
    if (!集.meta.file_name && !(画布s.childElementCount == 1 && O.innerHTML == "")) return true;
};

// 导出
import html2canvas from "html2canvas";
elFromId("导出图片").onclick = to_canvas;
function to_canvas() {
    for (let m of document.querySelectorAll("mjx-assistive-mml")) {
        m.remove();
    }
    html2canvas(画布, { scale: 1 / zoom }).then(function (canvas: HTMLCanvasElement) {
        let url = canvas.toDataURL();
        let a = createEl("a");
        let name = get_file_name();
        a.download = `${name}.png`;
        a.href = url;
        a.click();
    });
}

function get_x_by_id(id: string) {
    return elFromId(id) as x;
}

/** 获取存在链接值的元素 */
function get_link_el_by_id(id: string) {
    return elFromId(id) as x | xlink;
}

class 图层 {
    聚焦元素 = <string>null;

    create_li(i: srcData[0]) {
        let li = createEl("li");
        let c = createEl("input");
        c.type = "checkbox";
        let s = createEl("span");
        s.innerText = i.id;
        li.setAttribute("data-id", i.id);
        li.append(c);
        li.append(s);
        if (is_smallest_data_el(i.id)) {
            let add_link = createEl("x-link-add");
            li.append(add_link);
            add_link.value = i.id;
        }
        c.onclick = () => {
            li.querySelectorAll("input").forEach((el) => {
                el.checked = c.checked;
            });
            selected_el = [];
            图层_el.querySelectorAll("input").forEach((el) => {
                if (el.checked) {
                    selected_el.push(el.parentElement.getAttribute("data-id"));
                    render_select_rects();
                }
            });
        };
        s.onclick = () => {
            jump_to_x_link(i.id);
            图层_el.querySelectorAll("input").forEach((el) => {
                if (el.checked) {
                    this.focus(el.parentElement.getAttribute("data-id"));
                }
            });
        };
        li.onpointerenter = () => {
            preview_x_link(i.id);
        };
        li.onpointermove = (e) => {
            window.requestAnimationFrame(() => {
                set_viewer_posi(li.offsetWidth + li.getBoundingClientRect().left + 8, e.clientY);
            });
        };
        if (this.聚焦元素 == i.id && selected_el.length == 1) {
            this.focus(i.id);
            c.checked = true;
        }
        if (i?.子元素?.length > 0) {
            const f = i;
            if (f.type != "x-x") {
                const type = {
                    "x-md": "md",
                    "x-draw": "墨迹",
                    "x-file": "文件",
                    "x-record": "录音机",
                    "x-calendar": "日历",
                    "x-time": "计时器",
                    "x-link-arrow": "箭头链接",
                    "x-graph": "几何",
                };
                s.innerText += ` ${type[f.type.toLowerCase()] || f.type}`;
            } else {
                let x = createEl("img");
                x.src = ul_show_svg;
                s?.before(x);
                x.onclick = () => {
                    li.classList.toggle("层ul_hide");
                };
            }
        }
        return li;
    }

    /**
     * 从数据渲染图层侧栏
     * @param nosave 不触发data change
     */
    reflash(nosave?: boolean) {
        图层_el.innerHTML = "";
        /**
         * 遍历walker
         * @param data 数据
         * @param pel 要把ul添加到的目标元素
         */
        let w = (data: data, pel: HTMLElement) => {
            let ul = createEl("ul");
            let ulf = document.createDocumentFragment();
            for (let n in data) {
                const i = getDataFromId(data[n]);

                if (i.id && get_x_by_id(i.id)) get_x_by_id(i.id).style.zIndex = String(Number(n) + 1);
                if (i.type != "x-x") {
                    return;
                } else {
                    if (i.id && get_x_by_id(i.id) && is_flex(get_x_by_id(i.id)) == "flex")
                        get_x_by_id(i.id).style.setProperty("--z", String(i.子元素.length));
                }
                图层_el.querySelectorAll("input").forEach((el) => {
                    if (selected_el.includes(el.parentElement.getAttribute("data-id"))) {
                        el.checked = true;
                    } else {
                        el.checked = false;
                    }
                });

                const li = this.create_li(i);

                if (i?.子元素?.length > 0) {
                    w(i.子元素, li);
                }
                if (ulf.firstElementChild) {
                    ulf.firstElementChild.before(li);
                } else {
                    ulf.append(li);
                }
            }
            ul.append(ulf);
            if (pel.children.length > 0) {
                pel.querySelector("span").after(ul);
            } else {
                pel.append(ul);
            }
        };
        let root_ul = createEl("ul");
        图层_el.append(root_ul);
        root_ul.onpointerleave = () => {
            view_el.classList.add("viewer_hide");
        };
        for (let i of 集.数据) {
            let li = createEl("li");
            let s = createEl("span");
            let text = createEl("span");
            text.innerText = `${i.name}`;
            s.append(text);
            li.setAttribute("data-id", i.id);
            if (i.id == 集.meta.focus_page) {
                li.classList.add("画布focus");
            }
            let ul_img = createEl("img");
            ul_img.src = ul_show_svg;
            ul_img.onclick = () => {
                li.classList.toggle("层ul_hide");
            };
            s.onclick = () => {
                for (let el of 画布s.children) {
                    let this_li = root_ul.querySelector(`li[data-id="${el.id}"]`);
                    if (el.id == i.id) {
                        if (this_li.classList.contains("层ul_hide")) {
                            this_li.classList.remove("层ul_hide");
                        } else {
                            this_li.classList.add("层ul_hide");
                        }
                    } else {
                        this_li.classList.add("层ul_hide");
                    }
                }
                select_p(i.id);
            };
            li.append(ul_img, s);
            w(i.data, li);
            if (i.id != 当前画布.id) {
                li.classList.add("层ul_hide");
            }
            let more = createEl("div");
            more.classList.add("more");
            let idel = createEl("span");
            idel.innerText = i.id;
            let rename = createEl("div");
            rename.innerHTML = icon(edit_svg);
            rename.onclick = async () => {
                let n = await xprompt("重命名画布", i.name);
                if (n) {
                    elFromId(i.id).setAttribute("data-name", n);
                    for (let p of 集.数据) {
                        if (p.id == i.id) {
                            p.name = n;
                        }
                    }
                    get_data();
                }
            };
            let rm = createEl("div");
            rm.innerHTML = icon(remove_svg);
            rm.onclick = async () => {
                if (画布s.children.length == 1) return;
                let x = await xconfirm(`确定删除画布 ${i.name}`);
                if (!x) return;
                z.remove(elFromId(i.id).querySelector(":scope > x-x").id);
                elFromId(i.id).remove();
                for (let pi in 集.数据) {
                    if (集.数据[pi].id == i.id) {
                        集.数据.splice(Number(pi), 1);
                    }
                }
                if (i.id == 当前画布.id) {
                    let id = 画布s.children[0].id;
                    select_p(id);
                    z.focus(O.children[O.children.length - 1].id);
                }
                li.remove();
                get_data();
            };
            more.append(idel, rm, rename);
            s.append(more);
            root_ul.append(li);
        }
        document.documentElement.style.setProperty("--zest-index", String(当前画布.data.length));

        if (!nosave) data_changed();
    }

    add(id: string) {
        集_for_each((data, p, path) => {
            if (data.id == id) {
                let ppel = getDataFromId(path[path.length - 1]);
                if (!data.style.includes("z-index") && !(is_data_flex(ppel) == "flex")) {
                    set_data_style(data, "z-index", String(ppel.子元素.length + 1));
                }
                let li = this.create_li(data);
                let pli = 图层_el.querySelector(`li[data-id="${path[path.length - 1]}"]`);
                if (pli?.querySelector(":scope > ul")) {
                    pli.querySelector(":scope > ul").insertAdjacentElement("afterbegin", li);
                } else {
                    get_data();
                }
            }
        });
        link(id).add();
    }

    push(el: x, pel?: x) {
        el.id = el.id === "undefined" || !el.id ? `${uuid_id()}` : el.id;
        let ppel = pel || O;
        if (!el.style.zIndex && !(is_flex(ppel) == "flex")) {
            el.style.zIndex = String(ppel.childElementCount + 1);
        }
        ppel.append(el);
        let li = this.create_li(get_x_out_value(el));
        let pli = 图层_el.querySelector(`li[data-id="${ppel.id}"]`);
        if (pli?.querySelector(":scope > ul")) {
            pli.querySelector(":scope > ul").insertAdjacentElement("afterbegin", li);
        } else {
            get_data();
        }
        this.focus(el.id);
        link(el.id).add();
    }

    /**
     * 移除元素
     * @param id id
     * @param p 是否仅在画布移除
     */
    remove(id: string, p?: boolean) {
        if (!p) {
            link(id).rm();
            delete 集.values[id];
        }
        get_x_by_id(id)
            .querySelectorAll("x-x, x-link")
            .forEach((el) => {
                if (!p) link(el.id).rm();
                breadcrumbs_el.querySelector(`div[data-id="${el.id}"]`)?.remove();
            });
        get_x_by_id(id)?.remove();
        图层_el.querySelector(`li[data-id="${id}"]`)?.remove();
        breadcrumbs_el.querySelector(`div[data-id="${id}"]`)?.remove();
        remove_x_data(id);
        render_select_rects();
        data_changed();
    }

    move(id: string, toid: string, posi?: number) {
        let li = 图层_el.querySelector(`li[data-id="${id}"]`);
        let ul = 图层_el.querySelector(`li[data-id="${toid}"] > ul`);
        if (li && ul) {
            if (posi) {
                ul.children[ul.children.length - posi].before(li);
            } else {
                ul.children[ul.children.length - 1].after(li);
            }
        }
    }

    focus(id: string) {
        let el = get_x_by_id(id);
        this.聚焦元素 = id;
        for (let l of 图层_el.querySelectorAll("input")) {
            if (id == l.parentElement.getAttribute("data-id")) {
                l.checked = true;
            } else {
                l.checked = false;
            }
        }
        focus_draw_el = null;
        if (el?.querySelector("x-draw") && 模式 == "绘制") focus_draw_el = el.querySelector("x-draw") as draw;

        selected_el = [];
        selected_el.push(id);
        render_select_rects();
        set_style(id);
        load_xywh();
        load_value();

        add_bci(id);

        link(id).value("0");

        if (模式 == "设计") {
            let d = el?.querySelector("x-draw") as draw;
            if (d) {
                penc_el.value = d.pen.color;
            }
        }
    }

    get(id: string) {
        let w = (data: data) => {
            for (let n in data) {
                const i = data[n];
                if (i == id) return { n: Number(n), data };
                const c = getDataFromId(i);
                if (c?.子元素?.length > 0) {
                    w(c.子元素);
                }
            }
        };
        return w(当前画布.data);
    }

    mv(array: data, i: number, t: number) {
        if (t < 0 || t >= array.length) return;
        array.splice(t, 0, array.splice(i, 1)[0]);
    }

    底层(id: string) {
        let v = this.get(id);
        this.mv(v.data, v.n, 0);
    }
    下一层(id: string) {
        let v = this.get(id);
        this.mv(v.data, v.n, v.n - 1);
    }
    上一层(id: string) {
        let v = this.get(id);
        this.mv(v.data, v.n, v.n + 1);
    }
    顶层(id: string) {
        let v = this.get(id);
        this.mv(v.data, v.n, v.data.length - 1);
    }
}

var z = new 图层();

function getDataFromId(id: string) {
    const x = 集.data[id];
    if (!x) {
        console.log(id);
    }

    return x || null;
}

function for_each(data: data, f: (data: srcData[0], i: number, path?: data) => boolean | void) {
    w(data, []);
    function w(data: data, path: data) {
        for (let i in data) {
            const di = getDataFromId(i);
            let stop = f(di, Number(i), path);
            if (!stop) {
                if (di.子元素) {
                    w(di.子元素, path.concat(data[i]));
                }
            } else {
                break;
            }
        }
    }
}
function 集_for_each(f: (data: srcData[0], p?: 画布type, path?: data) => boolean | void) {
    for (let i of 集.数据) {
        w(i.data, i, []);
    }
    function w(data: data, p: 画布type, path: data) {
        for (let i of data) {
            const di = getDataFromId(i);
            let stop = f(di, p, path);
            if (!stop) {
                if (di.子元素) {
                    w(di.子元素, p, path.concat(i));
                }
            } else {
                break;
            }
        }
    }
}
function get_x_data(id: string) {
    return getDataFromId(id);
}

function removeXID(id: string) {
    for (let i of 集.数据) {
        w(i.data);
    }
    function w(data: data) {
        for (let i in data) {
            const x = getDataFromId(data[i]);
            if (x.type == "x-x" && x.id == id) {
                data.splice(Number(i), 1);
            } else {
                if (x.子元素) w(x.子元素);
            }
        }
    }
}
function remove_x_data(id: string) {
    removeXID(id);
    delete 集.data[id];
}

function move_x_data(id: string, to: string, posi?: number) {
    let d: data[0];
    for (let i of 集.数据) {
        w(i.data);
    }
    function w(data: data) {
        for (let i in data) {
            const x = getDataFromId(data[i]);
            if (x.type == "x-x" && x.id == id) {
                d = data.splice(Number(i), 1)[0];
            } else {
                if (x.子元素) w(x.子元素);
            }
        }
    }
    for (let i of 集.数据) {
        if (i.id == to) {
            i.data.splice(posi || i.data.length, 0, d);
            return;
        }
    }
    集_for_each((data) => {
        if (data.id == to && d) {
            if (posi) {
                data.子元素.splice(posi, 0, d);
            } else {
                data.子元素.push(d);
            }
            return true;
        }
    });
}

function addXData(id: string, v: srcData[0]) {
    集.data[id] = v;
}

function set_data_style(el: srcData[0], x: string, v: string) {
    let ns = el.style.split(";").reduce((styleObj, rule) => {
        if (!rule.trim()) return styleObj;
        const [key, value] = rule.split(":");
        styleObj[key.trim()] = value.trim();
        return styleObj;
    }, {});
    ns[x] = v;
    if (!v) delete ns[x];
    el.style = Object.entries(ns)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ");
}

xywh_x_el.oninput = () => {
    if (get_x_by_id(z.聚焦元素)) get_x_by_id(z.聚焦元素).style.left = xywh_x_el.value + "px";
    集_for_each((data) => {
        if (data.id == z.聚焦元素) {
            set_data_style(data, "left", xywh_x_el.value);
            return true;
        }
    });
    data_changed();
};
xywh_y_el.oninput = () => {
    if (get_x_by_id(z.聚焦元素)) get_x_by_id(z.聚焦元素).style.top = xywh_y_el.value + "px";
    集_for_each((data) => {
        if (data.id == z.聚焦元素) {
            set_data_style(data, "top", xywh_y_el.value);
            return true;
        }
    });
    data_changed();
};
xywh_w_el.oninput = () => {
    if (get_x_by_id(z.聚焦元素)) get_x_by_id(z.聚焦元素).style.width = xywh_w_el.value + "px";
    集_for_each((data) => {
        if (data.id == z.聚焦元素) {
            set_data_style(data, "width", xywh_w_el.value);
            return true;
        }
    });
    data_changed();
};
xywh_h_el.oninput = () => {
    if (get_x_by_id(z.聚焦元素)) get_x_by_id(z.聚焦元素).style.height = xywh_h_el.value + "px";
    集_for_each((data) => {
        if (data.id == z.聚焦元素) {
            set_data_style(data, "height", xywh_h_el.value);
            return true;
        }
    });
    data_changed();
};
function load_xywh() {
    let fe = get_x_data(z.聚焦元素)?.rect;
    if (!fe) return;
    xywh_x_el.value = String(fe.x);
    xywh_y_el.value = String(fe.y);
    xywh_w_el.value = String(fe.w);
    xywh_h_el.value = String(fe.h);
}

import css_properties_file from "../../lib/css/CSSProperties.json?raw";
const css_properties = JSON5.parse(css_properties_file) as {
    pv: { [key: string]: { values: string[]; type?: string } };
    color: string[];
};

let cssp = css_properties.pv;
let css_t: string[] = [];
for (let i in css_properties.pv) {
    if (css_properties.pv[i].type == "color") {
        cssp[i].values = cssp[i].values.concat(css_properties.color);
    }
    for (let j of cssp[i].values) {
        css_t.push(`${i}: ${j}`);
    }
}

style_list.classList.add("style_com_list_hide");
function add_style_item() {
    let key = createEl("input");
    let value = createEl("input");
    let p = createEl("div");
    p.append(key, ": ", value);
    key.oninput = key.onfocus = () => {
        change_input_w(key);
        set_list(key);
        style_list.innerHTML = "";
        search(Object.keys(cssp), key.value, (t) => {
            key.value = t;
            change_input_w(key);
            value.focus();
            style_to_el();
        });
        search(css_t, key.value, (t) => {
            key.value = t.split(":")[0].trim();
            value.value = t.split(":")[1].trim();
            change_input_w(key);
            change_input_w(value);
            value.focus();
            style_to_el();
        });
        style_to_el();
    };
    value.oninput = value.onfocus = () => {
        change_input_w(value);
        set_list(value);
        style_list.innerHTML = "";
        if (cssp[key.value.trim()]) {
            search(cssp[key.value.trim()].values, value.value, (t) => {
                value.value = t;
                change_input_w(value);
                style_to_el();
            });
        }
        style_to_el();
    };
    key.onblur = value.onblur = () => {
        style_list.classList.add("style_com_list_hide");
        if (key.value == "") {
            p.remove();
        }
    };
    function set_list(el: HTMLElement) {
        let r = el_offset(el, style_list.parentElement);
        style_list.style.top = r.y + r.h + "px";
        style_list.style.left = r.x + "px";
        style_list.classList.remove("style_com_list_hide");
    }
    function search(list: string[], text: string, fn?: (text: string) => void) {
        const fuse = new Fuse(list, {
            includeMatches: true,
            findAllMatches: true,
            useExtendedSearch: true,
            includeScore: true,
        });
        let fr = fuse.search(text);
        let result: { l: readonly FuseResultMatch[] }[] = [];
        for (let i of fr) {
            result.push({
                l: i.matches,
            });
        }
        if (fr.length == 0) {
            for (let i of list) {
                result.push({
                    l: [{ indices: [[0, -1]], value: i }],
                });
            }
        }
        for (let i of result) {
            let div = createEl("div");
            let span = mt(i.l);
            div.append(span);
            if (css_properties.color.includes(span.innerText)) {
                let el = createEl("span");
                el.style.backgroundColor = span.innerText;
                span.before(el);
                el.classList.add("style_color");
            }
            style_list.append(div);
            if (fn)
                div.onpointerdown = () => {
                    fn(span.innerText);
                    style_list.classList.add("style_com_list_hide");
                };
        }
    }
    function mt(m: readonly FuseResultMatch[]) {
        let p = createEl("span");
        for (let j of m) {
            let indices = [...j.indices].sort((a, b) => a[0] - b[0]);
            for (let i = 0; i < indices.length; i++) {
                const k = indices[i];
                let h = createEl("span");
                h.innerText = j.value.slice(k[0], k[1] + 1);
                if (Number(i) == indices.length - 1) {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h, j.value.slice(k[1] + 1));
                } else {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h);
                }
            }
        }
        return p;
    }
    return { el: p, key, value };
}

function change_input_w(el: HTMLInputElement) {
    el.style.width = `${el.value.length}ch`;
}

function set_style(id: string) {
    let style = get_x_data(id)?.style;
    if (!style) return;
    el_style.setAttribute("data-id", id);
    el_style.innerHTML = "";
    let l = style.split(";");
    for (let i of l) {
        if (!i) continue;
        let item = add_style_item();
        el_style.append(item.el);
        item.key.value = i.split(":")[0].trim();
        item.value.value = i.split(":")[1].trim();
        change_input_w(item.key);
        change_input_w(item.value);
    }

    let add_style_item_el = createEl("div");
    add_style_item_el.innerHTML = icon(add_svg);
    el_style.append(add_style_item_el);
    add_style_item_el.onclick = () => {
        let item = add_style_item();
        add_style_item_el.before(item.el);
        item.key.focus();
    };
}

function style_to_el() {
    let t = "";
    for (let i of el_style.children) {
        if (i.querySelector("input"))
            t += `${i.querySelectorAll("input")[0].value}:${i.querySelectorAll("input")[1].value};`;
    }
    集_for_each((data) => {
        if (data.id == el_style.getAttribute("data-id")) {
            data.style = t;
            return true;
        }
    });
    elFromId(el_style.getAttribute("data-id"))?.setAttribute("style", t);
    data_changed();
}

switch_global_style.onclick = () => {
    if (el_style.querySelector("textarea")) {
        set_style(el_style.getAttribute("data-id"));
    } else {
        el_style.innerHTML = "";
        let text = createEl("textarea");
        el_style.append(text);
        text.value = 集.extra.style;
        text.onchange = () => {
            集.extra.style = text.value || default_style;
            set_css(集.extra.style);
            data_changed();
        };
    }
};

// url
if (location.search) {
    let p = new URLSearchParams(location.search);
    if (p.get("src")) {
        fetch(p.get("src"))
            .then((v) => v.text())
            .then((v) => {
                let o = xln_in(v) as any;
                set_data(o);
            });
    }
}

// 云
import { createClient, FileStat } from "webdav";
var client = createClient(store.webdav.网址, {
    username: store.webdav.用户名,
    password: store.webdav.密码,
});

/** 获取云文件列表并渲染 */
async function get_all_xln() {
    let dav_files = (await client.getDirectoryContents("/", { deep: true, glob: "**.xln" })) as any[];
    let rp = await client.getDirectoryContents("/");
    let 删除路径 = "";
    // @ts-ignore
    let rplf = rp[rp.length - 1];
    let b = new RegExp(`${rplf.basename}$`);
    删除路径 = rplf.filename.replace(b, "");
    for (let f of file_list) {
        let dav: HTMLElement;
        for (let el of 文件_el.querySelectorAll(":scope > div")) {
            if (el.getAttribute("data-uuid") == f.UUID) {
                dav = el.firstElementChild as HTMLElement;
                break;
            }
        }
        for (let fi of dav_files) {
            if ("/" + fi.filename.replace(new RegExp(`^${删除路径}`), "") == f.url) {
                dav.onclick = () => {
                    get_file(fi.filename);
                };
                dav.innerHTML = icon(cloud_down);
                dav_files = dav_files.filter((v) => v != fi);
                break;
            }
        }
    }
    for (let fi of dav_files) {
        let d = createEl("div");
        let t = rename_el();
        t.value = fi.basename.replace(/\.xln$/, "") || "";
        t.title = "/" + fi.filename.replace(new RegExp(`^${删除路径}`), "");
        let dav = createEl("div");
        dav.innerHTML = icon(cloud);
        d.append(dav, t);
        文件_el.append(d);
        t.onclick = dav.onclick = () => {
            get_file(fi.filename);
        };
    }
    async function get_file(filename: string) {
        let o = await get_xln_value("/" + filename.replace(new RegExp(`^${删除路径}`), ""));
        let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
        let r = customerObjectStore.get(o.meta.UUID);
        r.onsuccess = () => {
            let r = customerObjectStore.put(o);
            r.onsuccess = () => {
                open_in_win(o.meta.UUID);
            };
        };
        r.onerror = () => {
            let r = customerObjectStore.put(o);
            r.onsuccess = () => {
                open_in_win(o.meta.UUID);
            };
        };
    }
}

var now_dav_data = "";

/** 获取云文件数据 */
async function get_xln_value(path: string) {
    show_upload_pro();
    let str = "";
    let o: 集type;
    try {
        let b = (await client.getFileContents(path, {
            onDownloadProgress: (e) => {
                show_upload_pro(e.loaded, e.total);
            },
        })) as ArrayBuffer;
        let blob = new Blob([b]);
        let fs = new zip.fs.FS();
        await fs.importBlob(blob);
        let assets: { [key: string]: Blob } = {};
        for (let i of fs.children) {
            if (i.name == "assets") {
                for (let a of i.children) {
                    const zipWriter = new zip.BlobWriter();
                    // @ts-ignore
                    assets[a.name] = await a.data.getData(zipWriter, { password: store.webdav.加密密钥 });
                }
            } else if (i.name.includes(".xln")) {
                const zipWriter = new zip.TextWriter();
                // @ts-ignore
                str = await i.data.getData(zipWriter, { password: store.webdav.加密密钥 });
                o = JSON5.parse(<string>str);
            }
        }

        if (o.assets && Object.keys(assets).length)
            for (let i in o.assets) {
                let x = () => {
                    o.assets[i].source = assets[i];
                };
                await x();
            }
    } catch (e) {
        let str = (await client.getFileContents(path, {
            format: "text",
            onDownloadProgress: (e) => {
                show_upload_pro(e.loaded, e.total);
            },
        })) as string;
        o = JSON5.parse(<string>str);
    }
    now_dav_data = str;

    set_webdav_file_time(path, ((await client.stat(path)) as FileStat).lastmod);
    return o as 集type;
}

/** 上传到云 */
async function put_xln_value() {
    let path = 集.meta.url;
    if (!path) {
        let n = await xprompt("上传的文件名", get_file_name());
        if (!n) return;
        set_title(n);
        path = `/${n}.xln`;
        集.meta.url = path;
        data_changed();
    }
    let b = await 压缩(get_data());
    let reader = new FileReader();
    reader.onload = async function () {
        console.log(this.result);
        show_upload_pro();
        let v = await client.putFileContents(path, this.result, {
            onUploadProgress: (e) => {
                show_upload_pro(e.loaded, e.total);
            },
        });
        show_upload_v(v);
        const stat = (await client.stat(path)) as FileStat;
        set_webdav_file_time(path, stat.lastmod);
    };
    reader.readAsArrayBuffer(b);
}
function show_upload_v(v: boolean) {
    if (v) {
        put_toast("✅文件上传成功");
    } else {
        put_toast("❌文件上传失败", 5);
    }
}
function show_upload_pro(l?: number, t?: number) {
    let p = createEl("progress");
    if (l && t) p.value = l / t;
    toast.classList.add("toast_show");
    toast.innerHTML = "";
    toast.append(p);
    if (l >= t) {
        toast.classList.remove("toast_show");
    }
}

var auto_put_xln_t = NaN;

let file_time = {};
function set_webdav_file_time(path: string, time: string) {
    file_time[path] = time;
    localStorage.setItem("webdav_file_time", JSON.stringify(file_time));
}
function get_webdav_file_time(path: string) {
    file_time = JSON5.parse(localStorage.getItem("webdav_file_time") || "{}");
    return file_time[path];
}
async function check_webdav_file() {
    const path = 集.meta.url;
    if (path && store.webdav.网址) {
        let p = get_webdav_file_time(path);
        let n = ((await client.stat(path)) as FileStat).lastmod;
        if (new Date(n).getTime() > new Date(p).getTime()) {
            toast.classList.add("toast_show");
            let download = createEl("div");
            download.innerHTML = icon(down_svg);
            download.onclick = () => {
                get_xln_value(path);
            };
            let cancel = createEl("div");
            cancel.innerHTML = icon(close_svg);
            cancel.onclick = () => {
                toast.classList.remove("toast_show");
            };
            setTimeout(() => {
                toast.classList.remove("toast_show");
            }, 5 * 1000);

            toast.append("云端有新上传的版本", download, cancel);
        }
    }
}

document.onvisibilitychange = (e) => {
    if (!document.hidden) {
        check_webdav_file();
    }
};

/** 自动上传到云 */
function auto_put_xln() {
    if (Number(store.webdav.自动上传)) {
        auto_put_xln_t = window.setTimeout(() => {
            if (now_dav_data != JSON.stringify(get_data())) {
                put_xln_value();
                now_dav_data = JSON.stringify(get_data());
            }
        }, Number(store.webdav.自动上传) * 60 * 1000);
    }
}

import * as zip from "@zip.js/zip.js";

async function 压缩(data: 集type) {
    let fs = new zip.fs.FS();
    let assets_dir = fs.addDirectory("assets");
    let data1 = structuredClone(data);
    for (let i in data1.assets) {
        assets_dir.addBlob(i, data1.assets[i].source);
        data1.assets[i].source = null;
    }
    let t = JSON.stringify(data, null, 2);
    fs.addText("text.xln", t);
    return fs.exportBlob({ password: store.webdav.加密密钥 });
}

function open_in_win(uuid: string) {
    let url = new URL(location.origin);
    url.hash = uuid;
    window.open(url);
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
    store = o as setting;
    localStorage.setItem("config", JSON.stringify(o));

    arter_save_setting();
}

function arter_save_setting() {
    client = createClient(store.webdav.网址, {
        username: store.webdav.用户名,
        password: store.webdav.密码,
    });

    clearTimeout(auto_put_xln_t);
    auto_put_xln();
}

function show_setting() {
    let setting = JSON5.parse(localStorage.getItem("config"));
    for (let f in setting) {
        let fel = document.querySelector(`form[name="${f}"]`);
        if (fel)
            for (let k in setting[f]) {
                fel[k].value = setting[f][k];
            }
    }
}
show_setting();

version_el.innerHTML = `${packagejson.version}<img src="${update_svg}">`;
version_el.onclick = async () => {
    const cacheKeepList = ["v2"];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(
        cachesToDelete.map(async (key) => {
            await caches.delete(key);
        })
    );
};

// 搜索
import Fuse, { FuseResultMatch } from "fuse.js";
import { FuseResult } from "fuse.js";
type search_result = {
    id: string;
    l?: readonly FuseResultMatch[];
    text?: string;
    n?: number;
    type?: "str" | "regex";
    score: number;
}[];
let search_x: string = "";

let search_list: { [id: string]: { text: string; type: string } } = {};

function get_search_list() {
    search_list = {};
    for (let i of 集.数据) {
        w(i.data);
    }
    function w(data: data, pid?: string) {
        // TODO pdf
        for (let id of data) {
            const i = getDataFromId(id);
            if (i.type == "x-md") {
                if (!集.链接[0][pid]) continue;
                search_list[pid] = i.value as any;
            } else {
                if (i.子元素) {
                    w(i.子元素, i.id);
                }
            }
        }
    }
    link("0").map();
}

/** 设置默认搜索，清楚更多搜索 */
function set_search_de() {
    search_main = search_r;
    search_more.classList.add("search_more_hide");
}

function search(input: string[], type: "str" | "regex") {
    let x = search_cmd(input);
    console.log(x);
    let xop = window["xln"]["search"]["score"];
    search_x = input[1] || "";
    let s = x.str;
    let result = [] as search_result;
    let sr: search_result = [];
    let bci: search_result = [];
    let other: search_result = [];
    let has_id = {};
    for (let id in search_list) {
        const info = search_list[id];
        let r = x.f(x.str, info, id);
        sr.push(...r);

        if (!s && !input[1]) {
            other.push({
                id: id,
                score: search_score(id, 0, xop.t, xop.v, xop.s, xop.opsit),
                text: info.text,
            });

            bci.push({
                id: id,
                score: search_score(id, 0, xop.t, xop.v, xop.s, xop.opsit),
                text: info.text,
            });
        }
    }

    for (let i of sr) {
        has_id[i.id] = true;
        result.push(i);
    }
    for (let i of other) {
        if (!has_id[i.id]) {
            result.push(i);
            has_id[i.id] = true;
        }
    }
    for (let i of bci) {
        if (!has_id[i.id]) {
            result.push(i);
            has_id[i.id] = true;
        }
    }
    if (xop.random) {
        for (let x of result) {
            x.score = Math.random();
        }
    }
    return result;
}

function search_cmd(str: string[]) {
    let xop = window["xln"]["search"]["score"];
    type sf = (str: string, info: { type: string; text: string }, id: string) => search_result;
    let d_search: sf = (str, info, id) => {
        let sr: search_result = [];
        sr.push({
            id: id,
            type: "str",
            text: info.text,
            score: search_score(id, 1, xop.t, xop.v, xop.s, xop.opsit),
        });
        return sr;
    };
    let str_search: sf = (str, md, id) => {
        const fuse = new Fuse(md.text.split("\n"), {
            includeMatches: true,
            findAllMatches: true,
            useExtendedSearch: true,
            includeScore: true,
        });
        let fr = fuse.search(str);
        let sr: search_result = [];
        for (let i of fr) {
            sr.push({
                id: id,
                l: i.matches,
                n: i.refIndex,
                type: "str",
                score: search_score(id, 1 - i.score, xop.t, xop.v, xop.s, xop.opsit),
            });
        }
        return sr;
    };

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

    let regex_search: sf = (str, info, id) => {
        let r: RegExp;
        try {
            r = eval("/" + str + "/g");
        } catch (error) {
            console.error(error);
        }
        let rl = Array.from(new Set(info.text.match(r)));
        let l = [];
        for (let i of rl) {
            l.push({ value: i, indices: s_i(i, info.text).map((v) => [v, v + i.length]) });
        }
        let sr: search_result = [];
        if (l.length != 0) {
            sr.push({
                id: id,
                l,
                score: search_score(id, 1, xop.t, xop.v, xop.s, xop.opsit),
            });
        }
        return sr;
    };
    let fun: sf;
    if (str?.[1]?.[0] == "#") {
        let data = get_x_data(str[1].replace("#", ""));
        const fc = data;
        if (data && fc.type == "x-md") {
            let code = fc.value.text as string;
            let f: sf = eval(code);
            fun = f;
        } else {
            fun = str_search;
        }
    } else {
        fun = str_search;
    }
    return { str: str[0], f: fun };
}

/** 计算 时间 值 搜索匹配度 距离 */
function search_score(
    id: string,
    search_s: number,
    time_n?: number,
    value_n?: number,
    search_n?: number,
    op?: boolean
) {
    const now_t = new Date().getTime();
    const vt = 集.链接[0][id];
    let t = (now_t - vt.time) / 1000 / 60 / 60 / 24 / 7;
    t = 1 / (t + 1);
    let v = link(id).get_v();
    let s = search_s;
    return (
        (op ? -1 : 1) * (Math.sqrt(((time_n ?? 1) * t) ** 2) + ((value_n ?? 1) * v) ** 2 + ((search_n ?? 2) * s) ** 2)
    );
}

let select_index = 0;
let select_main_i = 0;
let search_main = search_r;
search_el.oninput = search_el.click = () => {
    let arg = cmd(search_el.value);
    if (arg.name == "s") {
        console.time();
        let l = search(arg.args, "str");
        console.timeLog();
        show_search_l(l);
        console.timeEnd();
        if (l.length == 0) {
            view_el.classList.add("viewer_hide");
            return;
        }
        select_index = clip(select_index, 0, l.length - 1); // 搜索记录上次定位
        let el = select_search(select_index);
        preview_x_link(el.getAttribute("data-id"));
        let r = el.getBoundingClientRect();
        set_viewer_posi(r.x + r.width, r.y);
    }
    if (arg.name == "type") {
        show_md_type_l(arg.args);
    }
};
function hide_search() {
    search_pel.classList.remove("搜索展示");
    search_pel.setAttribute("data-fid", "");

    view_el.classList.add("viewer_hide");

    set_search_de();
}
search_el.onblur = () => {
    hide_search();
};
search_el.onkeydown = (e) => {
    if (e.key == "ArrowUp" || e.key == "ArrowDown") {
        e.preventDefault();
    }
};
search_el.onkeyup = (e) => {
    switch (e.key) {
        case "Escape":
            hide_search();
            break;
        case "ArrowUp":
            if (select_index == -1) {
                select_index = search_r_divs.length - 1;
            } else {
                select_index--;
            }
            break;
        case "ArrowDown":
            if (select_index == search_r_divs.length - 1) {
                select_index = -1;
            } else {
                select_index++;
            }
            break;
        case "ArrowRight":
            let el = select_search(select_index);
            search_main = search_more;
            select_main_i = select_index;
            search_main_r_divs = search_r_divs;
            select_index = 0;
            load_more_search(el.getAttribute("data-id"));
            search_more.classList.remove("search_more_hide");
            break;
        case "ArrowLeft":
            search_main = search_r;
            select_index = select_main_i;
            search_r_divs = search_main_r_divs;
            search_more.classList.add("search_more_hide");
            break;
        case "Enter":
            if (select_index != -1) e.preventDefault();
            let id = (<HTMLElement>search_r.querySelector(".search_item_select")).getAttribute("data-id");
            click_search_item(id);
            break;
    }
    if (e.key == "ArrowUp" || e.key == "ArrowDown") {
        e.preventDefault();
        let el = select_search(select_index);
        let arg = cmd(search_el.value);
        if (el) {
            if (arg.name == "s") {
                preview_x_link(el.getAttribute("data-id"));
                let r = el.getBoundingClientRect();
                set_viewer_posi(r.x + r.width, r.y);
            }
        }
    }
};

function load_more_search(id: string) {
    let chainr: search_result = [];
    let flex: search_result = [];
    // 链式搜索
    let c = link(id).get(1);
    for (let i in c) {
        集_for_each((xel) => {
            if (xel.id == i && xel.type == "x-md") {
                chainr.push({
                    id: i,
                    score: 1,
                    text: xel.value.text as string,
                });
                return true;
            }
        });
    }
    集_for_each((i, p, path) => {
        const l = getDataFromId(path.at(-1))?.子元素;
        if (i.id == id && l) {
            for (let id of l) {
                const i = getDataFromId(id);
                const f = i;
                if (f.type != "x-x") {
                    flex.push({
                        id: i.id,
                        score: 1,
                        text: f.type == "x-md" ? (f.value.text as string) : JSON5.stringify(f.value),
                    });
                }
            }
            return true;
        }
    });
    let has_id = {};
    let result = [] as search_result;
    for (let i of chainr) {
        if (!has_id[i.id]) {
            result.push(i);
            has_id[i.id] = true;
        }
    }
    for (let i of flex) {
        if (!has_id[i.id]) {
            result.push(i);
            has_id[i.id] = true;
        }
    }
    show_search_l(result);
    select_search(0);
}

function select_search(i: number) {
    search_main.querySelectorAll(".search_item_select").forEach((el) => {
        el.classList.remove("search_item_select");
    });
    let el = search_r_divs[i];
    if (!el) return;
    el.classList.add("search_item_select");
    if (i * search_i_height < search_main.scrollTop) {
        search_main.scrollTop = i * search_i_height;
    }
    if ((i + 1) * search_i_height > search_main.scrollTop + search_main.offsetHeight) {
        search_main.scrollTop = (i + 1) * search_i_height - search_main.offsetHeight;
    }
    return el;
}

function click_search_item(iid: string) {
    let arg = cmd(search_el.value);
    if (arg.name == "s") {
        if (search_pel.getAttribute("data-fid") == "0") jump_to_x_link(iid);
        else view_el.classList.add("viewer_hide");
        show_search_l([]);
        let id = search_pel.getAttribute("data-fid") || link_value_bar.elid;
        console.log(id);
        link(id).add(iid);
        search_el.blur();
        link_value_bar.elid = link_value_bar.elid;
        add_bci(iid);
    }
    if (arg.name == "type") {
        search_el.value = `type ${iid}`;
        run_cmd();
    }
}

search_r.onpointerleave = () => {
    view_el.classList.add("viewer_hide");
};
search_more.onpointerleave = () => {
    view_el.classList.add("viewer_hide");
};

search_el.onchange = () => {
    run_cmd();
};

let search_r_divs: HTMLElement[] = [];
let search_main_r_divs: HTMLElement[] = [];
const search_i_height = 32;

/** 展示搜索结果 */
function show_search_l(l: search_result, exid?: string) {
    l = l.sort((a, b) => {
        return a.score - b.score;
    });
    if (exid) l = l.filter((i) => i.id != exid);
    search_main.innerHTML = "";
    search_r_divs = [];
    const els = new Map<string, HTMLElement>();
    for (let n = l.length - 1; n >= 0; n--) {
        const i = l[n];
        let div = els.get(i.id);
        if (!div) {
            div = create_r_item();
            div.setAttribute("data-id", i.id);
            els.set(i.id, div);
        }
        let line = createEl("div");
        let p = createEl("span");
        if (i.l) {
            for (let j of i.l) {
                let indices = [...j.indices].sort((a, b) => a[0] - b[0]);
                for (let i = 0; i < indices.length; i++) {
                    const k = indices[i];
                    let h = createEl("span");
                    h.innerText = j.value.slice(k[0], k[1] + 1);
                    if (Number(i) == indices.length - 1) {
                        p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h, j.value.slice(k[1] + 1));
                    } else {
                        p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h);
                    }
                }
            }
        } else if (i.text) {
            p.append(i.text);
        } else {
            p.append(`#${i.id}`);
        }
        line.append(p);
        div.append(line);
        div.setAttribute("data-id", i.id);
        add_div_event(div, i.id);

        let value = createEl("div");
        value.append(link_value_text(link(i.id).get_v()));
        div.append(value);
        div.style.top = search_i_height * (l.length - n - 1) + "px";
        search_r_divs.push(div);
    }

    function add_div_event(div: HTMLElement, id: string) {
        div.addEventListener("mouseenter", () => {
            preview_x_link(id);
        });
        div.onmousemove = (e) => {
            window.requestAnimationFrame(() => {
                set_viewer_posi(e.clientX, e.clientY);
            });
        };
    }

    let ddd = createEl("div");
    search_main.append(ddd);
    ddd.style.height = search_r_divs.length * search_i_height + 8 + "px";
    render_search_l();
    r_i_r();
}

function render_search_l() {
    let top = search_main.scrollTop;
    let b = top + search_main.offsetHeight;
    let start = Math.floor(top / search_i_height);
    let len = Math.ceil((b - top) / search_i_height);
    let has = [];
    for (let el of search_main.querySelector("div").children) {
        let eli = Number(el.getAttribute("data-i"));
        if (eli < start || start + len < eli) {
            el.remove();
        } else {
            has.push(eli);
        }
    }
    for (let i = start; i < Math.min(search_r_divs.length, start + len); i++) {
        if (!has.includes(i)) search_main.querySelector("div").append(search_r_divs[i]);
    }
}

search_main.onscroll = () => {
    render_search_l();
};

/** 创建项 */
function create_r_item() {
    let div = createEl("div");
    div.onpointerdown = () => {
        const id = div.getAttribute("data-id");
        click_search_item(id);
    };
    div.onmouseenter = () => {
        select_index = Number(div.getAttribute("data-i"));
        select_search(select_index);
    };
    return div;
}

/** 为项添加序列信息 */
function r_i_r() {
    search_r_divs.forEach((div, i) => {
        div.setAttribute("data-i", String(i));
    });
}

function search_text(text: string) {
    let t = `s '${text}'`;
    if (search_x) {
        t += ` ${search_x || ""}`;
    }
    return t;
}

/** 全局搜索栏 */
function show_g_search() {
    search_pel.classList.add("搜索展示");
    search_pel.style.left = "";
    search_pel.style.top = "";
    search_pel.style.width = "";
    search_el.focus();
    search_pel.setAttribute("data-fid", "0");
    let arg = cmd(search_el.value);
    if (arg.name != "s") {
        arg.args = [""];
        search_el.value = search_text("");
        search_el.setSelectionRange(3, 3);
    }
    set_search_de();
    get_search_list();
    let l = search(arg.args, "str");
    show_search_l(l);
}

let now_focus_id = "0";

function cmd(str: string) {
    let l = str.split(/\s+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/);
    return { name: l[0], args: l.slice(1).map((t) => t.replace(/^['"]/, "").replace(/['"]$/g, "")) };
}

function show_md_type_l(arg: string[]) {
    const fuse = new Fuse(md_type_l, {
        includeMatches: true,
        findAllMatches: true,
        useExtendedSearch: true,
    });
    let fr = fuse.search(arg[0]);
    search_r.innerHTML = "";
    let dd = createEl("div");
    search_r.append(dd);
    search_r_divs = [];
    for (let n in fr) {
        const i = fr[n];
        for (let j of i.matches) {
            let indices = [...j.indices].sort((a, b) => a[0] - b[0]);
            let line = create_r_item();
            let p = createEl("span");
            for (let i = 0; i < indices.length; i++) {
                const k = indices[i];
                let h = createEl("span");
                h.innerText = j.value.slice(k[0], k[1] + 1);
                if (Number(i) == indices.length - 1) {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h, j.value.slice(k[1] + 1));
                } else {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h);
                }
            }
            line.append(p);
            line.setAttribute("data-id", j.value);
            dd.append(line);
            line.style.top = Number(n) * search_i_height + "px";
            search_r_divs.push(line);
            line.onpointerdown = () => {
                search_el.value = "type " + j.value;
                run_cmd();
            };
        }
    }
    dd.style.height = fr.length * search_i_height + 8 + "px";
    select_index = -1;
    r_i_r();
}

const md_type_l: md_type[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "code",
    "p",
    "text",
    "todo",
    "latex math",
    "math",
    "iframe",
];
function run_cmd() {
    let arg = cmd(search_el.value);
    if (arg.name == "type") {
        const el = get_x_by_id(search_el.getAttribute("data-fid"));
        const md = el.querySelector("x-md") as markdown;
        let mtype = arg.args[0];
        if (md_type_l.includes(mtype as md_type)) {
            md.type = mtype as md_type;
            data_changed();
            search_pel.classList.remove("搜索展示");
            md.edit = true;
        }
        search_el.value = "";
    }
}

/** 判断是否是最小元素 */
function is_smallest_el(el: x | xlink) {
    if (el.tagName == "X-LINK") {
        return true;
    } else if (!el.querySelector("x-x")) {
        return true;
    } else {
        return false;
    }
}
/** 判断是否是最小元素 */
function is_smallest_data_el(id: string) {
    let data = get_x_data(id);
    if (!data) return true;
    if (集.links?.[id]) return true;
    if (data.type === "x-x") return false;
}

/** 展示链接栏 */
function show_link_value_bar(el: x | xlink) {
    if (模式 != "浏览") return;
    if (search_pel.classList.contains("搜索展示")) return;
    link_value_bar.elid = el.id;
    link_value_bar.style.left = el_offset(el, 画布).x + "px";
    link_value_bar.style.top = el_offset(el, 画布).y - link_value_bar.offsetHeight + 4 + "px";
    if (el.tagName == "X-LINK") {
        const range = document.createRange();
        range.setStart(el.firstChild, 0);
        range.setEnd(el.firstChild, 1);
        link_value_bar.style.left = range_offset(range, 画布).x + "px";
        link_value_bar.style.top = range_offset(range, 画布).y - link_value_bar.offsetHeight + 4 + "px";
    }
    if (!search_pel.getAttribute("data-fid") && el.id != now_focus_id) {
        search_el.blur();
        search_pel.classList.remove("搜索展示");
        now_focus_id = el.id;
    }

    // 不是最小元素不显示控件，只显示计算后的值
    link_value_bar.show_ctrl = is_smallest_el(el);
}

var view_width = 400,
    view_height = 400;

var portrait = window.matchMedia("screen and (max-width: 420px)");
portrait.matches;
set_viewer_size(portrait.matches);
portrait.addEventListener("change", (event) => {
    set_viewer_size(event.matches);
});

function set_viewer_size(portrait: boolean) {
    if (portrait) {
        view_width = 300;
        view_height = 300;
    } else {
        view_width = 400;
        view_height = 400;
    }
}

/** 定位预览栏 */
function set_viewer_posi(x: number, y: number) {
    view_el.style.left = clip(x, 0, window.visualViewport.width - view_width) + "px";
    view_el.style.top = clip(y, 0, window.visualViewport.height - view_height) + "px";
}

/** 跳转到元素位置 */
function preview_x_link(id: string) {
    let pid = "",
        rect: rect;
    for (let i of 集.数据) {
        pid = i.id;
        w(i.data);
        if (rect) break;
    }
    function w(data: data) {
        for (let id of data) {
            const i = getDataFromId(id);
            if (i.type == "x-x") {
                if (i.id == id) {
                    rect = i.rect;
                    return;
                }
                if (i.id == 集.links?.[id]?.pid) {
                    rect = 集.links[id].rect;
                    return;
                }
                if (i.子元素) {
                    w(i.子元素);
                }
            }
        }
    }
    let center_rect = rect;

    let center_point = { x: center_rect.x + center_rect.w / 2, y: center_rect.y + center_rect.h / 2 };
    let dx = view_width / 2 / zoom,
        dy = view_height / 2 / zoom;
    let out_rect = {
        x: center_point.x - dx,
        y: center_point.y - dy,
        w: 2 * dx,
        h: 2 * dy,
    };

    let els: { el: srcData[0]; x: number; y: number }[] = [];
    for (let p of 集.数据) {
        if (p.id == pid) {
            for (let xid of p.data) {
                const x = getDataFromId(xid);
                let r = x.rect;
                if (
                    rect_x_rect(r, out_rect) ||
                    el_has(x, id) // 针对固定布局元素
                ) {
                    els.push({ el: x, x: r.x, y: r.y });
                }
            }
        }
    }

    view_el.style.width = 2 * dx * zoom + "px";
    view_el.style.height = 2 * dy * zoom + "px";

    view_children_el.style.width = 2 * dx + "px";
    view_children_el.style.height = 2 * dy + "px";
    view_children_el.style.transform = `scale(${zoom})`;
    view_children_el.innerHTML = "";
    view_el.classList.remove("viewer_hide");
    for (let x of els) {
        let xel = createX(x.el.type);
        xel.setAttribute("style", x.el.style);
        xel.style.left = x.x - out_rect.x + "px";
        xel.style.top = x.y - out_rect.y + "px";
        xel.className = x.el.class;
        view_children_el.append(xel);
        xel.id = x.el.id;
        xel.value = x.el.子元素;
    }
    let highlight = view_highlight_el;
    highlight.style.left = (center_rect.x - out_rect.x) * zoom + "px";
    highlight.style.top = (center_rect.y - out_rect.y) * zoom + "px";
    highlight.style.width = center_rect.w * zoom + "px";
    highlight.style.height = center_rect.h * zoom + "px";
}

var now_data_id = "0";

/** 跳转到元素位置并记录 */
function jump_to_x_link(id: string, nrc?: boolean) {
    view_el.classList.add("viewer_hide");
    集_for_each((data, p) => {
        if (data.id == id) {
            select_p(p.id);
            let x = data.rect.x * p.p.zoom - 画布.offsetWidth / 2,
                y = data.rect.y * p.p.zoom - 画布.offsetHeight / 2;
            let ex = -x - (data.rect.w * p.p.zoom) / 2,
                ey = -y - (data.rect.h * p.p.zoom) / 2;
            render_select_rects();
            check_render_x();
            render_map();
            set_O_p(ex, ey);
            if (data.type == "x-x") {
                z.focus(id);
            }
            return true;
        }
    });
    if (!nrc) add_bci(id);
}

let bci_ids = [];

/** 添加到面包屑栏 */
function add_bci(id: string) {
    let qel = breadcrumbs_el.querySelector(`div[data-id="${id}"]`) as HTMLElement;
    if (qel) {
        // breadcrumbs_el.scrollLeft = qel.offsetLeft + qel.offsetWidth - breadcrumbs_el.offsetWidth;
        // return;
        qel.remove();
    }
    if (breadcrumbs_el.offsetHeight == 0) breadcrumbs_el.style.height = "16px";
    let li = createEl("div");
    let main = createEl("div");
    li.append(main);
    let text = createEl("span");
    li.classList.add("bci");
    text.innerText = `#${id}`;
    main.append(text);
    if (is_smallest_data_el(id)) {
        let add = createEl("x-link-add");
        main.append(add);
        add.value = id;
    }
    li.setAttribute("data-id", id);
    text.onpointerenter = () => {
        preview_x_link(id);
    };
    text.onpointerdown = () => {
        jump_to_x_link(id);
    };
    text.onpointermove = (e) => {
        window.requestAnimationFrame(() => {
            set_viewer_posi(e.clientX, e.clientY);
        });
    };
    breadcrumbs_el.onpointerleave = () => {
        view_el.classList.add("viewer_hide");
    };
    breadcrumbs_el.append(li);
    breadcrumbs_el.scrollLeft = li.offsetLeft + li.offsetWidth - breadcrumbs_el.offsetWidth;

    bci_ids = bci_ids.filter((x) => x != id);
    bci_ids.push(id);
}

breadcrumbs_el.onwheel = (e) => {
    e.preventDefault();
    let i = e.deltaX + e.deltaY + e.deltaZ >= 0 ? 1 : -1;
    breadcrumbs_el.scrollLeft += i * Math.sqrt(e.deltaX ** 2 + e.deltaY ** 2 + e.deltaZ ** 2);
};

const default_down_s = 4;

/** 链接处理 */
function link(key0: string) {
    let t = new Date().getTime();
    // key1存在，作用于边，否则作用于点
    return {
        add: (key1?: string) => {
            if (!key0) return;
            if (key1) {
                if (key0 == key1) return;
                link(key0).add();
                link(key1).add();
                if (集.链接[key0][key1] === undefined || 集.链接[key1][key0] === undefined) {
                    // 只存储在边的一个方向上，以时间换空间
                    集.链接[key0][key1] = { time: t };
                }
            } else {
                if (!集.链接[key0]) {
                    集.链接[key0] = {};
                }
                if (!集.链接[0][key0]) {
                    集.链接[0][key0] = { time: t };
                }
            }
        },
        rm: (key1?: string) => {
            if (key1) {
                delete 集.链接[key0][key1];
                delete 集.链接[key1][key0];
            } else {
                delete 集.链接[0][key0];
                link("0").map();
                for (let i in link(key0).get()) {
                    link(key0).rm(i);
                }
                delete 集.链接[key0];
            }
        },
        /**
         * 获取链接
         * @param chain 关联链接
         * @returns 指向链接
         */
        get: (chain?: number) => {
            const l = link_map[key0];
            function sort(obj: typeof l) {
                const l = Object.keys(obj);
                l.sort((a, b) => obj[b].time - obj[a].time);
                let o: typeof obj = {};
                for (let i of l) {
                    o[i] = obj[i];
                }
                return o;
            }
            if (!chain) {
                return sort(l);
            } else {
                const walk = (list: typeof l, chain_n: number) => {
                    const xl = {};
                    let next = null;
                    for (const i of Object.keys(list || [])) {
                        if (i === "0") continue;
                        if (xl[i]) continue;
                    }
                    if (!next) return xl;
                    const ln = chain_n; // todo 搜索loss
                    if (ln > 0) {
                        return walk(link(next).get(), ln);
                    } else {
                        xl[next] = list[next];
                        return xl;
                    }
                };
                return sort(walk(l, chain));
            }
        },
        value: (key1: string) => {
            if (key1) {
                // 尝试正向、反向寻找边的值，否则新建
                if (集.链接[key0]?.[key1] !== undefined) {
                    集.链接[key0][key1].time = t;
                } else if (集.链接[key1]?.[key0] !== undefined) {
                    集.链接[key1][key0].time = t;
                } else {
                    link(key0).add(key1);
                }
            }
        },
        /** 获取值 */
        get_v: (is_small?: boolean) => {
            const el = get_link_el_by_id(key0);
            if (is_small || !el || is_smallest_el(el)) {
                const link_value = 集.链接[0][key0];
                if (link_value) {
                    const l = link(key0).get();
                    return Object.keys(l).filter((i) => i !== "0").length;
                }
            } else {
                return 0;
            }
        },
        map: () => {
            link_map = {};
            for (const i of Object.keys(集.链接[0] || [])) {
                for (const x of Object.keys(集.链接[i] || [])) {
                    const value = 集.链接[i][x];
                    if (!link_map[i]) {
                        link_map[i] = {};
                    }
                    link_map[i][x] = value;
                    if (!link_map[x]) {
                        link_map[x] = {};
                    }
                    link_map[x][i] = value;
                }
            }
        },
    };
}

let link_map: 集type["链接"] = null;

/** 链接展示精度位数 */
let link_value_precision = 2;
/** 链接展示精度 */
function link_value_min_d() {
    return 1 / 10 ** link_value_precision;
}

/**
 * 返回裁切精度的数值元素，悬浮提示具体
 * @param num 链接值
 * @returns span元素
 */
function link_value_text(num: number) {
    let nt = String(num);
    let span = createEl("span");
    span.title = nt;
    let l = num.toFixed(link_value_precision).split(".");
    let t = "";
    if (l[0] == "0") {
        t = "." + l[1];
    } else {
        t = l.join(".");
    }
    if (l[1] == "00") t = l[0];
    span.innerText = t;
    return span;
}

/** 获取父根元素 */
function find_root_layout(el: HTMLElement) {
    for (let p of O.querySelectorAll(":scope > x-x")) {
        if (p.contains(el)) return p as x;
    }
}

/** 获取画布 */
function find_p(el: HTMLElement) {
    for (let p of 画布s.querySelectorAll(":scope > div")) {
        if (p.contains(el)) return p as x;
    }
}

/** 获取主元素值 */
function get_x_out_value(el: x) {
    if (el.type === "x-x") {
        return {
            id: el.id,
            style: el.getAttribute("style") || "",
            class: el.className,
            子元素: el.value as data,
            type: el.type,
        };
    } else {
        return {
            id: el.id,
            style: el.getAttribute("style") || "",
            class: el.className,
            value: el.value as xelValue,
            type: el.type,
        };
    }
}

function copy_x(x: x, pel?: x) {
    let new_x = createX(x.type);
    new_x.id = x.id;
    (pel || O).append(new_x);
    new_x.setAttribute("style", x.getAttribute("style"));
    new_x.className = x.className;
    new_x.value = x.value;
    return new_x;
}

/** 复制值 */
function copy_value(id: string, new_id: string) {
    let v = 集.values[id];
    if (v) {
        集.values[new_id] = JSON5.parse(JSON.stringify(v));
    }
}

/** 转化为堆叠布局 */
function to_flex(els: string[], d: "x" | "y") {
    if (els.length == 1) {
        let elclass = get_x_data(els[0]).class;
        if (elclass.includes("flex-row") && d == "y") {
            elclass.replace("flex-row", "flex-column");
        }
        if (elclass.includes("flex-column") && d == "x") {
            elclass.replace("flex-column", "flex-row");
        }
        get_data();
        return;
    }
    let xels = [] as srcData[0][];
    for (let i of els) {
        xels.push(get_x_data(i));
    }
    let xel = createX("x-x");
    xel.id = uuid_id();
    if (d == "x") {
        xel.classList.add("flex-row");
        xels.sort((a, b) => a.rect.x - b.rect.x);
    } else {
        xel.classList.add("flex-column");
        xels.sort((a, b) => a.rect.y - b.rect.y);
    }
    xel.style.left = xels[0].rect.x + "px";
    xel.style.top = xels[0].rect.y + "px";
    z.push(xel);
    let data: data = [];
    for (let el of xels) {
        set_data_style(el, "left", "");
        set_data_style(el, "top", "");
        set_data_style(el, "position", "relative");
        data.push(el.id);
        removeXID(el.id);
    }
    xel.value = data;
    get_data();
}

/** 判断是否为flex */
function is_flex(el: HTMLElement) {
    if (el.classList.contains("flex-column") || el.classList.contains("flex-row")) {
        return "flex";
    }
    if (el.classList.contains("flex-column")) {
        return "col";
    }
    if (el.classList.contains("flex-row")) {
        return "row";
    }
}
function is_data_flex(data: srcData[0]) {
    if (data.type != "x-x") return false;
    if (data.class.split(" ").includes("flex-column") || data.class.split(" ").includes("flex-row")) {
        return "flex";
    }
    if (data.class.split(" ").includes("flex-column")) {
        return "col";
    }
    if (data.class.split(" ").includes("flex-row")) {
        return "row";
    }
}

/** 添加一个固定布局元素 */
function add_none_layout() {
    let x = createX("x-x");
    x.style.left = "0";
    x.style.top = "0";
    z.push(x);
    return x;
}

/** 固定布局修剪 */
function reflash_none_layout(el: x) {
    if (el.value.length == 0) {
        z.remove(el.id);
        data_changed();
        return;
    }
    let px = 16,
        py = 16;
    let dy = Infinity,
        dx = Infinity;
    for (let i of el.children) {
        if (i.tagName != "X-X") continue;
        let of = el_offset2(i, el);
        if (of.x < dx) dx = of.x;
        if (of.y < dy) dy = of.y;
    }
    for (let i of el.children) {
        if (i.tagName != "X-X") continue;
        (i as x).style.left = el_offset2(i, el).x - dx + px + "px";
        (i as x).style.top = el_offset2(i, el).y - dy + py + "px";
    }
    el.style.left = el_offset2(el).x + dx - px + "px";
    el.style.top = el_offset2(el).y + dy - py + "px";
}

/** 转化为固定布局 */
function to_none_layout(els: string[]) {
    let x = add_none_layout();
    let data = [] as data;
    for (let id of els) {
        data.push(id);
    }
    x.value = data;
    reflash_none_layout(x);
}

/** 把flex所有文字转为一行 */
function to_one_line(xels: string[]) {
    get_data();
    for (let id of xels) {
        集_for_each((data) => {
            if (data.id == id) {
                if (is_data_flex(data) == "flex") {
                    let t = "";
                    let type: md_type;
                    let p_ids: string[] = [];
                    for_each(data.子元素, (x, i, path) => {
                        if (x.type == "x-md") {
                            const v = x.value as markdown["value"];
                            t += v.text;
                            if (i == 0) type = v.type;

                            p_ids.push(path[path.length - 1]);
                        }
                    });
                    for (let i of p_ids) {
                        z.remove(i);
                    }
                    data.type = "x-md";
                    data.value = { text: t, type };
                    data.class = type;
                    // TODO 链接合并
                    let x = get_x_by_id(id);
                    if (x) {
                        x.innerHTML = "";
                        x.value = data.子元素;
                    }
                    data_changed();
                }
                return true;
            }
        });
    }
}

/** 按换行拆分 */
function to_more_line(xels: string[], c?: string | RegExp) {
    for (let id of xels) {
        集_for_each((el, path) => {
            if (el.id == id) {
                if (el.type == "x-md") {
                    let v = el.value as markdown["value"];
                    let l = v.text.trim().split(c || "\n");
                    el.子元素 = [];
                    el.class += " flex-column";
                    for (let t of l) {
                        if (!t) continue;
                        let id = uuid_id();
                        el.子元素.push(id);
                        addXData(id, {
                            type: "x-md",
                            id: "",
                            class: v.type,
                            style: "",
                            value: { text: t, type: v.type },
                        });
                        z.add(id);
                    }
                    let x = get_x_by_id(id);
                    if (x) {
                        x.innerHTML = "";
                        x.value = el.子元素;
                    }
                    data_changed();
                }
                return true;
            }
        });
    }
}

/** 刷新定位元素 */
function fixed_el() {
    for (let i in 集.values) {
        if (集.values[i]?.fixed) {
            const el = elFromId(i);
            if (!el) return;
            let fixed: { left?: string; top?: string; right?: string; bottom?: string } = 集.values[i].fixed;
            try {
                let top = el_offset2(O).y,
                    left = el_offset2(O).x,
                    width = el_offset2(画布).w,
                    height = el_offset2(画布).h;
                if (fixed.left) {
                    el.style.left = `calc(${-left}px + ${fixed.left})`;
                }
                if (fixed.top) {
                    el.style.top = `calc(${-top}px + ${fixed.top})`;
                }
                if (fixed.right) {
                    el.style.left = `calc(${-left + width - el_offset2(el).w}px - ${fixed.right})`;
                }
                if (fixed.bottom) {
                    el.style.top = `calc(${-top + height - el_offset2(el).h}px - ${fixed.bottom})`;
                }
            } catch (error) {}
        }
    }
    requestAnimationFrame(fixed_el);
}

/** 拆分组合 */
function out_group(els: string[]) {
    for (let id of els) {
        let el = get_x_data(id);
        if (el.子元素.length > 1 || el.type == "x-x") {
            for (let r of 集.数据) {
                if (r.id == 当前画布.id) {
                    for (let i of el.子元素) {
                        let el = getDataFromId(i);
                        set_data_style(el, "left", el.rect.x + "px");
                        set_data_style(el, "top", el.rect.y + "px");
                        set_data_style(el, "position", "absolute");
                        set_data_style(el, "z-index", String(r.data.length + 1));
                        r.data.push(i);
                    }
                }
            }
            z.remove(id);
            check_render_x();
        }
    }
    get_data();
}

/** 获取从近到远元素列表 */
function match_nearest_x(id: string) {
    let l: { id: string; x: number; y: number; r: number }[] = [];
    let r = get_x_data(id).rect;
    let center = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
    集_for_each((el, p) => {
        if (p.id == 当前画布.id) {
            if (is_smallest_data_el(el.id)) {
                let r = el.rect;
                let center2 = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
                l.push({
                    id: el.id,
                    x: center2.x - center.x,
                    y: center2.y - center.y,
                    r: Math.sqrt((center2.x - center.x) ** 2 + (center2.y - center.y) ** 2),
                });
            }
        }
    });
    l.sort((a, b) => a.r - b.r);
    return l;
}

function get_nearest_x(id: string, a: "left" | "right" | "up" | "down") {
    console.log(match_nearest_x(id));
    for (let i of match_nearest_x(id)) {
        if (i.id == id) continue;
        switch (a) {
            case "down":
                if (i.y > 0) return i.id;
                break;
            case "up":
                if (i.y <= 0) return i.id;
                break;
            case "left":
                if (i.x <= 0) return i.id;
                break;
            case "right":
                if (i.x > 0) return i.id;
                break;
        }
    }
    return id;
}

window["xln"] = {
    el: {
        selected_els: () => selected_el,
        get_data: get_x_data,
        set_style: set_data_style,
    },
    search: {
        score: { t: 1, v: 1, s: 3, opsit: false, random: false },
    },
};

// 手写识别
elFromId("ink_icon").onpointerdown = (e) => {
    e.preventDefault();
    if (ink_el.classList.contains("ink_hide")) {
        if (!selections[0].id || 模式 != "浏览") return;
        ink_el.width = ink_el.offsetWidth * 2;
        ink_el.height = ink_el.offsetHeight * 2;
    }
    ink_el.classList.toggle("ink_hide");
};
var ink_color = "#000";
var mqList = window.matchMedia("(prefers-color-scheme: dark)");
var is_dark = Boolean(mqList.matches);
mqList.addEventListener("change", (event) => {
    is_dark = event.matches;
    if (event.matches) {
        ink_color = "#FFF";
    } else {
        ink_color = "#000";
    }
});

import { pinyin } from "pinyin-pro";

let ink_move = false;
var ink_t = {}; // 确保清除所有计时器
ink_el.onpointerdown = (e) => {
    e.preventDefault();

    ink_points.push([[e.offsetX], [e.offsetY]]);
    ink_move = true;

    ink_cxt.beginPath();
    ink_cxt.lineWidth = 3;
    ink_cxt.shadowBlur = 2;
    ink_cxt.strokeStyle = ink_cxt.shadowColor = ink_color;
    ink_cxt.moveTo(e.offsetX * 2, e.offsetY * 2);

    for (let t in ink_t) {
        clearTimeout(Number(t));
        delete ink_t[t];
    }
};
ink_el.onpointermove = (e) => {
    if (!ink_move) return;
    ink_points[ink_points.length - 1][0].push(e.offsetX);
    ink_points[ink_points.length - 1][1].push(e.offsetY);

    ink_cxt.lineTo(e.offsetX * 2, e.offsetY * 2);
    ink_cxt.stroke();
};
ink_el.onpointerup = () => {
    ink_move = false;

    let md = elFromId(selections[0].id).querySelector("x-md") as markdown;
    let textel = md.text;
    let data = JSON.stringify({
        options: "enable_pre_space",
        requests: [
            {
                writing_guide: {
                    writing_area_width: ink_el.offsetWidth,
                    writing_area_height: ink_el.offsetHeight,
                },
                ink: ink_points,
                language: store.ink.语言 || "zh_CN",
            },
        ],
    });
    ink_t[
        Number(
            setTimeout(() => {
                fetch(
                    store.ink.网址 ||
                        `https://www.google.com/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8`,
                    {
                        method: "POST",
                        body: data,
                        headers: { "content-type": "application/json" },
                    }
                )
                    .then((v) => v.json())
                    .then((v) => {
                        console.log(v);
                        let text_l = v[1][0][1];
                        set_text(text_l[0]);
                        ink_reset();
                        put_toast(pinyin(text_l[0], { multiple: true }));
                    });
            }, Number(store.ink.延时) * 1000 || 600)
        )
    ] = "";
    function set_text(t: string) {
        textel.setRangeText(t);
        textel.selectionEnd += t.length;
        textel.selectionStart = textel.selectionEnd;
        selections[0].start = selections[0].end = textel.selectionStart;
        md.set_text();
    }
};
function ink_reset() {
    for (let t in ink_t) {
        clearTimeout(Number(t));
        delete ink_t[t];
    }
    ink_cxt.clearRect(0, 0, ink_el.width, ink_el.height);
    ink_points = [];
}

// 演示
type ys_item = {
    id?: string;
    position?: { O: string; p: { x: number; y: number; zoom: number } };
    transition: string;
};
type ys_type = {
    list: ys_item[];
};
var ys_page_i = -1;
function ys_init(data: ys_type) {
    let p = document.createDocumentFragment();
    for (let i in data.list) {
        let item = create_ys_item(data.list[i], Number(i));
        p.append(item);
    }
    ys_list.append(p);
}
function create_ys_item(item: ys_item, index?: number) {
    let div = createEl("div");
    let jump = createEl("div");
    let play = createEl("div");
    let remove = createEl("div");
    let tran = createEl("input");
    tran.contentEditable = "true";
    tran.classList.add("ys_tran");
    tran.value = item.transition;
    play.innerHTML = icon(play_svg);
    remove.innerHTML = icon(close_svg);
    play.onclick = () => {
        画布s.requestFullscreen();
        ys_page_i = index;
        ys_jump(item);
    };
    jump.onclick = () => {
        ys_jump(item);
    };
    remove.onclick = () => {
        div.remove();
        集.extra.slide.list = 集.extra.slide.list.filter((i) => i != item);
        data_changed();
    };
    tran.onchange = () => {
        item.transition = tran.value;
        data_changed();
    };

    div.append(play, jump, tran, remove);
    return div;
}
function ys_jump(item: ys_item) {
    if (item.position) {
        for (let el of 画布s.children) {
            if (el.id == item.position.O) {
                O = el as HTMLElement;
                O.style.visibility = "visible";
            } else {
                (el as HTMLElement).style.visibility = "hidden";
            }
        }
        O.style.transition = item.transition;
        O.ontransitioncancel = O.ontransitionend = () => {
            O.style.transition = "";
        };
        let zoom = item.position.p.zoom;
        zoom_o(zoom);
        set_O_p(item.position.p.x * zoom - el_offset(画布).w / 2, item.position.p.y * zoom - el_offset(画布).h / 2);
    }
}
function ys_bn(fx: "back" | "next") {
    if (document.fullscreenElement != 画布s) return;
    if (fx == "back") {
        ys_page_i = Math.max(0, ys_page_i - 1);
    }
    if (fx == "next") {
        if (ys_page_i == 集.extra.slide.list.length - 1) {
            document.exitFullscreen();
            return;
        }
        ys_page_i = Math.min(集.extra.slide.list.length - 1, ys_page_i + 1);
    }
    ys_jump(集.extra.slide.list[ys_page_i]);
}
ys_add.onclick = () => {
    if (!集.extra?.slide) 集.extra["slide"] = { list: [] } as ys_type;
    let list = 集.extra.slide.list;
    let i: ys_item = { position: { O: "", p: { x: 0, y: 0, zoom: 1 } }, transition: "" };
    let x = (el_offset(O).x + el_offset(画布).w / 2) / zoom;
    let y = (el_offset(O).y + el_offset(画布).h / 2) / zoom;
    i.position = { O: O.id, p: { x, y, zoom } };
    list.push(i);
    let div = create_ys_item(i);
    ys_list.append(div);

    data_changed();
};

// 值
import JSON5 from "json5";

function load_value() {
    let el = get_x_by_id(z.聚焦元素);
    value_el.innerHTML = "";
    if (el.value && is_smallest_el(el)) {
        let t = createEl("textarea");
        let value = JSON5.stringify(el.value, null, 2);
        t.value = value;
        value_el.append(t);
        t.oninput = (e: InputEvent) => {
            const a = [
                ["'", "'"],
                ['"', '"'],
                ["{", "}"],
                ["(", ")"],
            ];
            if (e.inputType == "insertText") {
                for (let i of a) {
                    if (i[0] == t.value[t.selectionStart - 1]) {
                        t.setRangeText(i[1]);
                    }
                }
            }
            try {
                let v = JSON5.parse(t.value);
                el.value = v;
            } catch (error) {}
        };
    }
    if (集.values) {
        let t = createEl("textarea");
        let value = "";
        if (集.values[el.id]) {
            let t = JSON5.stringify(集.values[el.id], null, 2);
            value = t.slice(1, t.length - 2).replace(/^  /gm, "");
        }
        t.value = value;
        value_el.append(t);
        t.oninput = (e: InputEvent) => {
            const a = [
                ["'", "'"],
                ['"', '"'],
                ["{", "}"],
                ["(", ")"],
            ];
            if (e.inputType == "insertText") {
                for (let i of a) {
                    if (i[0] == t.value[t.selectionStart - 1]) {
                        t.setRangeText(i[1]);
                    }
                }
            }
            try {
                let v = JSON5.parse(`{${t.value}}`);
                集.values[el.id] = v;
                if (el.querySelector("x-md")) {
                    (el.querySelector("x-md") as markdown).reload();
                }
            } catch (error) {}
        };
    }
}

let ai_messages: { role: "system" | "user" | "assistant"; content: string }[] = [];

function ai(text: string) {
    return new Promise((re: (text: string) => void) => {
        let x = ai_messages[ai_messages.length - 1];
        if (!x || (x.role != "user" && x.content != text)) ai_messages.push({ role: "user", content: text });
        window["ai"]["messages"] = ai_messages;
        fetch(`https://api.openai.com/v1/chat/completions`, {
            method: "POST",
            headers: { Authorization: `Bearer ${store.ai.key}`, "content-type": "application/json" },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                temperature: 0,
                top_p: 1,
                frequency_penalty: 1,
                presence_penalty: 1,
                messages: ai_messages,
            }),
        })
            .then((v) => v.json())
            .then((t) => {
                let answer = t.choices[0].message.content;
                console.log(answer);
                ai_messages.push({ role: "assistant", content: answer });
                window["ai"]["messages"] = ai_messages;
                re(answer);
            });
    });
}

function new_ai(text?: string) {
    ai_messages = [];
    if (text) ai_messages.push({ role: "system", content: text });
}

window["ai"] = { ask: ai, new: new_ai, messages: ai_messages };

menu_el.onclick = () => {
    menu_el.classList.add("menu_hide");
};
画布.oncontextmenu = (e) => {
    if (e.target == 画布) {
        e.preventDefault();
        let p = e2p(e);
        menu_el.style.left = e.offsetX + "px";
        menu_el.style.top = e.offsetY + "px";
        menu_el.classList.remove("menu_hide");
        menu_new.onclick = () => {
            create_x_x(p.x, p.y);
        };
    }
};
画布.addEventListener("pointerdown", (e) => {
    if (!menu_el.contains(e.target as HTMLElement)) {
        menu_el.classList.add("menu_hide");
    }
});

// MD
import markdownit from "markdown-it";
import markdownitTaskLists from "markdown-it-task-lists";
// import {markdownitEmoji} from "markdown-it-emoji";
var md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
}).use(markdownitTaskLists, { enabled: true });
// .use(markdownitEmoji);

import * as xmmath from "xmmath";

var defaultRender =
    md.renderer.rules.heading_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
let f = md.renderer.rules.fence;
import mermaid from "mermaid";
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "mermaid") {
        return mermaid_code(tokens[idx].content);
    }
    return f(tokens, idx, options, env, self);
};
function mermaid_code(content: string) {
    const o = document.createElement("div");
    mermaid.mermaidAPI.render("mgraph" + String(new Date().getTime()), content, o);
    return o.innerHTML;
}
// 代码来自 https://github.com/artisticat1/obsidian-tikzjax 和 https://github.com/kisonecat/tikzjax
var import_latex = false;
document.addEventListener("tikzjax-load-finished", (e) => {
    const svgEl = e.target as HTMLElement;
    if (is_dark) svgEl.style.filter = "invert(1)";
});
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "tikz") {
        return tikz_code(tokens[idx].content);
    }
    return f(tokens, idx, options, env, self);
};
function tikz_code(content: string) {
    if (!content) return "";
    if (!import_latex) {
        let script = createEl("script");
        import("../../lib/tikzjax.js?raw").then((v) => {
            const js = v.default;
            script.innerText = js;
            document.body.append(script);
        });
        import_latex = true;
        document.addEventListener("tikzjax-load-finished", tikz_svg);
    }
    let s = createEl("script");
    s.setAttribute("type", "text/tikz");
    s.setAttribute("data-show-console", "true");
    function tidyTikzSource(tikzSource: string) {
        const remove = "&nbsp;";
        tikzSource = tikzSource.replaceAll(remove, "");
        let lines = tikzSource.split("\n");
        lines = lines.map((line) => line.trim());
        lines = lines.filter((line) => line);
        const pack = [
            "chemfig",
            "tikz-cd",
            "circuitikz",
            "pgfplots",
            "array",
            "amsmath",
            "amstext",
            "amsfonts",
            "amssymb",
            "tikz-3dplot",
        ];
        for (let i of pack) {
            if (tikzSource.includes(i)) {
                let has = false;
                for (let t of lines) {
                    if (t == `\\usepackage{${i}}`) has = true;
                }
                if (!has) {
                    lines.unshift(`\\usepackage{${i}}`);
                }
            }
        }
        if (!tikzSource.includes("\\begin{document}")) {
            let packi = -1;
            for (let i in lines) {
                if (lines[i].includes(`\\usepackage{`)) packi = Number(i);
            }
            lines.splice(packi + 1, 0, "\\begin{document}");
        }
        if (!tikzSource.includes("\\end{document}")) {
            lines.push("\\end{document}");
        }
        return lines.join("\n");
    }
    s.innerHTML = tidyTikzSource(content);
    return s.outerHTML;
}
function jxg_code(c: string) {
    return `<x-graph>${c}</x-graph>`;
}
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "jxg") {
        return jxg_code(tokens[idx].content);
    }
    return f(tokens, idx, options, env, self);
};

import { optimize } from "svgo";
/** 修复svg被遮挡 */
function tikz_svg(e: Event) {
    const svgEl = e.target as HTMLElement;
    let svg = svgEl.outerHTML;
    svg = optimize(svg, { plugins: ["preset-default", "removeViewBox"] }).data;
    let id = uuid();
    svg = svg.replace("svg", `svg id="${id}"`);
    svgEl.outerHTML = svg;
    let svg1 = elFromId(id);
    let rx = Infinity,
        ry = Infinity,
        rr = -Infinity,
        rb = -Infinity;
    svg1.querySelectorAll(":scope > *").forEach((el: SVGGElement) => {
        let r = el.getBBox();
        if (r.x < rx) rx = r.x;
        if (r.y < ry) ry = r.y;
        if (r.x + r.width > rr) rr = r.x + r.width;
        if (r.y + r.height > rb) rb = r.y + r.height;
    });
    let rw = rr - rx;
    let rh = rb - ry;
    svg1.setAttribute("viewBox", `${rx} ${ry} ${rw} ${rh}`);
    svg1.setAttribute("width", String(rw));
    svg1.setAttribute("height", String(rh));
    svg1.removeAttribute("id");
}

md.renderer.rules.image = function (tokens, idx, options, env, self) {
    let value = tokens[idx].attrGet("src");
    let b = get_assets(value);
    if (b) tokens[idx].attrSet("src", b);
    return defaultRender(tokens, idx, options, env, self);
};
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex("target");
    if (aIndex < 0) {
        tokens[idx].attrPush(["target", "_blank"]);
    } else {
        tokens[idx].attrs[aIndex][1] = "_blank";
    }
    return defaultRender(tokens, idx, options, env, self);
};

import "iconify-icon";

import pako from "pako";

var will_load_math = false;
var mathjax_cache = JSON.parse(
    pako.inflate(JSON.parse(localStorage.getItem("mathjax") || "[]"), { to: "string" }) || "{}"
);
var math_loaded = false;
function get_latex_math_svg(c: string) {
    let html: string,
        ca = mathjax_cache?.[c];
    if (ca) {
        html = ca;
    } else {
        if (math_loaded) {
            html = window.MathJax.tex2svg(c).outerHTML;
            mathjax_cache[c] = html;
        } else {
            html = `<mjx-container loaded="false">${c}</mjx-container>`;
        }
    }
    if (!math_loaded && !will_load_math) {
        window.MathJax = {
            options: {
                enableMenu: false,
            },

            startup: {
                pageReady: () => {
                    return window.MathJax.startup.defaultPageReady().then(() => {
                        console.log("MathJax initial typesetting complete");
                        math_loaded = true;
                        l_latex_math();
                    });
                },
            },
        };
        (function () {
            if (will_load_math) return;
            let s = createEl("script");
            will_load_math = true;
            import("../../lib/mathjax@3.2.2-tex-svg-full.js?raw").then((v) => {
                s.innerText = v.default;
                document.body.append(s);
            });
        })();
    }
    return html;
}
function l_latex_math() {
    画布.querySelectorAll("x-md").forEach((pel) => {
        if (pel.querySelector("mjx-container[loaded=false]")) {
            (<markdown>pel).reload();
        }
    });
    setTimeout(() => {
        if (Object.keys(mathjax_cache).length) {
            try {
                localStorage.setItem("mathjax", "[" + pako.deflate(JSON.stringify(mathjax_cache)) + "]");
            } catch (error) {
                localStorage.setItem("mathjax", "[]");
            }
        } else {
            mathjax_cache = {};
        }
    }, 10000);
}

md.renderer.rules["mathjax_inline"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_inline = (tokens, idx) => {
    return get_latex_math_svg(tokens[idx].content).replace(`display="true"`, "");
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
md.renderer.rules.mathjax_block = (tokens, idx) => {
    return get_latex_math_svg(`\\displaylines{${tokens[idx].content} }`);
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

md.inline.ruler.before("link", "x-link", (state, silent: boolean) => {
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
    t.markup = "[[";
    // parse inner
    state.pos += 2;
    state.posMax = end;
    state.md.inline.tokenize(state);
    t.attrPush(["id", id || state.tokens[state.tokens.length - 1].content]);
    state.pos = end + id_l + 2;
    state.posMax = max;
    // end tag
    let e = state.push("x-link_close", TAG, -1);
    e.markup = `#${id}]]`;

    return true;
});

function time_text(time: number) {
    return {
        ss() {
            return `${time % 1000}`;
        },
        s() {
            return `${Math.floor(time / 1000)}`;
        },
        m() {
            return `${Math.floor(time / 1000 / 60)}`;
        },
        ms() {
            return `${Math.floor(time / 1000 / 60)}:${Math.floor(time / 1000)}`;
        },
        hms() {
            let h = Math.floor(time / 1000 / 60 / 60);
            let m = Math.floor(time / 1000 / 60) % 60;
            let s = Math.floor(time / 1000) % 60;
            let t = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
            if (h > 0) t = `${h}:` + t;
            return t;
        },
        hms2() {
            let h = Math.floor(time / 1000 / 60 / 60);
            let m = Math.floor(time / 1000 / 60) % 60;
            let s = Math.floor(time / 1000) % 60;
            let t = `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
            return t;
        },
    };
}

type xelValue = { [key: string]: unknown };
interface xel extends HTMLElement {
    value: xelValue;
}

// template
/** 主元素 */
class x extends HTMLElement {
    constructor() {
        super();
    }

    private _type: keyof x_tag_map = "x-x";

    connectedCallback() {
        this.onmouseleave = () => {
            if (模式 == "设计" || 临时中转站.contains(this)) {
                画布.style.cursor = "crosshair";
            }
        };

        this.onpointerdown = (e) => {
            if (!mu_sel_key(e) && selected_el.length <= 1) z.focus(this.id);
            if (模式 != "设计") return;
            e.preventDefault();
            free_old_point = e2p(e);
            free_o_a = -1;

            if (mu_sel_key(e)) {
                selected_el.push(this.id);
            }

            free_o_rects = [];
            for (const id of selected_el) {
                let el = get_x_data(id);
                free_o_rects.push({ el: el.id, x: el.rect.x, y: el.rect.y });
            }
        };

        if (this.getAttribute("value")) {
            this.set_v(JSON5.parse(this.getAttribute("value")));
        }

        if (this.getAttribute("data-type")) {
            this._type = this.getAttribute("data-type").toLowerCase() as any;
        }

        this.onpointerover = (e) => {
            e.stopPropagation();
            show_link_value_bar(this);
        };
    }

    get type() {
        return this._type;
    }

    set type(t) {
        this._type = t;
    }

    get value() {
        let p_el = find_p(this);
        let z = p_el ? get_zoom(p_el.id) : NaN;
        let list: data = [];
        let els = this.querySelectorAll(":scope > *");
        let map: { index: number; z: number }[] = [];
        const _is_flex = is_flex(this);
        els.forEach((el: HTMLElement, i) => {
            map.push({ index: i, z: Number(el.style.zIndex) || 1 });
        });
        if (!_is_flex) map = map.sort((a, b) => a.z - b.z);
        if (map.length === 1 && els[0].tagName != "X-X") return (els[0] as xel).value;
        for (let n of map) {
            const l = els[n.index];
            let el = l as HTMLElement;
            if (el.querySelector("x-link")) {
                if (!集.links) 集.links = {};
                el.querySelectorAll("x-link").forEach((lel) => {
                    if (z) 集.links[lel.id] = { pid: el.id, rect: el_offset2(lel, p_el, z) };
                });
            }
            list.push(el.id);
        }
        return list;
    }

    set_v(data: data | xelValue) {
        for (let x of this.children) {
            if (x.tagName != "DIV") {
                x.remove();
            }
        }
        if (Array.isArray(data)) {
            if (this._type != "x-x") throw `${this.id} type`;
            for (let id of data) {
                const d = getDataFromId(id);
                let el = createX(d.type);
                el.setAttribute("style", d.style);
                el.setAttribute("data-type", d.type);
                el.className = d.class;
                el.id = d.id;
                this.append(el);
                if (d.type === "x-x") {
                    el.value = d.子元素;
                } else {
                    el.value = d.value;
                }
            }
        } else {
            if (this._type === "x-x") throw `${this.id} type`;
            const d = data;
            let el = createEl(this._type) as xel;
            this.append(el);
            el.value = d;
        }
    }

    set value(data) {
        this.set_v(data);
    }
}

window.customElements.define("x-x", x);

/** 创建主元素控制栏 */
function new_x_bar(id: string) {
    const main_x = elFromId(id) as x;
    if (!main_x) return;

    var bar = createEl("div");
    bar.className = "x-x_bar";
    const m = createEl("div");
    m.innerHTML = icon(handle_svg);
    var d = createEl("div");
    d.innerHTML = icon(close_svg);
    let copy = createEl("div");
    copy.innerHTML = icon(copy_svg);

    bar.append(m);
    bar.append(copy);
    bar.append(d);

    m.onpointerdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        free_drag = true;
        画布.classList.add("拖拽");
        new_free_drag_tip();
        if (main_x.parentElement != O) {
            let x = e.clientX - O.getBoundingClientRect().x,
                y = e.clientY - O.getBoundingClientRect().y + m.offsetHeight - e.offsetY;

            let xel = copy_x(main_x);
            xel.style.left = el_offset2(main_x, O).x + "px";
            xel.style.top = el_offset2(main_x, O).y + "px";
            xel.style.position = "absolute";
            集_for_each((d) => {
                if (d.id == xel.id) {
                    set_data_style(d, "position", "absolute");
                    return true;
                }
            });
            main_x.remove();
            free_o_rects = [{ el: xel.id, x: x / zoom, y: y / zoom }];
            free_old_point = e2p(e);
            free_o_a = -1;

            set_模式("设计");

            for (let i of 集.中转站) {
                if (xel.id == i) {
                    drag_block = true;
                    集.中转站 = 集.中转站.filter((x) => x != i);
                    tmp_s_reflash();
                    data_changed();
                }
            }
            return;
        } else {
            free_old_point = e2p(e);
            free_o_a = -1;

            selected_el.push(main_x.id);

            free_o_rects = [{ el: main_x.id, x: main_x.offsetLeft, y: main_x.offsetTop }];
        }
    };

    copy.onpointerdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        free_drag = true;
        画布.classList.add("拖拽");
        new_free_drag_tip();
        let x = e.clientX - O.getBoundingClientRect().x - copy.offsetLeft - e.offsetX,
            y = e.clientY - O.getBoundingClientRect().y + copy.offsetHeight - e.offsetY;
        let xel = copy_x(main_x);
        let nid = uuid_id();
        copy_value(main_x.id, nid);
        xel.id = nid;
        z.push(xel);
        xel.style.left = el_offset2(main_x, O).x + "px";
        xel.style.top = el_offset2(main_x, O).y + "px";
        xel.style.position = "absolute";
        集_for_each((el, p) => {
            if (el.id == main_x.id) {
                for (let pc of 集.数据) {
                    if (pc.id == p.id) {
                        let v = [...el.子元素];
                        for_each(v, (data) => {
                            let nid = uuid_id();
                            copy_value(data.id, nid);
                            data.id = nid;
                            link(nid).add();
                        });
                        pc.data.push(nid);
                        return true;
                    }
                }
            }
        });
        free_o_rects = [{ el: xel.id, x: x / zoom, y: y / zoom }];
        free_old_point = e2p(e);
        free_o_a = -1;
    };

    d.onclick = () => {
        selected_el = selected_el.filter((el) => el != main_x.id);
        z.remove(main_x.id);

        if (main_x.querySelector("x-file")) assets_reflash();
    };
    d.onpointerenter = () => {
        main_x.style.opacity = "0.5";
    };
    d.onpointerleave = () => {
        main_x.style.opacity = "";
    };

    return bar;
}

/** 文字元素 */
class Text extends HTMLElement {
    constructor() {
        super();
    }

    _value: { type: md_type; index: RichTextType } = { type: "p", index: [] };

    selectRange: range = { start: 0, end: 0 };

    text: HTMLInputElement;

    h: HTMLElement;

    map: Map<range, Node>;

    cursor = createEl("div");

    add_event: () => void;

    connectedCallback() {
        const s = this;
        this.h = this;

        if (this.getAttribute("value")) {
            let v = this.getAttribute("value");
            this._value = JSON5.parse(v);
            this.render();
        }

        this.add_event = () => {
            this.text = md_text2;
            const text = this.text;
            text.oninput = (e) => {
                const t = text.value;
                const select = rSelect(this._value.index, this.selectRange.start, this.selectRange.end);
                select.replace(t);
                this._value.index = select.get();

                text.value = "";

                this.selectRange.start = this.selectRange.end = select.getRange().end;

                this.render();
            };
        };

        s.onpointerdown = () => {
            if (模式 === "浏览") this.edit = true;
        };
        s.spellcheck = false;
        s.onpointerup = (e) => {
            if (模式 != "浏览") return;
            let el = <HTMLElement>e.target;
            if (el.tagName != "INPUT") {
                s.contentEditable = "true";
            } else {
                return;
            }
            console.log(document.getSelection().getRangeAt(0));
            let r = document.getSelection().getRangeAt(0);
            const Range2Select = (node: Node, of: number) => {
                let before = 0;
                this.map.forEach((n, r) => {
                    if (n.contains(node)) {
                        before = of + r.start;
                    }
                });

                return before;
            };
            let start_t = Range2Select(r.startContainer, r.startOffset);
            let end_t = Range2Select(r.endContainer, r.endOffset);
            console.log(start_t, end_t);
            this.selectRange.start = start_t;
            this.selectRange.end = end_t;
            setTimeout(() => {
                this.edit = true;
            }, 10);
            s.contentEditable = "false";
            this.text.focus();
        };
    }

    setSelect(start: number, end: number) {
        let range = new Range();
        this.map.forEach((n, r) => {
            if (r.start <= start && start < r.end) {
                range.setStart(n, start - r.start);
            }
        });
        this.map.forEach((n, r) => {
            if (r.start < end && end <= r.end) {
                range.setEnd(n, end - r.start);
            }
        });
        console.log(range);
        return range;
    }

    set edit(v: boolean | "cr") {
        if (v) {
            if (md_text.getAttribute("data-id") != this.parentElement.id) {
                md_text.setAttribute("data-id", this.parentElement.id);
                this.add_event();
            }
            this.text.classList.add("show_md");
            if (v != "cr") this.text.focus();
            set_模式("浏览");
        } else {
            md_text.setAttribute("data-id", "");
            this.text.classList.remove("show_md");
            this.text.blur();
            this.text = null;
        }
    }

    set value(v) {
        this._value = JSON5.parse(v);
        this.type = this._value.type;
        this.render();
    }

    get value() {
        return JSON.stringify(this._value);
    }

    reload() {
        this.render();
    }

    render() {
        let type = this._value.type;
        let index = this._value.index;
        if (type === "text") {
            this.h.innerHTML = "";
            const x = renderRich(index);
            this.h.append(x.f);
            this.map = x.map;
        } else if (type === "todo") {
            this.init_v("todo");
            if (!集.values[this.parentElement.id].todo["checked"])
                集.values[this.parentElement.id].todo["checked"] = false;
            let i = `<input type="checkbox" ${集.values[this.parentElement.id].todo.checked ? "checked" : ""}>`;
            this.h.innerHTML = i;
            const x = renderRich(index);
            this.h.append(x.f);
            this.map = x.map;
        } else if (type === "latex math") {
            this.h.innerHTML = get_latex_math_svg(`\\displaylines{${index[0].text} }`);
        } else if (type === "math") {
            this.h.innerHTML = xmmath.toMMLHTML(index[0].text);
        } else if (type === "iframe") {
            this.h.innerHTML = `<iframe src="${index[0].text}"></iframe>`;
        } else if (type === "code") {
            this.init_v("code");
            if (!集.values[this.parentElement.id].code?.lan) 集.values[this.parentElement.id].code["lan"] = "";
            if (集.values?.[this.parentElement.id]?.code?.["html"]) {
                this.h.innerHTML = 集.values[this.parentElement.id].code["html"];
            } else {
                switch (集.values[this.parentElement.id].code["lan"]) {
                    case "mermaid":
                        this.h.innerHTML = mermaid_code(index[0].text);
                        break;
                    case "tikz":
                        this.h.innerHTML = tikz_code(index[0].text);
                        break;
                    case "jxg":
                        this.h.innerHTML = jxg_code(index[0].text);
                        break;
                    default:
                        this.h.innerText = index[0].text;
                        break;
                }
            }
        } else {
            this.h.innerHTML = "";
            const x = renderRich(index);
            this.h.append(x.f);
            this.map = x.map;
        }
    }

    init_v(type: md_type) {
        if (!集.values[this.parentElement.id]) 集.values[this.parentElement.id] = {};
        if (!集.values[this.parentElement.id][type]) 集.values[this.parentElement.id][type] = {};
    }

    set type(type: md_type) {
        this._value.type = type;
        this.h.className = type;
        this.render();
    }
}

window.customElements.define("x-text", Text);

type range = { start: number; end: number };
type RichTextType = {
    text: string;
    index: range; // [], ![)
    style?: { [key in keyof CSSStyleDeclaration]?: string };
    classList?: string[];
    isHTML?: boolean;
}[];

function rSelect(_index: RichTextType, start?: number, end?: number) {
    let length = len(_index);
    if (start === undefined) start = 0;
    if (end === undefined) end = length;
    if (start > end) [start, end] = [end, start];
    start = clip(start, 0, length);
    end = clip(end, 0, length);
    let range = { start, end };
    let { before, center, after } = clipI(range, _index);
    function replace(_range: range, text: string) {
        let p = center[0] ?? before.at(-1) ?? { text: "", index: { start: _range.start, end: _range.start } }; // 以左边样式为准
        p = structuredClone(p);
        p.text = text;
        p.index.start = _range.start;
        p.index.end = _range.start + text.length;
        center = [p];
        after = rightAdd(text.length - (_range.end - _range.start), after);
        range.end = p.index.end;
    }
    function setStyle(styleName: keyof CSSStyleDeclaration, style: string) {
        center.forEach((i) => {
            if (!i.style) i["style"] = {};
            if (styleName === "length" || styleName === "parentRule") return;
            i.style[styleName] = style;
            if (!style) delete i.style[styleName];
        });
    }
    function addClass(_class: string) {
        center.forEach((i) => {
            if (i.classList?.includes(_class)) return;
            if (!i.classList) i["classList"] = [];
            i.classList.push(_class);
        });
    }
    function rmClass(_class: string) {
        center.forEach((i) => {
            if (i.classList) i.classList = i.classList.filter((c) => c != _class);
        });
    }
    function clipI(range: range, _index: RichTextType) {
        let index = structuredClone(_index);
        function c(point: number, _index: typeof index) {
            let index = structuredClone(_index);
            let a: typeof index = [];
            let b: typeof index = [];
            let isA = true;
            for (let i of index) {
                if (i.index.start < point && point < i.index.end) {
                    const dp = point - i.index.start;
                    let ai = structuredClone(i);
                    ai.index.end = point;
                    ai.text = ai.text.slice(0, dp);
                    let bi = structuredClone(i);
                    bi.index.start = point;
                    bi.text = bi.text.slice(dp);
                    a.push(ai);
                    b.push(bi);
                    isA = false;
                    continue;
                }
                if (i.index.start === point) isA = false;
                if (isA) a.push(i);
                else b.push(i);
            }
            return [a, b];
        }

        let [before, tmp] = c(range.start, index);
        let [center, after] = c(range.end, tmp);
        return { before, center, after, range };
    }
    function join(..._indexes: RichTextType[]) {
        let index = _indexes.flat();
        return index as RichTextType;
    }
    function rightAdd(num: number, _index: RichTextType) {
        let index = structuredClone(_index);
        return index.map((i) => {
            i.index.start += num;
            i.index.end += num;
            return i;
        });
    }
    function len(_index: RichTextType) {
        if (_index.length === 0) return 0;
        return _index.at(-1).index.end - _index.at(0).index.start;
    }
    return {
        replace: (text: string) => replace({ start, end }, text),
        setStyle: setStyle,
        addClass: (_class: string) => addClass(_class),
        rmClass: (_class: string) => rmClass(_class),
        get: () => join(before, center, after),
        getSelect: () => join(center),
        getRange: () => join(center)[0].index,
        getABC: () => {
            return { before, center, after };
        },
        len: () => len(center),
    };
}

function renderRich(index: RichTextType) {
    let span = document.createDocumentFragment();
    let map: Map<range, Node> = new Map();
    for (let i of index) {
        if (i.isHTML) {
            let el = createEl("span");
            el.setAttribute("data-html", "true");
            el.innerHTML = i.text;
            span.append(el);
            map.set(i.index, el);
            continue;
        }
        if (!i.classList && !i.style) {
            const textNode = document.createTextNode(i.text);
            span.append(textNode);
            map.set(i.index, textNode);
            continue;
        }
        let el = createEl("span");
        const textNode = document.createTextNode(i.text);
        el.append(textNode);
        if (i.classList) for (let c of i.classList) el.classList.add(c);
        if (i.style) for (let n in i.style) el.style[n] = i.style[n];
        map.set(i.index, textNode);
        span.append(el);
    }
    return { f: span, map: map };
}

type md_type =
    | "text"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "blockquote"
    | "code"
    | "todo"
    | "latex math"
    | "math"
    | "iframe";

/** markdown元素 */
class markdown extends HTMLElement {
    constructor() {
        super();
    }

    private _value: { type: md_type; text: string } = { type: "p", text: "" };

    index: ReturnType<typeof md.parse>;

    text: HTMLTextAreaElement;

    h: HTMLElement;

    add_event: () => void;
    set_text_po: () => void;

    connectedCallback() {
        var s = this;
        this.h = this;
        var text = md_text;
        this.text = text;

        if (this.getAttribute("value")) {
            let v = this.getAttribute("value");
            this._value = JSON5.parse(v);
            this.render();
        }

        this.add_event = () => {
            let text = md_text;
            text.oninput = () => {
                this._value.text = text.value;
                data_changed();
                setTimeout(() => {
                    this.render();
                }, 0);
            };
            text.onfocus = () => {
                selections[0] = { id: this.parentElement.id, start: text.selectionStart, end: text.selectionEnd };
            };
            text.onkeydown = (e) => {
                if (模式 != "浏览") e.preventDefault();
                if (e.key == "Enter") {
                    e.preventDefault();
                    if (this._value.type != "text" && this._value.type != "code")
                        set_O_p(null, null, null, -this.offsetHeight * zoom);
                    data_changed();
                    if (this._value.type == "text") {
                        let last_line_start = text.value.lastIndexOf("\n", text.selectionStart - 1) + 1;
                        let last_line = text.value.slice(last_line_start, text.selectionStart);
                        let l_task = last_line.match(/^ *[-+*] +\[[x\s]\] +/i);
                        if (l_task) {
                            text.setRangeText("\n" + l_task[0]);
                            text.selectionStart = text.selectionEnd += l_task[0].length + 1;
                            text.dispatchEvent(new Event("input"));
                            return;
                        } else {
                            let l_l = last_line.match(/^ *[-+*] +/);
                            if (l_l) {
                                text.setRangeText("\n" + l_l[0]);
                                text.selectionStart = text.selectionEnd += l_l[0].length + 1;
                                text.dispatchEvent(new Event("input"));
                                return;
                            }
                        }
                        let l_n = last_line.match(/^ *\d+\. +/);
                        if (l_n) {
                            let t = "\n" + l_n[0].replace(/\d+/, (n) => String(Number(n) + 1));
                            text.setRangeText(t);
                            text.selectionStart = text.selectionEnd += t.length;
                            text.dispatchEvent(new Event("input"));
                            return;
                        }
                    }

                    if (e.ctrlKey) {
                        if (e.shiftKey) {
                            let rel = find_root_layout(this.parentElement);
                            let xel = createX("x-md");
                            xel.style.left = rel.offsetLeft + "px";
                            xel.style.top = rel.offsetTop + rel.offsetHeight + 16 + "px";
                            z.push(xel);
                            var md = createEl("x-md");
                            xel.append(md);
                            md.edit = true;
                        }
                    } else {
                        if (e.shiftKey || this._value.type == "text") {
                            text.setRangeText("\n");
                            text.selectionStart = text.selectionEnd = text.selectionStart + 1;
                        } else {
                            let t = text.value;
                            let t0 = t.slice(0, text.selectionStart),
                                t1 = t.slice(text.selectionEnd, t.length);
                            this._value.text = t0;
                            this.value = this._value;

                            let p = this.parentElement as x;
                            let pxel = null as x;
                            if (
                                p.parentElement.classList.contains("flex-column") ||
                                p.parentElement.classList.contains("flex-row")
                            ) {
                                pxel = p.parentElement as x;
                            } else {
                                // 不存在上级堆叠元素，需要新建并把此元素套进去
                                pxel = createX("x-x");
                                pxel.id = uuid_id();
                                link(pxel.id).add();
                                pxel.style.left = p.offsetLeft + "px";
                                pxel.style.top = p.offsetTop + "px";
                                pxel.classList.add("flex-column");
                                z.push(pxel);
                                let x = createX(p.type);
                                x.id = p.id;
                                x.setAttribute("style", p.getAttribute("style"));
                                pxel.append(x);
                                x.style.left = "";
                                x.style.top = "";
                                x.style.position = "relative";
                                x.value = p.value;
                                p.remove();
                                remove_x_data(p.id); // 后面的get_data会把p里的子元素都刷新，加回来
                                p = x;
                            }

                            let xel = createX("x-md");
                            let md = createEl("x-md");
                            xel.append(md);
                            xel.id = uuid_id();
                            link(xel.id).add();
                            xel.style.position = "relative";
                            p.after(xel);
                            md.edit = true;
                            let type: md_type = (["h1", "h2", "h3", "h4", "h5", "h6"] as md_type[]).includes(
                                this._value.type
                            )
                                ? "p"
                                : this._value.type;
                            md.value = { type: type, text: t1 };
                            md.text.setSelectionRange(0, 0);

                            get_data();
                        }
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
                        if (e.key == i[0] && (i[0] == i[1] || e.key != i[1])) {
                            e.preventDefault();
                            let t = text.value.slice(text.selectionStart, text.selectionEnd);
                            let s = text.selectionStart;
                            text.setRangeText(i[0] + t + i[1]);
                            text.selectionStart = s + i[0].length;
                            text.selectionEnd = s + i[0].length + t.length;
                            if (e.key == "[" && text.value.charAt(text.selectionStart - 2) == "[") {
                                let id = uuid_id();
                                text.setRangeText(`${t}#${id}`);
                                if (t) text.selectionEnd -= id.length + 1;
                            }
                            text.dispatchEvent(new Event("input"));
                        }
                    }
                }
                if (e.key == "Tab") {
                    e.preventDefault();
                    if (e.ctrlKey || this.text.selectionStart != 0) {
                        let s = text.selectionStart;
                        text.setRangeText("\t");
                        text.selectionStart = s + 1;
                        text.selectionEnd = s + 1;
                        text.dispatchEvent(new Event("input"));
                    } else {
                        let p = this.parentElement as x;
                        let x = createX(p.type),
                            md = createEl("x-md");
                        x.id = p.id;
                        x.setAttribute("style", p.getAttribute("style"));
                        p.classList.add("flex-column");
                        p.classList.add("list");
                        this.remove();
                        p.append(x);
                        x.append(md);
                        md.value = this.value;
                        p.id = uuid_id();
                        link(p.id).add();
                        md.edit = true;
                        md.text.setSelectionRange(0, 0);
                    }
                }
                if (e.key == "/" && e.ctrlKey) {
                    e.preventDefault();
                    let s = this.getBoundingClientRect();
                    console.log(document.getSelection().getRangeAt(0), s);

                    search_pel.style.left = s.left + "px";
                    search_pel.style.top = s.top + "px";
                    search_pel.classList.add("搜索展示");
                    search_el.setAttribute("data-fid", this.parentElement.id);
                    search_el.value = "type ";
                    setTimeout(() => {
                        search_el.focus();
                    }, 10);
                }
                if (e.key == " ") {
                    if (this._value.type == "code" || this._value.type == "text") return;
                    let mark = text.value.slice(0, text.selectionStart);
                    console.log(mark);
                    let t = text.value.slice(text.selectionStart, text.value.length);
                    let type: md_type;
                    let m2: { [key: string]: md_type } = {
                        "#": "h1",
                        "##": "h2",
                        "###": "h3",
                        "####": "h4",
                        "#####": "h5",
                        "######": "h6",
                        "[]": "todo",
                        $$: "math",
                        "```": "code",
                    };
                    for (let m in m2) {
                        if (m == mark) {
                            e.preventDefault();
                            type = m2[m];
                            break;
                        }
                    }
                    if (!type) return;
                    text.value = t;
                    text.selectionStart = text.selectionEnd = 0;
                    this._value = { type, text: t };
                    this.type = type;
                    this.render();
                }
                if (e.key == "Backspace") {
                    if (this._value.type == "p") {
                        if (text.selectionStart == 0 && text.selectionEnd == 0) {
                            z.remove(this.parentElement.id);
                        }
                    }
                    if (this._value.type != "text") {
                        if (text.selectionStart == 0 && text.selectionEnd == 0) {
                            this.type = "p";
                        }
                    }
                }
                if (e.key == "ArrowUp") {
                    if (this._value.type != "text" && this._value.type != "code") {
                        if (
                            is_flex(this.parentElement.parentElement) == "flex" &&
                            this.parentElement.previousElementSibling &&
                            this.parentElement.previousElementSibling.querySelector("x-md")
                        ) {
                            e.preventDefault();
                            let md = this.parentElement.previousElementSibling.querySelector("x-md") as markdown;
                            md.text.setSelectionRange(text.selectionStart, text.selectionStart);
                            md.edit = true;
                        } else {
                            z.focus(this.parentElement.id);
                            set_模式("设计");
                        }
                    } else {
                        if (text.selectionStart == 0) {
                            z.focus(this.parentElement.id);
                            set_模式("设计");
                        }
                    }
                }
                if (e.key == "ArrowDown") {
                    if (this._value.type != "text" && this._value.type != "code") {
                        if (
                            is_flex(this.parentElement.parentElement) == "flex" &&
                            this.parentElement.nextElementSibling &&
                            this.parentElement.nextElementSibling.querySelector("x-md")
                        ) {
                            e.preventDefault();
                            let md = this.parentElement.nextElementSibling.querySelector("x-md") as markdown;
                            md.text.setSelectionRange(text.selectionStart, text.selectionStart);
                            md.edit = true;
                        } else {
                            z.focus(this.parentElement.id);
                            set_模式("设计");
                        }
                    } else {
                        if (text.selectionEnd == text.value.length) {
                            z.focus(this.parentElement.id);
                            set_模式("设计");
                        }
                    }
                }
                if (e.key == "ArrowLeft") {
                    if (is_flex(this.parentElement.parentElement) == "flex" && text.selectionStart == 0) {
                        if (
                            this.parentElement.previousElementSibling &&
                            this.parentElement.previousElementSibling.querySelector("x-md")
                        ) {
                            e.preventDefault();
                            let md = this.parentElement.previousElementSibling.querySelector("x-md") as markdown;
                            md.edit = true;
                            md.text.setSelectionRange(md.text.value.length, md.text.value.length);
                        } else {
                            z.focus(this.parentElement.id);
                            set_模式("设计");
                        }
                    }
                }
                if (e.key == "ArrowRight") {
                    if (is_flex(this.parentElement.parentElement) == "flex" && text.selectionEnd == text.value.length) {
                        if (
                            this.parentElement.nextElementSibling &&
                            this.parentElement.nextElementSibling.querySelector("x-md")
                        ) {
                            e.preventDefault();
                            let md = this.parentElement.nextElementSibling.querySelector("x-md") as markdown;
                            md.edit = true;
                            md.text.setSelectionRange(0, 0);
                        } else {
                            z.focus(this.parentElement.id);
                            set_模式("设计");
                        }
                    }
                }
            };
            text.onclick = text.onkeyup = () => {
                if (模式 != "浏览") return;
                this.set_text_po();

                selections[0] = { id: this.parentElement.id, start: text.selectionStart, end: text.selectionEnd };
            };
            text.onblur = () => {
                if (模式 == "浏览") this.edit = false;
            };
            text.onpaste = (e) => {
                if (e.clipboardData.files.length) {
                    e.preventDefault();
                    put_datatransfer(e.clipboardData, el_offset(this, O).x, el_offset(this, O).y);
                    if (!text.value) {
                        link(this.parentElement.id).rm();
                        this.parentElement.remove();
                    }
                } else {
                    let t = e.clipboardData.getData("text/plain").trim();
                    if (this._value.type == "code") {
                        if (!this._value.text && e.clipboardData.getData("text/html")) {
                            this.init_v("code");
                            集.values[this.parentElement.id].code["html"] = e.clipboardData.getData("text/html");
                        } else {
                            集.values[this.parentElement.id].code["html"] = "";
                        }
                        this.reload();
                        data_changed();
                    } else {
                        if (this._value.type != "text" && (t.includes("\n") || t.includes("\r"))) {
                            e.preventDefault();
                            let el = this.parentElement as x;
                            let pel = el.parentElement;
                            let md: markdown;
                            if (!(pel.classList.contains("flex-column") || pel.classList.contains("flex-row"))) {
                                let nel = createX("x-md");
                                nel.id = el.id;
                                el.id = uuid_id();
                                link(el.id).add();
                                this.remove();
                                el.append(nel);
                                md = createEl("x-md");
                                nel.append(md);
                                md.value = this.value;
                                md.text.setSelectionRange(text.selectionStart, text.selectionEnd);
                                pel = el;
                                el = nel;
                                pel.classList.add("flex-column");
                            } else {
                                md = this;
                            }
                            const l = t.split(/[\n\r]+/);
                            let last_el = el;
                            for (let i in l) {
                                const tt = l[i];
                                if (!tt) continue;
                                if (i == "0") {
                                    md._value.text = tt;
                                    md.text.setRangeText(tt);
                                    md.reload();
                                } else {
                                    let x = createX("x-md");
                                    let md = createEl("x-md");
                                    last_el.after(x);
                                    x.append(md);
                                    x.id = uuid_id();
                                    link(x.id).add();
                                    md.value = { type: "p", text: tt };
                                    last_el = x;
                                }
                            }
                            get_data();
                        } else if (this._value.type != "text") {
                            e.preventDefault();
                            let t = e.clipboardData.getData("text/plain").replace("\n", "");
                            text.setRangeText(t);
                            let s = text.selectionStart;
                            if (s == text.selectionEnd) {
                                text.setSelectionRange(s + t.length, s + t.length);
                            }
                            this._value.text = text.value;
                            this.reload();
                        }
                    }
                }
            };
        };

        this.set_text_po = () => {
            let x = el_offset(this.h, 画布).x,
                y = el_offset(this.h, 画布).y + el_offset(this).h;
            text.style.left = x + "px";
            text.style.top = y + "px";
        };

        s.onpointerdown = () => {
            if (模式 == "浏览") this.edit = true;
        };

        // 点击元素定位到源文本行
        s.onclick = (e) => {
            let el = <HTMLElement>e.target;
            if (el.tagName == "TEXTAREA") return;
            if ((<HTMLInputElement>el).type == "checkbox") {
                // 待办与源文本同步
                集.values[this.parentElement.id].todo.checked = (<HTMLInputElement>el).checked;
                data_changed();
                return;
            }
            if (el.tagName == "A") {
                e.preventDefault();
                let a = el as HTMLAnchorElement;
                if (e.ctrlKey) {
                    if (a.getAttribute("href")[0] == "#") {
                        let ml = a.getAttribute("href").split(":");
                        const id = ml[0].slice(1);
                        let el = elFromId(id);
                        jump_to_x_link(id);
                        let mel = el.querySelector("audio") || el.querySelector("video");
                        if (ml[1]) {
                            let ar = ml[1].split(",");
                            ar.forEach((x) => x.trim());
                            if (mel.tagName == "AUDIO" || mel.tagName == "VIDEO") {
                                (mel as HTMLMediaElement).currentTime = Number(ar[0]);
                            }
                        }
                    } else {
                        window.open((el as HTMLAnchorElement).href);
                    }
                }
            }
            this.set_text_po();
        };
        s.spellcheck = false;
        s.onpointerup = (e) => {
            if (模式 != "浏览") return;
            let el = <HTMLElement>e.target;
            if (el.tagName != "INPUT") {
                s.contentEditable = "true";
            } else {
                return;
            }
            console.log(document.getSelection().getRangeAt(0));
            let r = document.getSelection().getRangeAt(0);
            function get_text(node: Node, of: number) {
                let before = "",
                    after = "",
                    x = false;
                let w = (pn: Node) => {
                    for (let n of pn.childNodes) {
                        let text = n.textContent;
                        if (n?.firstChild?.nodeName == "MJX-CONTAINER") text = "";
                        if (!n.contains(node)) {
                            if (!x) {
                                before += text;
                            } else {
                                after += text;
                            }
                        } else {
                            if (n == node) {
                                before += text.slice(0, of);
                                after += text.slice(of);
                                x = true;
                            } else {
                                w(n);
                            }
                        }
                    }
                };
                w(s);
                return { before, after };
            }
            let start_t = get_text(r.startContainer, r.startOffset);
            let end_t = get_text(r.endContainer, r.endOffset);
            console.log(start_t, end_t);
            let p2p = (of: number, start: boolean) => {
                let list = [];
                let w = (l: ReturnType<typeof md.parse>) => {
                    for (let i of l) {
                        if (i.children) {
                            w(i.children);
                        } else {
                            if (i.markup) {
                                if (i.type == "emoji") {
                                    list.push({ text: `:${i.markup}`, type: "mu" });
                                    // 删去一个冒号以匹配
                                } else if (i.markup.match(/^#+$/)) {
                                    list.push({ text: i.markup + " ", type: "mu" });
                                } else {
                                    list.push({ text: i.markup, type: "mu" });
                                }
                            } else if (i.type == "html_inline" || i.type == "html_block") {
                                list.push({ text: i.content, type: "mu" });
                            } else if (i.type == "mathjax_inline") {
                                list.push({ text: i.content, type: "mu" });
                            } else if (i.content) {
                                list.push({ text: i.content, type: "ct" });
                            }
                        }
                    }
                };
                if (this.index) w(this.index);
                if (this._value.type == "code") {
                    list = [{ text: this._value.text, type: "ct" }];
                }
                console.log(list);
                let true_o = 0;
                let tmp_o = 0;
                for (let n in list) {
                    const i = list[n];
                    if (i.type == "ct") {
                        if (tmp_o <= of && of <= tmp_o + i.text.length) {
                            let up = 0;
                            let nextn = Number(n) + 1;
                            if (list?.[nextn]?.type == "mu" && !start && tmp_o + i.text.length == of)
                                up = list[nextn].text.length;
                            return true_o + (of - tmp_o) + up;
                        }
                        tmp_o += i.text.length;
                    }
                    true_o += i.text.length;
                }
                return of;
            };
            let start_p = 0;
            let end_p = 0;
            start_p = p2p(start_t.before.length, true);
            end_p = p2p(end_t.before.length, false);
            if (start_p > end_p) {
                [start_p, end_p] = [end_p, start_p];
            }
            console.log(start_p, end_p);
            text.setSelectionRange(start_p, end_p);
            setTimeout(() => {
                this.edit = true;
            }, 10);
            s.contentEditable = "false";
        };
    }

    set edit(v: boolean | "cr") {
        var text = this.text;
        if (v) {
            if (md_text.getAttribute("data-id") != this.parentElement.id) {
                md_text.setAttribute("data-id", this.parentElement.id);
                this.text = md_text;
                this.set_text_po();
                this.add_event();
                text.value = this._value.text;
            }
            text.classList.add("show_md");
            if (v != "cr") text.focus();
            set_模式("浏览");
        } else {
            md_text.setAttribute("data-id", "");
            text.classList.remove("show_md");
            text.blur();
            text = null;
        }
    }

    set value(v) {
        this._value = v;
        this.type = this._value.type;
        let t = this._value.text;
        if (this.text.getAttribute("data-id") == this.parentElement.id) this.text.value = t;
        this.render();
    }

    get value() {
        return this._value;
    }

    reload() {
        this.render();
    }

    render() {
        let type = this._value.type;
        let text = this._value.text;
        if (type == "text") {
            this.index = md.parse(text, {});
            this.h.innerHTML = md.render(text);
        } else if (type == "todo") {
            this.init_v("todo");
            if (!集.values[this.parentElement.id].todo["checked"])
                集.values[this.parentElement.id].todo["checked"] = false;
            let i = `<input type="checkbox" ${集.values[this.parentElement.id].todo.checked ? "checked" : ""}>`;
            this.index = md.parse(text, {});
            this.h.innerHTML = i + md.render(text);
        } else if (type == "latex math") {
            this.h.innerHTML = get_latex_math_svg(`\\displaylines{${text} }`);
        } else if (type == "math") {
            this.h.innerHTML = xmmath.toMMLHTML(text);
        } else if (type == "iframe") {
            this.h.innerHTML = `<iframe src="${text}"></iframe>`;
        } else if (type == "code") {
            this.init_v("code");
            if (!集.values[this.parentElement.id].code?.lan) 集.values[this.parentElement.id].code["lan"] = "";
            if (集.values?.[this.parentElement.id]?.code?.["html"]) {
                this.h.innerHTML = 集.values[this.parentElement.id].code["html"];
            } else {
                switch (集.values[this.parentElement.id].code["lan"]) {
                    case "mermaid":
                        this.h.innerHTML = mermaid_code(text);
                        break;
                    case "tikz":
                        this.h.innerHTML = tikz_code(text);
                        break;
                    case "jxg":
                        this.h.innerHTML = jxg_code(text);
                        break;
                    default:
                        this.h.innerText = text;
                        break;
                }
            }
        } else {
            this.index = md.parse(text, {});
            this.h.innerHTML = md.render(text);
        }
    }

    init_v(type: md_type) {
        if (!集.values[this.parentElement.id]) 集.values[this.parentElement.id] = {};
        if (!集.values[this.parentElement.id][type]) 集.values[this.parentElement.id][type] = {};
    }

    set type(type: md_type) {
        this._value.type = type;
        this.parentElement.className = type;
        this.render();
    }

    set_text() {
        this._value.text = this.text.value;
        this.render();
    }
}

window.customElements.define("x-md", markdown);

// 几何图形
import JXG from "jsxgraph";
JXG.Options.text.useMathJax = true;
class graph extends HTMLElement {
    constructor() {
        super();
    }

    text: HTMLTextAreaElement;
    s: HTMLElement;
    resize_ob: ResizeObserver;

    connectedCallback() {
        const b = document.createElement("div");
        b.id = "t_md";
        const edit = createEl("div");
        const editor = createEl("div");
        this.s = document.createElement("div");
        this.s.id = `g${uuid_id()}`;
        this.text = document.createElement("textarea");
        const text_class = "hide_jxg_text";
        this.text.classList.add(text_class);
        this.text.value = this.getAttribute("value") || "";
        this.innerHTML = "";
        this.append(b);
        b.append(edit, editor);
        this.append(this.s);
        this.append(this.text);

        let x = this.parentElement as x;
        if (!x.style.width && !x.style.height) {
            x.style.width = "100px";
            x.style.height = "100px";
        }

        if (JXG) {
            if (this.text.value) {
                this.run(this.text.value);
            }
        }

        edit.onclick = () => {
            this.text.classList.toggle(text_class);
            this.text.focus();
        };
        editor.onclick = () => {
            let url = new URL("https://jxg-editor.netlify.app");
            url.searchParams.set("code", this.text.value);
            window.open(url.toString());
            this.text.classList.add(text_class);
        };
        this.text.onchange = () => {
            this.run(this.text.value);
        };
        this.resize_ob = new ResizeObserver(() => {
            this.run(this.text.value);
        });
        this.resize_ob.observe(this.parentElement);
    }

    disconnectedCallback() {
        this.resize_ob.disconnect();
    }

    reflasth() {
        if (JXG && this.s.id) JXG.getBoardByContainerId(this.s.id)?.updateCSSTransforms();
    }

    run(code: string) {
        setTimeout(() => {
            if (this.s.innerHTML) JXG.JSXGraph.freeBoard(JXG.getBoardByContainerId(this.s.id));
            this.s.id = `g${uuid_id()}`;
            eval(`{let gid = '${this.s.id}';${code}}`);
            const svg = this.s.querySelector("svg");
            if (!svg) return;
            const ob = new MutationObserver(() => {
                svg.setAttribute("width", String(el_offset2(this).w));
                svg.setAttribute("height", String(el_offset2(this).h));
                ob.disconnect();
            });
            ob.observe(svg, { attributes: true, attributeFilter: ["width"] });
        }, 10);
    }

    set value(v) {
        this.text.value = v;
        this.run(v);
    }

    get value() {
        return this.text.value;
    }
}

window.customElements.define("x-graph", graph);

ignore_el.push("x-graph");

import mathSymbols from "../../lib/tex/x.js";
class symbols extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var div = createEl("div");
        this.append(div);
        let b = createEl("div");
        b.innerHTML = icon(reload_svg);
        b.style.position = "relative";
        b.style.width = "24px";
        b.style.height = "24px";
        div.append(b);
        b.onclick = () => {
            b.remove();
            for (const i in mathSymbols) {
                for (const j of mathSymbols[i]) {
                    let img = createEl("img");
                    img.title = j.name;
                    img.id = `snippet_${j.source}`;
                    let b = btoa(j.svg);
                    img.src = `data:image/svg+xml;base64,${b}`;
                    img.loading = "lazy";
                    div.append(img);
                }
            }
        };

        this.onclick = (e) => {
            e.stopPropagation();
            f(<HTMLElement>e.target);
        };
        var f = (el: HTMLElement) => {
            let text = (get_x_by_id(selections[0].id).querySelector("x-md") as markdown).text;
            if (text.tagName != "TEXTAREA") return;
            if (el.id.includes("snippet")) {
                for (let i in mathSymbols) {
                    for (let j of mathSymbols[i]) {
                        if ("snippet_" + j.source == el.id) {
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

/** 进度元素 */
class progress extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var v = this.getAttribute("value");
        var div = createEl("div");
        var p = createEl("span");
        this.append(div);
        this.append(p);

        div.style.width = `${v}%`;

        p.innerText = `${v}%`;
    }
}

window.customElements.define("x-pro", progress);

class progress2 extends HTMLElement {
    constructor() {
        super();
    }

    jd: HTMLElement;
    _value: number;

    connectedCallback() {
        this.jd = createEl("div");
        this.append(this.jd);
        let yle: PointerEvent;
        this.onpointerdown = (e) => {
            yle = e;
            ylf(e);
            e.preventDefault();
        };
        document.addEventListener("pointermove", (e) => {
            if (yle) {
                e.preventDefault();
                ylf(e);
            }
        });
        document.addEventListener("pointerup", (e) => {
            if (yle) {
                e.preventDefault();
                yle = null;
                ylf(e);
            }
        });

        let ylf = (e: PointerEvent) => {
            let r = this.getBoundingClientRect();
            let pw = e.clientX - r.x;
            let p = pw / r.width;
            p = clip(p, 0, 1);

            this.jd.style.width = p * 100 + "%";
            this._value = p;
            this.dispatchEvent(new InputEvent("input"));
        };
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
        this.jd.style.width = v * 100 + "%";
    }
}

window.customElements.define("x-progress", progress2);

/** 文件预览元素 */
class file extends HTMLElement {
    constructor() {
        super();
    }

    _value: { r: boolean; id: string; other?: any };
    div: HTMLDivElement;

    connectedCallback() {
        this.ondblclick = () => {
            this._value.r = !this._value.r;
            this.set_m();
        };
        this.div = createEl("div");
        this.append(this.div);
        if (this.getAttribute("value")) {
            this._value = JSON5.parse(this.getAttribute("value"));
            this.set_m();
        }
    }

    set_m() {
        let f = 集.assets[this._value.id];
        if (!f) return;
        let type = f.type;
        if (
            type[0] != "image" &&
            type[0] != "audio" &&
            type[0] != "video" &&
            type[1] != "pdf" &&
            type[1] != "gltf-binary" &&
            type[1] != "vnd.geogebra.file"
        )
            this._value.r = false;
        this.div.innerHTML = "";
        if (this._value.r) {
            setTimeout(() => {
                this.div.classList.remove("file");
                if (type[0] == "image") {
                    let img = createEl("x-img");
                    this.div.append(img);
                    img.value = get_assets(this._value.id);
                }
                if (type[0] == "audio") {
                    let audio = createEl("x-audio");
                    this.div.append(audio);
                    audio.value = get_assets(this._value.id);
                }
                if (type[0] == "video") {
                    let video = createEl("video");
                    video.controls = true;
                    this.div.append(video);
                    video.src = get_assets(this._value.id);
                    video.onload = () => {
                        URL.revokeObjectURL(video.src);
                    };
                }
                if (type[1] == "pdf") {
                    let pdf = createEl("x-pdf");
                    this.div.append(pdf);
                    pdf.value = this._value.other || JSON.stringify({ id: this._value.id, page: 1 });
                }
                if (type[1] == "gltf-binary") {
                    let td = createEl("x-three");
                    this.div.append(td);
                    td.value = this._value.id;
                }
                if (type[1] == "vnd.geogebra.file") {
                    let ggb = createEl("x-ggb");
                    this.div.append(ggb);
                    ggb.value = this._value.id;
                }
            }, 10);
        } else {
            this.div.classList.add("file");
            let i = createEl("div");
            i.innerHTML = icon(file_svg);
            let file_name_el = createEl("p");
            this.div.append(i);
            this.div.append(file_name_el);
        }
    }

    get value() {
        if ((this.div.querySelector(":scope > *") as any).value)
            this._value["other"] = (this.div.querySelector(":scope > *") as any).value;
        return JSON.stringify(this._value);
    }
    set value(s) {
        this._value = JSON5.parse(s);
        this.set_m();
    }
}

window.customElements.define("x-file", file);

function base64_blob(base64: string) {
    let arr = base64.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = window.atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    let blob = new Blob([u8arr], { type: mime });
    return blob;
}

import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js";

var pdf_cache = {} as { [key: string]: pdfjsLib.PDFDocumentProxy };

/** pdf浏览元素 */
class pdf_viewer extends HTMLElement {
    constructor() {
        super();
    }

    _value: { id: string; page: number };
    div: HTMLDivElement;
    pages: HTMLElement;
    canvas: HTMLCanvasElement;
    canvas1: HTMLCanvasElement;
    text: HTMLElement;
    old_id = "";
    tasks: { [key: string]: pdfjsLib.RenderTask } = {};
    now_page_i = 0;
    now_page = null;

    load_pdf = async () => {
        let f = 集.assets[this._value.id];
        if (!f) return;
        var loadingTask = pdfjsLib.getDocument(get_assets(this._value.id));
        pdf_cache[this._value.id] = await loadingTask.promise;
        return pdf_cache[this._value.id];
    };
    connectedCallback() {
        this.div = createEl("div");
        this.append(this.div);
        let per = createEl("div"),
            next = createEl("div");
        this.pages = createEl("div");
        per.onclick = () => {
            this._value.page = Math.max(1, this._value.page - 1);
            this.set_m();
        };
        next.onclick = async () => {
            let pdf = pdf_cache[this._value.id] || (await this.load_pdf());
            this._value.page = Math.min(pdf.numPages, this._value.page + 1);
            this.set_m();
        };

        let page_i = createEl("input"),
            page_t = createEl("span"),
            page_bar = createEl("div"),
            pages = createEl("div");
        page_t.id = "page_i";
        pages.id = "pages";
        page_bar.append(page_i, page_t);
        this.pages.append(page_bar);
        this.pages.append(pages);
        pages.classList.add("hide_pdf_pages");
        pages.onwheel = (e) => {
            e.stopPropagation();
        };
        this.pages.onclick = () => {
            pages.classList.toggle("hide_pdf_pages");
        };
        this.div.append(per, this.pages, next);
        this.canvas = createEl("canvas");
        this.canvas.style.zIndex = "1";
        this.append(this.canvas);
        this.canvas1 = createEl("canvas");
        this.canvas1.style.zIndex = "2";
        this.append(this.canvas1);
        this.text = createEl("div");
        this.append(this.text);
        if (this.getAttribute("value")) {
            this._value = JSON5.parse(this.getAttribute("value"));
            this.set_m();
        }
    }

    async set_m() {
        let pdf = pdf_cache[this._value.id] || (await this.load_pdf());
        this.canvas.style.zIndex = "1";
        this.canvas1.style.zIndex = "2";
        let set_page = async (page: pdfjsLib.PDFPageProxy) => {
            let scale = 1.5;
            let viewport = page.getViewport({ scale: scale });

            let canvas = this.canvas;
            let context = canvas.getContext("2d");

            let cw = canvas.getBoundingClientRect().width * scale,
                ch = canvas.getBoundingClientRect().height * scale;

            let scalex = cw / viewport.width;
            let scaley = ch / viewport.height;

            canvas.width = Math.round(cw);
            canvas.height = Math.round(ch);

            let transform = scalex != 1 && scaley != 1 ? [scalex, 0, 0, scaley, 0, 0] : null;

            let renderContext = {
                canvasContext: context,
                transform: transform,
                viewport: viewport,
            };
            for (let t in this.tasks) {
                this.tasks[t].cancel();
                delete this.tasks[t];
            }
            let task = page.render(renderContext);
            let taskid = uuid_id();
            this.tasks[taskid] = task;
            task.promise.then(() => {
                this.canvas.style.zIndex = "2";
                this.canvas1.style.zIndex = "1";
                [this.canvas, this.canvas1] = [this.canvas1, this.canvas];
            });
            task.promise.finally(() => {
                delete this.tasks[taskid];
            });

            this.text.style.transform = `scaleX(${canvas.offsetWidth / viewport.width}) scaleY(${
                canvas.offsetHeight / viewport.height
            })`;
            this.text.innerHTML = "";
            let text = await page.getTextContent();
            pdfjsLib.renderTextLayer({ container: this.text, viewport, textContent: text });
        };
        if (this._value.page == this.now_page_i && this.now_page) {
            set_page(this.now_page);
        } else {
            pdf.getPage(this._value.page).then((page) => {
                this.now_page = page;
                this.now_page_i = this._value.page;
                set_page(page);
            });
        }

        let page_i = this.pages.querySelector("#page_i") as HTMLElement;
        this.pages.querySelector("input").value = String(this._value.page);
        page_i.innerHTML = `${pdf.numPages}`;
        this.pages.querySelector("input").style.width = page_i.offsetWidth + "px";
    }

    get value() {
        return JSON.stringify(this._value);
    }
    set value(s) {
        this._value = JSON5.parse(s);
        this.set_m();
    }
}

window.customElements.define("x-pdf", pdf_viewer);

/** 绘画元素 */
import { getStroke } from "perfect-freehand";

import nDollar from "ndollar-js";
let recognizer = new nDollar.Recognizer(false);

recognizer.AddGesture("line", [[new nDollar.Point(0, 0), new nDollar.Point(100, 0)]]);
recognizer.AddGesture("triangle", [
    [new nDollar.Point(30, 7), new nDollar.Point(103, 7)],
    [new nDollar.Point(103, 7), new nDollar.Point(66, 87)],
    [new nDollar.Point(66, 87), new nDollar.Point(30, 7)],
]);
recognizer.AddGesture("rect", [
    [new nDollar.Point(0, 0), new nDollar.Point(100, 0)],
    [new nDollar.Point(100, 0), new nDollar.Point(100, 100)],
    [new nDollar.Point(100, 100), new nDollar.Point(0, 100)],
    [new nDollar.Point(0, 100), new nDollar.Point(0, 0)],
]);
recognizer.AddGesture("circle", [
    [
        new nDollar.Point(382, 310),
        new nDollar.Point(377, 308),
        new nDollar.Point(373, 307),
        new nDollar.Point(366, 307),
        new nDollar.Point(360, 310),
        new nDollar.Point(356, 313),
        new nDollar.Point(353, 316),
        new nDollar.Point(349, 321),
        new nDollar.Point(347, 326),
        new nDollar.Point(344, 331),
        new nDollar.Point(342, 337),
        new nDollar.Point(341, 343),
        new nDollar.Point(341, 350),
        new nDollar.Point(341, 358),
        new nDollar.Point(342, 362),
        new nDollar.Point(344, 366),
        new nDollar.Point(347, 370),
        new nDollar.Point(351, 374),
        new nDollar.Point(356, 379),
        new nDollar.Point(361, 382),
        new nDollar.Point(368, 385),
        new nDollar.Point(374, 387),
        new nDollar.Point(381, 387),
        new nDollar.Point(390, 387),
        new nDollar.Point(397, 385),
        new nDollar.Point(404, 382),
        new nDollar.Point(408, 378),
        new nDollar.Point(412, 373),
        new nDollar.Point(416, 367),
        new nDollar.Point(418, 361),
        new nDollar.Point(419, 353),
        new nDollar.Point(418, 346),
        new nDollar.Point(417, 341),
        new nDollar.Point(416, 336),
        new nDollar.Point(413, 331),
        new nDollar.Point(410, 326),
        new nDollar.Point(404, 320),
        new nDollar.Point(400, 317),
        new nDollar.Point(393, 313),
        new nDollar.Point(392, 312),
    ],
]);

class draw extends HTMLElement {
    constructor() {
        super();
    }

    main_svg: SVGSVGElement;
    tmp_svg: SVGSVGElement;

    pen = {
        color: penc_el.value || "#000000",
        width: pen_width_el.value,
        zoom: pen_zoom_el.checked,
    };

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
    t;
    xz: {
        rect: { center: { x: number; y: number }; a: number; w: number; h: number };
        xz: string;
        start_p: { x: number; y: number };
        end_p: { x: number; y: number };
    } = { rect: { center: { x: 0, y: 0 }, a: 0, w: 0, h: 0 }, xz: "", start_p: { x: 0, y: 0 }, end_p: { x: 0, y: 0 } };

    draw(e: PointerEvent) {
        if (!e.pressure) return;
        if (e.pointerType == "mouse" && e.buttons == 2) return;
        let x = e.clientX / zoom - this.getBoundingClientRect().x / zoom - this.ox,
            y = e.clientY / zoom - this.getBoundingClientRect().y / zoom - this.oy;
        this.main_svg.setAttribute("width", String(this.width));
        this.main_svg.setAttribute("height", String(this.height));
        this.tmp_svg.setAttribute("width", String(this.width));
        this.tmp_svg.setAttribute("height", String(this.height));

        for (let el of this.main_svg.children) {
            let t = `translate(${this.ox},${this.oy})`;
            el.setAttribute("transform", t);
        }

        clearTimeout(this.t);
        this.t = setTimeout(() => {
            let points = [];
            for (let p of this.points) {
                if (!p.p) continue;
                points.push(p);
            }
            console.log(points);
            let l = [];
            for (let p of points) {
                if (!p.p) continue;
                l.push(new nDollar.Point(p.x, p.y));
            }
            let result = recognizer.Recognize([l], false, false);
            console.log(result);
            if (result.Score < 0.89) return;
            function convexHull(points) {
                // 将点按照横坐标排序
                points.sort(function (a, b) {
                    return a.x != b.x ? a.x - b.x : a.y - b.y;
                });

                // 初始化下凸包
                var lower = [];
                for (var i = 0; i < points.length; i++) {
                    while (
                        lower.length >= 2 &&
                        cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0
                    ) {
                        lower.pop();
                    }
                    lower.push(points[i]);
                }

                // 初始化上凸包
                var upper = [];
                for (var i = points.length - 1; i >= 0; i--) {
                    while (
                        upper.length >= 2 &&
                        cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0
                    ) {
                        upper.pop();
                    }
                    upper.push(points[i]);
                }

                // 去除重复的点
                upper.pop();
                lower.pop();

                // 返回凸包
                return lower.concat(upper);
            }

            // 计算向量的叉积
            function cross(o, a, b) {
                return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
            }
            function getMinimumBoundingBox(points: { x: number; y: number }[]) {
                // 初始化变量
                let maxd = -Infinity,
                    maxd2 = -Infinity,
                    mind2 = Infinity;
                let maxd_p;
                let minArea = Infinity;
                let main_a: number;
                let main_b: number;
                let main_c: number;
                let main_sqrtab: number;
                let rect: { center: { x: number; y: number }; a: number; w: number; h: number };

                // 对于每个点对 (p, q)，计算矩形的最小面积
                for (let i = 0; i < points.length; i++) {
                    for (let j = i + 1; j < points.length; j++) {
                        // 计算点对 (p, q) 所在直线的方程
                        let p = points[i];
                        let q = points[j];
                        let a = p.y - q.y;
                        let b = q.x - p.x;
                        let c = p.x * q.y - q.x * p.y;
                        let sqrtab = Math.sqrt(a ** 2 + b ** 2);

                        let mmaxd = -Infinity,
                            mmaxd2 = -Infinity,
                            mmind2 = Infinity;
                        let mmaxd_p;

                        // 遍历点集并更新最小和最大 x 和 y 坐标
                        for (let k = 0; k < points.length; k++) {
                            let x = points[k].x;
                            let y = points[k].y;
                            let d = Math.abs(a * x + b * y + c) / sqrtab;
                            let d2 = (-b * x + a * y + c) / sqrtab; // 距离垂线
                            if (d > mmaxd) {
                                mmaxd = d;
                                mmaxd_p = points[k];
                            }
                            mmaxd2 = Math.max(mmaxd2, d2);
                            mmind2 = Math.min(mmind2, d2);
                        }

                        let area = (mmaxd2 - mmind2) * mmaxd;
                        if (area < minArea) {
                            minArea = area;
                            maxd = mmaxd;
                            maxd2 = mmaxd2;
                            mind2 = mmind2;
                            maxd_p = mmaxd_p;
                            main_a = a;
                            main_b = b;
                            main_c = c;
                            main_sqrtab = sqrtab;
                        }
                    }
                }
                let a = main_a,
                    b = main_b,
                    c = main_c,
                    sqrtab = main_sqrtab;
                // 新的c，矩形两条垂直平分线
                let cn = -(a * maxd_p.x + b * maxd_p.y + c) / 2 + c;
                let cn2 = -((maxd2 + mind2) / 2) * sqrtab + c;
                // 交点
                let x = (-a * cn + b * cn2) / (a ** 2 + b ** 2),
                    y = (-a * cn2 - b * cn) / (a ** 2 + b ** 2);
                rect = { center: { x, y }, w: maxd, a: Math.atan2(2 - 1, (-b * 2 + b * 1) / a), h: maxd2 - mind2 };

                return rect;
            }
            let conpoints = convexHull(points);

            let rect = getMinimumBoundingBox(conpoints);
            console.log(rect);
            this.xz.rect = rect;
            this.xz.xz = result.Name;
            this.xz.start_p = points[0];
            this.xz.end_p = points[points.length - 1];
            switch (result.Name) {
                case "line":
                    this.tmp_svg.innerHTML = `<line x1="${this.xz.start_p.x}" y1="${this.xz.start_p.y}" x2="${this.xz.end_p.x}" y2="${this.xz.end_p.y}" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px"/>`;
                    break;
                case "rect":
                    let x = this.xz.rect.center.x - Math.abs((this.xz.rect.w / 2) * Math.cos(this.xz.rect.a));
                    let y = this.xz.rect.center.y - Math.abs((this.xz.rect.h / 2) * Math.cos(this.xz.rect.a));
                    this.tmp_svg.innerHTML = `<rect x="${x}" y="${y}" width="${this.xz.rect.w}" height="${
                        this.xz.rect.h
                    }" transform="rotate(${this.xz.rect.a / (Math.PI / 180) + 90} ${this.xz.rect.center.x} ${
                        this.xz.rect.center.y
                    })" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px;fill:#0000"/>`;
                    break;
                case "circle":
                    if (this.xz.rect.w / this.xz.rect.h > 2 || this.xz.rect.h / this.xz.rect.w > 2) {
                        this.tmp_svg.innerHTML = `<ellipse cx="${rect.center.x}" cy="${rect.center.y}" rx="${
                            rect.h / 2
                        }" ry="${rect.w / 2}" transform="rotate(${rect.a / (Math.PI / 180)} ${rect.center.x} ${
                            rect.center.y
                        })" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px;fill:#0000;"></ellipse>`;
                    } else {
                        let r = (this.xz.rect.h + this.xz.rect.w) / 2 / 2;
                        this.tmp_svg.innerHTML = `<circle cx="${rect.center.x}" cy="${
                            rect.center.y
                        }" r="${r}" transform="rotate(${rect.a / (Math.PI / 180)} ${rect.center.x} ${
                            rect.center.y
                        })" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px;fill:#0000;"></circle>`;
                    }
                    // this.tmp_svg.innerHTML = `<polygon points="10,0 60,0 35,50" style="stroke:${this.pen.color};" />`;
                    break;
                case "triangle":
                    // this.tmp_svg.innerHTML = `<polygon points="10,0 60,0 35,50" style="stroke:${this.pen.color};" />`;
                    break;
            }
            console.log(this.tmp_svg.innerHTML);
        }, 600);

        // 画
        let type = "p";
        if (pen_type_el.querySelectorAll("input")[0].checked) type = "p";
        if (pen_type_el.querySelectorAll("input")[1].checked) type = "s";
        if (type == "p") pen_p(this);
        if (type == "s") pen_s(this);

        function pen_p(d: draw) {
            d.points.push({ x, y, p: e.pressure });
            let ps = d.points.map((i) => [i.x, i.y, i.p]);
            ps = ps.slice(1);
            const outlinePoints = getStroke(ps, {
                simulatePressure: false,
                size: d.pen.zoom ? d.pen.width / zoom : d.pen.width,
            });

            console.log(ps);

            let at = getSvgPathFromStroke(outlinePoints);

            let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let t = `translate(${d.ox},${d.oy})`;
            p.setAttribute("transform", t);
            if (d.points.length != 2) p.setAttribute("d", at);
            p.setAttribute("fill", d.pen.color);

            d.tmp_svg.innerHTML = "";

            d.tmp_svg.append(p);
        }

        function pen_s(d: draw) {
            d.points.push({ x, y, p: e.pressure });
            if (d.points.length < 2) return;
            let ps = d.points.map((i) => [i.x, i.y, i.p]);
            ps = ps.slice(1);
            const outlinePoints = getStroke(ps, {
                size: d.pen.zoom ? d.pen.width / zoom : d.pen.width,
            });

            let at = getSvgPathFromStroke(outlinePoints);
            let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let t = `translate(${d.ox},${d.oy})`;
            p.setAttribute("transform", t);
            p.setAttribute("d", at);
            p.setAttribute("fill", d.pen.color);
            d.tmp_svg.innerHTML = "";

            d.tmp_svg.append(p);
        }

        function getSvgPathFromStroke(points: number[][], closed = true) {
            const average = (a: number, b: number) => (a + b) / 2;
            const len = points.length;

            if (len < 4) {
                return ``;
            }

            let a = points[0];
            let b = points[1];
            const c = points[2];

            let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(2)},${b[1].toFixed(2)} ${average(
                b[0],
                c[0]
            ).toFixed(2)},${average(b[1], c[1]).toFixed(2)} T`;

            for (let i = 2, max = len - 1; i < max; i++) {
                a = points[i];
                b = points[i + 1];
                result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(2)} `;
            }

            if (closed) {
                result += "Z";
            }

            return result;
        }
    }

    complete() {
        this.main_svg.append(this.tmp_svg.childNodes[0]);
        this.pointer_ignore();
        clearTimeout(this.t);
    }

    pointer_ignore() {
        (this.main_svg.childNodes[0] as SVGPathElement).style.pointerEvents = "all";
        this.tmp_svg.style.pointerEvents = "none";
        this.style.pointerEvents = "none";
        this.parentElement.style.pointerEvents = "none";
    }

    set_v(v: string) {
        let x = JSON5.parse(v);
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
        this.pointer_ignore();
    }

    get value() {
        return JSON.stringify({ i: this.main_svg.innerHTML, w: this.width, h: this.height });
    }

    set value(v: string) {
        this.set_v(v);
    }

    clip() {
        let w = 0;
        if (this.main_svg.children[0].getAttribute("stroke-width")) {
            w = Number(this.main_svg.children[0].getAttribute("stroke-width").match(/\d*/)[0]) / 2;
        }
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
        min_x = (min_x - w) / zoom;
        min_y = (min_y - w) / zoom;
        max_x = (max_x + w) / zoom;
        max_y = (max_y + w) / zoom;
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
            el.setAttribute("transform", t + " " + (el.getAttribute("transform") || ""));
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

// 色彩选择器
import color from "color";

/** 取色器 */
class xcolor extends HTMLElement {
    constructor() {
        super();
    }

    c = "#ffffff";
    els = {
        broad: null as HTMLElement,
        bg0: null as HTMLElement,
        pb: null as HTMLElement,
        range: null as HTMLElement,
        pr: null as HTMLElement,
        arange: null as HTMLElement,
        par: null as HTMLElement,
        c0: null as HTMLElement,
        ci: null as HTMLInputElement,
    };

    connectedCallback() {
        if (this.getAttribute("value")) {
            this.c = this.getAttribute("value");
            this.set_v(this.c);
        }
        let color_e: { o: { x: number; y: number }; c: { x: number; y: number }; t: HTMLElement } = null;
        const hsva = { h: 0, s: 0, l: 0, a: 1 };

        const pel = this;
        const broad = (this.els.broad = createEl("div"));
        const bg0 = (this.els.bg0 = createEl("div"));
        const pb = (this.els.pb = createEl("div"));
        const range = (this.els.range = createEl("div"));
        const pr = (this.els.pr = createEl("div"));
        const arange = (this.els.arange = createEl("div"));
        const par = (this.els.par = createEl("div"));
        const cb = createEl("div");
        const c0 = (this.els.c0 = createEl("div"));
        const ci = (this.els.ci = createEl("input"));

        pel.classList.add("color");

        broad.classList.add("broad");
        range.classList.add("range");
        arange.classList.add("range");

        broad.append(bg0);
        bg0.style.background = `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(255, 255, 255) 0%, hsl(0,100%,50%) 100%)`;
        pel.append(broad);

        pb.classList.add("color_pointer");
        bg0.append(pb);

        pel.append(range);

        pr.classList.add("color_range_p");
        range.append(pr);

        arange.style.background = this.msk(
            `linear-gradient(to right, ${color.hsv(hsva.h, hsva.s, hsva.l).hex()} 0%, #0000 100%)`
        );
        pel.append(arange);

        par.classList.add("color_range_p");
        arange.append(par);

        pel.append(cb);
        cb.classList.add("color_bar");
        cb.append(c0);
        cb.append(ci);
        ci.onchange = () => {
            this.value = ci.value;
        };
        c0.onclick = () => {
            let div = createEl("div");
            const v = this.value;
            div.style.background = c0.style.background;
            div.onclick = () => {
                this.value = v;
            };
            ci.after(div);
        };

        range.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: range };
        };
        arange.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: arange };
        };
        bg0.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: bg0 };
        };
        const f = (e: PointerEvent) => {
            if (color_e.t == range) {
                let x = (e.clientX - color_e.c.x + color_e.o.x) / range.offsetWidth;
                if (x < 0) x = 0;
                if (x > 1) x = 1;
                pr.style.left = x * range.offsetWidth + "px";
                let h = Math.round(360 * x);
                if (h < 0) h = 0;
                if (h >= 360) h = 0;
                hsva.h = h;
                bg0.style.background = `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(255, 255, 255) 0%, hsl(${h},100%,50%) 100%)`;
            } else if (color_e.t == arange) {
                let x = (e.clientX - color_e.c.x + color_e.o.x) / arange.offsetWidth;
                if (x < 0) x = 0;
                if (x > 1) x = 1;
                par.style.left = x * arange.offsetWidth + "px";
                hsva.a = 1 - x;
            } else if (color_e.t == bg0) {
                let x = (e.clientX - color_e.c.x + color_e.o.x) / bg0.offsetWidth;
                let y = (e.clientY - color_e.c.y + color_e.o.y) / bg0.offsetHeight;
                if (x < 0) x = 0;
                if (x > 1) x = 1;
                if (y < 0) y = 0;
                if (y > 1) y = 1;
                pb.style.left = x * bg0.offsetWidth + "px";
                pb.style.top = y * bg0.offsetHeight + "px";
                hsva.s = x * 100;
                hsva.l = (1 - y) * 100;
            }
            arange.style.background = this.msk(
                `linear-gradient(to right, ${color.hsv(hsva.h, hsva.s, hsva.l).hex()} 0%, #0000 100%)`
            );
            let hsv = color.hsv(hsva.h, hsva.s, hsva.l).alpha(hsva.a);
            c0.style.background = this.msk(`linear-gradient(${hsv.hexa()},${hsv.hexa()})`);
            pb.style.backgroundColor = `${hsv.rgb().string()}`;
            this.c = hsv.hexa();

            ci.value = hsv.hexa();

            this.dispatchEvent(new InputEvent("input"));
        };
        document.addEventListener("pointermove", (e) => {
            if (!color_e) return;
            f(e);
            range.style.cursor = arange.style.cursor = broad.style.cursor = "none";
        });
        document.addEventListener("pointerup", (e) => {
            if (!color_e) return;
            f(e);
            color_e = null;
            range.style.cursor = arange.style.cursor = broad.style.cursor = "";
        });
        this.value = "#000";
    }

    msk(t: string) {
        return `${t},
        conic-gradient(
                rgb(204, 204, 204) 25%,
                rgb(255, 255, 255) 0deg,
                rgb(255, 255, 255) 50%,
                rgb(204, 204, 204) 0deg,
                rgb(204, 204, 204) 75%,
                rgb(255, 255, 255) 0deg
            )
            0% 0% / 8px 8px`;
    }

    set_v(c: string) {
        let x = color(c);
        let hsv = x.hsv().array();

        this.els.pr.style.left = (hsv[0] / 360) * this.els.range.offsetWidth + "px";
        this.els.bg0.style.background = `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(255, 255, 255) 0%, hsl(${hsv[0]},100%,50%) 100%)`;

        this.els.pb.style.left = (hsv[1] / 100) * this.els.bg0.offsetWidth + "px";
        this.els.pb.style.top = ((100 - hsv[2]) / 100) * this.els.bg0.offsetHeight + "px";

        this.els.c0.style.background = this.msk(`linear-gradient(${x.hexa()},${x.hexa()})`);
        this.els.pb.style.backgroundColor = `${x.hexa()}`;
        this.els.arange.style.background = this.msk(`linear-gradient(to right, ${x.hex()} 0%, #0000 100%)`);
        this.els.par.style.left = (1 - (hsv?.[3] ?? 1)) * this.els.arange.offsetWidth + "px";

        this.els.ci.value = x.hexa();
    }

    get value() {
        return this.c;
    }
    set value(s) {
        this.c = s;
        this.set_v(s);
    }
}

window.customElements.define("x-color", xcolor);
class xdraw_width extends HTMLElement {
    constructor() {
        super();
    }
    c = NaN;
    max = 20;
    min = 1;
    step = 1;
    els = {
        range: null as HTMLElement,
        pr: null as HTMLElement,
    };

    connectedCallback() {
        if (this.getAttribute("value")) {
            this.c = Number(this.getAttribute("value"));
            this.set_v(this.c);
        }
        let color_e: { o: { x: number; y: number }; c: { x: number; y: number }; t: HTMLElement } = null;
        const pel = this;
        const range = (this.els.range = createEl("div"));
        const pr = (this.els.pr = createEl("div"));

        pel.append(range);

        range.append(pr);

        range.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: range };
        };
        const f = (e: PointerEvent) => {
            let x = (e.clientX - color_e.c.x + color_e.o.x) / range.offsetWidth;
            if (x < 0) x = 0;
            if (x > 1) x = 1;
            let v = (this.max - this.min) / this.step;
            x = Math.round(x * v) / v;
            pr.style.left = x * range.offsetWidth + "px";

            this.c = this.min + x * v;
            pr.style.width = pr.style.height = this.c + "px";

            this.dispatchEvent(new InputEvent("input"));
        };
        document.addEventListener("pointermove", (e) => {
            if (!color_e) return;
            f(e);
        });
        document.addEventListener("pointerup", (e) => {
            if (!color_e) return;
            f(e);
            color_e = null;
        });

        this.set_v(5);
    }

    set_v(c: number) {
        c = Math.min(this.max, Math.max(this.min, c));
        let v = (this.max - this.min) / this.step;
        let x = (c - this.min) / (this.max - this.min);
        x = Math.round(x * v) / v;
        this.els.pr.style.left = x * this.els.range.offsetWidth + "px";

        this.c = this.min + x * v;
        this.els.pr.style.width = this.els.pr.style.height = this.c + "px";
    }

    get value() {
        return this.c;
    }
    set value(s) {
        this.c = Number(s);
        this.set_v(s);
    }
    set color(s: string) {
        (<HTMLDivElement>this.querySelector("div > div")).style.background = s;
    }
}

window.customElements.define("x-draw-width", xdraw_width);

/** 双链元素 */
class xlink extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const id = this.getAttribute("id");
        if (!集.链接[id] && !this.getAttribute("naid")) {
            link(id).add();
        }
        this.onpointerenter = () => {
            show_link_value_bar(this);
        };
    }
}

window.customElements.define("x-link", xlink);

/** 展示元素值栏 */
class link_value extends HTMLElement {
    constructor() {
        super();
    }

    v: HTMLElement;
    _id: string;
    vl: HTMLElement;

    connectedCallback() {
        this.v = createEl("div");
        const c = createEl("div");
        c.append(this.v);
        this.append(c);

        this.vl = createEl("div");
        this.append(this.vl);
        this.v.onclick = () => {
            // 搜索
            let v = "";
            let el = get_x_by_id(this._id);
            add_bci(this._id);
            if (el.type == "x-x") {
                let w = (v: data) => {
                    for (let id of v) {
                        const i = getDataFromId(id);
                        if (i.type == "x-md") {
                            return i.value.text as string;
                        } else {
                            if (i.子元素) return w(i.子元素);
                            else return "";
                        }
                    }
                };
                v = w(get_x_by_id(this._id).value as data);
            } else if (el.type === "x-md") {
                return (el.value as xelValue).text as string;
            } else {
                v = el.innerText;
            }
            set_search_de();
            get_search_list();
            let l = search([v], "str");
            show_search_l(l, this._id);

            search_el.value = search_text(v);
            search_el.focus();
            search_el.selectionStart = 3;
            search_el.selectionEnd = 3 + v.length;

            let x = el_offset(this, document.body).x,
                y = el_offset(this, document.body).y - search_pel.getBoundingClientRect().height;

            search_pel.style.left = x + "px";
            search_pel.style.top = y + "px";
            search_pel.style.width = "200px";
            search_pel.classList.add("搜索展示");
        };
    }

    show_links() {
        link("0").map();
        let v_text = (i: string) => {
            let span = createEl("span");
            span.innerText = `#${i}`;
            return span;
        };
        // 展示链接
        const vl = this.vl;
        vl.innerHTML = "";
        console.log(link(this._id).get());

        for (let i in link(this._id).get()) {
            if (i == "0") continue;
            let el = createEl("div");
            vl.append(el);
            let n = createEl("div");
            n.append(v_text(i));
            el.onpointermove = (e) => {
                window.requestAnimationFrame(() => {
                    set_viewer_posi(e.clientX, e.clientY);
                });
            };
            el.onpointerover = (e) => {
                set_viewer_posi(e.clientX, e.clientY);
                preview_x_link(i);
            };
            el.onpointerout = () => {
                view_el.classList.add("viewer_hide");
            };
            n.onpointerup = () => {
                jump_to_x_link(i);
            };
            let rm = createEl("div");
            rm.innerHTML = icon(close_svg);
            rm.onclick = () => {
                link(this._id).rm(i);
                el.remove();
            };
            const add_el = createEl("div");

            add_el.innerHTML = icon(add_svg);
            add_el.onclick = () => {
                link(this._id).value(i);
                this.show_links();
            };
            el.append(n, add_el, rm);
        }
    }

    set elid(id: string) {
        this._id = id;
        link("0").map();
        let v = link(id).get_v();
        if (v) {
            this.v.innerHTML = "";
            this.v.append(link_value_text(link(id).get_v()));
        } else {
            this.v.innerText = "/";
        }
        this.show_links();
    }
    get elid() {
        return this._id;
    }

    set show_ctrl(v: boolean) {
        if (v) {
            this.classList.remove("hide_link_ctrl");
        } else {
            this.classList.add("hide_link_ctrl");
        }
    }
}

window.customElements.define("x-link-value", link_value);

/** 录音元素 */
class record extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.id) this.id = uuid_id();
        let mediaRecorder: MediaRecorder = null;
        let i = createEl("input");
        i.type = "checkbox";
        let t = 0;
        i.onclick = () => {
            if (i.checked) {
                navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                    let chunks = [];
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start();
                    mediaRecorder.onstart = () => {
                        console.log("开始录制");
                        t = new Date().getTime();
                        reflash();
                    };

                    mediaRecorder.ondataavailable = (e) => {
                        chunks.push(e.data);
                    };

                    mediaRecorder.onstop = () => {
                        console.log("录制结束");
                        let blob = new Blob(chunks, { type: "audio/webm;codecs=opus" });
                        let id = put_assets(blob, null);
                        let file = createEl("x-file");
                        this.parentElement.append(file);
                        file.value = JSON.stringify({ r: true, id });
                        this.remove();
                        stream.getAudioTracks()[0].stop();
                    };
                });
                i.classList.add("recording");
            } else {
                mediaRecorder.stop();
                i.classList.remove("recording");
            }
        };
        let time = createEl("div");
        this.append(i);
        this.append(time);
        let reflash = () => {
            let now = new Date().getTime();
            time.innerText = time_text(now - t).hms();
            if (mediaRecorder.state == "recording") requestAnimationFrame(reflash);
        };
    }
}

window.customElements.define("x-record", record);
/** 录音元素 */
class audio extends HTMLElement {
    constructor() {
        super();
    }

    audio: HTMLAudioElement;
    _value: string;

    connectedCallback() {
        if (!this.id) this.id = uuid_id();
        this.audio = createEl("audio");
        this.audio.style.display = "none";
        let button = createEl("div");
        button.classList.add("audio_button");
        let playtime = createEl("div");
        let jd = createEl("x-progress");
        jd.classList.add("audio_jd");
        let yl = createEl("div");
        yl.classList.add("audio_yl");
        let yl2 = createEl("div"); // 按钮
        let yl3 = createEl("x-progress"); // 滑槽
        let asr = createEl("div");
        this.append(this.audio);
        this.append(button, jd, playtime, yl, asr);
        button.innerHTML = icon(play_svg);
        button.onclick = () => {
            if (this.audio.paused) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        };
        this.audio.onplay = () => {
            button.innerHTML = icon(pause_svg);
        };
        this.audio.onpause = () => {
            button.innerHTML = icon(play_svg);
        };
        let show_t = (n: number, t: number) => {
            let t0 = time_text(n * 1000).hms();
            let t1 = time_text(t * 1000).hms();
            return `${t0}/${t1}`;
        };
        this.audio.oncanplay = () => {
            playtime.innerText = show_t(this.audio.currentTime, this.audio.duration);
        };
        this.audio.ontimeupdate = () => {
            playtime.innerText = show_t(this.audio.currentTime, this.audio.duration);
            jd.value = this.audio.currentTime / this.audio.duration;
        };
        jd.oninput = () => {
            this.audio.currentTime = this.audio.duration * jd.value;
        };

        this.audio.volume = 1;
        yl3.title = "100%";
        this.audio.onvolumechange = () => {
            yl3.value = this.audio.volume;
            yl_icon();
        };
        let yl_icon = () => {
            if (this.audio.volume == 0 || this.audio.muted) {
                yl2.innerHTML = icon(yl0_svg);
            } else if (this.audio.volume < 0.5) {
                yl2.innerHTML = icon(yl1_svg);
            } else {
                yl2.innerHTML = icon(yl2_svg);
            }
        };
        yl.onwheel = (e) => {
            let p = this.audio.volume;
            if (e.deltaY < 0) {
                p += 0.1;
            } else {
                p -= 0.1;
            }
            p = clip(p, 0, 1);
            this.audio.volume = p;
        };
        yl.append(yl3, yl2);
        yl2.innerHTML = icon(yl2_svg);
        yl2.onclick = () => {
            this.audio.muted = !this.audio.muted;
            yl_icon();
        };
        yl3.oninput = () => {
            let p = yl3.value;
            this.audio.volume = p;

            yl3.title = `${Math.round(p * 100)}%`;
        };

        asr.innerHTML = icon(asr_svg);
        asr.classList.add("asr");
        asr.onclick = () => {
            audio_to_text(this.audio, this.id);
        };
    }

    set value(v) {
        this._value = v;
        this.audio.src = v;
        this.audio.onload = () => {
            URL.revokeObjectURL(v);
        };
    }
    get value() {
        return this._value;
    }
}

window.customElements.define("x-audio", audio);

ignore_el.push("x-audio");

async function audio_to_text(el: HTMLAudioElement, id: string) {
    await import_script("https://www.unpkg.com/@xenova/transformers/dist/transformers.min.js");
    // @ts-ignore
    let blob = 集.assets[elFromId(id).parentElement.parentElement._value.id].source;

    const sampling_rate = 16000;
    const audioCTX = new AudioContext({ sampleRate: sampling_rate });

    const response = await blob.arrayBuffer();
    const decoded = await audioCTX.decodeAudioData(response);
    let audio = decoded.getChannelData(0);

    async function speech_to_text() {
        // @ts-ignore
        let ppipeline = await pipeline("automatic-speech-recognition", "openai/whisper-tiny");

        return await ppipeline(audio, {
            chunk_length_s: 30,
            stride_length_s: 5,
            return_timestamps: true,

            max_new_tokens: 50,
            num_beams: 1,
            temperature: 1,
            top_k: 0,
            do_sample: false,
        });
    }
    let text = await speech_to_text();
    console.log(text);
    let pel = createX("x-x");
    pel.style.left = el_offset2(el.parentElement, O).x + "px";
    pel.style.top = el_offset2(el.parentElement, O).y + el_offset2(el.parentElement, O).h + "px";
    z.push(pel);
    if (navigator.language == "zh-CN") {
        let t = (await import("../../lib/hant2hans")).default;
        for (let i of text.chunks) {
            i.text = t(i.text);
        }
    }
    for (let i of text.chunks) {
        let x = createX("x-md");
        z.push(x, pel);
        let md = createEl("x-md");
        x.append(md);
        let mdtext = `[${i.timestamp[0]}](#${id}:${i.timestamp[0]})${i.text}`;
        md.value = { type: "p", text: mdtext };
    }
    pel.classList.add("flex-column");
}

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/** 3d元素 */
class three extends HTMLElement {
    constructor() {
        super();
    }

    _value: string;
    div: HTMLDivElement;
    scene: THREE.Scene;
    loader: GLTFLoader;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.Renderer;

    connectedCallback() {
        this.div = createEl("div");
        this.append(this.div);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.loader = new GLTFLoader();
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.div.appendChild(this.renderer.domElement);

        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.camera.position.set(0, 0, 5);
        controls.update();

        let animate = () => {
            requestAnimationFrame(animate);
            if (模式 != "浏览") return;
            controls.update();
            this.renderer.setSize(this.offsetWidth, this.offsetHeight);
            this.camera.aspect = this.offsetWidth / this.offsetHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera);
        };
        animate();

        this.camera.position.z = 5;

        this.renderer.render(this.scene, this.camera);
    }

    async set_m() {
        this.loader.load(get_assets(this._value), (gltf) => {
            this.scene.add(gltf.scene);
            this.renderer.render(this.scene, this.camera);
        });
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-three", three);

ignore_el.push("x-three");
/** 3d元素 */
class img extends HTMLElement {
    constructor() {
        super();
    }

    img: HTMLImageElement;

    connectedCallback() {
        this.img = createEl("img");
        this.append(this.img);
        let ocr = createEl("div");
        ocr.innerHTML = icon(ocr_svg);
        ocr.onclick = () => {
            to_text(this.img);
        };
        this.append(ocr);
    }
    set value(s: string) {
        this.img.src = s;
        this.img.onload = () => {
            URL.revokeObjectURL(s);
        };
    }
}

window.customElements.define("x-img", img);

async function to_text(img: HTMLImageElement | HTMLCanvasElement) {
    if (!ocr_init) await ocr_start();
    let canvas = createEl("canvas");
    let w = (img as HTMLImageElement).naturalWidth || img.width,
        h = (img as HTMLImageElement).naturalHeight || img.height;
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0);
    ocr.ocr(canvas.getContext("2d").getImageData(0, 0, w, h)).then((v) => {
        let tl = [];
        let p = el_offset2(img, O);
        let pxel = createX("x-x");
        pxel.id = uuid_id();
        pxel.style.left = p.x + "px";
        pxel.style.top = p.y + "px";
        pxel.style.color = "transparent";
        pxel.style.textAlign = "justify";
        pxel.style.textAlignLast = "justify";
        pxel.style.fontSize = "12px";
        z.push(pxel);
        let xx = p.w / w,
            yy = p.h / h;
        for (let i of v) {
            if (!i.text) continue;
            tl.push(i.text);
            let x0 = i.box[0][0];
            let y0 = i.box[0][1];
            let x1 = i.box[2][0];
            let y1 = i.box[2][1];
            let xel = createX("x-md");
            xel.style.left = x0 * xx + "px";
            xel.style.top = y0 * yy + "px";
            xel.style.width = (x1 - x0) * xx + "px";
            xel.style.height = (y1 - y0) * yy + "px";
            z.push(xel, pxel);
            var md = createEl("x-md");
            xel.append(md);
            md.value = { type: "p", text: i.text };
        }
        console.log(tl);
    });
}

var ocr_init = false;

var imported_index: { [key: string]: { loaded: boolean; el: HTMLScriptElement } } = {};

async function import_script(url: string) {
    if (imported_index[url])
        return new Promise((re) => {
            if (imported_index[url].loaded) {
                re(true);
            } else
                imported_index[url].el.addEventListener("load", () => {
                    re(true);
                });
        });
    let script = createEl("script");
    script.src = url;
    console.log(url);
    document.body.append(script);
    imported_index[url] = { loaded: false, el: script };
    return new Promise((re) => {
        script.addEventListener("load", () => {
            imported_index[url].loaded = true;
            re(true);
        });
    });
}

import * as ocr from "esearch-ocr";

async function ocr_start() {
    await import_script("https://unpkg.com/opencv.js@1.2.1/opencv.js");
    await import_script("https://unpkg.com/onnxruntime-web@1.13.1/dist/ort.min.js");
    const dic = (await import("../../public/ocr/ppocr_keys_v1.txt?raw")).default;
    await ocr.init({
        detPath: "./ocr/ppocr_det.onnx",
        recPath: "./ocr/ppocr_rec.onnx",
        dic: dic,
        dev: false,
        ort: window["ort"],
        cv: window["cv"],
        detShape: [640, 640],
        ortOption: {},
    });
    ocr_init = true;
}

// geogebra
class ggb extends HTMLElement {
    constructor() {
        super();
    }

    _value;
    applet;
    p;
    div: HTMLElement;

    connectedCallback() {
        let xel = this.parentElement.parentElement.parentElement;
        this.p = {
            id: this.getid(),
            width: parseFloat(xel.style.width) || 500,
            height: parseFloat(xel.style.height) || 500,
            scale: 1,
            showResetIcon: true,
            borderColor: "white",
            language: "cn",
            ggbBase64: "",
            // showToolBar: true,
        };
        // import_script("https://www.geogebra.org/apps/deployggb.js").then(() => {
        //     this.applet = new window["GGBApplet"](this.p, "5.0");
        // });
        let bar = createEl("div");
        bar.classList.add("ggb_bar");
        let save = createEl("div");
        save.innerHTML = icon(save_svg);
        bar.append(save);
        this.append(bar);
        bar.onclick = () => {
            window[this.p.id]["getBase64"]((v) => {
                console.log(v);
                let bl = base64_blob(v);
                集.assets[this._value].source = bl;
                data_changed();
            });
        };
        this.div = createEl("div");
        this.append(this.div);
        let r = new ResizeObserver((e) => {
            if (this.applet) {
                this.applet.getAppletObject().setSize(e[0].contentRect.width, e[0].contentRect.height);
            }
        });
        r.observe(this);
    }
    getid() {
        return `ggb${this._value}${临时中转站.contains(this) ? "zzz" : ""}${assets_el.contains(this) ? "zy" : ""}`;
    }
    async set_m() {
        const url = 集.assets[this._value];
        this.p.id = this.getid();
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.p.ggbBase64 = e.target.result;
        };
        fileReader.readAsDataURL(url.source);
        import_script("https://www.geogebra.org/apps/deployggb.js").then(() => {
            this.applet.inject(this.div);
        });
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-ggb", ggb);
ignore_el.push("x-ggb");

class calendar extends HTMLElement {
    constructor() {
        super();
    }

    _value;
    applet;
    p;

    connectedCallback() {
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();
        let day = today.getDate();
        let bar = createEl("div");
        bar.classList.add("calendar_bar");
        let last = createEl("div");
        let next = createEl("div");
        let text = createEl("div");
        last.innerHTML = icon(left_svg);
        next.innerHTML = icon(right_svg);
        bar.append(last, text, next);
        last.onclick = () => {
            month--;
            if (month == -1) {
                month = 11;
                year--;
            }
            render(year, month, day);
        };
        next.onclick = () => {
            month++;
            if (month == 12) {
                month = 0;
                year++;
            }
            render(year, month, day);
        };
        let c = createEl("div");
        c.classList.add("calendar");

        let render = (year: number, month: number, day: number) => {
            text.innerText = `${year} / ${month + 1} / ${day}`;
            let date_list: Date[] = [];
            let now_date = new Date(year, month, 1);
            while (now_date.getDay() != 0) {
                now_date = new Date(now_date.getTime() - 24 * 60 * 60 * 1000);
                date_list.unshift(now_date);
            }
            now_date = new Date(year, month, 1);
            while (now_date.getMonth() == month) {
                date_list.push(now_date);
                now_date = new Date(now_date.getTime() + 24 * 60 * 60 * 1000);
            }
            now_date = new Date(year, month, date_list[date_list.length - 1].getDate());
            while (now_date.getDay() != 6) {
                now_date = new Date(now_date.getTime() + 24 * 60 * 60 * 1000);
                date_list.push(now_date);
            }
            console.log(date_list);
            let pel = document.createDocumentFragment();
            let day_list = ["日", "一", "二", "三", "四", "五", "六"];
            for (let i of day_list) {
                let div = createEl("div");
                div.innerText = `${i}`;
                div.classList.add("calendar_week");
                pel.append(div);
            }
            link("0").map();
            for (let i of date_list) {
                let div = createEl("x-link");
                div.id = `${this.parentElement.id}:${i.toLocaleDateString()}`;
                div.setAttribute("naid", "true");
                div.innerText = `${i.getDate()}`;
                let schedule = createEl("div");
                schedule.classList.add("calendar_schedule");
                let links = link(div.id).get() || {};
                for (let i in links) {
                    if (i != "0") {
                        let x = createEl("div");
                        schedule.append(x);
                    }
                }
                div.append(schedule);
                if (i.getMonth() == month) {
                    div.classList.add("calendar_month");
                }
                if (
                    i.getDate() == today.getDate() &&
                    i.getMonth() == today.getMonth() &&
                    i.getFullYear() == today.getFullYear()
                ) {
                    div.classList.add("calendar_today");
                }
                pel.append(div);
            }
            c.innerHTML = "";
            c.append(pel);
        };

        render(year, month, day);

        this.append(bar, c);
    }
    async set_m() {}

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-calendar", calendar);

class time_s extends HTMLElement {
    constructor() {
        super();
    }

    _value: number;
    h: HTMLInputElement;
    m: HTMLInputElement;
    s: HTMLInputElement;

    connectedCallback() {
        this.h = document.createElement("input");
        this.m = document.createElement("input");
        this.s = document.createElement("input");
        this.h.style.width = "1ch";
        this.h.inputMode = "tel";
        this.m.inputMode = "tel";
        this.s.inputMode = "tel";
        this.h.value = "--";
        this.m.value = "--";
        this.s.value = "--";
        this.h.onfocus = () => {
            this.h.select();
        };
        this.m.onfocus = () => {
            this.m.select();
        };
        this.s.onfocus = () => {
            this.s.select();
        };
        this.h.oninput = () => {
            if (isNaN(Number(this.h.value))) {
                this.h.value = String(Math.floor(this._value / 1000 / 60 / 60));
            } else {
                this.h.style.width = this.h.value.length + "ch";
            }
        };
        this.m.oninput = () => {
            if (isNaN(Number(this.m.value))) {
                this.m.value = String(Math.floor(this._value / 1000 / 60) % 6).padStart(2, "0");
            } else {
                if (Number(this.m.value) >= 60) {
                    this.value = this.value;
                }
            }
        };
        this.s.oninput = () => {
            if (isNaN(Number(this.s.value))) {
                this.s.value = String(Math.floor(this._value / 1000) % 60).padStart(2, "0");
            } else {
                if (Number(this.s.value) >= 60) {
                    this.value = this.value;
                }
            }
        };
        this.m.onblur = () => {
            this.m.value = this.m.value.padStart(2, "0");
        };
        this.s.onblur = () => {
            this.s.value = this.s.value.padStart(2, "0");
        };
        this.h.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowRight":
                    this.m.select();
                    break;
            }
        };
        this.m.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowRight":
                    this.s.select();
                    break;
                case "ArrowLeft":
                    this.h.select();
                    break;
            }
        };
        this.s.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.m.select();
                    break;
            }
        };
        this.append(this.h, ":", this.m, ":", this.s);
    }

    set value(time: number) {
        this._value = time;
        let h = Math.floor(time / 1000 / 60 / 60);
        let m = Math.floor(time / 1000 / 60) % 60;
        let s = Math.floor(time / 1000) % 60;
        this.h.value = String(h);
        this.m.value = String(m).padStart(2, "0");
        this.s.value = String(s).padStart(2, "0");
        this.h.style.width = String(h).length + "ch";
    }

    get value() {
        return (
            ((Number(this.h.value) || 0) * 60 * 60 + (Number(this.m.value) || 0) * 60 + (Number(this.s.value) || 0)) *
            1000
        );
    }
}

window.customElements.define("time-b", time_s);

class time extends HTMLElement {
    constructor() {
        super();
    }

    _value: string;
    _value2: { pro: number; end: number; run: number[]; countdown: boolean } = {
        pro: 0,
        end: 0,
        run: [],
        countdown: false,
    };
    count_down: HTMLInputElement;
    process: time_s;
    end: HTMLInputElement;
    time_t: HTMLDivElement;
    start_b: HTMLElement;
    time_setting: HTMLElement;
    time_group: HTMLElement;
    jd: progress2;

    connectedCallback() {
        this.count_down = createEl("input");
        this.count_down.type = "checkbox";
        this.process = createEl("time-b");
        this.end = createEl("input");
        this.end.type = "datetime-local";
        this.count_down.oninput = () => {
            this._value2.countdown = this.count_down.checked;
            this._value = JSON.stringify(this._value2);
        };
        this.process.oninput = () => {
            if (this.process.value) {
                let t = this.process.value;
                this._value2.pro = t;
            } else {
                this._value2.pro = 0;
            }
            this._value = JSON.stringify(this._value2);
        };
        this.end.oninput = () => {
            if (this.end.value) {
                this._value2.end = new Date(this.end.value).getTime();
            } else {
                this._value2.end = 0;
            }
            this._value = JSON.stringify(this._value2);
        };
        this.start_b = createEl("div");
        this.start_b.innerHTML = icon(play_svg);
        this.start_b.classList.add("time_play");
        this.start_b.onclick = () => {
            this.classList.add("x-time");
            this._value2.run.push(new Date().getTime());
            this._value = JSON.stringify(this._value2);
            this.render();
            this.is_no = false;
        };
        this.time_t = createEl("div");

        let jdt = createEl("div");
        this.jd = createEl("x-progress");
        jdt.append(this.time_t, this.jd);
        jdt.classList.add("time_jdt");

        this.time_setting = createEl("div");
        this.time_group = createEl("div");
        this.time_group.append(this.process, this.end);
        this.time_setting.append(this.count_down, this.time_group);
        this.append(this.start_b, this.time_setting, jdt);
    }

    is_no = false;
    render() {
        let no = (t: string) => {
            if (this.is_no) return;
            this.is_no = true;
            put_toast(`计时器已${t}`);
            Notification.requestPermission(() => {
                new Notification(`计时器已${t}`, {
                    body: `${get_title()} 中的${this._value2.countdown ? "倒" : ""}计时器已${t}`,
                });
            });
        };
        let now = new Date().getTime();
        if (this._value2.countdown) {
            if (this._value2.end) {
                let t = this._value2.end - now;
                this.time_t.innerText = time_text(Math.max(0, t)).hms();
                this.jd.value = (this._value2.end - now) / (this._value2.end - this._value2.run[0]);
                if (t <= 0) {
                    no("停止");
                    this._value2.run = [];
                    this._value = JSON.stringify(this._value2);
                }
            } else {
                if (this._value2.run.length % 2 != 0) {
                    let t = this._value2.pro - this.add_times(this._value2.run, now);
                    this.time_t.innerText = time_text(Math.max(0, t)).hms();
                    this.jd.value = t / this._value2.pro;
                    if (t <= 0) {
                        no("停止");
                        this._value2.run = [];
                        this._value = JSON.stringify(this._value2);
                    }
                }
            }
        } else {
            if (this._value2.run.length % 2 != 0) {
                this.jd.value = this.add_times(this._value2.run, now) / this._value2.pro;
                this.time_t.innerText = time_text(this.add_times(this._value2.run, now)).hms();
                if (this.add_times(this._value2.run, now) > this._value2.pro) no("超时");
            }
        }
        if ((this._value2.countdown && this._value2.end) || this._value2.run.length % 2 != 0) {
            this.start_b.innerHTML = icon(pause_svg);
        } else {
            this.start_b.innerHTML = icon(play_svg);
        }
    }

    add_times(input_list: number[], now: number) {
        let list: number[] = [];
        for (let i of input_list) list.push(i);
        let t = 0;
        if (list.length % 2 != 0) {
            list.push(now);
        }
        for (let i = 0; i < list.length; i += 2) {
            t += list[i + 1] - list[i];
        }
        return t;
    }

    async set_m() {
        this._value2 = JSON5.parse(this._value);
        this.count_down.checked = this._value2.countdown;
        if (this._value2.pro) this.process.value = this._value2.pro;
        if (this._value2.end) {
            let t = new Date(this._value2.end).toLocaleString();
            t = t
                .slice(0, t.length - 3)
                .replaceAll("/", "-")
                .replace(" ", "T");
            this.end.value = t;
        }
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-time", time);

setInterval(() => {
    document.querySelectorAll("x-time").forEach((el: time) => {
        el.render();
    });
});

class link_arrow extends HTMLElement {
    constructor() {
        super();
    }
    svg: SVGSVGElement;
    _value: {
        start: { id: string; a: any; marker?: string };
        center: { id: string };
        end: { id: string; a: any; marker?: string };
    } = {
        start: { id: "", a: 0 },
        center: { id: "" },
        end: { id: "", a: null, marker: "point" },
    };
    connectedCallback() {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.append(this.svg);
        let r = () => {
            this.render(null);
            setTimeout(() => {
                r();
            }, 300);
        };
        r();
    }

    render(e: PointerEvent) {
        if (!this._value.start.id) return;
        let xel = this.parentElement as x;
        let start_p = get_link_arrow_p(this._value.start.id, this._value.start.a);
        let end_p = this._value.end.id ? get_link_arrow_p(this._value.end.id, this._value.end.a) : e2p(e);
        let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let t = `translate(${-el_offset2(xel).x},${-el_offset2(xel).y})`;
        p.setAttribute("transform", t);
        let start_a = this._value.start.a;
        let end_a;
        if (typeof this._value?.end?.a == "number") end_a = this._value.end.a;
        else end_a = start_a < 4 ? (start_a + 2) % 4 : ((start_a - 4 + 2) % 4) + 4;
        if (e) {
            let el = e.target as HTMLElement;
            if (
                el.parentElement.getAttribute("data-id") != xel.id &&
                typeof el?.className == "string" &&
                el.className.includes("xxhandle") &&
                is_smallest_el(elFromId(el.parentElement.getAttribute("data-id")) as x)
            )
                end_a = Number(el.className.replace("xxhandle", "")) || end_a;
        }
        let long = Math.min(Math.sqrt((start_p.x - end_p.x) ** 2 + (start_p.y - end_p.y) ** 2) / 3, 60);
        let start_ctrl = get_link_arrow_a(start_p, start_a, long),
            end_ctrl = get_link_arrow_a(end_p, end_a, long);
        let at = `M ${start_p.x} ${start_p.y} C ${start_ctrl.x} ${start_ctrl.y}, ${end_ctrl.x} ${end_ctrl.y}, ${end_p.x} ${end_p.y}`;
        p.setAttribute("d", at);
        if (this._value.start?.marker) {
            p.setAttribute("marker-start", `url(#flowchart-${this._value.start?.marker}Start)`);
        }
        if (this._value?.end?.marker) {
            p.setAttribute("marker-end", `url(#flowchart-${this._value?.end?.marker}End)`);
        }
        let cx = (start_p.x + 3 * start_ctrl.x + 3 * end_ctrl.x + end_p.x) / 8,
            cy = (start_p.y + 3 * start_ctrl.y + 3 * end_ctrl.y + end_p.y) / 8;
        if (this._value?.center?.id) {
            let el = elFromId(this._value?.center?.id);
            if (el) {
                let x = cx - el.offsetWidth / 2;
                let y = cy - el.offsetHeight / 2;
                el.style.left = x + "px";
                el.style.top = y + "px";
            }
        }
        this.svg.innerHTML = arrow_markers_svg;
        this.svg.append(p);
        let r = el_offset2(p, O);
        xel.style.left = r.x + "px";
        xel.style.top = r.y + "px";
        xel.style.width = r.w + "px";
        xel.style.height = r.h + "px";
        let t2 = `translate(${-r.x},${-r.y})`;
        p.setAttribute("transform", t2);

        p.ondblclick = () => {
            let x = createX("x-md");
            x.id = uuid_id();
            z.push(x);
            if (!this._value["center"]) this._value["center"] = { id: "" };
            this._value.center.id = x.id;
            let md = createEl("x-md");
            x.append(md);
            md.edit = true;
            this.render(null);
        };
    }

    get value() {
        return JSON.stringify(this._value);
    }

    set value(s) {
        this._value = JSON5.parse(s);
    }
}

window.customElements.define("x-link-arrow", link_arrow);

let will_link = "";
let tips_id = "";
class add_link extends HTMLElement {
    constructor() {
        super();
    }
    lid = "";

    connectedCallback() {
        this.onclick = () => {
            if (will_link) {
                link(will_link).add(this.lid);
                elFromId(tips_id).remove();
                will_link = "";
                tips_id = "";
            } else {
                will_link = this.lid;
                let div = createEl("div");
                div.innerText = `已选择#${will_link}，请再选择一个链接以连接`;
                tips_id = add_tips(div);
            }
        };
    }

    get value() {
        return this.lid;
    }

    set value(s) {
        this.lid = s;
    }
}

window.customElements.define("x-link-add", add_link);

class x_zi extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let t = this.getAttribute("value");
        let c = /[^a-zA-Z0-9]/g.test(t) ? t.codePointAt(0).toString(16) : t.toLocaleLowerCase().replace(/^u/, "");

        let img = createEl("img");
        img.src = `https://glyphwiki.org/glyph/u${c}@1.svg`;

        this.append(img);
    }
}

window.customElements.define("x-zi", x_zi);
