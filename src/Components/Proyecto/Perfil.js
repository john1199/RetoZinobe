import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../Layout/Header";
import Cookies from "js-cookie";

const Perfil = ({ learn, contribute, teamwork }) => {
  const fetchImage = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/663"
    );
    const data = await response.json();
    console.log(data.image);
    return data.image;
  };
  const imgPerfil = fetchImage();
  const username = Cookies.get("name");
  const points = Cookies.get("points");
  const team = Cookies.get("team");
  const email = Cookies.get("email");

  return (
    <Fragment>
      {console.log(points.teamPoints)}
      <Header />
      <div className="contenedor-app">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="usuario">
                <div className="text-center">
                  <img className="img"
                    src="https://rickandmortyapi.com/api/character/avatar/663.jpeg"
                    alt="rickapi"
                  />
                  <h2 className="mt-4">{username}</h2>
                </div>
                <div>
                  {/*<p className="text-center mt-4 ">Nivel:10</p>*/}
                  <h3 className="text-center mt-4 ">
                    Puntos: {points ? points.teamPoints : 0}
                  </h3>
                  <h3 className="text-center mt-4 ">{team}</h3>
                </div>
              </div>

              <h1>MI PERFIL</h1>
              <div id="accordion">
                <div className="card mt-5">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0 text-center">
                      <button
                        className="btn btn-link titulo-objetivos"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Mis Datos
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show mb-5"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          Nombre:
                          <h4 className="text-center">{username}</h4>
                        </li>
                        <li>
                          Correo Electronico:
                          <h4 className="text-center">{email}</h4>
                        </li>
                        <li>ETC ...</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0 text-center">
                      <button
                        className="btn btn-link collapsed titulo-objetivos"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Mis Puntos
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul>
                        {/*points.map((point) => (
                          <li key={point.id}>{point.teamPoints}</li>
                        ))*/}
                        <li>Aprender: </li>
                        <li>Contribuir: </li>
                        <li>Trabajo en equipo: </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="mt-5">Gamification Tech </h2>
              <h2 className="mt-5 mb-5">¿Cómo acumular puntos?</h2>
              <h2 className="mt-5 mb-5">"Aprende"</h2>
              <table className="table table-striped sombra text-center">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Descripción </th>
                    <th scope="col">Puntos...</th>
                  </tr>
                </thead>
                <tbody>
                  {learn.map((points) => (
                    <tr key={points.id}>
                      <td>{points.id}</td>
                      <td>{points.description}</td>
                      <td>{points.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="mt-5 mb-5">"Contribuye"</h2>
              <table className="table table-striped sombra text-center">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Descripción </th>
                    <th scope="col">Puntos...</th>
                  </tr>
                </thead>
                <tbody>
                  {contribute.map((points) => (
                    <tr key={points.id}>
                      <td>{points.id}</td>
                      <td>{points.description}</td>
                      <td>{points.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="mt-5 mb-5">"Trabaja en equipo"</h2>
              <table className="table table-striped sombra text-center">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Descripción </th>
                    <th scope="col">Puntos...</th>
                  </tr>
                </thead>
                <tbody>
                  {teamwork.map((points) => (
                    <tr key={points.id}>
                      <td>{points.id}</td>
                      <td>{points.description}</td>
                      <td>{points.points}</td>
                    </tr>
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

const mapStateToProps = (state) => {
  return {
    learn: state.learnPoints,
    contribute: state.contributePoints,
    teamwork: state.teamworkPoints,
  };
};

export default connect(mapStateToProps, null)(Perfil);
