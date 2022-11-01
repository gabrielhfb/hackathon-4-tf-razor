import { Fragment } from "react";
import Footer from "./Components/Footer";
import HeroImage from "./Components/HeroImage";
import Informacoes from "./Components/Informacoes";
import MenuNavegacao from "./Components/MenuNavegacao";
import "./Assets/css/style.css";

function App() {
  return (
    <div className="envolve-conteudo">
      <MenuNavegacao />
      <HeroImage />
      <Informacoes />
      <Footer />
    </div>
  );
}

export default App;
