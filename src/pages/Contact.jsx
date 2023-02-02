import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Tel from '../medias/icons/tel.svg'
import Map from '../medias/icons/map.svg'
import Mail from '../medias/icons/mail.svg'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_coderz', 'template_coderz', form.current, 'ZklspaSJjOqV4Lc2O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact w-100 h-100 dflex justify-between">
      <div className="address">
        <div className="addressIcon">
          <div className="text-box">
            <em className="text">You have a project ? let's <br /> discuss on it</em>
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" />
          <input type="email" name="from_email" placeholder="Email" />
          <textarea name="message" placeholder="Message here..."></textarea>
          <input type='submit' className="btn" value={'Send'} />
        </form>
      </div>
    </div>
  )
}

export default Contact