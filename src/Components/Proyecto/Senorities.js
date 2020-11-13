import React, {Fragment} from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

const Senorities = () => {
    return ( 
    <Fragment>
        <Header/>
        <div className="contenedor-app">
            <Sidebar/>
            <h1>Este es el progreso de los Señorities</h1>
        </div>
    </Fragment>
     );
}
 
export default Senorities;