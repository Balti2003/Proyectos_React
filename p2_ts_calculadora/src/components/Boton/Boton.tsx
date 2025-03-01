import { ReactNode } from "react";
import "./Boton.css";

interface Props {
    children: ReactNode;
    manejarClick: (valor: string) => void;
}

const Boton = ({ children, manejarClick }: Props) => {
    const esOperador = (valor: string): boolean => {
        return isNaN(Number(valor)) && valor !== "." && valor !== "=";
    };

    return (
        <button
            className={`boton-contenedor ${esOperador(String(children)) ? "operador" : ""}`.trimEnd()}
            onClick={() => manejarClick(String(children))}
        >
            {children}
        </button>
    );
};

export default Boton;
