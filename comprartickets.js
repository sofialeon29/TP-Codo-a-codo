
function Montototal(cantidad, categoria) {
    const costoticket = 200;
    let total = cantidad * costoticket;

    switch (categoria) {
        case "Estudiante":
            total = total * (1 - 0.80);
            break;
        case "Trainee":
            total = total * (1 - 0.50);
            break;
        case "Junior":
            total = total * (1 - 0.15);
            break;
    }
    return total;
}


document.getElementById("cantidad").addEventListener("change", myFunction);
document.getElementById("categoria").addEventListener("change", myFunction);

let resultado = document.getElementById("resultado");

function myFunction() {
  let cantidad = document.getElementById("cantidad").value;
  let categoria = document.getElementById("categoria").value;
  

  if ( (cantidad != "") && (categoria != "") ) {
    total = Montototal(cantidad, categoria);
    resultado.innerHTML = "Total a Pagar: $" + total;
  }

}



