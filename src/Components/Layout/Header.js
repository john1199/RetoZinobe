import React from 'react'


const Header = () => {
    return ( 
        <div className="container-fluid sin-padding">
            <header className="header-padding">
                <div className="row">
                    <div className="col-md-8">
                        <h3>Bienvenido "nombre usuario"</h3>
                        <h3>Proyecto asignado</h3>
                    </div>
                    <div className="col-md-4 text-center">
                        <i class="fas fa-user fa-3x"></i>
                        <div className="progress mt-4">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
     );
}
 
export default Header;