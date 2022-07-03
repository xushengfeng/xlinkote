document.getElementById("tabs").onclick = (e) => {
    document.querySelectorAll("#tabs > div").forEach((el, i) => {
        if (el == e.target) {
            document.querySelectorAll("#items > div").forEach((iel, j) => {
                if (i == j) {
                    iel.style.width = "100%";
                }
                else {
                    iel.style.width = "0";
                }
            });
        }
    });
};
document.getElementById("文件").click();
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
    if (el == document.querySelector("#画布") ||
        !(el.isContentEditable || el.tagName == "INPUT" || el.tagName == "SELECT" || el.tagName == "TEXTAREA") ||
        ![].slice.call(document.querySelectorAll("x-sinppet *")).includes(el)) {
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
        if ([].slice.call(document.querySelectorAll("x-sinppet *")).includes(el))
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
    O.append(xel);
    var md = document.createElement("x-md");
    xel.append(md);
    md.edit = true;
    data_changed();
}
function add_event(el) {
    el.onkeydown = (e) => {
        let eeel = e.target;
        let xel = eeel.parentElement;
        if ((e.key == "Backspace" || e.key == "Delete") && (eeel?.value == "" || eeel?.innerText == "")) {
            xel.remove();
        }
        if (e.key == "Enter") {
            e.preventDefault();
            let x = xel.offsetLeft, y = xel.offsetTop + xel.offsetHeight;
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
        case "s":
            if (e.ctrlKey) {
                e.preventDefault();
                document.getElementById("保存文件").click();
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
function get_data() {
    let l = [];
    for (let i of O.childNodes) {
        let el = i;
        let values = {};
        for (let k of el.childNodes) {
            let eel = k;
            if (eel.id == "x-x_bar" || eel.id == "x-x_page")
                continue;
            values[eel.tagName] = { value: eel.value, ...(eel.edit ? { edit: eel.edit } : {}) };
        }
        l.push({ style: el.getAttribute("style"), values, tag: el.tagName });
    }
    return l;
}
function set_data(l) {
    O.innerHTML = "";
    for (const x of l) {
        try {
            let el = document.createElement(x.tag);
            O.append(el);
            setTimeout(() => {
                el.setAttribute("style", x.style);
            }, 0);
            for (let i in x.values) {
                let eel = document.createElement(i);
                el.append(eel);
                eel.value = x.values[i].value;
                if (x.values[i].edit)
                    eel.edit = true;
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
var upload_el = document.getElementById("upload_i");
var fileHandle;
if (window.showOpenFilePicker) {
    document.getElementById("上传文件").onclick = file_load;
}
else {
    document.getElementById("上传文件").onclick = () => {
        upload_el.click();
    };
    upload_el.onchange = file_load;
}
async function file_load() {
    let file;
    if (window.showOpenFilePicker) {
        [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "JSON",
                    accept: {
                        "text/*": [".json"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
        });
        if (fileHandle.kind != "file")
            return;
        file = await fileHandle.getFile();
    }
    else {
        file = upload_el.files[0];
    }
    file_name = file.name.replace(/\.json$/, "");
    document.title = `${file_name} - xlinkote`;
    let reader = new FileReader();
    reader.onload = () => {
        let o = JSON.parse(reader.result);
        set_data(o);
    };
    reader.readAsText(file);
}
document.getElementById("保存文件").onclick = () => {
    write_file(JSON.stringify(get_data()));
};
var saved = true;
var file_name = "";
async function write_file(text) {
    saved = true;
    document.title = file_name;
    if (fileHandle && (await fileHandle.requestPermission({ mode: "readwrite" })) === "granted") {
        const writable = await fileHandle.createWritable();
        await writable.write(text);
        await writable.close();
    }
    else {
        let a = document.createElement("a");
        let blob = new Blob([text]);
        let name = file_name || document.querySelector("h1")?.innerText || `xlinkote`;
        a.download = `${name}.json`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    }
}
function data_changed() {
    if (saved) {
        saved = false;
        document.title = `・` + document.title;
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
    if (focus_md)
        focus_md.remove();
};
document.getElementById("新建页").onclick = () => {
    let page = document.createElement("x-page");
    O.append(page);
    page.style.left = `${(O.querySelectorAll("x-page").length - 1) * 100}vw`;
    O.style.left = -page.offsetLeft + "px";
    O.style.top = "0";
};
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
            O.append(xel);
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
        O.append(xel);
        let html = e.dataTransfer.getData("text/html");
        let turndownService = new window.TurndownService({ headingStyle: "atx" });
        let md = document.createElement("x-md");
        xel.append(md);
        md.value = turndownService.turndown(html);
    }
};
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
document.getElementById("新建画板").onclick = () => {
    let xel = document.createElement("x-x");
    xel.style.left = -O.offsetLeft + "px";
    xel.style.top = -O.offsetTop + "px";
    O.append(xel);
    let draw = document.createElement("x-draw");
    xel.append(draw);
    data_changed();
};
