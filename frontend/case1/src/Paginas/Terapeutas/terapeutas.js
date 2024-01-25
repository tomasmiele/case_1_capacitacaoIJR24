import React from "react";
import './terapeutas.css';
import  { Botao }  from "../../componentes/botao/botao";
import { Link } from "react-router-dom";
import login from '../../images/login-icon.png';
import logo from '../../images/logo.png'

export const Terapeutas = () => {
    return (
        <div className="terapeutas">
            <div className="overlap-group-wrapper">
                <div className="navbar">
                    <img className="logo" alt="logo" src={logo} />
                    <div className="opcoes">
                        <Link to="/"><div className="botosCamuflados">Site</div></Link>
                    </div>
                    <img className="usurio" alt="Usurio" src={login} />
                </div>
                <div className="caixaBrancaTerapeutas">
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Hipnoterapia Clássica</p>
                            <p className="tituloCard">02/02/2024 - 16:00</p>
                            <p className="subtituloCard">Paciente: Tomas</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Hipnoterapia Clássica</p>
                            <p className="tituloCard">03/02/2024 - 16:00</p>
                            <p className="subtituloCard">Paciente: Gabriel</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Hipnoterapia Ericksoniana</p>
                            <p className="tituloCard">05/02/2024 - 07:00</p>
                            <p className="subtituloCard">Paciente: Bernardo</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Hipnoterapia Clássica</p>
                            <p className="tituloCard">09/02/2024 - 14:00</p>
                            <p className="subtituloCard">Paciente: Igor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terapeutas;