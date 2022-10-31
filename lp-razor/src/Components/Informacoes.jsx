import Contato from "./Contato";
import Diferenciais from "./Diferenciais";
import Equipe from "./Equipe";

function Informacoes() {
  return (
    <div className="informacoes animate pop delay-10">
      <Diferenciais />
      <Contato />
      <Equipe />
    </div>
  );
}

export default Informacoes;
