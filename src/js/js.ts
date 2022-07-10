var store = JSON.parse(localStorage.getItem("config"));
if (!store) {
    save_setting();
}

document.getElementById("tabs").onclick = (e) => {
    document.querySelectorAll("#tabs > div").forEach((el, i) => {
        if (el == e.target) {
            document.querySelectorAll("#items > div").forEach((iel: HTMLDivElement, j) => {
                if (i == j) {
                    iel.style.width = "100%";
                } else {
                    iel.style.width = "0";
                }
            });
        }
    });
};
document.getElementById("文件").click();

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
        if (e.button == 2) {
            o_e = e;
            o_rect = { x: O.offsetLeft, y: O.offsetTop };
            document.getElementById("画布").style.cursor = "move";
        } else if (e.button == 0) {
            o_e = e;
            let select = document.createElement("div");
            select_id = select.id = `s${new Date().getTime()}`;
            document.getElementById("选择").append(select);
            画布.style.userSelect = "none";
        }
    }
    if (e.target != menu) menu.classList.remove("上下文菜单展示");
};

document.onmousemove = (e) => {
    mouse(e);
    if (o_e) move = true;
};
document.onmouseup = (e) => {
    mouse(e);
    if (e.button == 0 && selected_el.length == 0 && move) {
        let r = e2rect(o_e, e);
        creat_x_x(r.x - O.offsetLeft, r.y - O.offsetTop);
    }
    o_e = null;
    if (!move && e.button == 2) context_menu(e);
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
document.ontouchstart = (e) => {
    let el = <HTMLElement>e.changedTouches[0].target;
    if (
        el == document.querySelector("#画布") ||
        !(el.isContentEditable || el.tagName == "INPUT" || el.tagName == "SELECT" || el.tagName == "TEXTAREA") ||
        ![].slice.call(document.querySelectorAll("x-sinppet *")).includes(el)
    ) {
        o_touch_e = e;
        o_rect = { x: O.offsetLeft, y: O.offsetTop };
        document.getElementById("画布").style.cursor = "move";
    }
};
document.ontouchmove = (e) => {
    pointer(e);
    if (o_touch_e) move = true;
};
document.ontouchend = (e) => {
    pointer(e);
    o_touch_e = null;
    move = false;
    document.getElementById("画布").style.cursor = "auto";
    if (select_id) document.getElementById(select_id).remove();
    select_id = "";
};

var pointer_move = true;

var pointer = (e: TouchEvent) => {
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
    setTimeout(() => {
        O.style.transition = "";
    }, 400);
};

var zoom = 1;

function zoom_o(z: number) {
    zoom = z;
    O.style.transform = `scale(${z})`;
}

document.getElementById("画布").onwheel = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        zoom += -e.deltaY / 500;
        zoom_o(zoom);
    } else {
        let el = <HTMLElement>e.target;
        if (el.tagName == "TEXTAREA") return;
        if ([].slice.call(document.querySelectorAll("x-sinppet *")).includes(el)) return;
        if (e.shiftKey && !e.deltaX) {
            if (fxsd == 0 || fxsd == 2) O.style.left = O.offsetLeft - e.deltaY + "px";
        } else {
            if (fxsd == 0 || fxsd == 2) O.style.left = O.offsetLeft - e.deltaX + "px";
            if (fxsd == 0 || fxsd == 1) O.style.top = O.offsetTop - e.deltaY + "px";
        }
    }
};

var menu = document.getElementById("上下文菜单");
document.oncontextmenu = (e) => {
    e.preventDefault();
};

function context_menu(e: MouseEvent) {
    let x = e.offsetX - O.offsetLeft,
        y = e.offsetY - O.offsetTop;
    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
    menu.classList.add("上下文菜单展示");

    document.getElementById("在此新建").onmousedown = () => {
        creat_x_x(x, y);
    };
}

