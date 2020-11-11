import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return ( 
        <Fragment>
            <aside>
            <h1 className="titulo-proyectos">Zinobe <span>Gamificación</span></h1>   

            <ul className="nav flex-column text-center">
                <Link className="nav-link mt-5"  to={'/proyectos'}>
                    Crear usuario
                </Link>
                <Link className="nav-link mt-5"  to={'/progreso'}>
                    Progreso
                </Link>
                <li className="nav-item">
                    <a className="nav-link mt-5" href="#">Link</a>
                </li>
            </ul>
            </aside>
        </Fragment>
     );
}
 
export default Sidebar;