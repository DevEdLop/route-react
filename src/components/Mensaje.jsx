import React from 'react'
import Imagen from './Imagen'

const Mensaje = ({id, url, nombre}) => {
    return (
        <div>
            <h2>Buenas noches mi nombre es {nombre}</h2>
            <h3>su id es {id}</h3>
            <Imagen urlimg={url} />
        </div>
    )
}

export default Mensaje