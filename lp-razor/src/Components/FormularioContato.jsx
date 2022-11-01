import { useState } from 'react';

function FormularioContato({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ nome, sobrenome, email, telefone, mensagem});
    }}>
      <h2>NÃO ENCONTROU O QUE PROCURA?</h2>
      <h4>Nós te ajudamos</h4>
      <div className="contato-info" style={{ clear: "both" }}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          className="input-padrao"
          required
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />

        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          type="text"
          id="sobrenome"
          className="input-padrao"
          required
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          className="input-padrao"
          required
          placeholder="seuemail@dominio.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="telefone">Telefone ou WhatsApp</label>
        <input
          type="tel"
          id="telefone"
          className="input-padrao"
          required
          placeholder="(XX) XXXXX-XXXX"
          value={telefone}
          onChange={(event) => {
            setTelefone(event.target.value);
          }}
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          cols="70"
          rows="10"
          id="mensagem"
          className="mensagem-texto"
          placeholder="Como podemos ajudar?"
          value={mensagem}
          onChange={(event) => {
            setMensagem(event.target.value);
          }}
        />
      </div>
      <fieldset>
        <legend>Qual sua área de atuação?</legend>

        <label htmlFor="radio-design">
          <input type="radio" name="area" value="email" id="radio-design" />
          Design
        </label>

        <label htmlFor="radio-midia">
          <input type="radio" name="area" value="midia" id="radio-midia" />
          Mídia e entretenimento
        </label>

        <label htmlFor="radio-construcao">
          <input
            type="radio"
            name="area"
            value="construcao"
            id="radio-construcao"
            defaultChecked
          />
          Arquitetura, engenharia civil e topografia
        </label>

        <label htmlFor="radio-ti">
          <input type="radio" name="area" value="ti" id="radio-ti" defaultChecked />
          Tecnologia e Desenvolvimento
        </label>

        <label htmlFor="radio-outro">
          <input
            type="radio"
            name="area"
            value="outro"
            id="radio-outro"
            defaultChecked
          />
          Outra (especifique na mensagem)
        </label>
      </fieldset>
      <fieldset>
        <legend>O que te motivou a buscar uma nova máquina?</legend>

        <label htmlFor="radio-design">
          <input
            type="radio"
            name="motivacao"
            value="demanda"
            id="radio-demanda"
          />
          Demanda: preciso de mais máquinas
        </label>

        <label htmlFor="radio-atualizacao">
          <input
            type="radio"
            name="motivacao"
            value="atualizacao"
            id="radio-atualizacao"
          />
          Atualização: minha máquina atual não tem o desempenho necessário
        </label>

        <label htmlFor="radio-urgencia">
          <input
            type="radio"
            name="motivacao"
            value="urgencia"
            id="radio-urgencia"
            defaultChecked
          />
          Urgência: preciso substituir uma máquina que estragou
        </label>

        <label htmlFor="radio-especifica">
          <input
            type="radio"
            name="motivacao"
            value="especifica"
            id="radio-especifica"
            defaultChecked
          />
          Preciso de uma configuração específica
        </label>

        <label htmlFor="radio-pesquisa">
          <input
            type="radio"
            name="motivacao"
            value="pesquisa"
            id="radio-pesquisa"
            defaultChecked
          />
          Estou apenas pesquisando valores
        </label>
      </fieldset>
      <input type="submit" value="Enviar formulário" className="enviar" />
    </form>
  );
}

/*
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        

          /* let tmpNome = event.target.value;
          if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substring(0, 3);
          }
          setNome(tmpNome); 
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

            <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />*/

export default FormularioContato;
