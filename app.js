/*Funcion para cambiar el icono <logo> cuando el cursor pasa por menu */
function change() {
    document.getElementById("logo").src = "assets/images/logo-pink.png";
    /*Para cambiar el color de fondo a blanco cuando el curso*/
    document.getElementById("menu").style.backgroundColor = "white";

    var links = document.getElementsByClassName("menubtn");

    for (var i = 0; i < links.length; i++) {
        if (links[i].href) {
            links[i].style.color = "black";
        }



    }
    document.getElementById("login").style.borderColor = "black";
}

/*Funcion para volver al icono <logo> inicial*/
function changeBack() {
    document.getElementById("logo").src = "assets/images/logo-white.png";
    document.getElementById("menu").style.backgroundColor = "transparent";

    var links = document.getElementsByClassName("menubtn");

    for (var i = 0; i < links.length; i++) {

        links[i].style.color = "white";

    }

    document.getElementById("login").style.borderColor = "white";
}

window.onscroll = function changeClass() {
    var scrollvalue = 100;
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY > scrollvalue) {
        change();
    } else if (scrollPosY <= scrollvalue) {
        changeBack();
    }
}



