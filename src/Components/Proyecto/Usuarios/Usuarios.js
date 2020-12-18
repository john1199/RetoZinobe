import axios from "axios";
import React, { useState, Fragment, useEffect, Component } from "react";
import Sidebar from "../../Layout/Sidebar";
import NuevoUsuario from "./NuevoUsuario";
import ListadoUsuarios from "./ListadoUsuarios";
import Header from "../../Layout/Header";

class Admin extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/admin/users",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      //console.log(res.data.data[0]);
      this.setState({
        users: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Fragment>
        <Header />
        <div className="contenedor-app">
          <Sidebar />

          <div className="seccion-principal container-fluid">
            <main className="row">
              <div className="contenedor-tareas col-md-12">
                <NuevoUsuario />
                <h2 className="mt-5 mb-5">Listado de usuarios</h2>
                <table className="table table-striped sombra text-center">
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
                    {this.state.users.map((user) => (
                      <ListadoUsuarios key={user._id} usuario={user} />
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
}

export default Admin;
