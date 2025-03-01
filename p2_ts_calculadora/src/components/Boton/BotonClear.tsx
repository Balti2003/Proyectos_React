import { ReactNode } from "react";
import "./BotonClear.css";

interface Props {
    children: ReactNode
    manejarClick: () => void;
};

const BotonClear = ({ children, manejarClick }: Props) => {
    return (
        <div className="boton-clear" onClick={manejarClick}>
            {children}
        </div>
    )
};

export default BotonClear;