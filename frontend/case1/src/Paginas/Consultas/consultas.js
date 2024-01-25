import React from "react";
import './consultas.css';
import  { Botao }  from "../../componentes/botao/botao";
import { Link } from "react-router-dom";
import login from '../../images/login-icon.png';
import logo from '../../images/logo.png'

export const Consultas = () => {
    return (
        <div className="consultas">
            <div className="overlap-group-wrapper">
                <div className="navbar">
                    <img className="logo" alt="logo" src={logo} />
                    <div className="opcoes">
                        <Link to="/" className="botosCamuflados"><div>Site</div></Link>
                        <Link to="/agendar" className="botosCamuflados"><div>Marcar Consultas</div></Link>
                    </div>
                    <img className="usurio" alt="Usurio" src={login} />
                </div>
                <div className="caixaBrancaConsultas">
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Hipnoterapia Clássica</p>
                            <p className="tituloCard">02/02/2024 - 16:00</p>
                            <p className="subtituloCard">Terapeuta: Marcela</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Hipnoterapia Ericksoniana</p>
                            <p className="tituloCard">05/02/2024 - 16:00</p>
                            <p className="subtituloCard">Terapeuta: Vitória</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Aromaterapia</p>
                            <p className="tituloCard">07/02/2024 - 18:00</p>
                            <p className="subtituloCard">Terapeuta: Giorgia</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Acupuntura</p>
                            <p className="tituloCard">09/02/2024 - 07:00</p>
                            <p className="subtituloCard">Terapeuta: Gabriela</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                    </div>
                    <Link to="/agendar"><Botao text="Agende uma nova consulta" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Consultas;