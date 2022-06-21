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
        let p = document.createElement("p");
        creat_x_x(r.x - O.offsetLeft, r.y - O.offsetTop, p);
    }
    o_e = null;
    if (!move && e.button == 2)
        context_menu(e);
    move = false;
    document.getElementById("画布").style.cursor = "auto";
    if (select_id)
        document.getElementById(select_id).remove();
    select_id = "";
};
var mouse = (e) => {
    if (o_e) {
        if (e.buttons == 2) {
            let x = o_rect.x + (e.clientX - o_e.clientX), y = o_rect.y + (e.clientY - o_e.clientY);
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
var x_x_types = [
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "menu",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "area",
    "audio",
    "img",
    "map",
    "track",
    "video",
    "embed",
    "iframe",
    "object",
    "picture",
    "portal",
    "source",
    "canvas",
    "del",
    "ins",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "button",
    "datalist",
    "fieldset",
    "form",
    "input",
    "label",
    "legend",
    "meter",
    "optgroup",
    "option",
    "output",
    "progress",
    "select",
    "textarea",
    "details",
    "dialog",
    "summary",
    "content",
    "shadow",
    "slot",
    "template",
];
var tags_data = document.createElement("datalist");
tags_data.id = "tags";
for (const i of x_x_types) {
    let op = document.createElement("option");
    op.value = i;
    tags_data.append(op);
}
document.body.append(tags_data);
document.getElementById("归位").onclick = () => {
    O.style.transition = "0.4s";
    O.style.left = "0px";
    O.style.top = "0px";
    setTimeout(() => {
        O.style.transition = "";
    }, 400);
};
document.getElementById("画布").onwheel = (e) => {
    O.style.left = O.offsetLeft - e.deltaX + "px";
    O.style.top = O.offsetTop - e.deltaY + "px";
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
        let input = document.createElement("input");
        input.className = "add_tag";
        input.style.left = x + "px";
        input.style.top = y + "px";
        O.append(input);
        setTimeout(() => {
            input.focus();
        }, 10);
        input.onchange = () => {
            let el = document.createElement(input.value);
            creat_x_x(x, y, el);
            input.remove();
        };
        input.onblur = () => {
            input.remove();
        };
    };
}
function creat_x_x(x, y, el) {
    let xel = document.createElement("x-x");
    el.contentEditable = "true";
    xel.style.left = x + "px";
    xel.style.top = y + "px";
    O.append(xel);
    xel.append(el);
    el.onkeydown = (e) => {
        let eeel = e.target;
        if ((e.key == "Backspace" || e.key == "Delete") && (eeel?.value == "" || eeel?.innerText == "")) {
            xel.remove();
        }
        if (e.key == "Enter") {
            e.preventDefault();
            let x = xel.offsetLeft, y = xel.offsetTop + xel.offsetHeight;
            creat_x_x(x, y, document.createElement("p"));
        }
    };
    el.focus();
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
    }
};
