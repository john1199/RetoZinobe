import React, {Fragment} from 'react';


const ListadoUsuarios = ({usuario}) => {

    const {nombre, email,cedula, rol, equipo} = usuario;
    return (
        <Fragment>
            <tr>
                <td>{nombre}</td>
                <td>{cedula}</td>
                <td>{email}</td>
                <td>{rol}</td>
                <td>{equipo}</td>
            </tr>
        </Fragment>
      );
}
 
export default ListadoUsuarios;