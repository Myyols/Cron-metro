const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");
const tempos = [
  new Date("2024-10-11T00:00:00"),
  new Date("2024-12-05T00:00:00"),
  new Date("2024-09-30T00:00:00"),
  new Date("2024-08-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
  for (let i = 0; i < tempos.length; i++) {
    let [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);
    document.getElementById(`dias${i}`).textContent = dias;
    document.getElementById(`horas${i}`).textContent = horas;
    document.getElementById(`min${i}`).textContent = minutos;
    document.getElementById(`seg${i}`).textContent = segundos;
  }
}

function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
