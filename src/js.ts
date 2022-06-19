var O = document.getElementById("O");

var o_e: MouseEvent;
var o_rect: DOMRect;
var move: boolean = false;

document.onmousedown = (e) => {
    if (e.button == 2 && e.target == document.querySelector("#画布")) {
        o_e = e;
        o_rect = O.getBoundingClientRect();
    }
    if (e.target != menu) menu.classList.remove("上下文菜单展示");
};

document.onmousemove = (e) => {
    mouse(e);
    move = true;
};
document.onmouseup = (e) => {
    mouse(e);
    o_e = null;
    if (!move) context_menu(e);
    move = false;
};
var mouse = (e: MouseEvent) => {
    if (o_e) {
        let x = o_rect.x + (e.clientX - o_e.clientX),
            y = o_rect.y + (e.clientY - o_e.clientY);
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

document.getElementById("画布").onwheel = (e) => {
    O.style.left = O.offsetLeft - e.deltaX + "px";
    O.style.top = O.offsetTop - e.deltaY + "px";
};

var menu = document.getElementById("上下文菜单");
document.oncontextmenu = (e) => {
    e.preventDefault();
};

function context_menu(e: MouseEvent) {
    let x = e.offsetX - O.offsetLeft,
        y = e.offsetY - O.offsetTop;
    menu.style.left = e.offsetX + "px";
    menu.style.top = e.offsetY + "px";
    menu.classList.add("上下文菜单展示");

    document.getElementById("在此新建").onmousedown = () => {
        let input = document.createElement("input");
        input.className = "add_tag";
        input.style.left = x + "px";
        input.style.top = y + "px";
        O.append(input);
        input.focus();
        input.onchange = () => {
            let el = document.createElement(input.value);
            let xel = document.createElement("x-x");
            el.contentEditable = "true";
            xel.style.left = x + "px";
            xel.style.top = y + "px";
            O.append(xel);
            xel.append(el);
            el.focus();
            input.remove();
        };
    };
}
