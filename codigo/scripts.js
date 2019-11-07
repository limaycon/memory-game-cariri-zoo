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
function achou() {
 if(carta1.dataset.framework === carta2.dataset.framework){
    
    travacarta();} else{
    vira();}

}

function travacarta() {
  carta1.removeEventListener('click', flip);
  carta2.removeEventListener('click', flip);
  
  	acertos++;
	document.getElementById("acertos").innerHTML = acertos;

  resetar();
}

function vira() {
  bloqueio = true;

  setTimeout(() => {
    carta1.classList.remove('flip');
    carta2.classList.remove('flip');

    resetar();
  }, 1500);
}

function resetar() {
  [virada, bloqueio]= [false, false];
  [carta1, carta2] = [null, null];
}

(function misturar() {
  cards.forEach(card => {
    let aleatorio = Math.floor(Math.random() * 12);
    card.style.order = aleatorio;
  });
})();

cards.forEach(card => card.addEventListener('click', flip));
function reset()  {
document.location.reload(true);
}
