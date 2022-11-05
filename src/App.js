import React from 'react'
import Mensaje from './components/Mensaje'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import QuienesSomos from './components/QuienesSomos'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import kekkayn from './image/kekkayn.jpg'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import User from './components/User'

const App = () => {
  return (
    <div className='App'> 
      <Router>
        <nav className='btn-group'>
          <Link to={'/'} className='btn btn-dark' >Inicio</Link>
          <Link to={'contacto'} className='btn btn-dark' >Contacto</Link>
          <Link to={'quienes_somos'} className='btn btn-dark' >Quiens Somos</Link>
          <Link to={'mensaje'} className='btn btn-dark' >Mensaje</Link>
        </nav>
        <Routes>
          <Route path='quienes_somos/:id' element={<User />} />
          <Route path='/' element={<Inicio />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='quienes_somos' element={<QuienesSomos />} />
          <Route path='mensaje'
            element={
              <Mensaje
                nombre={'Edwin'}
                id={13}
                url={kekkayn}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
