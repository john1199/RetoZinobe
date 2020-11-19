import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import NuevoUsuario from "./NuevoUsuario";
import ListadoUsuarios from "./Listado";

const Proyectos = () => {
  //arreglo de usuarios
  const [usuarioForm, NuevoUser] = useState([]);

  //funcion que toma los datos del formulario desde NuevoUsuario.js y crea el nuevo usuario
  const CrearUsuario = (usuario) => {
    NuevoUser([...usuarioForm, usuario]);
  };

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal container-fluid">
        <main className="row">
          <div className="contenedor-tareas col-md-4">
            <NuevoUsuario CrearUsuario={CrearUsuario} />
          </div>

          <div className="contenedor-tareas col-md-8">
            <h2 className="mt-5">Listado de usuarios</h2>
            <table className="table table-sthiped">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cedula</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Equipo</th>
                </tr>
              </thead>
              <tbody>
                {usuarioForm.map((usuario) => (
                  <ListadoUsuarios key={usuario.id} usuario={usuario} />
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
