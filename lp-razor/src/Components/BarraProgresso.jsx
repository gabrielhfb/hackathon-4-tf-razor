function BarraProgresso() {
  return <div class="barra-progresso" id="barraProg"></div>;
}

window.onscroll = () => {
  let scrollJanela =
    document.body.scrollTop || document.documentElement.scrollTop;
  let altura =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progresso = (scrollJanela / altura) * 100;
  document.getElementById("barraProg").style.width = progresso + "%";
};

export default BarraProgresso;
