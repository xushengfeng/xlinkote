var main = document.getElementById("main");

var o_e: MouseEvent;
var o_rect: DOMRect;

document.onmousedown = (e) => {
    if (e.target == main) {
        o_e = e;
        o_rect = main.getBoundingClientRect();
    }
};

document.onmousemove = (e) => {
    mouse(e);
};
document.onmouseup = (e) => {
    mouse(e);
    o_e = null;
};
var mouse = (e: MouseEvent) => {
    if (o_e) {
        let x = o_rect.x + (e.clientX - o_e.clientX),
            y = o_rect.y + (e.clientY - o_e.clientY);
        main.style.left = x + "px";
        main.style.top = y + "px";
    }
};
