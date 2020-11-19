import React, {Fragment} from 'react';

const ListadoEquipos = ({equipos}) => {

    const {nombreEquipo,descripcion} = equipos;
    return ( 
        <Fragment>
            <tr>
                <td>{nombreEquipo}</td>
                <td>{descripcion}</td>
            </tr>
        </Fragment>
     );
}
 
export default ListadoEquipos;