import React from 'react'
import Tel from '../medias/icons/tel.svg'
import Map from '../medias/icons/map.svg'
import Mail from '../medias/icons/mail.svg'

const Contact = () => {
  return (
    <div className="contact w-100 h-100 dflex justify-between">
      <div className="address">
        <div className="addressIcon">
          <div className="test">
            <div className="text">You have a project ? let's <br /> discuss on it</div>
            <div>
              <div className="icon">
                <img src={Tel} alt="" />
                <span>(00228) 93 91 75 91 / 98 05 17 45</span>
              </div>
              <div className="icon">
                <img src={Map} alt="" /><span> Domicile Adzohonou Kodjo
                  Semanou,
                  Golfe <br /> Lomé-TOGO</span>
              </div>
              <div className="icon">
                <img src={Mail}
                  alt="" />
                <span>adzohonouapelete@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="contactForm">
        <h2 className="title">Contact Me</h2>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="mail" placeholder="Email" />
          <textarea name="" id="" placeholder="Message here...">

          </textarea>
          <button className="btn">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact