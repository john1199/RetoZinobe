import React from 'react'


const Header = () => {
    return ( 
        <header className="header">
            <nav class="navbar navbar-expand-lg">
                <h1 className="titulo-proyectos">Zinobe <span>Gamificación</span></h1> 

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link cerrar" href="#">Cerrar Sesión<i class="fas fa-sign-out-alt ml-4"></i> <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
     );
}
 
export default Header;