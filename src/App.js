import React, { useState, useEffect } from 'react';
import { FilasTabla } from './component/FilasTabla';
import {TareaTitulo} from './component/TareaTitulo';
import {CrearTarea} from './component/CrearTarea';
import { VerControl } from './component/VerControl';
import './App.css';
function App() {
  const [usuario, setUsuario]= useState('Ale');
  const [visible, setVisible]= useState(true)
  const [tareas, setTareas]= useState([
    {nombre: 'Tareas uno', estado: false},
    {nombre: 'Tareas dos',  estado: false},
    {nombre: 'Tareas tres', estado: true},
  ])
  const estadoTarea= tarea => setTareas(tareas.map(tar=> (tar.nombre === tarea.nombre ? {...tar, estado: !tar.estado} : tar)))
  useState( ()=>{
    let datos= localStorage.getItem('tareas');
    if (datos != null) {
      setTareas(JSON.parse(datos));
    }else {
      setUsuario('Usuario de Ejemplos')
      setTareas([  {nombre: 'Tareas ejemplo', estado: false},
      {nombre: 'Tareas dos  ejemplo',  estado: false},
      {nombre: 'Tareas tres  ejemplo', estado: true},])
      setVisible(true)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])
  const filaDeTabla= (valorEstado)=> (
     tareas
     .filter(tarea => tarea.estado === valorEstado)
     .map(tarea => (
    <FilasTabla tareas={tarea} key= {tarea.nombre} estadoTareas= {estadoTarea}/>
    )   
  ))
  const agregarTareaNueva= nombreTarea=> {
    if(!tareas.find( tarea => tarea.nombre === nombreTarea)) {
      setTareas([...tareas, {nombre: nombreTarea, estado: false}])
    }
  }

  return (
    <>
    <TareaTitulo usuario= {usuario} cantidadTarea= {tareas.filter(tarea=> !tarea.estado ).length} />
    <CrearTarea enviarTarea= {agregarTareaNueva} />
    <table>
      <thead>
        <tr>
        <th>Descripcion</th>
        <th>Estado</th>
        </tr>
      </thead>
      <tbody>        
        {filaDeTabla(false)}        
      </tbody>
    </table>
    <div><VerControl 
       esVisible={visible} 
       descripcion={"Tarea Completa"} 
       valor={check=>setVisible(check)}/>
    </div>
    {visible && (
      <table>
        <thead>
          <th>
          </th>
        </thead>
        <tbody>{filaDeTabla(true)}</tbody>
      </table>
    )}
    </>
  );
}

export default App;
