import Contato from "./Contato";
import Diferenciais from "./Diferenciais";
import Equipe from "./Equipe";

function Informacoes() {
  return (
    <div className="informacoes">
      <Diferenciais />
      <Contato />
      <Equipe />
    </div>
  );
}

export default Informacoes;