function creat_x_x(x: number, y: number) {
    let xel = <x>document.createElement("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    var md = document.createElement("x-md");
    xel.append(md);
    (<markdown>md).edit = true;

    data_changed();
}

function add_event(el: HTMLElement) {
    el.onkeydown = (e) => {
        let eeel = <HTMLInputElement>e.target;
        let xel = eeel.parentElement;
        if ((e.key == "Backspace" || e.key == "Delete") && (eeel?.value == "" || eeel?.innerText == "")) {
            xel.remove();
        }
        if (e.key == "Enter") {
            e.preventDefault();
            let x = xel.offsetLeft,
                y = xel.offsetTop + xel.offsetHeight;
            creat_x_x(x, y);
        }
    };
}

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

var 集 = [{ name: "xlinkote", data: [] }];

var id = crypto.randomUUID();

var focus_page = "xlinkote";

function get_data() {
    let l = {
        meta: {
            focus_page,
            url: dav_file_path,
            UUID: id,
        },
        集,
    };
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
    for (let p of 集) {
        if (p.name == focus_page) p.data = data;
    }
    return l;
}

type data = Array<{ id: string; style: string; values: object; fixed: boolean }>;

function set_data(l: {
    meta: {
        focus_page: string;
        url: string;
        UUID: string;
    };
    集: Array<{ name: string; data: data }>;
}) {
    if (l.meta.url) dav_file_path = l.meta.url;
    id = l.meta.UUID || crypto.randomUUID();
    集 = l.集;
    O.innerHTML = "";
    for (const p of l.集) {
        let div = document.createElement("div");
        document.getElementById("集").append(div);
        div.innerText = p.name;
        div.onclick = () => {
            render_data(p.data);
            focus_page = p.name;
        };
        if (l.meta.focus_page == p.name) {
            render_data(p.data);
            focus_page = p.name;
        }
    }
}

function render_data(data: data) {
    O.innerHTML = "";
    z.z = [];
    for (const x of data) {
        try {
            let el = <x>document.createElement("x-x");
            el.fixed = x.fixed;
            el.id = x.id;
            z.push(el);
            setTimeout(() => {
                el.setAttribute("style", x.style);
            }, 0);
            for (let i in x.values) {
                let eel = <markdown>document.createElement(i);
                el.append(eel);
                eel.value = x.values[i].value;
                if (x.values[i].edit) eel.edit = true;
            }
        } catch (e) {
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

var upload_i = <HTMLInputElement>document.getElementById("upload_i");
var upload_d = <HTMLInputElement>document.getElementById("upload_d");

var fileHandle;

if (window.showOpenFilePicker) {
    document.getElementById("上传文件").onclick = file_load;
} else {
    document.getElementById("上传文件").onclick = () => {
        upload_i.click();
    };
    upload_i.onchange = file_load;
}

async function file_load() {
    let file: File;
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
        if (fileHandle.kind != "file") return;
        fileHandle.requestPermission({ mode: "readwrite" });
        file = await fileHandle.getFile();
    } else {
        file = upload_i.files[0];
    }
    file_name = file.name.replace(/\.xln$/, "");
    document.title = get_title();

    let reader = new FileReader();
    reader.onload = () => {
        let o = JSON.parse(<string>reader.result);
        set_data(o);
    };
    reader.readAsText(file);
}

document.getElementById("导出文件").onclick = () => {
    download_file(JSON.stringify(get_data()));
};

var saved = true;
var file_name = "";

function get_file_name() {
    return file_name || document.querySelector("h1")?.innerText || `xlinkote`;
}

function get_title() {
    return `${file_name} - xlinkote`;
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

var request = indexedDB.open("files", 2);
var db_store_name = "files";
var db: IDBDatabase;

request.onsuccess = (event) => {
    db = (<any>event.target).result;
};
request.onerror = (event) => {
    console.error(new Error((<any>event.target).error));
};
request.onupgradeneeded = (event) => {
    db = (<any>event.target).result;
    db.createObjectStore(db_store_name, { keyPath: "meta.UUID" });
};

function db_put(obj: object) {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.put(obj);
    r.onerror = (event) => {
        console.error(new Error((<any>event.target).error));
    };
}

async function download_file(text: string) {
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
    } else {
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
        saved = false;
        write_file(JSON.stringify(get_data()));
        db_put(get_data());
    }
}

document.getElementById("toggle_md").onclick = () => {
    if (focus_md) {
        focus_md.edit = !focus_md.edit;
    }
};

var focus_md = null;

document.getElementById("新建元素").onclick = () => {
    creat_x_x(-O.offsetLeft, -O.offsetTop);
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

画布.ondragover = (e) => {
    if (e.target != 画布) return;
    e.preventDefault();
};

画布.ondrop = (e) => {
    if (e.target != 画布) return;
    e.preventDefault();
    if (e.dataTransfer.files.length != 0) {
        for (let f of e.dataTransfer.files) {
            let type = f.type.split("/")[0];
            let x = e.offsetX - O.offsetLeft,
                y = e.offsetY - O.offsetTop;
            let xel = <x>document.createElement("x-x");
            xel.style.left = x / zoom + "px";
            xel.style.top = y / zoom + "px";
            z.push(xel);
            if (type == "image") {
                let img = <img>document.createElement("x-img");
                xel.append(img);
                let reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = () => {
                    img.src = reader.result;
                };
            } else if (type == "video") {
                let video = <video>document.createElement("x-video");
                xel.append(video);
                let reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = () => {
                    video.src = reader.result;
                };
            } else if (f.type == "text/html") {
                let md = <markdown>document.createElement("x-md");
                xel.append(md);
                let reader = new FileReader();
                reader.readAsText(f);
                reader.onload = () => {
                    let turndownService = new window.TurndownService({ headingStyle: "atx" });
                    md.value = turndownService.turndown(reader.result);
                };
            } else if (type == "text") {
                let md = <markdown>document.createElement("x-md");
                xel.append(md);
                let reader = new FileReader();
                reader.readAsText(f);
                reader.onload = () => {
                    md.value = <string>reader.result;
                };
            }
        }
    } else {
        let x = e.offsetX - O.offsetLeft,
            y = e.offsetY - O.offsetTop;
        let xel = <x>document.createElement("x-x");
        xel.style.left = x / zoom + "px";
        xel.style.top = y / zoom + "px";
        z.push(xel);
        let html = e.dataTransfer.getData("text/html");
        let turndownService = new window.TurndownService({ headingStyle: "atx" });
        let md = <markdown>document.createElement("x-md");
        xel.append(md);
        md.value = turndownService.turndown(html);
    }
};

画布.onpointerdown = (e) => {
    let cl = document.querySelectorAll("x-draw");
    for (let c of cl) {
        (<draw>c)?.draw(e);
    }
};

画布.onpointermove = (e) => {
    let cl = document.querySelectorAll("x-draw");
    for (let c of cl) {
        (<draw>c)?.draw(e);
    }
};
画布.onpointerup = (e) => {
    let cl = document.querySelectorAll("x-draw");
    for (let c of cl) {
        (<draw>c)?.draw(e);
        if (c) (<draw>c).points = { x: NaN, y: NaN };
        (<draw>c)?.clip();
    }
};

document.getElementById("新建画板").onclick = () => {
    let xel = <x>document.createElement("x-x");
    xel.style.left = -O.offsetLeft + "px";
    xel.style.top = -O.offsetTop + "px";
    z.push(xel);
    let draw = document.createElement("x-draw");
    draw.setAttribute("width", String(画布.offsetWidth));
    draw.setAttribute("height", String(画布.offsetHeight));
    xel.append(draw);

    data_changed();
};

window.onbeforeunload = () => {
    if (!saved) return true;
};

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

document.getElementById("新建集").onclick = () => {
    window.open(location.href);
};

class 图层 {
    z: Array<x> = [];

    聚焦元素 = <x>null;

    reflash(el: x) {
        document.getElementById("层").innerHTML = "";
        for (let i in this.z) {
            this.z[i].style.zIndex = i;

            let div = document.createElement("div");
            let r = document.createElement("input");
            r.type = "radio";
            r.name = "层";
            r.value = i;
            if (this.z[i] == el) r.checked = true;
            let t = document.createElement("input");
            t.type = "text";
            let l = document.createElement("label");
            l.append(r);
            t.value = this.z[i].id;
            l.append(t);
            t.onchange = () => {
                this.z[i].id = t.value;
                this.reflash(this.z[i]);
            };
            div.append(l);
            div.onclick = () => {
                this.聚焦元素 = this.z[i];
            };
            document.getElementById("层").insertBefore(div, document.getElementById("层").firstChild);
        }
        document.documentElement.style.setProperty("--zest-index", String(this.z.length - 1));
    }

    push(el: x) {
        el.id = el.id === "undefined" || !el.id ? `${crypto.randomUUID().slice(0, 7)}` : el.id;
        O.append(el);
        this.z.push(el);
        this.reflash(el);
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
        for (let l of document.getElementById("层").querySelectorAll("label")) {
            if (el.id == (<HTMLInputElement>l.querySelector("input[type='text']")).value)
                (<HTMLInputElement>l.querySelector("input[type='radio']")).checked = true;
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

document.getElementById("层按钮").onclick = (e) => {
    let el = z.聚焦元素;
    switch ((<HTMLElement>e.target).id) {
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

document.getElementById("侧栏").onclick = () => {
    document.getElementById("main").classList.toggle("侧栏");
};

var client = window.WebDAV.createClient(store.webdav.网址, {
    username: store.webdav.用户名,
    password: store.webdav.密码,
});

async function get_all_xln() {
    let l = [];
    document.getElementById("webdav_files").innerHTML = "";
    (<HTMLDialogElement>document.getElementById("webdav_files").parentElement).open = true;
    get_dir("/");
    async function get_dir(path: string) {
        const directoryItems = await client.getDirectoryContents(path);
        for (let i of directoryItems) {
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
                    file_name = i.basename.replace(/\.xln$/, "");
                    document.title = get_title();
                    (<HTMLDialogElement>document.getElementById("webdav_files").parentElement).open = false;
                };
            }
            if (i.type == "directory") {
                get_dir(i.filename);
            }
        }
    }
    return l;
}

document.getElementById("从云加载").onclick = get_all_xln;

var dav_file_path = "";

var now_dav_data = "";

async function get_xln_value(path: string) {
    dav_file_path = path;
    let str = await client.getFileContents(path, { format: "text" });
    let o: any;
    try {
        o = JSON.parse(<string>str);
    } catch (e) {
        if (store.webdav.加密密钥) {
            let bytes = window.CryptoJS.AES.decrypt(str, store.webdav.加密密钥);
            str = bytes.toString(window.CryptoJS.enc.Utf8);
            o = JSON.parse(<string>str);
        }
    }
    now_dav_data = str;
    set_data(o);
    if (fileHandle) fileHandle = null;
}

document.getElementById("同步到云").onclick = put_xln_value;

async function put_xln_value() {
    let path = dav_file_path;
    if (!path) {
        let n = window.prompt("上传的文件名", get_file_name());
        set_title(n);
        path = `/${n}.xln`;
    }
    let t = JSON.stringify(get_data());
    if (store.webdav.加密密钥) {
        t = window.CryptoJS.AES.encrypt(t, store.webdav.加密密钥).toString();
    }
    client.putFileContents(path, t);
}

var auto_put_xln_t = NaN;

function auto_put_xln() {
    if (store.webdav.自动上传) {
        auto_put_xln_t = setTimeout(() => {
            if (now_dav_data != JSON.stringify(get_data())) {
                put_xln_value();
            }
        }, Number(store.webdav.自动上传) * 60 * 1000);
    }
}

document.getElementById("偏好设置").onclick = () => {
    document.getElementById("设置").style.display = "block";
    show_setting();
};

(<HTMLDivElement>document.getElementById("设置").querySelector("#close")).onclick = () => {
    document.getElementById("设置").style.display = "";
    save_setting();
};

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
