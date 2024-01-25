import React, { useState } from "react";
import './cadastro.css';
import  { FormularioCadastro }  from "../../componentes/formularioCadastro/formularioCadastro";
import  { Seta }  from "../../componentes/seta/seta";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export const Cadastro = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    const cadastrarUsuario = (nome, email, senha) => {
        const data = {
            "nome": nome,
            "email": email,
            "senha": senha,
        };

        axios.post("http://localhost:8000/cadastro", data)
            .then((response) => {
            setNome("");
            setEmail("");
            setSenha("");
            setResponseData(response.data.mensagem);
            if (email.trim() === '' || senha.trim() === '' || nome.trim() === '') { // buga nao sei pq
                navigate('/cadastro');
            } 
            else if (email.includes('@empresa.com') && senha.trim() === '' || nome.trim() === '') {
                navigate('/cadastro');
            } else {
                navigate('/consultas');
            }
            });
    };

    return (
        <div className="cadastro">
            <div className="overlap-group-wrapper">
                <Link to="/login"><Seta/></Link>
                <div className="infos">
                    <div className="titulo">Nome da empresa</div>
                    <div className="caixaBrancaFormulario">
                        <div className="subtitulo">Página de registro</div>
                        <FormularioCadastro 
                            nome={nome} setNome={setNome}
                            email={email} setEmail={setEmail}
                            senha={senha} setSenha={setSenha}
                            onSubmit={cadastrarUsuario}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;