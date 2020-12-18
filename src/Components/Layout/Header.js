import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutRequest } from "../../actions/index";

const Header = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    props.logoutRequest({});
  };
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <h1 className="titulo-proyectos">
          Zinobe <span>Gamificación</span>
        </h1>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link cerrar" onClick={handleLogout} to={"/"}>
                Cerrar Sesión<i className="fas fa-sign-out-alt ml-4"></i>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  logoutRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Header);
