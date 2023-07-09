import React from 'react'
import './FormContact.scss'
import Button from '../../components/Button/Button'

function FormContact() {
  return (
    <>
      <form className='contact-form' id='contact-form' >
         <div className="contact-form__info">
            <div className="contact-form__info-name">

               <input type="text" placeholder='YOUR NAME'required />
            </div>
            <div className="contact-form__info-email">

               <input type="email" placeholder='YOUR EMAIL'required />
            </div>
         </div>
         <div className="contact-form__subject">
            <input type="text" placeholder='YOUR SUBJECT' required/>
         </div>
         <div className="contact-form__message">
            <input type="text" placeholder='YOUR MESSAGE' required/>
         </div>
         <Button type='submit'>
            <span className="btn-text">send message</span>
            <span className="btn-icon">
               <i className='bx bx-mail-send bx-tada' ></i>
            </span>
         </Button>
      </form>
    </>
  )
}

export default FormContact