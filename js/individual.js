const galeria = document.querySelector('.galeria');
const fotos = document.querySelectorAll('.galeria img')
const imagen = document.querySelectorAll('.foto');
const modal = document.querySelector('.modal-foto');
const imagenInterna = document.querySelector('.img-interna-container');
const cerrar = document.querySelector('.close');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let indiceImg = undefined;

 

galeria.addEventListener('click',verImagen);
previous.addEventListener('click',prevImg);
next.addEventListener('click',nextImg);
cerrar.addEventListener('click',cerrarVentana);

modal.addEventListener('click',(e)=>{
    console.log(e.target)
}); 


function verImagen(e){
    if(e.target.classList.contains('pics')){
         imagenInterna.textContent = "";
         modal.style.display="flex";
         let fotoModal = document.createElement('img');
         fotoModal.src = e.target.src;
         fotoModal.classList.add('img-interna');
         fotoModal.style.width="100%";
         fotoModal.style.height="100%h";
   
         imagenInterna.appendChild(fotoModal);

        indiceImg = Array.from(fotos).indexOf(e.target);   
        comprobarBotonPrev();
        comprobarBotonNext();
    }
 
}

function cerrarVentana(e){
    modal.style.display = "none";
    imagenInterna.textContent = "";
}
function prevImg(){ 
     imagenInterna.querySelector('img').src = fotos[indiceImg -1].src;
     indiceImg --;    
     comprobarBotonPrev();
     comprobarBotonNext();
}

 function nextImg(){
     imagenInterna.querySelector('img').src = fotos[indiceImg +1].src;
     indiceImg ++;
     comprobarBotonPrev();
     comprobarBotonNext();
 }

  function comprobarBotonPrev(){
      if(indiceImg === 0) {
          previous.style.display="none";
      }else{
        previous.style.display="block";
      }
   }

   function comprobarBotonNext(){
    if(indiceImg === fotos.length -1){
        next.style.display="none";
    }else {
        next.style.display="block";
    }
   }