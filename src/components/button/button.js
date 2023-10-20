import React from "react";
import styled from "styled-components";

const Button = ({showFullList, toggleList}) => {
    return (
        <Botao onClick={toggleList}><h2>{showFullList? "Mostrar menos" : "Mostrar mais"}</h2></Botao>
    );
};

const Botao = styled.button`
    margin:8px 0px 20px 0px;
    color:#ffffff;
    width:200px;
    background-color:#008000;
    border-radius:10px;
    border:none;
    &:hover {
        background-color:#800080;
        transform: scale(1.05);
        transition: background-color 0.3s, transform 0.3s;
        cursor:pointer
    }
`
export {Button}