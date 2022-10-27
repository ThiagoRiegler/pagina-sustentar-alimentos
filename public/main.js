//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    redes = document.getElementsByClassName("redes");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "5px 10px";
        document.getElementById("navbar-titulo").style.fontSize = "25px";
        document.getElementById("icon").style.width = "60px";
        for (let index = 0; index < redes.length; index++) {
            
            redes[index].style.width = "35px";
            
        }
        document.getElementById("redes").style.width = "17%";

    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar-titulo").style.fontSize = "35px";
        document.getElementById("icon").style.width = "80px";
        for (let index = 0; index < redes.length; index++) {
            
            redes[index].style.width = "45px";
            
        }
        document.getElementById("redes").style.width = "18%";
    }
}