const formulario = document.getElementById("formulario");
const vacio = document.getElementById("esta-vacio");
const avisos = document.getElementsByTagName("p");
const nombre= /^[a-zÑñA-ZÀ-ÿ\s]{2,40}$/, 
    apellido= /^[a-zÑñA-ZÀ-ÿ\s]{2,40}$/,
	correo= /^[a-zñÑA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono= /^\d{3,20}$/ ;
const validaciones = [nombre, apellido, correo, telefono];

formulario.addEventListener("submit", (e)=>{
    let verificacion =0;
    e.preventDefault();
    for( i=0; i<5; i++){
        if(formulario.getElementsByClassName("entrada")[i].value==0){
            vacio.classList.replace("esta-vacio", "esta-vacio-si");
            verificacion=1;
        }
        else{
         vacio.classList.replace("esta-vacio-si", "esta-vacio");
        }
    }
 
    for( i=0; i<4; i++){
        if(!(validaciones[i].test(formulario.getElementsByClassName("entrada")[i].value))){
             avisos[i].classList.replace("aviso", "aviso-ok");
             verificacion=1;
        }else{
         avisos[i].classList.replace("aviso-ok", "aviso");
        }
        
    }

    if(verificacion==0){
        alert("formulario enviado!");
        formulario.submit();
    }
})
   