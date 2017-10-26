function change() {
    document.getElementById("logo").src = "assets/images/logo-pink.png";
    document.getElementById("menu").style.backgroundColor = "white";

    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        if (links[i].href) {
            links[i].style.color = "black";
        }



    }
    document.getElementById("login").style.borderColor = "black";
}

function changeBack() {
    document.getElementById("logo").src = "assets/images/logo-white.png";
    document.getElementById("menu").style.backgroundColor = "transparent";

    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {

        links[i].style.color = "white";

    }

    document.getElementById("login").style.borderColor = "white";
}

window.onscroll = function changeClass() {
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY > 500) {
        change();
    } else if (scrollPosY <= 500) {
        changeBack();
    }
}



