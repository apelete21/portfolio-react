import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../contexts/Context'
import Animation from './Animation'
import MenuClose from '../medias/icons/close-menu.svg'

const Menu = () => {

  const location = useLocation()

  const {
    menuState,
    animate,
    ToggleMenuState,
    Change
  } = useContext(AppContext)

  return (
    <>
      {animate && <Animation />}
      <div className={menuState === true ? "main_nav" : "main_nav menu-closed"}>
        <ul className='w-100 dflex' onClick={() => Change()}>
          <li><Link onClick={() => ToggleMenuState()} to={'/'} className={location.pathname === '/' ? 'm_active' : ''}>Home</Link></li>
          <li><Link onClick={() => ToggleMenuState()} to={'/skills'} className={location.pathname === '/skills' ? 'm_active' : ''}>Skills</Link></li>
          <li><Link onClick={() => ToggleMenuState()} to={'/portfolio'} className={location.pathname === '/portfolio' ? 'm_active' : ''}>Portfolio</Link></li>
          <li><Link onClick={() => ToggleMenuState()} to={'/about'} className={location.pathname === '/about' ? 'm_active' : ''}>About</Link></li>
          <li><Link onClick={() => ToggleMenuState()} to={'/contact'} className={location.pathname === '/contact' ? 'm_active' : ''}>Contact</Link></li>
        </ul>
        <div className="menu-closer" onClick={() => ToggleMenuState()}>
          <img src={menuState !== true ? Menu : MenuClose} alt='Menu openner' className='w-100' />
        </div>
      </div>
    </>
  )
}

export default Menu