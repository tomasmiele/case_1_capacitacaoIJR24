import React, { useState } from "react";
import './login.css';
import  { Botao }  from "../../componentes/botao/botao";
import  { FormularioLogin }  from "../../componentes/formularioLogin/formularioLogin";
import  { Seta }  from "../../componentes/seta/seta";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    const logarUsuario = (email, senha) => {
        const data = {
            "email": email,
            "senha": senha,
        };

        axios.post("http://localhost:8000/login", data)
            .then((response) => {
            setEmail("");
            setSenha("");
            setResponseData(response.data.valido);

            console.log(response.data.valido)

            if (response.data.valido === true) {
                if (email.includes('@empresa.com')) {
                    navigate('/terapeutas');
                } else {
                    navigate('/consultas');
                }
            } else {
                navigate('/login');
            }
            });
    };

    return (
        <div className="login">
            <div className="overlap-group-wrapper">
                <Link to="/"><Seta/></Link>
                <div className="infos">
                    <div className="titulo">MenteSerena</div>
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