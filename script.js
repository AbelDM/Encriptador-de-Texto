// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar() {
  let texto = document.getElementById("texto1").value.toLowerCase();

  let textoCifrado = texto.replace(/e/gim, "enter");
  textoCifrado = textoCifrado.replace(/i/gim, "imes");
  textoCifrado = textoCifrado.replace(/a/gim, "ai");
  textoCifrado = textoCifrado.replace(/o/gim, "ober");
  textoCifrado = textoCifrado.replace(/u/gim, "ufat");

  document.getElementById("muneco").style.display = "none";
  document.getElementById("msj1").style.display = "none";
  document.getElementById("msj2").innerHTML = textoCifrado;
  document.getElementById("texto1").innerHTML = " ";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

}

function desencriptar() {
  let texto = document.getElementById("texto1").value.toLowerCase();

  let textoCifrado = texto.replace(/enter/gim, "e");
  textoCifrado = textoCifrado.replace(/imes/gim, "i");
  textoCifrado = textoCifrado.replace(/ai/gim, "a");
  textoCifrado = textoCifrado.replace(/ober/gim, "o");
  textoCifrado = textoCifrado.replace(/ufat/gim, "u");

  document.getElementById("muneco").style.display = "none";
  document.getElementById("msj1").style.display = "none";
  document.getElementById("msj2").innerHTML = textoCifrado;
  document.getElementById("texto1").innerHTML = " ";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  
}

// function copiar() {
//   let contenido = document.getElementById('msj2');
//   contenido.select();
//   document.execCommand("copy");
//   alert("Se ha copiado con éxito!");
// }

function copyToClickBoard(){
    var content = document.getElementById('copiar').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("Se ha copiado con éxito!")
    })
        .catch(err => {
        alert('Algo salió mal', err);
    })
 
}