var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//var cambio = 0;
var secondi = 0;
//var audioCampo = new Audio('campo.mp3');
//var suona = new Audio('success.wav');
//var audioTogli = new Audio('togli.mp3');

function myfunc(id,i,ind) {
  if (document.getElementById("buttonRisorsa").className == "zero")
    {
    document.getElementById(id).className = "trasparente";
    tess[ind]=0;
    document.getElementById(id).innerHTML = tess[ind];
    //audioTogli.play();
    }
  else if (document.getElementById("buttonRisorsa").className == "somma")
    {
    document.getElementById(id).className = "risorsa";
    tess[ind]+=5;
    document.getElementById(id).innerHTML = tess[ind];
    //suona.play();
    }
  else if (document.getElementById("buttonRisorsa").className == "sottrai")
    {
    document.getElementById(id).className = "risorsa";
    tess[ind]-=1;
    document.getElementById(id).innerHTML = tess[ind];
    //suona.play();
    }
}

function btAggRisorsa(div) {
  var className = div.getAttribute("class");
  if (className=="zero") {
    div.className = "somma";
    }
  else if (className=="somma") {
    div.className = "sottrai";
    }
  else if (className=="sottrai") {
    div.className = "zero";
    }
}
