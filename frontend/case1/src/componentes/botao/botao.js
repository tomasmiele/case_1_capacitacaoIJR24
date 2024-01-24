import PropTypes from "prop-types";
import React from "react";
import "./botao.css";

export const Botao = ({ className, divClassName, text = "Texto" }) => {
    return (
        <div className={`bot-o ${className}`}>
            <div className={`texto ${divClassName}`}>{text}</div>
        </div>
    );
};

Botao.propTypes = {
    text: PropTypes.string,
};