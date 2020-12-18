import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import Error from "../../Layout/Error";
import PropTypes from "prop-types";
import { registerSenioritie } from "../../../actions";
const NuevoSenioritie = (props) => {
  //Creando el state para el error
  const [error, guardarError] = useState(false);

  //creando el state para crear los equipos
  const [niveles, guardarNiveles] = useState({
    name: "",
    description: "",
  });

  //Extraer los datos
  const { name, description } = niveles;

  //leyendo lo que ingresan en los input
  const onChange = (e) => {
    guardarNiveles({
      ...niveles,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario de click en el boton crear
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que los campos esten llenos
    if (name.trim() === "" || description.trim() === "") {
      guardarError(true);
      return;
    }

    //Actualizar el error
    guardarError(false);

    //Creando el nuevo equipo
    //Crearsenoritie(niveles)

    props.registerSenioritie(niveles, "/admin/crear-seniorities");
    //Reiniciando el form de
    guardarNiveles({
      name: "", 
      description: "",
    });
  };

  return (
    <Fragment>
      <div className="flexi">
        <i
          type="button"
          className="far fa-plus-square fa-2x mr-3"
          data-toggle="modal"
          data-target="#staticBackdrop"
        ></i>
        Crear Señoritie
        <form className="form-inline my-2 my-lg-0 margin-lupa">
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
                    <label htmlFor="senoritie">Señoritie</label>
                    <input
                      type="text"
                      id="senoritie"
                      name="name"
                      placeholder="Nombre Senioritie"
                      onChange={onChange}
                    />
                  </div>
                  <div className="campo-form">
                    <label htmlFor="nombre">Descripcion</label>
                    <textarea
                      type="text"
                      id="descripcion"
                      name="description"
                      placeholder="Descripcion Señoritie"
                      onChange={onChange}
                    />
                  </div>

                  <div className="campo-form">
                    <input
                      type="submit"
                      className="btn btn-primario btn-block"
                      value="Crear Senoritie"
                    />
                  </div>

                  <div className="pt-5">
                    {error ? (
                      <Error
                        className="p-3"
                        mensaje="Todos los campos son obligatorios"
                      />
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


const mapDispatchToProps = {
  registerSenioritie,
};

NuevoSenioritie.propTypes = {
  registerSenioritie: PropTypes.func
};

export default connect(null, mapDispatchToProps)(NuevoSenioritie);
