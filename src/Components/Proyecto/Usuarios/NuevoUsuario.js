import React, { Fragment, useState } from "react";
import Error from "../../Layout/Error";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions";

const NuevoUsuario = (props) => {
  //State para iniciar Sesión
  const [usuario, guardarUsuario] = useState({
    id: "",
    name: "",
    email: "",
    identificationCard: "",
    password: "",
    confirmar: "",
    isAdmin: "",
    team: "",
  });

  //Error campos vacios
  const [error, guardarError] = useState(false);

  //Error contraseña corta
  const [errorContra, guardarErrorContra] = useState(false);

  //Error contraseña diferentes
  const [contraDiferente, guardarContraDiferente] = useState(false);

  //extraer de usuario
  const {
    name,
    email,
    password,
    confirmar,
    identificationCard,
    isAdmin,
  } = usuario;

  //cuando escriben algo en los input
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();
    //si es admin no hay debe haber team
    if (isAdmin === "Administrador") {
      guardarUsuario({
        team: "",
      });
    }
    //Validar campos vacios
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      identificationCard.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === "" ||
      isAdmin.trim() === ""
    ) {
      guardarError(true);
      return;
    }

    //actualizar el mensaje de error
    guardarError(false);

    //Password minimo de 6 caracteres
    if (password.length < 6) {
      guardarErrorContra(true);
      return;
    }
    guardarErrorContra(false);

    //Ambos password sean iguales
    if (password !== confirmar) {
      guardarContraDiferente(true);
      return;
    }
    guardarContraDiferente(false);

    //La cedula no se puede repetir

    //se crea el localstorage
    //props.CrearUsuario(usuario);
    //Pasarlo al action
    props.registerUser(usuario, "/admin/crear-usuarios");

    //reiniciando el formularo
    e.target.reset();
    /*guardarUsuario({
      name: "",
      email: "",
      identificationCard: "",
      password: "",
      confirmar: "",
      isAdmin: "",
      team: "",
    });*/
  };
  return (
    <Fragment>
      <div className="flexi">
        <i
          type="button"
          className="far fa-plus-square fa-2x mr-4"
          data-toggle="modal"
          data-target="#staticBackdrop"
        ></i>
        Agregar Usuario
        <form className="form-inline my-1 my-lg-0 margin-lupa">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          ></input>
          <i className="fas fa-search fa-2x mr-3 ml-5"></i>
        </form>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="mt-3 sombra">
                <form onSubmit={onSubmit}>
                  <div className="campo-form">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      onChange={onChange}
                    />
                  </div>

                  <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Tu Email"
                      onChange={onChange}
                    />
                  </div>

                  <div className="campo-form">
                    <label htmlFor="identificationCard">Cedula</label>
                    <input
                      type="number"
                      id="identificationCard"
                      name="identificationCard"
                      placeholder="Numero de cedula"
                      onChange={onChange}
                    />
                  </div>

                  <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Tu password"
                      onChange={onChange}
                    />
                  </div>

                  <div className="campo-form">
                    <label htmlFor="confirmar">Confirmar Password</label>
                    <input
                      type="password"
                      id="confirmar"
                      name="confirmar"
                      placeholder="Repite tu password"
                      onChange={onChange}
                    />
                  </div>

                  <div className="campo-form">
                    <label htmlFor="isAdmin">Seleccionar Rol</label>
                    <select name="isAdmin" onChange={onChange}>
                      <option value="">-- Seleccione una opcion --</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Usuario">Usuario</option>
                    </select>
                  </div>
                  {isAdmin == "Usuario" ? (
                    <div>
                      <div className="campo-form">
                        <label htmlFor="team">Asignar Equipo</label>
                        <select name="team" onChange={onChange}>
                          <option value="">-- Seleccione una opcion --</option>
                          {props.teams.map((team) => (
                            <option key={team.id} value={team.name}>
                              {team.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="campo-form">
                        <label htmlFor="senioritie">Asignar Senioritie</label>
                        <select name="senioritie" onChange={onChange}>
                          <option value="">-- Seleccione una opcion --</option>
                          {props.seniorities.map((senioritie) => (
                            <option key={senioritie.id} value={senioritie.name}>
                              {senioritie.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : null}

                  <div className="campo-form">
                    <input
                      type="submit"
                      className="btn btn-primario btn-block"
                      value="Crear usuario"
                    />
                  </div>
                </form>

                <div className="pt-5">
                  {error ? (
                    <Error
                      className="p-3"
                      mensaje="Todos los campos son obligatorios"
                    />
                  ) : null}
                  {errorContra ? (
                    <Error
                      className="p-3"
                      mensaje="Contraseña demasiado corta,minimo 6 caracteres"
                    />
                  ) : null}
                  {contraDiferente ? (
                    <Error
                      className="p-3"
                      mensaje="Las contraseñas deben coincidir"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  registerUser,
};

NuevoUsuario.propTypes = {
  registerUser: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    seniorities: state.seniorities,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NuevoUsuario);
