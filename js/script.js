//ejecutar funcion del evento click

const menu_side = document.getElementById("menu_side");
const btn_open = document.getElementById("btn_open");

const body = document.getElementById("body");

btn_open.addEventListener("click", () => {
    open_close_menu();
    console.log("hola");
});

const open_close_menu = () => {
    console.log("1");
    body.classList.toggle("body_move");
    menu_side.classList.toggle("menu__side_move");
};

//Si el ancho de la pagina es menor a 760px, ocultará el menúal recargar
if (window.innerWidth < 760) {
    body.classList.add("body_move");
    menu_side.classList.add("menu__side_move");
}
window.addEventListener("resize", function() {
    if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        menu_side.classList.remove("menu__side_move");
    }
    if (window.innerWidth < 760) {
        body.classList.add("body_move");
        menu_side.classList.add("menu__side_move");
    }


});