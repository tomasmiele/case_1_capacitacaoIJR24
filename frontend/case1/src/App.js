import  { Botao }  from "./componentes/botao/botao";
import './App.css';

function App() {
  return (
    <div className="home">
      <div className="div">
        <div className="navbar">
          <img className="usurio" alt="Usurio" src="login-icon.png" />
          <div className="text-wrapper-10">Contato</div>
          <div className="text-wrapper-12">Tratamentos</div>
          <div className="text-wrapper-11">Benefícios</div>
          <div className="text-wrapper-13">O que é hipnoterapia?</div>
          <div className="text-wrapper-14">LOGO</div>
        </div>
        <div className="foto">
          <p className="text-wrapper-9">
          Explore a hipnoterapia e encontre seu caminho para o bem-estar e a harmonia interior
          </p>
          <Botao className="Botao" divClassName="bot-o-instance" text="Agende sua consulta" />
        </div>
        <div className="hipnoterapia">
          <p className="a-hipnoterapia-uma-t">
          A hipnoterapia, uma técnica segura e eficaz, apoia terapias focadas em questões emocionais. Com ampla
          aceitação global e respaldada por diversos estudos científicos, é reconhecida no Brasil pelo Ministério da
          Saúde e regulada pelos Conselhos Federais de Medicina, Psicologia e Odontologia.
          <br />
          <br />
          Esta abordagem terapêutica, empregando a hipnose clínica, é efetiva no tratamento de transtornos mentais,
          emocionais e físicos, promovendo a reestruturação de comportamentos e emoções indesejados.
          </p>
          <div className="text-wrapper-8">A HIPNOTERAPIA</div>
        </div>
        <div className="benefcios">
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
        <footer className="footer">
          <div className="text-wrapper">LOGO</div>
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
          <div className="text-wrapper-5">Nos acompanhe</div>
          <div className="text-wrapper-6">Contatos</div>
          <p className="whatsapp">
          WhatsApp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          11 95336-1445
          <br />
          Recepção&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11
          3845-4050
          <br />
          E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          contato@XXXXXX.com.br
          </p>
          <img className="image" alt="Image" src="login-icon-2.png" />
          <img className="image" alt="Image" src="login-icon-3.png" />
          <img className="image" alt="Image" src="login-icon-4.png" />
        </footer>
      </div>
    </div>
  );
}

export default App;
