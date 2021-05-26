const formulario = document.getElementById("formulario");
var entradas = document.getElementsByClassName("entrada");
var vacio = document.getElementById("esta-vacio");
var avisos = document.getElementsByTagName("p");
var nombre= /^[a-zÑñA-ZÀ-ÿ\s]{2,40}$/, 
    apellido= /^[a-zÑñA-ZÀ-ÿ\s]{2,40}$/,
	correo= /^[a-zñÑA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono= /^\d{3,20}$/ ;
var validaciones = [nombre, apellido, correo, telefono];

function validar(){
   for(var i=0; i<5; i++){
       if(entradas[i].value==0){
           vacio.classList.remove("esta-vacio");
           vacio.classList.add("esta-vacio-si");
           return false;
       }
       else{
        vacio.classList.add("esta-vacio");
        vacio.classList.remove("esta-vacio-si");
       }
   }

   for(var i=0; i<4; i++){
       if(!(validaciones[i].test(entradas[i].value))){
            avisos[i].classList.remove("aviso");
            avisos[i].classList.add("aviso-ok");
            return(false);
       }else{
        avisos[i].classList.add("aviso");
        avisos[i].classList.remove("aviso-ok");
       }
       
   }
   alert("formulario enviado con exito");
   formulario.submit();
}