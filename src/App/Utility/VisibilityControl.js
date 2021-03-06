import React from "react";

//Componente que muestra en un tabla las tareas que ya fueron hechas.
const VisibilityControl = props => {
    return(
        <div className="form-check">
            <input 
            type="checkbox"
            className="form-check-input"
            //Propiedad de si está hecha o no, por defecto es true.
            checked={props.isChecked}
            // onChange se ejecuta un evento que captura si se pincha en la tarea hecha.
            onChange={e => props.callback(e.target.checked)}  
        />
            <label htmlFor="form-check-label" className="text-left">
            Muestra las {props.description}
            </label>
        </div>
    )
}

export default VisibilityControl;