import React from "react";
import './home.css';
import  { Botao }  from "../../componentes/botao/botao";
import instagramImg from '../../images/instagram.png';
import facebookImg from '../../images/facebook.png';
import linkedinImg from '../../images/linkedin.png';
import login from '../../images/login-icon.png';
import logo from '../../images/logo.png'
import cerebro from '../../images/cerebro.png'
import beneficios from '../../images/beneficios.png'
import hipnose from '../../images/hipnose.png'
import hipnoterapiaE from '../../images/hipnoterapiaE.png'
import aromaterapia from '../../images/aromaterapia.png'
import acupuntura from '../../images/acupuntura.png'
import { Link } from "react-router-dom";

function Home() {
    return(
    <div className="home">
      <div className="div">
        <div className="navbar">
          <img className="logo" alt="logo" src={logo} />
            <div className="opcoes">
              <div className="botoes">Quem somos nós</div>
              <div className="botoes">o que é hipnoterapia</div>
              <div className="botoes">Benefícios</div>
              <div className="botoes">Como funciona?</div>
              <div className="botoes">Tratamentos</div>
            </div>
            <Link to="/login"><img className="usurio" alt="Usurio" src={login} /></Link>
        </div>
        <div className="foto">
          <p className="text-wrapper-9">
          Explore a hipnoterapia e encontre seu caminho para o bem-estar e a harmonia interior em São Paulo
          </p>
          <Link to="/login"><Botao className="boto" divClassName="bot-o-instance" text="Agende sua consulta" /></Link>
        </div>
        <div className="nos">
         <p className="inicialmente">
         Na nossa clínica, fundada por Marcela e Vitória, unimos a Hipnoterapia Clássica e Ericksoniana, Aromaterapia e Acupuntura, criando um oásis de cura e bem-estar. Nossa abordagem holística personalizada visa restaurar a harmonia do corpo e da mente, oferecendo um caminho alternativo para a saúde e equilíbrio emocional. Venha descobrir a transformação que as terapias alternativas podem trazer à sua vida.
          </p>
          <div className="text-wrapper-7">Quem somos nós</div>
        </div>
        <div className="hipnoterapia">
          <img className="cerebro" alt="cerebro" src={cerebro} />
          <p className="a-hipnoterapia-uma-t">
          A hipnoterapia, uma técnica segura e eficaz, apoia terapias focadas em questões emocionais. Com ampla
          aceitação global e respaldada por diversos estudos científicos, é reconhecida no Brasil pelo Ministério da
          Saúde e regulada pelos Conselhos Federais de Medicina, Psicologia e Odontologia.
          <br />
          <br />
          Esta abordagem terapêutica, empregando a hipnose clínica, é efetiva no tratamento de transtornos mentais,
          emocionais e físicos, promovendo a reestruturação de comportamentos e emoções indesejados.
          </p>
          <div className="text-wrapper-8">A Hipnoterapia</div>
        </div>
        <div className="benefcios">
          <img className="beneficiosFoto" alt="beneficiosFoto" src={beneficios} />
          <p className="p">
          A hipnoterapia oferece vários benefícios, incluindo redução de estresse e ansiedade, melhoria do sono,
          alívio de dores, controle de hábitos prejudiciais, aumento da autoestima, superação de traumas,
          desenvolvimento de habilidades de enfrentamento, relaxamento profundo e promoção do autoconhecimento, entres
          outros.
          </p>
          <p className="text-wrapper-8">Quais são os seus benefícios?</p>
        </div>
        <div className="tratamentos">
          <p className="inicialmente">
          Inicialmente realizamos uma anamnésia em nossos pacientes para entendermos qual a origem dos problemas do
          cliente e qual será o método mais adequado para tratar sua dor. <br />
          <br />
          Com isso feito, ele iniciará seu tratamento personalizado com o intuito de amenizar seus problemas até com
          que eles se curem.
          </p>
          <div className="text-wrapper-7">Como funciona nossos tratamentos?</div>
        </div>
        <div className="quantroTratamentos">
          <div className="tituloTratamentos">Tratamentos</div>
          <div className="cards">
            <div className="card">
              <img className="" alt="hipnose" src={hipnose} />
              <p className="cardTitulo">Hipnoterapia Clássica</p>
              <p>Uma abordagem transformadora que utiliza a hipnose para acessar o subconsciente, promovendo mudanças profundas e duradouras em comportamentos e emoções.</p>
            </div>
            <div className="card">
              <img className="" alt="hipnoterapiaE" src={hipnoterapiaE} />
              <p className="cardTitulo">Hipnoterapia Ericksoniana</p>
              <p>Método terapêutico suave que emprega metáforas e sugestões indiretas para estimular a mente inconsciente a encontrar soluções e superar desafios pessoais.</p>
            </div>
            <div className="card">
              <img className="" alt="aromaterapia" src={aromaterapia} />
              <p className="cardTitulo">Aromaterapia</p>
              <p>Prática de usar óleos essenciais extraídos de plantas para melhorar o bem-estar físico e emocional, promovendo relaxamento e equilíbrio.</p>
            </div>
            <div className="card">
              <img className="" alt="acupuntura" src={acupuntura} />
              <p className="cardTitulo">Acupuntura</p>
              <p>Técnica milenar chinesa que envolve a inserção de agulhas finas em pontos específicos do corpo para aliviar dor, estresse e restaurar o equilíbrio energético.</p>
            </div>
          </div>
        </div>
        <div className="footer">
            <div className="opcoes">
            <p className="desaja-saber-mais-ou">
          <span className="span">
          Desaja saber mais ou solucionar seus questionamentos?
          <br />
          </span>
          <span className="text-wrapper-2">Envie sua mensagem</span>
          </p>
          <div className="frame">
          <div className="text-wrapper-3">Digite seu e-mail</div>
          </div>
          <div className="div-wrapper">
          <div className="text-wrapper-4">Conteúdo...</div>
          </div>
          <div className="social-media-section">
            <div className="text-wrapper-5">Nos acompanhe</div>
            <div className="image-container">
              <img className="image-rede-social" alt="Instagram" src={instagramImg} />
              <img className="image-rede-social" alt="Facebook" src={facebookImg} />
              <img className="image-rede-social" alt="LinkedIn" src={linkedinImg} />
            </div>
          </div>
          <div className="text-wrapper-6">Contatos</div>
          <p className="whatsapp">
          WhatsApp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          11 95336-1445
          <br />
          Recepção&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          3845-4050
          <br />
          E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          contato@menteserena.com.br
          </p>
            </div>
        </div>
        <div className="divLogo">
          <img className="logo2" alt="logo" src={logo} />
        </div>
      </div>
    </div>
    );
}


export default Home;