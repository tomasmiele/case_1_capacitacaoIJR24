import React, { useState } from "react";
import './login.css';
import  { Botao }  from "../../componentes/botao/botao";
import  { FormularioLogin }  from "../../componentes/formularioLogin/formularioLogin";
import  { Seta }  from "../../componentes/seta/seta";
import { Link } from "react-router-dom";
import axios from 'axios';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [responseData, setResponseData] = useState(null);

    const logarUsuario = (email, senha) => {
        const data = {
            "email": email,
            "senha": senha,
        };

        axios.post("http://localhost:8000/login", data)
            .then((response) => {
            setEmail("");
            setSenha("");
            setResponseData(response.data.mensagem);
            });
    };

    return (
        <div className="login">
            <div className="overlap-group-wrapper">
                <Link to="/"><Seta/></Link>
                <div className="infos">
                    <div className="titulo">Nome da empresa</div>
                    <div className="caixaBrancaFormulario">
                        <div className="subtitulo">Não possui conta?</div>
                        <FormularioLogin 
                            email={email} setEmail={setEmail}
                            senha={senha} setSenha={setSenha}
                            onSubmit={logarUsuario}
                        />
                        <div className="subtitulo">Faça seu login</div>
                        <Link to="/cadastro"><Botao text="Cadastre-se" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;