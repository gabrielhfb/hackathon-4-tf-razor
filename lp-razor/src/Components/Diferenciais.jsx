import { useEffect, useState } from "react";
import prodigy from "../Assets/img/Prodigy bloco 2.png";
import CarouselProdigy from "./CarouselProdigy";
import videoProcessador from "../Assets/video/processor-video.mp4";
import videoPlacaVideo from "../Assets/video/video-placadevideo.mp4";
import detalhesProdigy from "../Assets/img/Informação detalhada bloco 3.jpg"

function Diferenciais() {
  const [detailsEnabled, setDetailsEnabled] = useState(false);

  return (
    <section className="diferenciais">
      <h2 id="detalhes">
        Conheça a <strong>Prodigy</strong>
      </h2>

      <div className="container-descritivo">
        {detailsEnabled == true && (
          <div className="descricao-prodigy" id="video">
            <video 
              id="video-1"
              width="1280"
              height="720"
              autoPlay
              loop
              muted
            >
              <source src={videoPlacaVideo} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <p>
              Obtenha o máximo de performance gráfica
              com as placas de vídeo Nvidia® Geforce™ GTX
              1660S, RTX 3060, RTX 3070 e RTX 3080 ou
              com placas profissionais Nvidia® Quadro™
              P1000, P2200, RTX 4000 e RTX 5000.
            </p>
          </div>
        )}
        <div className="container-prodigy">
          <img src={prodigy} onClick={() => setDetailsEnabled((s) => !s)} />
        </div>

        {detailsEnabled == true && (
          <div className="descricao-prodigy" >
            <video 
              id="video-2"
              width="1280"
              height="720"
              autoPlay
              loop
              muted
            >
              <source src={videoProcessador} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <p>
              Alta performance de processamento de dados
              com opções de processadores com os
              processadores AMD® Ryzen™ de terceira
              geração e Intel® Core™ de décima geração,
              permitindo a instalação de até 16
              núcleos e 32 threads.
            </p>
          </div>
        )}
      </div>

      <div className="informacoes-compra">
        <div className="imagens-compra">
          <CarouselProdigy />
          <img src={detalhesProdigy}/>
        </div>
        <div className="texto-compra">
          <h3>Razor Workstation Pro Prodigy</h3>
          <p>
            Desenvolvida especialmente para a utilização em ambientes de
            trabalho pesado, a workstation Pro Prodigy é robusta, segura e
            expansível para atender a todas as demandas de hoje e do futuro. É
            uma máquina potente para escalar e crescer junto com seu negócio.
          </p>
        
          <a className="comprar-botao" target="_blank" href="https://razor.com.br/wp-content/uploads/2021/03/ficha_tecnica_prodigy.pdf">Mais detalhes</a>
          <a className="bntStyle" target="_blank" href="https://razor.com.br/produto/prodigy-xp-960g58/#comprar">Compre agora</a>
        </div>

        {/*<p>
          Ela é o modelo intermediário da Linha Pro da Razor Computadores, capaz
          de providenciar velocidade e performance na realização de tarefas como
          computação gráfica, renderização, simulações e análises robustas.
        </p>

        <p>
          Além disso, seja você um profissional de design, de mídia e
          entretenimento, do setor de contrução, ou do setor de tecnologia e
          desenvolvimento, a Linha Pro de Workstations da Razor é capaz de
          fornecer soluções personalizadas para atender às suas necessidades.
        </p>

        <h3>Processador de Alta Potência</h3>
        <p>
          A Workstation Pro Prodigy possui opções de processadores AMD® Ryzen™
          de terceira geração e Intel® Core™ de décima geração, permitindo a
          instalação de até 8 núcleos e 16 threads, garantindo excelente
          performance no processamento de dados.
        </p>

        <h3>Placa de Vídeo para Melhor Performance</h3>
        <p>
          Escolha entre as placas de vídeo Nvidia® Geforce™ GTX 1660S, RTX 3060,
          RTX 3070 e RTX 3080 e as placas profissionais Nvidia® Quadro™ P1000,
          P2200, RTX 4000 e RTX 5000, capazes de fornecer o máximo de
          performance gráfica.{" "}
        </p>

        <h3>Capacidade de Memória e Armazenamento Expansível</h3>
        <p>
          Na Workstation Pro Prodigy é possível instalar até 28TB de
          armazenamento de dados em disco rígido ou até 6 TB em armazenamento
          All Flash SSD, bem como até 128GB de memória RAM DDR4 para garantir o
          melhor desempenho para o seu sistema.
        </p>

        <h3>Desempenho testado e certificado</h3>
        <p>
          Os modelos da Linha Pro da Razor, entre eles a Workstation Prodigy,
          foram submetidos a mais de 1000 horas de testes, com qualidade
          aprovada para uso em ambientes profissionais altamente exigentes.{" "}
        </p>*/}
      </div>
    </section>
  );
}

export default Diferenciais;
