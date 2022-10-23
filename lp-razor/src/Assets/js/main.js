window.onscroll = function() {progressoScroll()};

function progressoScroll() {
  let scrollJanela = document.body.scrollTop || document.documentElement.scrollTop;
  let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progresso = (scrollJanela / altura) * 100;
  document.getElementById("barraProg").style.width = progresso + "%";
} 

/*let modal = document.getElementById("modalFormulario");
let botao = document.getElementById("botaoContato");
let span = document.getElementsByClassName("fechar")[0];

botao.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */