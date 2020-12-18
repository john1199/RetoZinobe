import React,{Fragment} from 'react';


const ListadoSenorities = ({niveles}) => {

    const{name,description} = niveles;
    return ( 
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>{description}</td>
            </tr>
        </Fragment>
     );
}
 
export default ListadoSenorities;