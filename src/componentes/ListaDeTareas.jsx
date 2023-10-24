import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import '../css/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas() {

    const [tareas, setTareas]= useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas); 
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map( tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return(
        //Utilizamos etiquetas vacias para poder escribir la estructura
        <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
            {
                //map es un metodo que lo que hace es coger las tareas una por una y hara lo que le especifique
                tareas.map((tarea) =>
                <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    elimarTarea={eliminarTarea}
                /> 
                )
            }
        </div>
        </>
    );
};

export default ListaDeTareas;