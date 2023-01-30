import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Animation from './Animation'

const Menu = () => {

  const location = useLocation()

  const [animate, setAnimate] = useState(false)

  function Change() {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 2000);
  }

  return (
    <>
      {animate && <Animation />}
      <div class="main_nav menu-closed">
        <ul className='w-100 dflex' onClick={() => Change()}>
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