const galeria = document.querySelector('.galeria');
const fotos = document.querySelectorAll('.galeria img')
const modal = document.querySelector('.modal');
const imagenModal = document.querySelector('.modal img');
const cerrar = document.querySelector('.close');
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const allImages = document.querySelectorAll('img');
let indiceImg = undefined;

 
 

// ************Eventos************************************
galeria.addEventListener('click',abrirModal); 

allImages.forEach( pic =>{
    pic.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
    })
})

cerrar.addEventListener('click',() =>{
      modal.style.display="none";
      imagenModal.src = "";

} )

prev.addEventListener('click',imgPrev);
next.addEventListener('click',imgNext);




// *********funciones********************

function abrirModal(e){
    if(e.target.classList.contains('pics')){
        modal.style.display="block";
        crearImagen(e);
    }
}

 

function crearImagen(e){
    imagenModal.src = e.target.src;
    indiceImg = Array.from(fotos).indexOf(e.target);   
    validarBtnPrev();
    validarBtnNext();
}

function imgPrev(){
    imagenModal.src = fotos[indiceImg -1].src;
    indiceImg -- ;
    validarBtnPrev();
    validarBtnNext();
}

function imgNext(){
    imagenModal.src = fotos[indiceImg +1].src;
    indiceImg ++ ;
    validarBtnPrev();
    validarBtnNext();
}

function validarBtnPrev(){
     if(indiceImg ===  0){
        prev.style.display="none";
     }else {
        prev.style.display="block";
        
     }
}

function validarBtnNext(){
    if(indiceImg === fotos.length -1){
        next.style.display="none";
    }else {
        next.style.display="block";
    }
}
