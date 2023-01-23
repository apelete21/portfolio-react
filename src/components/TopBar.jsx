import React from 'react'
import Z from '../medias/icons/z.svg'
import In from '../medias/icons/jam_linkedin-circle.svg'
import Git from '../medias/icons/jam_github-circle.svg'
import Tw from '../medias/icons/typcn_social-twitter-circular.svg'

const TopBar = () => {
    return (
        <>
            <div className='vw-100'>
                <div>
                    <img src={Z} alt="logo" />
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="">
                                <img src={In} alt="Linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Git} alt="Github" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Tw} alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopBar