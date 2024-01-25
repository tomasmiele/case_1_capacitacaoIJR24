import React from "react";
import "./formularioAgendar.css";
import  { Botao }  from "../botao/botao";
import { Link } from "react-router-dom";

export function FormularioAgendar({dia, setDia, horario, setHorario, servico, setServico, terapeuta, setTerapeuta, extra, setExtra, onSubmit}){

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(dia, horario, servico, terapeuta, extra);
    };

    return(
        <form method="post" className="formulario" onSubmit={handleSubmit}>
            <input 
                className="caixa-de-texto"
                placeholder="Dia..."
                type="text" 
                name="dia"
                onChange={ (event)=>{setDia(event.target.value)} }
                value={dia}
            />
            <input 
                className="caixa-de-texto"
                placeholder="Horário..."
                type="text" 
                name="horario"
                onChange={ (event)=>{setHorario(event.target.value)} }
                value={horario}
            />
            <input 
                className="caixa-de-texto"
                placeholder="Serviço..."
                type="text" 
                name="servico"
                onChange={ (event)=>{setServico(event.target.value)} }
                value={servico}
            />
            <input 
                className="caixa-de-texto"
                placeholder="Terapeuta..."
                type="text" 
                name="terapeuta"
                onChange={ (event)=>{setTerapeuta(event.target.value)} }
                value={terapeuta}
            />
            <input 
                className="caixa-de-texto"
                placeholder="Alguma queixa?"
                type="text" 
                name="extra"
                onChange={ (event)=>{setExtra(event.target.value)} }
                value={extra}
            />
            <Link to="/consultas"><button type="submit"><Botao text="Agendar" /></button></Link>
        </form>
    );
}

export default FormularioAgendar