import React from 'react'

export const TareaTitulo = props=>{
    return(
        <>
        <h4>Lista de Tareas de  {props.usuario} son {props.cantidadTarea}</h4>
        </>
    )
}