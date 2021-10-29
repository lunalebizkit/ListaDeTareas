import React from "react";
export const FilasTabla= props => (
    <tr key={props.tareas.nombre}>
    <td>{props.tareas.nombre}</td>
    <td><input type= "checkbox" checked={props.tareas.estado} onChange={()=> props.estadoTareas(props.tareas)} /></td>
  </tr>
)