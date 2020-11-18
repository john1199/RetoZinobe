import React,{Fragment} from 'react';


const ListadoSenorities = ({niveles}) => {

    const{senoritie,descripcion} = niveles;
    return ( 
        <Fragment>
            <tr>
                <td>{senoritie}</td>
                <td>{descripcion}</td>
            </tr>
        </Fragment>
     );
}
 
export default ListadoSenorities;