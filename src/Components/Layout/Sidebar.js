import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return ( 
        <Fragment>
            <aside className="aside">
                <nav className="side-navbar">
                    <div id="navbarNav">
                        <div className="usuario d-flex align-items-stretch">
                            <div>
                                <i class="fas fa-user fa-3x"></i>
                            </div>
                            <div className="ml-5">
                                <h1 className="h3">Nombre usuario</h1>
                                <p>Equipo asignado</p>
                            </div>
                        </div>
                        <ul className="nav flex-column">
                            <li className="active">
                                <Link className="nav-link"  to={'/admin'}>
                                    <i class="fas fa-plus mr-3"></i>
                                    Crear usuario
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link"  to={'/progreso'}>
                                    <i class="fas fa-tasks mr-3"></i>
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