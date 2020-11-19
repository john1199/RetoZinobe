import React from 'react'


const Header = () => {
    return ( 
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <h1 className="titulo-proyectos">Zinobe <span>Gamificación</span></h1> 

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link cerrar">Cerrar Sesión<i className="fas fa-sign-out-alt ml-4"></i> <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
     );
}
 
export default Header;