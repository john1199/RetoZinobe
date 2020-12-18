import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Usuarios from "../Components/Proyecto/Usuarios/Usuarios";
import Equipos from "../Components/Proyecto/Equipos/Equipos";
import Seniorities from "../Components/Proyecto/Seniorities/Seniorities";
import Progreso from "../Components/Proyecto/Progreso";
import Usuario from "../Components/Proyecto/Usuario";
import Perfil from "../Components/Proyecto/Perfil";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin/crear-usuarios" component={Usuarios} />
        <Route path="/admin/crear-equipos" component={Equipos} />
        <Route path="/admin/crear-seniorities" component={Seniorities} />
        <Route path="/progreso" component={Progreso} />
        <Route path="/usuario" component={Usuario} />
        <Route path="/perfil" component={Perfil} />
      </Switch>
    </Router>
  );
}

export default App;
