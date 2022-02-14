// ***********Fecha********************
const year = document.querySelector('#year')
const currentYear = new Date().getFullYear()
year.textContent = currentYear ;


// ***********Form*********************

const form = document.querySelector('.form');
const name = document.querySelector('#name');
const tel = document.querySelector('#tel');
const mail = document.querySelector('#mail');
const textarea = document.querySelector('#textarea');
const nWarning = document.querySelector('.nameWarning');
const tWarning = document.querySelector('.telWarning');
const mWarning = document.querySelector('.mailWarning');
const aWarning = document.querySelector('.areaWarning');
const spinner = document.querySelector('.sk-fading-circle');


form.addEventListener('submit', formValidation);

function formValidation(e){
    e.preventDefault();
    if( name.value.trim() === ""){
        nWarning.style.display="block"
        setTimeout(() => {
            nWarning.style.display="none"
        }, 3000);

    }else if ( isNaN(tel.value) == true || tel.value.trim() === "" ){
        tWarning.style.display="block"
        setTimeout(() => {
            tWarning.style.display="none"
        }, 3000);

    }else if ( mail.value.trim() === ""){
        mWarning.style.display="block"
        setTimeout(() => {
            mWarning.style.display="none"
        }, 3000);
    }else if ( textarea.value.trim() === "" || textarea.value.length < 10){
        aWarning.style.display="block"
        setTimeout(() => {
            aWarning.style.display="none"
        }, 3000);
    }else{
        spinner.style.display = "block";
        setTimeout(() => {
        spinner.style.display = "none";
        form.submit() 
        }, 3500);
    }
}
