import React, {useState,Fragment}from 'react';
import Imagen from '../../LogoZinobe.png';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

    //State para iniciar Sesión
    const [usuario,guardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar: ''
    })

    //extraer de usuario 
    const {nombre, email, password, confirmar} = usuario;

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

        //Password minimo de 6 caracteres

        //Ambos password sean iguales

        //Pasarlo al action
    }

    return ( 

    <Fragment>
        <div className="form-logo">
            <img className="logo" src={Imagen}/>
        </div>

        <div className="form-usuario">

            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Tu nombre"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="nombre">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu Email"
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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite tu password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesion
                </Link>    
            </div>
        </div>
        </Fragment>

   

     );
}
 
export default NuevaCuenta;