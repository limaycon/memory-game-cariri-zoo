const cards = document.querySelectorAll('.cartas');

let virada = false;
let bloqueio = false;
let carta1, carta2;
tentativas = 0;
acertos = 0;

function flip() {
  if (bloqueio) return;
  if (this === carta1) return;

  this.classList.add('flip');

  if (!virada) {
    // first click
    virada = true;
    carta1 = this;
	tentativas++;
	document.getElementById("tentativas").innerHTML = tentativas;
	
    return;
  }

  // second click
  carta2 = this;

  achou();
}
