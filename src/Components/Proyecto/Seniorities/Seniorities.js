import axios from "axios";
import React, { Fragment, useState, useEffect, Component } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import NuevoSenioritie from "./NuevoSenioritie";
import ListadoSenorities from "./ListadoSenorities";

class Seniorities extends Component {
  state = {
    seniorities: [],
  };

  async componentDidMount() {
    this.getSeniorities();
  }
  getSeniorities= async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/admin/seniorities", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      //console.log(res.data.data[0]);
      this.setState({
        seniorities: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  /*
  //Agregando los equipos al LocalStorage
    let CrearNiveles = JSON.parse(localStorage.getItem("NivelNuevo"));
    if (!CrearNiveles) {
    CrearNiveles = [];
    }

  //Creando el nuevo arreglo con los datos del form
    const [NivelNuevo, guardarEquipoNuevo] = useState(CrearNiveles);

  //useEfffect para realizar guardar los equipos nuevos en el localstorage
    useEffect(() => {
        if (CrearNiveles) {
            localStorage.setItem("NivelNuevo", JSON.stringify(NivelNuevo));
        } else {
            localStorage.setItem("NivelNuevo", JSON.stringify([]));
        }
    }, [NivelNuevo, CrearNiveles]);

  //Creando el nuevo equipo que viene de los datos de NuevoEquipo.js
        const Crearsenoritie = (niveles) => {
        guardarEquipoNuevo([...NivelNuevo, niveles]);
        console.log(niveles);
    };*/
  render() {
    return (
      <Fragment>
        <Header />
        <div className="contenedor-app">
          <Sidebar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 contenedor-tareas">
                <NuevoSenioritie />
                <h2 className="mt-5 mb-5">Listado de Señorities</h2>
                <table className="table table-striped sombra text-center">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.seniorities.map((senioritie) => (
                      <ListadoSenorities key={senioritie._id} niveles={senioritie} />
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
}

export default Seniorities;
