const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    abrir.classList.add("visible");
})
cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
    abrir.classList.remove("visible")
})

const body = document.querySelector("#body");
const boton = document.querySelector("boton1");
const boton2 = document.querySelector("#boton2")

boton.addEventListener("click", ()=>{
    body.classList.add("noche");
    boton.classList.add("noche")
    boton2.classList.add("noche")
})
boton.addEventListener("click", () =>{
    body.classList.remove("noche")
    boton.classList.remove("noche")
    boton2.classList.remove("noche")
})