var imagines = ['../img/tipos/portada.jpg','../img/tipos/domo.jpg', '../img/tipos/bullet.jpg',  '../img/tipos/wifi.jpg', '../img/tipos/ptz2.jpg','../img/tipos/espia.png'];
var contador =0;
var contenedor = document.getElementById("contenedor");
var siguiente = document.getElementById("siguiente");
var anterior = document.getElementById("anterior")
var parrafos = document.getElementsByTagName("p");

siguiente.addEventListener("click", ()=>{
    if(contador!=(imagines.length-1)){
        parrafos[contador].classList.add("oculto");
        contador+=1;
        contenedor.querySelector("img").src=imagines[contador];
        parrafos[contador].classList.remove("oculto");
    }
    else{
        contenedor.querySelector("img").src=imagines[0];
        parrafos[contador].classList.add("oculto");
        contador=0;
        parrafos[contador].classList.remove("oculto");
    }

});


anterior.addEventListener("click", ()=>{
    if(contador!=0){
        parrafos[contador].classList.add("oculto");
        contador-=1;
        contenedor.querySelector("img").src=imagines[contador]
        parrafos[contador].classList.remove("oculto");
    }
    else{
        parrafos[contador].classList.add("oculto");
        contenedor.querySelector("img").src=imagines[(imagines.length-1)];
        contador=(imagines.length-1);
        parrafos[contador].classList.remove("oculto");
    }
});