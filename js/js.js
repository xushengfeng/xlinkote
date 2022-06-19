var O = document.getElementById("O");
var o_e;
var o_rect;
document.onmousedown = (e) => {
    if (e.target == document.querySelector("html")) {
        o_e = e;
        o_rect = O.getBoundingClientRect();
    }
    if (e.target != menu)
        menu.classList.remove("上下文菜单展示");
};
document.onmousemove = (e) => {
    mouse(e);
};
document.onmouseup = (e) => {
    mouse(e);
    o_e = null;
};
var mouse = (e) => {
    if (o_e) {
        let x = o_rect.x + (e.clientX - o_e.clientX), y = o_rect.y + (e.clientY - o_e.clientY);
        O.style.left = x + "px";
        O.style.top = y + "px";
    }
};
document.getElementById("归位").onclick = () => {
    O.style.transition = "0.4s";
    O.style.left = "0px";
    O.style.top = "0px";
    setTimeout(() => {
        O.style.transition = "";
    }, 400);
};
var menu = document.getElementById("上下文菜单");
document.oncontextmenu = (e) => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY;
    menu.style.left = x + "px";
    menu.style.top = y + "px";
    menu.classList.add("上下文菜单展示");
    document.getElementById("在此新建").onmousedown = () => {
        let input = document.createElement("input");
        input.className = "add_tag";
        input.style.left = e.offsetX + "px";
        input.style.top = e.offsetY + "px";
        O.append(input);
        input.focus();
        input.onchange = () => {
            let el = document.createElement(input.value);
            el.contentEditable = "true";
            el.style.position = "absolute";
            el.style.left = e.offsetX + "px";
            el.style.top = e.offsetY + "px";
            O.append(el);
            el.focus();
            input.remove();
        };
    };
};
