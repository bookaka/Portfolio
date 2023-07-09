import React from 'react'
import './contact.scss'
import HeaderPage from '../../components/Header-page/HeaderPage.jsx'
import infoP from '../../assets/info/info'
import FormContact from '../../components/Form-contact/FormContact'


function contact() {
  window.scrollTo(0, 0)
  return (
    <>
      <div className="slide"></div>
      <div className="section about" data-aos="fade-up">
        <HeaderPage tl1="get in" tl2="touch" tlBig="contact"/>
        <div className="container row">
          <div className="infoP col-4">
            <h1>DON'T BE SHY !</h1>
            <h2>
            Feel free to get in touch with me. I am always open to discussing new projects,
             creative ideas or opportunities to be part of your visions.
            </h2>
            <ul className="contact-info-list">
              <li> 
                <div className="icon">
                  <i class="bx bxs-map"></i>
                </div>
                <div className="text">

                  <p>
                    Address
                  </p>
                  {infoP.Address}
                </div>
              </li>
              <li> 
                <div className="icon">
                <i class="bx bxs-envelope-open"></i>
                </div>
                <div className="text">

                  <p>
                    Email
                  </p>
                  {infoP.Email}
                </div>
              </li>   
              <li> 
                <div className="icon">
                <i class="bx bxs-phone-call"></i>
                </div>
                <div className="text">

                  <p>
                    Phone
                  </p>
                  {infoP.Phone}
                </div>
              </li>
              
            </ul>
            <ul className="contact-social-list">
              <li>
                <a href={infoP.Linkedin}>
                <i class="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a href={infoP.Git}>
                <i class="bx bxl-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="form col-8">

          <FormContact/>
          </div>

        </div>
      </div>
    </>
  )
}

export default contact