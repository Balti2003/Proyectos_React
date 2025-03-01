import "./Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
 
interface TareaProps {
    id: string;
    texto: string;
    completada: boolean;
    completarTarea: (id: string) => void;
    eliminarTarea: (id: string) => void;
}

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }: TareaProps) => {
    const handleCompletar = () => completarTarea(id);
    const handleEliminar = () => eliminarTarea(id);

    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto" onClick={handleCompletar}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos" onClick={handleEliminar}>
                <AiOutlineCloseCircle className="tarea-icono" />
            </div>
        </div>
    );
};

export default Tarea;