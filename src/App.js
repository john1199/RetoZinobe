import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Auth/Login';
import NuevaCuenta from './Components/Auth/NuevaCuenta';
import Proyectos from './Components/Proyecto/Admin';
import Progreso from './Components/Proyecto/Progreso';
import Usuario from './Components/Proyecto/Usuario';
import Equipos from './Components/Proyecto/Equipos';
import Senorities from './Components/Proyecto/Senorities';
import Perfil from './Components/Layout/Perfil';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path="/admin/crearusuarios" component={Proyectos}/>
          <Route path='/progreso' component={Progreso}/>     
          <Route path='/usuario' component={Usuario}/>
          <Route path='/admin/equipos' component={Equipos}/>
          <Route path='/admin/senorities' component={Senorities}/>
          <Route path='/perfil' component={Perfil}/>    
      </Switch>
    </Router>
  );
}

export default App;
