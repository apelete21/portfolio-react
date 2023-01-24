import React from 'react'
import Z from '../medias/icons/z.svg'
import In from '../medias/icons/jam_linkedin-circle.svg'
import Git from '../medias/icons/jam_github-circle.svg'
import Tw from '../medias/icons/typcn_social-twitter-circular.svg'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <>
            <div className="top_bar dflex justify-between">
                <div className="logo">
                    <img src={Z} srcset="" alt='Logo' />
                </div>
                <div className="social">
                    <Link className="social_icon" target={'_blank'} to="http://">
                        <img src={In} srcset="" alt='Linkedin' />
                    </Link>
                    <Link className="social_icon" target={'_blank'} to="http://">
                        <img src={Git} srcset="" alt='Github' />
                    </Link>
                    <Link className="social_icon" target={'_blank'} to="http://">
                        <img src={Tw} srcset="" alt='Twitter' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopBar