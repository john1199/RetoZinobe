import React, {Fragment, useState} from 'react';
import Error from '../Layout/Error';
import { v4 as uuidv4 } from 'uuid';

const NuevoUsuario = ({CrearUsuario}) => {
        //State para iniciar Sesión
        const [usuario,guardarUsuario] = useState({
            nombre:'',
            email: '',
            cedula:'',
            password: '',
            confirmar: '',
            rol:'',
            equipo:''
        })

        //Error campos vacios
        const [error,guardarError] = useState (false)
        
        //Error contraseña corta
        const[errorContra,guardarErrorContra] = useState(false)

        //Error contraseña diferentes
        const[contraDiferente, guardarContraDiferente] = useState(false)
    
        //extraer de usuario 
        const {nombre, email, password, confirmar ,cedula, rol, equipo} = usuario;
    
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
            if(nombre.trim() === '' || email.trim() === '' || cedula.trim() === '' || password.trim() === '' || confirmar.trim() === '' || rol.trim() === '' || equipo.trim() === ''){
                guardarError(true)
                return;
            }

            //actualizar el mensaje de error
            guardarError(false)
    
            //Password minimo de 6 caracteres
            if(password.length < 6){
                guardarErrorContra(true)
                return;
            }
                guardarErrorContra(false)

            //Ambos password sean iguales
            if(password != confirmar){
                guardarContraDiferente(true)
                return;
            }
                guardarContraDiferente(false)

            //La cedula no se puede repetir
            
            //Agregando un Id a cada usuario creado
            usuario.id = uuidv4();

            //Pasarlo al action
            CrearUsuario(usuario)

            //reiniciando el formularo
            guardarUsuario({
                nombre:'',
                email: '',
                cedula:'',
                password: '',
                confirmar: '',
                rol:'',
                equipo:''
            })
        }
    return ( 
        <Fragment>
            <div className="mt-3 sombra">
                <h2>Agregar usuarios</h2>
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
                        <label htmlFor="cedula">Cedula</label>
                        <input
                            type="number"
                            id="cedula"
                            name="cedula"
                            value={cedula}
                            placeholder="Numero de cedula"
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
                        <label htmlFor="confirmar">Seleccionar Rol</label>
                        <select
                            name="rol"
                            value={rol}
                            onChange={onChange}
                        >
                            <option value="">-- Seleccione una opcion --</option>
                            <option value="admin">Administrador</option>
                            <option value="usuario">Usuario</option>
                        </select>
                    </div>

                    
                    <div className="campo-form">
                        <label htmlFor="confirmar">Asignar Equipo</label>
                        <select
                            name="equipo"
                            value={equipo}
                            onChange={onChange}
                        >   
                            <option value="">-- Seleccione una opcion --</option>
                            <option value="diseño">Diseño</option>
                            <option value="desarrollo">Desarrollo</option>
                        </select>
                    </div>



                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Crear usuario"/>
                    </div>
                </form>

                <div className="pt-5">
                    {error ? <Error className="p-3" mensaje="Todos los campos son obligatorios"/> : null}
                    {errorContra ? <Error className="p-3" mensaje="Contraseña demasiado corta,minimo 6 caracteres"/> : null}
                    {contraDiferente ? <Error className="p-3" mensaje="Las contraseñas deben coincidir"/> : null}
                </div>
            </div>
        </Fragment>
     );
}
 
export default NuevoUsuario;