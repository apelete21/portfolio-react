import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../contexts/Context'
import Animation from './Animation'
import MenuClose from '../medias/icons/close-menu.svg'
import In from '../medias/icons/jam_linkedin-circle.svg'
import Git from '../medias/icons/jam_github-circle.svg'
import Tw from '../medias/icons/typcn_social-twitter-circular.svg'

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
          
            <div className="social-menu dflex justify-center">
              <Link className="social_icon" target={'_blank'} to="http://">
                <img src={In} alt='Linkedin' />
              </Link>
              <Link className="social_icon" target={'_blank'} to="http://">
                <img src={Git} alt='Github' />
              </Link>
              <Link className="social_icon" target={'_blank'} to="http://">
                <img src={Tw} alt='Twitter' />
              </Link>
            </div>
            
        </ul>

        <div className="menu-closer" onClick={() => ToggleMenuState()}>
          <img src={menuState !== true ? Menu : MenuClose} alt='Menu openner' className='w-100' />
        </div>
      </div>
    </>
  )
}

export default Menu