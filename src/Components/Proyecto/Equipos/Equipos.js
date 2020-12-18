import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import NuevoEquipo from "./NuevoEquipo";
import ListadoEquipos from "./ListadoEquipos";
import { Component } from "react";

class Equipos extends Component {
  state = {
    teams: [],
  };

  async componentDidMount() {
    this.getTeams();
  }
  getTeams = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/admin/teams", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      this.setState({
        teams: res.data.data,
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 contenedor-tareas">
                <NuevoEquipo />
                <h2 className="mt-5 mb-5">Listado de usuarios</h2>
                <table className="table table-striped sombra text-center">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.teams.map((team) => (
                      <ListadoEquipos key={team._id} equipos={team} />
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

export default Equipos;
