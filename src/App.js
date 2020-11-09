import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Auth/Login';
import NuevaCuenta from './Components/Auth/NuevaCuenta';
import Proyectos from './Components/Proyecto/Proyectos';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path="/proyectos" component={Proyectos}/>
      </Switch>
    </Router>
  );
}

export default App;
