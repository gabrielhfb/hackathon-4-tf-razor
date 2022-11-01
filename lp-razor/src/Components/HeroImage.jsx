import videoProdigy from "../Assets/video/video-prodigy.mp4";

function HeroImage() {
  return (
    <section className="abertura">
      <div className="bloco-mensagem">
        <h1 className="animate glow">
          A Workstation PRO <strong>Prodigy</strong> da {"  "}
          <img
            className="animate glow delay-1"
            src="https://razor.com.br/wp-content/themes/razortheme/assets/img/logo-razor-somente-texto-branco-sem-fundo.svg"
            alt="Logo da Razor Computadores"
          />
        </h1>
        <p className="animate glow delay-2">
          Uma máquina de alta performance para atender às demandas de hoje e do
          futuro
        </p>
        <video
          className="video-razor animate glow delay-5"
          width="1280"
          height="720"
          autoPlay
          loop
          muted
        >
          <source src={videoProdigy} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <a href="#detalhes">
          <button className="animate drop delay-10">MOSTRAR MAIS</button>
        </a>
      </div>
    </section>
  );
}

export default HeroImage;
