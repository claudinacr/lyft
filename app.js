/*Funcion para cambiar el icono <logo> cuando el cursor pasa por menu */
function change() {
    document.getElementById("logo").src = "assets/images/logo-pink.png";
    /*Para cambiar el color de fondo a blanco cuando el curso*/
    document.getElementById("menu").style.backgroundColor = "white";

    /*Referencia para tomar todos los elementos menubtn*/
    var links = document.getElementsByClassName("menubtn");

    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "black";
        /*Con un bucle cambiamos cada elementos menubtn a letra color negro*/


    }
     /*Cambiamos el borde del boton Log in a color negro*/
    document.getElementById("login").style.borderColor = "black";
}

/*Basicamente es la misma funcionalidad de la funcion anterior
solo que se estaría en este caso cambiando a los colores originales*/
function changeBack() {
    document.getElementById("logo").src = "assets/images/logo-white.png";
    document.getElementById("menu").style.backgroundColor = "transparent";

    var links = document.getElementsByClassName("menubtn");

    for (var i = 0; i < links.length; i++) {

        links[i].style.color = "white";

    }

    document.getElementById("login").style.borderColor = "white";
}

/*Funcion para llamar la funcion changeClass cuando el 
evento window.onscroll se active*/
window.onscroll = function changeClass() {
    var scrollvalue = 100;
    
    /*Referencia de para la posicion del scroll de la ventana del navegador*/
    
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    
    /* y dependiendo si el scroll de la ventana es mayor a un valor
    establecido realizamos el cambio de colores a la barra nav*/
    if (scrollPosY > scrollvalue) {
        change(); /*Cambio a color Fondo Blanco*/
    } else if (scrollPosY <= scrollvalue) {
        changeBack(); /*Cambio a color Fondo Transparente*/
    }
}



