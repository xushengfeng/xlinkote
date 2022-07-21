// 获取设置
var store = JSON.parse(localStorage.getItem("config"));
if (!store) {
    save_setting();
}
// 工具栏
document.getElementById("tabs").onclick = (e) => {
    document.querySelectorAll("#nav > #tabs > div").forEach((el, i) => {
        if (el == e.target) {
            document.querySelectorAll("#nav > #items > div").forEach((iel, j) => {
                if (i == j) {
                    iel.style.width = "100vw";
                }
                else {
                    iel.style.width = "0";
                }
            });
        }
    });
};
document.getElementById("文件").click();
if (window.showOpenFilePicker) {
    document.getElementById("绑定文件").onclick = file_load;
}
else {
    document.getElementById("绑定文件").style.display = "none";
}
document.getElementById("导出文件").onclick = () => {
    download_file(JSON.stringify(get_data()));
};
document.getElementById("从云加载").onclick = get_all_xln;
document.getElementById("close_webdav_files").onclick = (e) => {
    e.stopPropagation();
    document.getElementById("webdav_files").parentElement.open = false;
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
    get_data(); /* 保存之前的画布 */
    let name = `画布${crypto.randomUUID().slice(0, 7)}`;
    集.数据.push({ name, data: [] });
    集.meta.focus_page = name;
    set_data(集);
};
document.getElementById("偏好设置").onclick = () => {
    document.getElementById("设置").style.display = "block";
    show_setting();
};
document.getElementById("设置").querySelector("#close").onclick = () => {
    document.getElementById("设置").style.display = "";
    save_setting();
};
document.getElementById("新建元素").onclick = () => {
    creat_x_x(-O.offsetLeft, -O.offsetTop);
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
    xel.style.left = -O.offsetLeft + "px";
    xel.style.top = -O.offsetTop + "px";
    let draw = document.createElement("x-draw");
    draw.setAttribute("width", String(画布.offsetWidth));
    draw.setAttribute("height", String(画布.offsetHeight));
    xel.append(draw);
    z.push(xel);
};
document.getElementById("侧栏").onclick = (e) => {
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
    document.getElementById("main").classList.toggle("侧栏显示");
};
document.getElementById("层按钮").onclick = (e) => {
    let el = z.聚焦元素;
    switch (e.target.id) {
        case "底层":
            z.底层(el);
            break;
        case "下一层":
            z.下一层(el);
            break;
        case "上一层":
            z.上一层(el);
            break;
        case "顶层":
            z.顶层(el);
            break;
    }
};
document.getElementById("toggle_md").onclick = () => {
    if (focus_md) {
        focus_md.edit = !focus_md.edit;
    }
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
        if (e.button == 2) {
            o_e = e;
            o_rect = { x: O.offsetLeft, y: O.offsetTop };
            document.getElementById("画布").style.cursor = "move";
        }
        else if (e.button == 0) {
            o_e = e;
            let select = document.createElement("div");
            select_id = select.id = `s${new Date().getTime()}`;
            document.getElementById("选择").append(select);
            画布.style.userSelect = "none";
        }
    }
    if (e.target != menu)
        menu.classList.remove("上下文菜单展示");
};
document.onmousemove = (e) => {
    mouse(e);
    if (o_e)
        move = true;
};
document.onmouseup = (e) => {
    mouse(e);
    if (e.button == 0 && selected_el.length == 0 && move) {
        let r = e2rect(o_e, e);
        creat_x_x(r.x - O.offsetLeft, r.y - O.offsetTop);
    }
    o_e = null;
    if (!move && e.button == 2)
        context_menu(e);
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
document.ontouchstart = (e) => {
    let el = e.changedTouches[0].target;
    if (!画布.contains(el))
        return;
    if (!(el.isContentEditable || el.tagName == "INPUT" || el.tagName == "SELECT" || el.tagName == "TEXTAREA") ||
        !document.querySelector("x-sinppet").contains(el)) {
        o_touch_e = e;
        o_rect = { x: O.offsetLeft, y: O.offsetTop };
        document.getElementById("画布").style.cursor = "move";
    }
};
document.ontouchmove = (e) => {
    pointer(e);
    if (o_touch_e)
        move = true;
};
document.ontouchend = (e) => {
    pointer(e);
    o_touch_e = null;
    move = false;
    document.getElementById("画布").style.cursor = "auto";
    if (select_id)
        document.getElementById(select_id).remove();
    select_id = "";
};
var pointer_move = true;
var pointer = (e) => {
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
    setTimeout(() => {
        O.style.transition = "";
    }, 400);
};
var zoom = 1;
function zoom_o(z) {
    zoom = z;
    O.style.transform = `scale(${z})`;
}
document.getElementById("画布").onwheel = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        zoom += -e.deltaY / 500;
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
};
// 上下文菜单
var menu = document.getElementById("上下文菜单");
document.oncontextmenu = (e) => {
    e.preventDefault();
};
function context_menu(e) {
    let x = e.offsetX - O.offsetLeft, y = e.offsetY - O.offsetTop;
    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
    menu.classList.add("上下文菜单展示");
    document.getElementById("在此新建").onmousedown = () => {
        creat_x_x(x, y);
    };
}
function creat_x_x(x, y) {
    let xel = document.createElement("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    var md = document.createElement("x-md");
    xel.append(md);
    md.edit = true;
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
            zoom_o(1);
            break;
    }
};
// 文件数据
let pname = `画布${crypto.randomUUID().slice(0, 7)}`;
var 集 = {
    meta: {
        focus_page: pname,
        url: "",
        UUID: crypto.randomUUID(),
        file_name: "",
    },
    数据: [{ name: pname, data: [] }],
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
        if (p.name == 集.meta.focus_page)
            p.data = data;
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
            render_data(p.data);
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
                    集.数据.push({ name: pname, data: [] });
                }
                集.meta.focus_page = 集.数据[0].name;
            }
            data_changed();
            set_data(集);
        };
        if (集.meta.focus_page == p.name) {
            render_data(p.data);
            集.meta.focus_page = p.name;
        }
    }
    data_changed();
}
function render_data(data) {
    O.innerHTML = "";
    z.z = [];
    for (const x of data) {
        try {
            let el = document.createElement("x-x");
            el.fixed = x.fixed;
            el.id = x.id;
            z.push(el, true);
            setTimeout(() => {
                el.setAttribute("style", x.style);
            }, 0);
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
                    description: "xlinkote文件",
                    accept: {
                        "text/*": [".xln"],
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
    集.meta.file_name = file.name.replace(/\.xln$/, "");
    document.title = get_title();
    let reader = new FileReader();
    reader.onload = () => {
        let o = JSON.parse(reader.result);
        set_data(o);
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
function db_put(obj) {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.put(obj);
    r.onerror = (event) => {
        console.error(new Error(event.target.error));
    };
}
function db_get() {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.getAll();
    r.onsuccess = () => {
        document.getElementById("文件").innerHTML = "";
        let new_t = rename_el();
        new_t.onchange = () => {
            if (new_t.value) {
                集.meta.file_name = new_t.value;
                data_changed();
            }
        };
        new_t.value = `新建集${crypto.randomUUID().slice(0, 7)}`;
        document.getElementById("文件").append(new_t);
        for (let f of r.result) {
            let t = rename_el();
            t.onclick = () => {
                new_t.remove();
                set_data(f);
            };
            t.onchange = () => {
                集.meta.file_name = t.value;
                data_changed();
            };
            t.value = f.meta.file_name || "";
            document.getElementById("文件").append(t);
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
async function download_file(text) {
    if (window.showSaveFilePicker) {
        fileHandle = await window.showSaveFilePicker({
            suggestedName: get_file_name(),
            types: [
                {
                    description: "xlinkote 文件",
                    accept: { "text/*": [".xln"] },
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
        a.download = `${name}.xln`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    }
}
function data_changed() {
    if (saved) {
        document.title = `● ` + get_title();
        saved = false;
    }
    if (集.meta.file_name) {
        write_file(JSON.stringify(get_data()));
        db_put(get_data());
    }
}
var focus_md = null;
// 拖放
画布.ondragover = (e) => {
    if (e.target != 画布)
        return;
    e.preventDefault();
};
画布.ondrop = (e) => {
    if (e.target != 画布)
        return;
    e.preventDefault();
    if (e.dataTransfer.files.length != 0) {
        for (let f of e.dataTransfer.files) {
            let type = f.type.split("/")[0];
            let x = e.offsetX - O.offsetLeft, y = e.offsetY - O.offsetTop;
            let xel = document.createElement("x-x");
            xel.style.left = x / zoom + "px";
            xel.style.top = y / zoom + "px";
            z.push(xel);
            if (type == "image") {
                let img = document.createElement("x-img");
                xel.append(img);
                let reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = () => {
                    img.src = reader.result;
                };
            }
            else if (type == "video") {
                let video = document.createElement("x-video");
                xel.append(video);
                let reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = () => {
                    video.src = reader.result;
                };
            }
            else if (f.type == "text/html") {
                let md = document.createElement("x-md");
                xel.append(md);
                let reader = new FileReader();
                reader.readAsText(f);
                reader.onload = () => {
                    let turndownService = new window.TurndownService({ headingStyle: "atx" });
                    md.value = turndownService.turndown(reader.result);
                };
            }
            else if (type == "text") {
                let md = document.createElement("x-md");
                xel.append(md);
                let reader = new FileReader();
                reader.readAsText(f);
                reader.onload = () => {
                    md.value = reader.result;
                };
            }
        }
    }
    else {
        let x = e.offsetX - O.offsetLeft, y = e.offsetY - O.offsetTop;
        let xel = document.createElement("x-x");
        xel.style.left = x / zoom + "px";
        xel.style.top = y / zoom + "px";
        z.push(xel);
        let html = e.dataTransfer.getData("text/html");
        let turndownService = new window.TurndownService({ headingStyle: "atx" });
        let md = document.createElement("x-md");
        xel.append(md);
        md.value = turndownService.turndown(html);
    }
};
// 画板
画布.onpointerdown = (e) => {
    let cl = document.querySelectorAll("x-draw");
    for (let c of cl) {
        c?.draw(e);
    }
};
画布.onpointermove = (e) => {
    let cl = document.querySelectorAll("x-draw");
    for (let c of cl) {
        c?.draw(e);
    }
};
画布.onpointerup = (e) => {
    let cl = document.querySelectorAll("x-draw");
    for (let c of cl) {
        c?.draw(e);
        if (c)
            c.points = { x: NaN, y: NaN };
        c?.clip();
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
            };
            document.getElementById("层").insertBefore(div, document.getElementById("层").firstChild);
        }
        document.documentElement.style.setProperty("--zest-index", String(this.z.length - 1));
        if (!nosave)
            data_changed();
    }
    push(el, nosave) {
        el.id = el.id === "undefined" || !el.id ? `${crypto.randomUUID().slice(0, 7)}` : el.id;
        O.append(el);
        this.z.push(el);
        this.reflash(el, nosave);
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
        for (let l of document.getElementById("层").querySelectorAll("label")) {
            if (el.id == l.querySelector("input[type='text']").value)
                l.querySelector("input[type='radio']").checked = true;
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
set_data(集);
// 云
var client = window.WebDAV.createClient(store.webdav.网址, {
    username: store.webdav.用户名,
    password: store.webdav.密码,
});
async function get_all_xln() {
    let l = [];
    document.getElementById("webdav_files").innerHTML = "";
    document.getElementById("webdav_files").parentElement.open = true;
    get_dir("/");
    async function get_dir(path) {
        const directoryItems = await client.getDirectoryContents(path);
        for (let i of directoryItems) {
            i.filename = path + i.basename;
            if (i.type == "file" && i.basename.match(/\.xln$/)) {
                l.push(i);
                let tr = document.createElement("tr");
                let n = document.createElement("td");
                n.innerText = i.basename;
                let p = document.createElement("td");
                p.innerText = i.filename;
                tr.append(n, p);
                document.getElementById("webdav_files").append(tr);
                tr.onclick = (e) => {
                    e.stopPropagation();
                    get_xln_value(i.filename);
                    document.title = get_title();
                    document.getElementById("webdav_files").parentElement.open = false;
                };
            }
            if (i.type == "directory") {
                get_dir(i.filename);
            }
        }
    }
    return l;
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
            o = JSON.parse(str);
        }
    }
    now_dav_data = str;
    set_data(o);
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
    }
    let t = JSON.stringify(get_data());
    if (store.webdav.加密密钥) {
        t = window.CryptoJS.AES.encrypt(t, store.webdav.加密密钥).toString();
    }
    client.putFileContents(path, t);
}
var auto_put_xln_t = NaN;
function auto_put_xln() {
    if (Number(store.webdav.自动上传)) {
        auto_put_xln_t = setTimeout(() => {
            if (now_dav_data != JSON.stringify(get_data())) {
                put_xln_value();
            }
        }, Number(store.webdav.自动上传) * 60 * 1000);
    }
}
// 设置
function save_setting() {
    let o = {};
    for (let f of document.getElementById("设置").querySelectorAll("form")) {
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
                const fuse = new window.Fuse([t.value], {
                    includeMatches: true,
                    findAllMatches: true,
                    useExtendedSearch: true,
                });
                let fr = fuse.search(s);
                if (fr[0]?.matches?.length) {
                    result.push({ el: t, l: fr[0].matches, type: "str" });
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
