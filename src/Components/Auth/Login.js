import React, {useState,Fragment}from 'react';
import Imagen from '../../LogoZinobe.png';
import {Link} from 'react-router-dom';

const Login = () => {

    //State para iniciar Sesión
    const [usuario,guardarUsuario] = useState({
        email: '',
        password: ''
    })

    //extraer de usuario 
    const {email, password} = usuario;

    //cuando escriben algo en los input
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos vacios


        //Pasarlo al action
    }

    return ( 

    <Fragment>
        <div className="form-logo">
            <img className="logo" src={Imagen}/>
        </div>

        <div className="form-usuario">

            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión"/>
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>    
            </div>
        </div>
        </Fragment>

   

     );
}
 
export default Login;