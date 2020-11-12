import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Auth/Login';
import NuevaCuenta from './Components/Auth/NuevaCuenta';
import Proyectos from './Components/Proyecto/Admin';
import Progreso from './Components/Proyecto/Progreso';
import Usuario from './Components/Proyecto/Usuario';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path="/admin" component={Proyectos}/>
          <Route path='/progreso' component={Progreso}/>     
          <Route path='/usuario' component={Usuario}/>
             
      </Switch>
    </Router>
  );
}

export default App;
