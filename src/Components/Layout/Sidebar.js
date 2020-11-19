import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return ( 
        <Fragment>
            <aside className="aside">
                <nav className="side-navbar">
                    <div id="navbarNav">
                        <div className="usuario d-flex align-items-stretch">
                            <div className="centrado">
                                <i className="fas fa-user fa-3x"></i>
                            </div>
                            <div className="ml-5">
                                <h1 className="h3">Nombre usuario</h1>
                                <p>Equipo asignado</p>
                                <Link to={'/perfil'}>
                                    Ver Perfil
                                </Link>
                            </div>
                        </div>
                        <ul className="nav flex-column">
                            <li className="active">
                                <a className="nav-link dropdown-toggle" href="#exampledropdown" id="navbarDropdown" role="button" data-toggle="collapse" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user-tie mr-3"></i>
                                    usuarios
                                </a>
                                <ul id="exampledropdown" className="list-unstyled collapse show">
                                    <li>
                                        <Link className="nav-link dropdown-item"  to={'/admin/crearusuarios'}>
                                            <i className="fas fa-plus mr-3"></i>
                                            Crear usuario
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  className="nav-link dropdown-item"  to={'/admin/equipos'}>
                                            <i className="fas fa-plus mr-3"></i>
                                            Crear Equipos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link dropdown-item"  to={'/admin/senorities'}>
                                            <i className="fas fa-plus mr-3"></i>
                                            Crear Señorities
                                        </Link>
                                    </li>
                                </ul>

                            </li>

                            <li>
                                <Link className="nav-link"  to={'/progreso'}>
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
}
 
export default Sidebar;