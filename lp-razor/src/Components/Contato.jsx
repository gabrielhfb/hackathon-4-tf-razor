import contatoRazor from "../Assets/img/contato-razor.JPG";

function Contato() {
  return (
    <section class="contate-nos">
      <h2 id="contato">Entre em Contato com a Razor</h2>
      <div class="contato-box">
        <img src={contatoRazor} />
        <p>
          Ficou interessado em conhecer melhor como a Razor pode ajudar a sua
          empresa, ou ficou com alguma dúvida? Preencha um breve formulário e um
          de nossos especialistas irá entrar em contato com você.
        </p>
        <button id="botaoContato">Entre em contato</button>
      </div>
    </section>
  );
}

export default Contato;
