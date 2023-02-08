import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/Context'
import Me from '../medias/pictures/me.png'

const About = () => {

  const { Change } = useContext(AppContext)

  return (
    <>
      <div class="about_section justify-between">
        <div class="img_about">
          <img src={Me} alt="" srcset="" className='w-100 h-100' />
        </div>
        <div class="txt_about">
          <p class="p1_about mb-5vh">
            I'm a front-end developer, specialized in react with consequent experiences
            in web design and development. I love the connection between design and technology, which is reflected in my
            design approach and vision.
          </p>
          <p class="p1_about mb-5vh">
            I'm very strict and fastidious and on my free time I love
            playing soccer with some friends, Playstation games, and even watch instructive video series, and my favorite
            is to increase my professional skills.
          </p>
          <br />
          <p onClick={() => Change()} style={{
            width: 'fit-content'
          }}>
            <Link class="btn_about" to="/contact"><b>Let's start</b></Link>
            <Link class="btn_about" to={'/portfolio'}><b>View my recent works</b></Link>    
          </p>
        </div>
      </div>
    </>
  )
}

export default About