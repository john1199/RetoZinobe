import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = () => {
  const username = Cookies.get("name");
  return (
    <Fragment>
      <aside className="aside">
        <nav className="side-navbar">
          <div id="navbarNav">
            <div className="usuario d-flex align-items-stretch">
              {
                //<div className="centrado">}
                <i className="fas fa-user fa-3x"></i>
              }
              {
                //} </div>}
              }
              <div className="ml-5">
                <h1 className="h3">{username}</h1>
                <p>Administrador</p>
              </div>
            </div>
            <ul className="nav flex-column">
              <li className="active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#exampledropdown"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="collapse"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-tie mr-3"></i>
                  Crear
                </a>
                <ul
                  id="exampledropdown"
                  className="list-unstyled collapse show"
                >
                  <li>
                    <Link
                      className="nav-link dropdown-item"
                      to={"/admin/crear-usuarios"}
                    >
                      <i className="fas fa-plus mr-3"></i>
                      Usuario
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link dropdown-item"
                      to={"/admin/crear-equipos"}
                    >
                      <i className="fas fa-plus mr-3"></i>
                      Equipo
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link dropdown-item"
                      to={"/admin/crear-seniorities"}
                    >
                      <i className="fas fa-plus mr-3"></i>
                      Senioritie
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="active">
                <Link className="nav-link" to={"/progreso"}>
                  <i className="fas fa-tasks mr-3"></i>
                  Progreso
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
