import react,{useState} from 'react';
export const CrearTarea= props=>{
    const [nuevaTarea, setNuevaTarea] = useState('')
    const cargarNuevaTarea= e=> setNuevaTarea(e.target.value)
    const crearNuevaTarea= ()=> {props.enviarTarea(nuevaTarea)
    setNuevaTarea('')}
    return(

    <div>
    <input type="text" className="form-control" value={nuevaTarea} 
    onChange= {cargarNuevaTarea}/>   
    <button onClick= {crearNuevaTarea}>
    Agregar {props.descripcion}
    </button>
    </div>

)}