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
    const [terapeuta, setTerapeuta] = useState("");

    const agendarTerapia = (dia, horario, terapeuta) => {
        const data = {
            "dia": dia,
            "horario": horario,
            "terapeuta": terapeuta,
        };
    };

    return (
        <div className="agendar">
            <div className="overlap-group-wrapper">
                <div className="navbar">
                    <img className="logo" alt="logo" src={logo} />
                    <div className="opcoes">
                        <Link to="/"><div className="botosCamuflados">Site</div></Link>
                        <Link to="/consultas"><div className="botosCamuflados">Ver Consultas</div></Link>
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
                            terapeuta={terapeuta} setTerapeuta={setTerapeuta}
                            onSubmit={agendarTerapia}
                        />
                </div>
            </div>
        </div>
    );
};

export default Agendar;