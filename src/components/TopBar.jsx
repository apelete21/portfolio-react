import React from 'react'
import Z from '../medias/icons/z.svg'
import In from '../medias/icons/jam_linkedin-circle.svg'
import Git from '../medias/icons/jam_github-circle.svg'
import Tw from '../medias/icons/typcn_social-twitter-circular.svg'

const TopBar = () => {
    return (
        <>
            <div class="top_bar dflex justify-between">
                <div class="logo">
                    <img src={Z} srcset="" alt='Logo' />
                </div>
                <div class="social">
                    <a class="social_icon" href="http://">
                        <img src={In} srcset="" alt='Linkedin' />
                    </a>
                    <a class="social_icon" href="http://">
                        <img src={Git} srcset="" alt='Github' />
                    </a>
                    <a class="social_icon" href="http://">
                        <img src={Tw} srcset="" alt='Twitter' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default TopBar