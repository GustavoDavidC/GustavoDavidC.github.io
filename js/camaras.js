var imagines = ['../img/tipos/portada.jpg', '../img/tipos/bullet.jpg', '../img/tipos/espia.png', '../img/tipos/tecnologia.jpg'];
var contador =0;
var contenedor = document.getElementById("contenedor");
var siguiente = document.getElementById("siguiente");
var anterior = document.getElementById("anterior")

siguiente.addEventListener("click", ()=>{
    if(contador!=(imagines.length-1)){
        contador+=1;
        contenedor.querySelector("img").src=imagines[contador];
    }
    else{
        contenedor.querySelector("img").src=imagines[0];
        contador=0;
    }

});




anterior.addEventListener("click", ()=>{
    if(contador!=0){
        contador-=1;
        contenedor.querySelector("img").src=imagines[contador]
    }
    else{
        contenedor.querySelector("img").src=imagines[(imagines.length-1)];
        contador=(imagines.length-1);
    }
});