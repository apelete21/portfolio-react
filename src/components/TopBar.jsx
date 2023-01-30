import React, { useContext } from 'react'
import Z from '../medias/icons/z.svg'
import In from '../medias/icons/jam_linkedin-circle.svg'
import Git from '../medias/icons/jam_github-circle.svg'
import Tw from '../medias/icons/typcn_social-twitter-circular.svg'
import Menu from '../medias/icons/open-menu.svg'
import MenuClose from '../medias/icons/close-menu.svg'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../contexts/Context'

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
                    "top_bar dflex  justify-between bg-primary" :
                    "top_bar dflex  justify-between"
            }>
                <div className="logo">
                    <img src={Z} alt='Logo' />
                </div>
                <div className="social">
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
                <div className="logo menu-openner" onClick={() => ToggleMenuState()}>
                    <img src={menuState !== true ? Menu : MenuClose} alt='Menu openner' />
                </div>
            </div>
        </>
    )
}

export default TopBar