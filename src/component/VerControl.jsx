import React from "react";
export const VerControl= props=> {

    return(
        <div>
            <input type="checkbox" checked= {props.esVisible} onChange={e=> props.valor(e.target.checked)}/>
            <label htmlFor="input">Ver Tareas</label>
        </div>
    )
}