import React, { useContext } from 'react'
import { AppContext } from '../contexts/Context'
import Animation from './Animation'
import MenuClose from '../medias/icons/close-menu.svg'
import SocialsLink from './SocialLinks'
import MenuLinks from './MenuLinks'

const Menu = () => {

  const {
    menuState,
    animate,
    ToggleMenuState
  } = useContext(AppContext)

  return (
    <>
      {animate && <Animation />}

      <div className={menuState === true ? "main_nav" : "main_nav menu-closed"}>
          <MenuLinks />
          <div className="social-menu dflex justify-center">
            <SocialsLink />
          </div>


        <div className="menu-closer" onClick={() => ToggleMenuState()}>
          <img src={menuState !== true ? Menu : MenuClose} alt='Menu openner' className='w-100' />
        </div>
      </div>
    </>
  )
}

export default Menu