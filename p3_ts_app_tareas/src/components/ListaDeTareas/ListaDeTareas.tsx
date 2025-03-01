import { useEffect, useState } from "react";
import TareaFormulario from "../Formulario/TareaFormulario";
import "./ListaDeTareas.css";
import Tarea from "../Tarea/Tarea";

interface TareaInterface {
    id: string;
    texto: string;
    completada: boolean;
}

const ListaDeTareas = () => {
        //Cargar las tareas desde localStorage al iniciar la página
        const [tareas, setTareas] = useState<TareaInterface[]>(() => {
            const tareasGuardadas = localStorage.getItem("tareas");
            return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
        });
    
        //Guardar las tareas en localStorage cada vez que cambian
        useEffect(() => {
            localStorage.setItem("tareas", JSON.stringify(tareas)); 
        }, [tareas]);

    const agregarTarea = (tarea: TareaInterface) => {
        if(tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            setTareas([tarea, ...tareas]);
        }
    };

    const eliminarTarea = (id: string) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };
    
    const completarTarea = (id: string) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) => 
                        <Tarea
                            key={tarea.id} 
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
};

export default ListaDeTareas;