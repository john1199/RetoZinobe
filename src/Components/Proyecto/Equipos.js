import React, { Fragment, useState, useEffect } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import NuevoEquipo from "../Proyecto/NuevoEquipo";
import ListadoEquipos from "./ListadoEquipos";

const Equipos = () => {
  //Agregando los equipos al LocalStorage
  let equiposIniciales = JSON.parse(localStorage.getItem("equipoNuevo"));
  if (!equiposIniciales) {
    equiposIniciales = [];
  }

  //Creando el nuevo arreglo con los datos del form
  const [equipoNuevo, guardarEquipoNuevo] = useState(equiposIniciales);

  //useEfffect para realizar guardar los equipos nuevos en el localstorage
  useEffect(() => {
    if (equiposIniciales) {
      localStorage.setItem("equipoNuevo", JSON.stringify(equipoNuevo));
    } else {
      localStorage.setItem("equipoNuevo", JSON.stringify([]));
    }
  }, [equipoNuevo, equiposIniciales]);

  //Creando el nuevo equipo que viene de los datos de NuevoEquipo.js
  const CrearEquipo = (equipos) => {
    guardarEquipoNuevo([...equipoNuevo, equipos]);
    console.log(equipos);
  };

  return (
    <Fragment>
      <Header />
      <div className="contenedor-app">
        <Sidebar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 contenedor-tareas">
              <NuevoEquipo CrearEquipo={CrearEquipo} />
              <h2 className="mt-5 mb-5">Listado de usuarios</h2>
              <table className="table table-striped sombra text-center">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  {equipoNuevo.map((equipos) => (
                    <ListadoEquipos key={equipos.id} equipos={equipos} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Equipos;
