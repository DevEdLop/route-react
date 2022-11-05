import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const QuienesSomos = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('hola mundo')
    obtenerDatos()
  }, [])


  const obtenerDatos = async () => {
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await datos.json()
    setUsers(usuarios)
  }



  return (
    <div>
      <h2>Quienes Somos</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/quienes_somos/${user.id}`}>
                {user.name} - {user.email}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default QuienesSomos
