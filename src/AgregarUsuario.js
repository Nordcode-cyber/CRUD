import React, { useState } from 'react'
// (>) y "menor que" (<>)
function AgregarUsuario(){
    //hooks
    const [nombre, setNombre]=useState('')
    const [email, setEmail]=useState('')
    const [telefono, setTelefono]=useState('')

    function agregarUsuario(){
        var usuario ={
        nombre: nombre,
        email:email,
        telefono:telefono
        }

        
    }


    return(
        <div className="container">
            <div className="row" >
                 <h2 className="mt-4" >Crear un nuevo usuario</h2>
         </div>

         <div className="row">
             <div className="col-sm-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre}onChange={(e)=>{setNombre(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control"  value={email}onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" value={telefono}onChange={(e)=>{setTelefono(e.target.value)}}></input>
                </div>

                <button onClick= {AgregarUsuario} className="btn-btn-success">Guardar Usuario</button>

             </div>
        </div>
        </div>
    )
}
export default AgregarUsuario