import React from "react";
import In from '../medias/icons/jam_linkedin-circle.svg'
import Git from '../medias/icons/jam_github-circle.svg'
import Tw from '../medias/icons/typcn_social-twitter-circular.svg'
import { socials } from '../data/personnalLinks'


const SocialsLink = () => {
    return (
        <>
            <a className="social_icon" target={'_blank'} rel="noreferrer" href={socials.linkedin.link}>
                <img src={In} alt='Linkedin' />
            </a>
            <a className="social_icon" target={'_blank'} rel="noreferrer" href={socials.github.link}>
                <img src={Git} alt='Github' />
            </a>
            <a className="social_icon" target={'_blank'} rel="noreferrer" href={socials.twitter.link}>
                <img src={Tw} alt='Twitter' />
            </a>
        </>
    )
}

export default SocialsLink