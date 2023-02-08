import React, { useContext } from 'react'
import Z from '../medias/icons/z.svg'
import Menu from '../medias/icons/open-menu.svg'
import MenuClose from '../medias/icons/close-menu.svg'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../contexts/Context'
import SocialsLink from '../components/SocialLinks'

const TopBar = () => {

    const location = useLocation()

    const {
        menuState,
        ToggleMenuState
    } = useContext(AppContext)

    return (
        <>
            <div className={
                location.pathname !== '/' ?
                    "top_bar dflex justify-between bg-primary" :
                    "top_bar dflex justify-between"
            }>
                <div className="logo">
                    <img src={Z} alt='Logo' />
                </div>
                <div className="social">
                    <SocialsLink />
                </div>
                <div className="logo menu-openner" onClick={() => ToggleMenuState()}>
                    <img src={menuState !== true ? Menu : MenuClose} alt='Menu openner' />
                </div>
            </div>
        </>
    )
}

export default TopBar