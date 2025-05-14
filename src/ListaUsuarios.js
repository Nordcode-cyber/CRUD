import React from 'react'
// (>) y "menor que" (<></>)
//cada vez que se invoca el componemte se debe hacer import.
import UsuarioIndividual from './UsuarioIndividual'
function
listaUsuarios(){
    return(
        <div>
            <h2>Lista de usuario</h2>
            <UsuarioIndividual/>
        </div>
    )
}
export default listaUsuarios