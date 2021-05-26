var imagines = document.getElementsByClassName("img");
let index =-1;
let index2 =0;

function remover(){
    imagines[index].classList.remove("img-ok");
    imagines[index].classList.add("img-no");
}

function agregar(){
    imagines[index2].classList.remove("img-no");
    imagines[index2].classList.add("img-ok");
}

function siguiente(){
    index+=1;
    index2+=1;
    if(!(index==3&&index2==4)){
        remover();
        agregar();
    }else{
        index=3;
        index2=0;
        remover();
        agregar();
        index=-1;
        index2=0;
    }
}

function anterior(){
    let aux=index;
    index=index2;
    index2=aux;
    if(!(index==0&&index2==-1)){
        remover();
        agregar();
        let aux=index2;
        index2=index;
        index=aux;
        index-=1;
        index2-=1;
    }else{
        index=0;
        index2=3;
        remover();
        agregar();
        index=2;
    }
}

