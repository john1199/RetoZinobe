import React from "react";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import { Component } from "react";
import axios from "axios";
class Progreso extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/admin/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      this.setState({
        users: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const employes = this.state.users.filter((user) => user.isAdmin == false);
    var i = 0;
    function count() {
      i += 1;
      return i;
    }
    return (
      <>
        <Header />
        <div className="contenedor-app">
          <Sidebar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 contenedor-tareas">
                <h2 className="mt-5 mb-5">
                  Puntaje acumulado por participante
                </h2>
                <table className="table table-striped sombra text-center">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Participante</th>
                      <th scope="col">Equipo</th>
                      <th scope="col">Nivel</th>
                      <th scope="col">Total Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employes.map((user) => (
                      <tr key={user._id}>
                        <td>{count()}</td>
                        <td>{user.name}</td>
                        <td>{user.team}</td>
                        <td>{user.name}</td>
                        <td>{user.points ? user.points.teamPoints : null}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Progreso;
