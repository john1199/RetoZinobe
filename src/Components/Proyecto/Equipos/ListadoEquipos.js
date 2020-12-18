import React, {Fragment} from 'react';

const ListadoEquipos = ({equipos}) => {

    const {name,description} = equipos;
    return ( 
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>{description}</td>
            </tr>
        </Fragment>
     );
}
 
export default ListadoEquipos;