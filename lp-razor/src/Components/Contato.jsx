import contatoRazor from "../Assets/img/contato-razor.JPG";

function Contato() {
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
        <button id="botaoContato">Entre em contato</button>
      </div>
      <form>
        <div class="contato-info" style={{clear: "both"}}>
          <label for="nome">Nome</label>
          <input type="text" id="nome" class="input-padrao" required />

          <label for="sobrenome">Sobrenome</label>
          <input type="text" id="sobrenome" class="input-padrao" required />

          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            class="input-padrao"
            required
            placeholder="seuemail@dominio.com"
          />

          <label for="telefone">Telefone ou WhatsApp</label>
          <input
            type="tel"
            id="telefone"
            class="input-padrao"
            required
            placeholder="(XX) XXXXX-XXXX"
          />

          <label for="mensagem">Mensagem</label>
          <textarea
            cols="70"
            rows="10"
            id="mensagem"
            class="input-padrao"
          ></textarea>
        </div>
        <fieldset>
          <legend>Qual sua área de atuação?</legend>

          <label for="radio-design">
            <input type="radio" name="area" value="email" id="radio-design" />
            Design
          </label>

          <label for="radio-midia">
            <input type="radio" name="area" value="midia" id="radio-midia" />
            Mídia e entretenimento
          </label>

          <label for="radio-construcao">
            <input
              type="radio"
              name="area"
              value="construcao"
              id="radio-construcao"
              checked
            />
            Arquitetura, engenharia civil e topografia
          </label>

          <label for="radio-ti">
            <input type="radio" name="area" value="ti" id="radio-ti" checked />
            Tecnologia e Desenvolvimento
          </label>

          <label for="radio-outro">
            <input
              type="radio"
              name="area"
              value="outro"
              id="radio-outro"
              checked
            />
            Outra (especifique na mensagem)
          </label>
        </fieldset>
        <fieldset>
          <legend>O que te motivou a buscar uma nova máquina?</legend>

          <label for="radio-design">
            <input
              type="radio"
              name="motivacao"
              value="demanda"
              id="radio-demanda"
            />
            Demanda: preciso de mais máquinas
          </label>

          <label for="radio-atualizacao">
            <input
              type="radio"
              name="motivacao"
              value="atualizacao"
              id="radio-atualizacao"
            />
            Atualização: minha máquina atual não tem o desempenho necessário
          </label>

          <label for="radio-urgencia">
            <input
              type="radio"
              name="motivacao"
              value="urgencia"
              id="radio-urgencia"
              checked
            />
            Urgência: preciso substituir uma máquina que estragou
          </label>

          <label for="radio-especifica">
            <input
              type="radio"
              name="motivacao"
              value="especifica"
              id="radio-especifica"
              checked
            />
            Preciso de uma configuração específica
          </label>

          <label for="radio-pesquisa">
            <input
              type="radio"
              name="motivacao"
              value="pesquisa"
              id="radio-pesquisa"
              checked
            />
            Estou apenas pesquisando valores
          </label>
        </fieldset>
        <input type="submit" value="Enviar formulário" class="enviar" />
      </form>
    </section>
  );
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

export default Contato;
