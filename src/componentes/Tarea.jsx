import React from "react";
import '../css/Tarea.css';
import { AiFillDelete } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, elimarTarea}){
    return(
        //Si Completada es verdadero entonces asignamos 'tarea-contenedor completada' y si esta en falso
        // le asignamos 'tarea-contenedor'
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-texto' onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos' onClick={() => elimarTarea(id)}>
                <AiFillDelete className='tarea-icono'/>
            </div>
        </div>
    );
}
export default Tarea;