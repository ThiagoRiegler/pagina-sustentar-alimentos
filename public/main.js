

function scrollFunction() {
    redes = document.getElementsByClassName("redes");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("navbar-titulo").style.fontSize = "0px";
        document.getElementById("navbar-titulo2").style.fontSize = "15px";
        document.getElementById("indice").style.top = "-70px";
        document.getElementById("icon").style.width = "80px";
        for (let index = 0; index < redes.length; index++) {
            
            redes[index].style.width = "35px";
            
        }
        document.getElementById("redes").style.width = "17%";

    } else{
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar").style.height = "200px";
        document.getElementById("navbar-titulo").style.fontSize = "35px";
        document.getElementById("navbar-titulo2").style.fontSize = "0px";
        document.getElementById("icon").style.width = "80px";
        document.getElementById("indice").style.top = "0px";
        for (let index = 0; index < redes.length; index++) {
            
            redes[index].style.width = "45px";
            
        }
        document.getElementById("redes").style.width = "18%";
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        
    } else {
        window.onscroll = function() {scrollFunction()};
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time

