
const boton = document.querySelector(".nav--toggle-icon");
const menu = document.querySelector(".nav--bar-items");

boton.addEventListener("click",()=>{

    menu.classList.toggle("nav--bar-items-show");

})



const nosotros = document.querySelector(".us");


nosotros.addEventListener("click",()=>{

    menu.classList.remove("nav--bar-items-show")

})

const contacto = document.querySelector(".contact")


contacto.addEventListener("click",()=>{

    menu.classList.remove("nav--bar-items-show")

})


