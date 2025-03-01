import React from "react";
import './Boton.css';

interface BotonProps {
    texto: string;
    esBotonDeClick: boolean;
    manejarClick: () => void;
}

const Boton: React.FC<BotonProps> = ({ texto, esBotonDeClick, manejarClick }) => {
    return (
        <button 
        className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
        onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;