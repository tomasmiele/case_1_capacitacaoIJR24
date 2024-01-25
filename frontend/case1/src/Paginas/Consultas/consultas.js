import React, { useState } from "react";
import './consultas.css';
import  { Botao }  from "../../componentes/botao/botao";
import { Link } from "react-router-dom";
import login from '../../images/login-icon.png';

export const Consultas = () => {
    return (
        <div className="consultas">
            <div className="overlap-group-wrapper">
                <div className="navbar">
                    <div className="">LOGO</div>
                    <div className="opcoes">
                        <Link to="/"><div className="botosCamuflados">Site</div></Link>
                        <Link to="/"><div className="botosCamuflados">Marcar Consultas</div></Link>
                    </div>
                    <img className="usurio" alt="Usurio" src={login} />
                </div>
                <div className="caixaBrancaConsultas">
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Terapeuta: xxx</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Terapeuta: xxx</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Terapeuta: xxx</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                        <div className="card">
                            <p className="tituloCard">Tipo da consulta</p>
                            <p className="tituloCard">Data e Horário</p>
                            <p className="subtituloCard">Terapeuta: xxx</p>
                            <p className="subtituloCard">Endereço: Rua xxx</p>
                        </div>
                    </div>
                    <Link to="/cadastro"><Botao text="Agende uma nova consulta" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Consultas;