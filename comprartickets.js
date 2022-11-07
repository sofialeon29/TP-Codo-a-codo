function Montototal(cantidad, categoria) {
    const costoticket = 200;
    let costototal = cantidad * costoticket;

    switch (categoria) {
        case "Estudiante":
            total = total * (1 - 0.80)
            break;
        case "Trainee":
            total = total * (1 - 0.50)
            break;
        case "Junior":
            total = total * (1 - 0.15)
            break;
    }
    return total
}

let boton = document.getElementById("resumen")

let formulario =document.getElementById("formulario")

formulario.addEventListener("submit", (e)=>{
e.preventDefault();
})

boton.addEventListener("click", ()=> {
    let cantidad= document.getElementById("cantidad") .value
    let categoria= document.getElementById("categoria") .value

    let valorfinal= Montototal(cantidad,categoria)

    let mensajetotal= document.getElementById("resultado")
    mensajetotal= "Total a pagar: $" + valorfinal
})