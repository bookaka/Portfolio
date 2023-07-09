import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'

function home() {
  window.scrollTo(0, 0)
  return (
    <>
      <div className="slide"></div>
      <div className="section home" data-aos="fade-up">
        <div className="color-block"></div>
        <div className="home__image">
          <div className="home__image-wrap"></div>
        </div>
        <div className="home__text">
          <div className="home__text-wrap">
            <h1>Hello,</h1>
            <h1>My name Tran Quoc Dinh</h1>
            <h2>I am Web Developer</h2>
            <p>Hello everyone,My name is Tran Quoc Dinh, and I am currently a third-year student at University of Natural Sciences, Ho Chi Minh City, majoring in Information Technology. I have been passionate about computer science since high school, and my goal is to become a web developer.</p>
            <p>Thank you for visiting my profile!</p>
            <div className="home__button">
              <Button className = "home__button-btn"> 
                <Link to="/portfolio">
                  <span className="btn-text">Portfolio</span>
                  <span className="btn-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                </Link>

              </Button>
              <Button
                className="home__button-btn"
              >
                <Link to="/about">
                  <span className="btn-text">About</span>
                  <span className="btn-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                </Link>
              </Button>
              <Button
                className="home__button-btn"
              >
                <Link to="/contact">
                  <span className="btn-text">Contact</span>
                  <span className="btn-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
      
      
    </>
  )
}

export default home