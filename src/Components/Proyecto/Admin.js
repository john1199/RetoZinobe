import React,{useState, Fragment, useEffect} from 'react';
import Sidebar from '../Layout/Sidebar';
import NuevoUsuario from './NuevoUsuario';
import ListadoUsuarios from './Listado';
import Header from '../Layout/Header';

const Proyectos = () => {
    //Agregando los usuarios al LocalStorage
    let usuariosIniciales = JSON.parse(localStorage.getItem('usuarioForm'));
    if(!usuariosIniciales){
        usuariosIniciales=[];
    }

    //arreglo de usuarios
    const[usuarioForm,NuevoUser] = useState(usuariosIniciales)

    //useEfffect para realizar guardar los usuarios nuevos en el localstorage
    useEffect(()=>{
        if(usuariosIniciales){
            localStorage.setItem('usuarioForm', JSON.stringify(usuarioForm))
        }else{
            localStorage.setItem('usuarioForm', JSON.stringify([]))
        }
    }, [usuarioForm,usuariosIniciales]);

    //funcion que toma los datos del formulario desde NuevoUsuario.js y crea el nuevo usuario
    const CrearUsuario = usuario =>{
        NuevoUser([
            ...usuarioForm,
            usuario
        ]);
    }
 
    return ( 
        <Fragment>
               <Header/>
            <div className="contenedor-app">
                <Sidebar/>

                <div className="seccion-principal container-fluid">
                    <main className="row">

                        <div className="contenedor-tareas col-md-12">
                            <NuevoUsuario
                                CrearUsuario={CrearUsuario}
                            />
                            <h2 className="mt-5 mb-5">Listado de usuarios</h2>
                                <table className="table table-striped sombra text-center">
                                    <thead>
<<<<<<< HEAD
                                        <tr>
=======
>>>>>>> 9028a685b7df3fc4c6f76854f2d83c2408084d09
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Cedula</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Equipo</th>
<<<<<<< HEAD
                                        </tr>
=======
>>>>>>> 9028a685b7df3fc4c6f76854f2d83c2408084d09
                                    </thead>
                                    <tbody>
                                        {usuarioForm.map(usuario => (
                                            <ListadoUsuarios
                                                key = {usuario.id}
                                                usuario = {usuario}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Proyectos;