import React from 'react'
import Me from '../medias/pictures/me-round.png';
import ArrowDown from '../medias/icons/arr-down.svg';

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
        <a class="skipIcone" href='#'>
          <img src={ArrowDown} alt="arrow"/>
        </a>
      </div>
      </>
  )
}

export default Home