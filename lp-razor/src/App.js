import { Fragment } from "react";
import Footer from "./Components/Footer";
import HeroImage from "./Components/HeroImage";
import Informacoes from "./Components/Informacoes";
import MenuNavegacao from "./Components/MenuNavegacao";
import "./Assets/css/style.css";

function App() {
  return (
    <div className="envolve-conteudo">
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>PRO Prodigy - Razor</title>

      <link rel="shortcut icon" href="https://razor.com.br/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <MenuNavegacao />
      <HeroImage />
      <Informacoes />
      <Footer />
    </div>
  );
}

export default App;
