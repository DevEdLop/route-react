import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { id } = useParams()
    const [persona, setPersona] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const datos = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const usuario = await datos.json()
        setPersona(usuario);

    }

    return (
        <div>
            <h1>{persona.name}</h1>
            <h2>user:{persona.username}</h2>
            <h3>sitio Web: {persona.website}</h3>
        </div>
    )
}

export default User
