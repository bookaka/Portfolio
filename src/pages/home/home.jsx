import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

function home() {
  window.scrollTo(0, 0);
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
            <h2>I am Freelancer SEO & Developer</h2>
            <p>
              👋 Hi there! I'm Tran Quoc Dinh, your go-to SEO expert and
              developer, ready to skyrocket your website's visibility. With over
              a year of hands-on experience, I've tackled a wide range of SEO
              challenges, from optimizing brand-new sites to troubleshooting
              technical errors and leveraging powerful scanning tools.
            </p>
            <p>
              🚀 My passion lies in helping businesses achieve higher search
              engine rankings and increased organic traffic. I'm not just an SEO
              enthusiast; I also bring a strong programming background to the
              table, ensuring a seamless blend of technical expertise and
              user-focused design.
            </p>
            <p>🎯 Let's work together to unlock your website's full potential. Contact me today for a free consultation!</p>
            <div className="home__button">
              <Button className="home__button-btn">
                <Link to="/portfolio">
                  <span className="btn-text">Portfolio</span>
                  <span className="btn-icon">
                    <i className="bx bx-right-arrow-alt"></i>
                  </span>
                </Link>
              </Button>
              <Button className="home__button-btn">
                <Link to="/about">
                  <span className="btn-text">About</span>
                  <span className="btn-icon">
                    <i className="bx bx-right-arrow-alt"></i>
                  </span>
                </Link>
              </Button>
              <Button className="home__button-btn">
                <Link to="/contact">
                  <span className="btn-text">Contact</span>
                  <span className="btn-icon">
                    <i className="bx bx-right-arrow-alt"></i>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
