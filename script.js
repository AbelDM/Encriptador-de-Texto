// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar() {
  let texto = document.getElementById("texto1").value.toLowerCase(); 

  if (texto.length == 0 || /^\s+|\s+$/.test(texto)) {
      alert("No ha escrito texto, por favor escríbe el texto que desea ENCRIPTAR");
    return false;
  } else {
    let textoCifrado = texto.replace(/e/gim, "enter");
    textoCifrado = textoCifrado.replace(/i/gim, "imes");
    textoCifrado = textoCifrado.replace(/a/gim, "ai");
    textoCifrado = textoCifrado.replace(/o/gim, "ober");
    textoCifrado = textoCifrado.replace(/u/gim, "ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").style.display = "none";
    document.getElementById("msj3").innerHTML = textoCifrado; //.charAt(0).toUpperCase().concat(textoCifrado.substring(1, textoCifrado.length))
    document.getElementById("texto1").innerHTML = " ";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  }
}

function desencriptar() {
  let texto = document.getElementById("texto1").value.toLowerCase();

  if (texto.length == 0 || /^\s+|\s+$/.test(texto)) {
     alert("No ha escrito texto, por favor escríbe el texto que desea DESENCRIPTAR");
    return false;
  } else {
    let textoCifrado = texto.replace(/enter/gim, "e");
    textoCifrado = textoCifrado.replace(/imes/gim, "i");
    textoCifrado = textoCifrado.replace(/ai/gim, "a");
    textoCifrado = textoCifrado.replace(/ober/gim, "o");
    textoCifrado = textoCifrado.replace(/ufat/gim, "u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").style.display = "none";
    document.getElementById("msj3").innerHTML = textoCifrado;
    document.getElementById("texto1").innerHTML = " ";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  }
}

// FUNCIÓN PARA COPIAR TEXTO
function copyToClickBoard() {
  let content = document.getElementById("msj3").innerHTML;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      alert("Se ha copiado con éxito!");
    })
    .catch((err) => {
      alert("Algo salió mal", err);
    });
}

// VALIDAR SOLO LETRAS, YA QUE SOLO PIDEN TEXTO
function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " abcdefghijklmnñopqrstuvwxyz";
  especiales = [8, 37, 39, 46];

  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) return false;
}

function limpia() {
  var val = document.getElementById("texto1").value;
  var tam = val.length;
  for (i = 0; i < tam; i++) {
    if (!isNaN(val[i])) document.getElementById("texto1").value == "";
  }
}

//BANDERA PARA EL FOOTER :)
function banderaPeru(){
  let pantalla = document.querySelector("canvas");
  let pincel = pantalla.getContext("2d");

  pincel.fillStyle = "white"; // esto es una propiedad
  pincel.fillRect(0, 0, 15, 10) // esto es una función

  pincel.fillStyle = "red"; // esto es una propiedad
  pincel.fillRect(0, 0, 5, 10) // esto es una función

  pincel.fillStyle = "red"; // esto es una propiedad
  pincel.fillRect(10, 0, 5, 10) // esto es una función
}