import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Tel from '../medias/icons/tel.svg'
import Map from '../medias/icons/map.svg'
import Mail from '../medias/icons/mail.svg'
import { socials } from '../data/personnalLinks';

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [confirm, setConfirm] = useState()

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_coderz', 'template_coderz', form.current, 'ZklspaSJjOqV4Lc2O')
      .then((result) => {

        if (result.text === 'OK') {
          setConfirm('Sent successfully! Thanks.')
        }

        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
        console.log(error.text);
        setConfirm('Not sent ! Please verify your network and retry !' )
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
                <span>(00228)
                  <a href={'tel:' + socials.number.profesional}>
                    93 91 75 91
                  </a>
                  /
                  <a href={'tel:' + socials.number.mobile}>
                    98 05 17 45
                  </a>
                </span>
              </div>
              <div className="icon">
                <img src={Map} alt="" /><span> Domicile Adzohonou Kodjo
                  Semanou,
                  Golfe <br /> Lomé-TOGO</span>
              </div>
              <a className="icon" href={'mailto:'+socials.mail.email}>
                <img src={Mail}
                  alt="" />
                <span>{socials.mail.email}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="contactForm">
        <h2 className="title">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            required
            type="text"
            name="from_name"
            placeholder="Name"
            value={name}
            onChange={e => {
              setName(e.target.value)
              setConfirm('')
            }}
          />
          <input
            required
            type="email"
            name="from_email"
            placeholder="Email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              setConfirm('')
            }}
          />
          <textarea
            name="message"
            placeholder="Message here..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setConfirm('')
            }}
          >

          </textarea>
          <input
            required type='submit' className="btn" value={'Send'} />
          
          
          {confirm !== '' && <p> {confirm} </p>}
          
        </form>
      </div>
    </div>
  )
}

export default Contact