import { useState } from "react";
import "./TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

interface TareaFormularioProps {
    onSubmit: (tarea: { id: string; texto: string; completada: boolean }) => void;
}

const TareaFormulario: React.FC<TareaFormularioProps> = ({ onSubmit }) => {
    const [input, setInput] = useState("");

    const manejarCambio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const manejarEnvio = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!input.trim()) { alert("Agrega un nombre a la tarea"); } //Evitar agregar tareas vacias

        const tareaNueva = {
            id: uuidv4(), //Crea un id aleatorio
            texto: input.trim(),
            completada: false,
        };

        onSubmit(tareaNueva);
        setInput("");
    };

    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input 
                type="text" 
                className="tarea-input" 
                placeholder="Escribe una tarea" 
                name="texto"
                onChange={manejarCambio}
                value={input}
            />
            <button className="agregar-tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
};

export default TareaFormulario;
