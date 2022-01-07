const galeria = document.querySelector('.galeria');
const fotos = document.querySelectorAll('.galeria img')
const modal = document.querySelector('.modal');
const imagenModal = document.querySelector('.modal img');
const cerrar = document.querySelector('.close');
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
// const videoGallery = document.querySelector('.galeria-videos');
// const modalVideo = document.querySelector('.modal-video');
// const videoModal = document.querySelector('.modal-video video');
// const closeVid = document.querySelector('.close-vid');
let indiceImg = undefined;

 
console.log(  )

// ************Eventos************************************
galeria.addEventListener('click',abrirModal); 

cerrar.addEventListener('click',() =>{
      modal.style.display="none";
      imagenModal.src = "";

} )
// closeVid.addEventListener('click',cerrarVideoModal);
    
    
// videoGallery.addEventListener('click',abrirModalVideo);
prev.addEventListener('click',imgPrev);
next.addEventListener('click',imgNext);




// *********funciones********************

function abrirModal(e){
    if(e.target.classList.contains('pics')){
        modal.style.display="block";
        crearImagen(e);
    }
}

//  function abrirModalVideo(e){
//       modalVideo.style.display="block";
//       videoModal.src = e.target.src;
//  }

// function cerrarVideoModal(e){
//     modalVideo.style.display="none";
     
// }
 

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
     if(indiceImg === 0){
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
