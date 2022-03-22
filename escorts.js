const lista = document.querySelector('.lista-chicas');
const nombres = document.querySelectorAll('.galeria .card');
const search = document.querySelector('.search');
 
nombres.forEach( N => {
    const fragment = document.createDocumentFragment();
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.href = N.firstElementChild.getAttribute('href')
    link.textContent = N.lastElementChild.textContent
    li.appendChild(link)
    lista.appendChild(li)
} )
 
 
search.addEventListener('click', ()=> {
    lista.classList.toggle('hide')
})
