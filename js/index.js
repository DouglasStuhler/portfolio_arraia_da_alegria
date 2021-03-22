function clica(){

    var x = document.getElementsByClassName("menu")[0];

    if (x.id == "escondido"){
        x.id = "";
    } else if (x == null || x.id == "") {
        x.id = "direita";
        setTimeout(function(){ 
            x.style = "display:none";
            x.id = "escondido";
            setTimeout(function(){
                x.style = "";
            }, 10)
        }, 1000)
    }
    
}

function menu(){
    var scroll = document.scrollingElement.scrollTop;
    
    if (scroll >= ((window.innerHeight * 79) / 100)){
        var x = document.getElementById("nav");

        x.style = "";
    } else {
        var x = document.getElementById("nav");

        x.style = "height: 0; width: 0;";

        var y = document.getElementsByClassName("menu")[0];
        y.id = "escondido";
    }
}

// document.addEventListener(onscroll, menu());