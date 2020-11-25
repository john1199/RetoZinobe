import React, {Fragment} from 'react';


const ListadoUsuarios = ({usuario}) => {

    const {name, email,identificationCard, isAdmin, team} = usuario;
    return (
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>{identificationCard}</td>
                <td>{email}</td>
                <td>{isAdmin}</td>
                <td>{team}</td>
            </tr>
        </Fragment>
      );
}
 
export default ListadoUsuarios;