import contatoRazor from "../Assets/img/contato-razor.JPG";
import FormularioContato from "./FormularioContato";

function Contato() {
  function aoEnviarForm(dados) {
    console.log(dados);
  }
  return (
    <section className="contate-nos">
      <h2 id="contato">Entre em Contato com a Razor</h2>
      <div className="contato-box">
        <img src={contatoRazor} />
        <p>
          Ficou interessado em conhecer melhor como a Razor pode ajudar a sua
          empresa, ou ficou com alguma dúvida? Preencha um breve formulário e um
          de nossos especialistas irá entrar em contato com você.
        </p>
      </div>
      <FormularioContato aoEnviar={aoEnviarForm}/>
    </section>
  );
}

export default Contato;
