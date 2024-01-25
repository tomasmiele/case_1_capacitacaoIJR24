import React, { useState } from "react";
import './agendar.css';
import logo from '../../images/logo.png'
import  { Seta }  from "../../componentes/seta/seta";
import { Link } from "react-router-dom";
import login from '../../images/login-icon.png';
import  { FormularioAgendar }  from "../../componentes/formularioAgendar/formularioAgendar";

export const Agendar = () => {

    const [dia, setDia] = useState("");
    const [horario, setHorario] = useState("");
    const [servico, setServico] = useState("");
    const [terapeuta, setTerapeuta] = useState("");
    const [extra, setExtra] = useState("");

    const agendarTerapia = (dia, horario, servico, terapeuta, extra) => {
        const data = {
            "dia": dia,
            "horario": horario,
            "servico": servico,
            "terapeuta": terapeuta,
            "extra": extra,
        };
    };

    return (
        <div className="agendar">
            <div className="overlap-group-wrapper">
                <div className="navbar">
                    <img className="logo" alt="logo" src={logo} />
                    <div className="opcoes">
                        <Link to="/" className="botosCamuflados"><div>Site</div></Link>
                        <Link to="/consultas" className="botosCamuflados"><div>Ver Consultas</div></Link>
                    </div>
                    <img className="usurio" alt="Usurio" src={login} />
                </div>
                <div className="caixaBrancaAgendar">
                    <div className="voltar">
                        <Link to="/consultas"><Seta/></Link>
                    </div>
                    <div className="tituloCard">Agende sua consulta!</div>
                    <FormularioAgendar 
                            dia={dia} setDia={setDia}
                            horario={horario} setHorario={setHorario}
                            servico={servico} setServico={setServico}
                            terapeuta={terapeuta} setTerapeuta={setTerapeuta}
                            extra={extra} setExtra={setExtra}
                            onSubmit={agendarTerapia}
                        />
                </div>
            </div>
        </div>
    );
};

export default Agendar;