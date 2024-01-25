import React from "react";
import "./formularioCadastro.css";
import  { Botao }  from "../botao/botao";

export function FormularioCadastro({ nome, setNome, email, setEmail, senha, setSenha, onSubmit }){

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailEmpresa = email.includes('@empresa.com');
        onSubmit(nome, email, senha, emailEmpresa);
    };

    return(
        <form method="post" className="formulario" onSubmit={handleSubmit}>
            <input 
                className="caixa-de-texto"
                placeholder="Nome..."
                type="text" 
                name="nome"
                onChange={ (event)=>{setNome(event.target.value)} }
                value={nome}
            />
            <input 
                className="caixa-de-texto"
                placeholder="Email..."
                type="text" 
                name="email"
                onChange={ (event)=>{setEmail(event.target.value)} }
                value={email}
            />
            <input 
                className="caixa-de-texto"
                placeholder="Senha..."
                type="text" 
                name="senha"
                onChange={ (event)=>{setSenha(event.target.value)} }
                value={senha}
            />
            <button type="submit"><Botao text="Entrar" /></button>
        </form>
    );
}

export default FormularioCadastro