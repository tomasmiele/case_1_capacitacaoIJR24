import React from "react";
import './terapeutas.css';
import  { Botao }  from "../../componentes/botao/botao";
import { Link } from "react-router-dom";
import login from '../../images/login-icon.png';

export const Terapeutas = () => {
    return (
        <div className="terapeutas">
            <div className="overlap-group-wrapper">
                <div className="navbar">
                    <div className="">LOGO</div>
                    <div className="opcoes">
                        <Link to="/"><div className="botosCamuflados">Site</div></Link>
                    </div>
                    <img className="usurio" alt="Usurio" src={login} />
                </div>
                <div className="caixaBrancaTerapeutas">
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Paciente: xxx</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Paciente: xxx</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Paciente: xxx</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Paciente: xxx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terapeutas;