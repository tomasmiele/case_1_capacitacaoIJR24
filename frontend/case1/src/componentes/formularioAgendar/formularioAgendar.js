import React from "react";
import "./formularioAgendar.css";
import  { Botao }  from "../botao/botao";
import { Link } from "react-router-dom";

export function FormularioAgendar({dia, setDia, horario, setHorario, terapeuta, setTerapeuta, onSubmit }){

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(dia, horario, terapeuta);
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
                placeholder="Terapeuta..."
                type="text" 
                name="terapeuta"
                onChange={ (event)=>{setTerapeuta(event.target.value)} }
                value={terapeuta}
            />
            <Link to="/consultas"><button type="submit"><Botao text="Agendar" /></button></Link>
        </form>
    );
}

export default FormularioAgendar