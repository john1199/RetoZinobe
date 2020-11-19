import React, {Fragment} from 'react'
import Sidebar from '../Layout/Sidebar';
import Header from '../Layout/Header';


const Progreso = () => {
    return ( 
        <Fragment>
            <Header/>
            <div className="contenedor-app">
                <Sidebar/>
                <h1>Este es el progreso de los usuarios</h1>
            </div>
        </Fragment>
     );
}
 
export default Progreso;