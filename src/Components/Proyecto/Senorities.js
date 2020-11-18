import React, {Fragment,useState,useEffect} from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import NuevoSenoritie from './NuevoSenoritie'
import ListadoSenorities from './ListadoSenorities';

const Senorities = () => {
     //Agregando los equipos al LocalStorage
     let CrearNiveles = JSON.parse(localStorage.getItem('NivelNuevo'));
     if(!CrearNiveles){
        CrearNiveles=[];
     }
 
     //Creando el nuevo arreglo con los datos del form
     const[NivelNuevo, guardarEquipoNuevo] = useState (CrearNiveles)
 
     //useEfffect para realizar guardar los equipos nuevos en el localstorage
     useEffect(()=>{
         if(CrearNiveles){
             localStorage.setItem('NivelNuevo', JSON.stringify(NivelNuevo))
         }else{
             localStorage.setItem('NivelNuevo', JSON.stringify([]))
         }
     }, [NivelNuevo,CrearNiveles]);
 
     //Creando el nuevo equipo que viene de los datos de NuevoEquipo.js
     const Crearsenoritie = niveles =>{
         guardarEquipoNuevo ([
             ...NivelNuevo,
             niveles
         ]);
         console.log(niveles)
     }
    return ( 
        <Fragment>
        <Header/>
        <div className="contenedor-app">
            <Sidebar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 contenedor-tareas">
                        <NuevoSenoritie
                            Crearsenoritie={Crearsenoritie}
                        />
                            <h2 className="mt-5 mb-5">Listado de Señorities</h2>
                                <table className="table table-striped sombra text-center">
                                    <thead>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripcion</th>
                                    </thead>
                                    <tbody>
                                        {NivelNuevo.map(niveles => (
                                            <ListadoSenorities
                                                key = {niveles.id}
                                                niveles = {niveles}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Senorities;