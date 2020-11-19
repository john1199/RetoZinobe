import React,{Fragment} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';


const Perfil = () => {
    return ( 
        <Fragment>
            <Header/>
            <div className="contenedor-app">
            <Sidebar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="mt-5">Tu Experiencia</h2>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '25%', fontSize:'1.5rem'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                              
                            <div className="usuario">
                                <div className="centradito">
                                    <i className="fas fa-user fa-5x fa-centrado"></i>
                                </div>
                               <div>
                                    <p className="text-center mt-3 ml-5">Nivel:10</p>
                                    <p className="text-center mt-3 ml-5">puntos:7.567</p>
                               </div>
                            </div>

                            <div className="ml-5 text-center">
                                <h1 className="h3">Nombre usuario</h1>
                                <p>Equipo asignado</p>
                            </div>

                            <h1>Este es el lugar de los objetivos</h1>
                            <div id="accordion">
                                <div className="card mt-5">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0 text-center">
                                            <button className="btn btn-link titulo-objetivos" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Objetivos por completar
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show mb-5" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul>
                                                <li>Terminar curso de platzi 
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '10%', fontSize:'1.5rem'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
                                                    </div> 
                                                </li>
                                                <li>Terminar curso Habilidades blandas 
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%', fontSize:'1.5rem'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                    </div> 
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0 text-center">
                                            <button className="btn btn-link collapsed titulo-objetivos" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Objetivos completados
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul>
                                                <li>Curso de React.js
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '100%', fontSize:'1.5rem'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">100%</div>
                                                    </div> 
                                                </li>
                                                <li>Curso SPA React.js
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '100%', fontSize:'1.5rem'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">100%</div>
                                                    </div> 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <h2 className="mt-5">Tu Ruta </h2>
                            <ul className="text-center">
                                <li className="espacio-ruta"> <i className="fab fa-angular fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                                <li className="espacio-ruta"> <i className="fab fa-react fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                                <li className="espacio-ruta"> <i className="fab fa-html5 fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                                <li className="espacio-ruta"> <i className="fab fa-js-square fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                                <li className="espacio-ruta"> <i className="fab fa-vuejs fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                                <li className="espacio-ruta"> <i className="fab fa-css3-alt fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                                <li className="espacio-ruta"> <i className="fab fa-python fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                                <li className="espacio-ruta"> <i className="fab fa-aws fa-3x mr-5"></i>Curso de la ruta asignada al usuario</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Perfil;