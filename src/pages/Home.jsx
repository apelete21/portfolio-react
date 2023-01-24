import React from 'react'
import Me from '../medias/pictures/me-round.png';
import ArrowDown from '../medias/icons/arr-down.svg';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <>
      <div className='homebg vw-100 vh-100'>

      </div>
      <div class="main_hero dflex align-center">
        <div class="profileImage">
          <img src={Me} alt="Profile" className='w-100'/>
        </div>
        <div class="presentationText">
          <span class="intro">Hi,I'm</span>
          <span>  </span>
          <span class="name">ADZOHONOU K. Apelete</span>
        </div>
        <div class="skillSpecialisation">React&Next Developer</div>
        <Link class="skipIcone" to='/portfolio'>
          <img src={ArrowDown} alt="arrow"/>
        </Link>
      </div>
      </>
  )
}

export default Home