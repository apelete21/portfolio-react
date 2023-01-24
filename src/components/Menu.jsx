import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {

  const location = useLocation()

  return (
    <>
      <div class="main_nav">
        <ul className='justify-between w-100 dflex'>
          <li><Link to={'/'} className={location.pathname === '/' ? 'm_active' : ''}>Home</Link></li>
          <li><Link to={'/skills'} className={location.pathname === '/skills' ? 'm_active' : ''}>Skills</Link></li>
          <li><Link to={'/portfolio'} className={location.pathname === '/portfolio' ? 'm_active' : ''}>Portfolio</Link></li>
          <li><Link to={'/about'} className={location.pathname === '/about' ? 'm_active' : ''}>About</Link></li>
          <li><Link to={'/contact'} className={location.pathname === '/contact' ? 'm_active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Menu