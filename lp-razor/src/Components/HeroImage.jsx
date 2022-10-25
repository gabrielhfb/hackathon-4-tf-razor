import prodigyBanner from "../Assets/img/prodigy-banner.png";

function HeroImage() {
  return (
    <section className="abertura">
      <img src={prodigyBanner} />
      <div className="bloco-mensagem">
        <h1>
          A Workstation PRO <strong>Prodigy</strong> da{" "}
          <img
            src="https://razor.com.br/wp-content/themes/razortheme/assets/img/logo-razor-somente-texto-branco-sem-fundo.svg"
            alt="Logo da Razor Computadores"
          />
        </h1>
        <p>
          Uma máquina de alta performance para atender às demandas de hoje e do
          futuro
        </p>
        <a href="#detalhes">
          <button>Saiba mais</button>
        </a>
      </div>
    </section>
  );
}

export default HeroImage;
