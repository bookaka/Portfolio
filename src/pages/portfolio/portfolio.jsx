import React from "react";
import "./portfolio.scss";
import HeaderPage from "../../components/Header-page/HeaderPage";
import { movie, Joblogic, ITC } from "../../assets/portfolio/portfolio.js";

const projects = [
  {
    title: "Movie App",
    thumUrl: movie,
    des: "Build a movie streaming application based on the Netflix app, along with integrating features such as login, logout, and saving favorite movie information to a database.",
    demo: " https://animated-lolly-83681c.netlify.app",
    git: "https://github.com/bookaka/React-Netflix-Clone",
    fe: "HTML, CSS, React, Redux",
    be: "Firebase, Nodejs, MongoDB, The Movie Database (TMDB) API",
  },
  {
    title: "Joblogic",
    thumUrl: Joblogic,
    des: "Daily work will include building new features and UI tweaks on the website. Monitoring information based on Google Analytics and Google Search Console. Fixing security-related errors, improving Google Search rankings based on scan reports from Screaming Frog.",
    Framework: "Hubspot",
    Tools:
      "Google Analytics, Google Search Console, Screaming Frog SEO, Google Tag Manager, Google Campaign Manager",
  },
  {
    title: "ITC",
    thumUrl: ITC,
    des: "Daily work will build new features as well as edit UI on the website. Monitor information based on Google Analytic and Google Search Console. Fix security-related errors, improve position on Google Search based on scan reports from Ahref.",
    Framework: "Wordpress",
    Tools:
      "Google Analytics, Google Search Console, Ahrefs, Yoast SEO, Smush, Screaming Frog SEO,",
  },
];
const handleClick = (i) => {
  document.querySelector(`#detail-${i}`).classList.add("active");
  document.body.classList.add("hide-scrolling");
};
const handleClose = (i) => {
  document.querySelector(`#detail-${i}`).classList.remove("active");
  document.body.classList.remove("hide-scrolling");
};

function portfolio() {
  window.scroll(0, 0);
  return (
    <>
      <div className="slide"></div>
      <div className="section portfolio" data-aos="fade-up">
        <HeaderPage tl1="My" tl2="Portfolio" tlBig="Works" />
        <div className="container">
          <div className="projects row">
            {projects.map((project, i) => (
              <div
                className="project-item col-4"
                key={i}
                onClick={() => handleClick(i)}
              >
                <div
                  className="project-item-bg"
                  style={{ backgroundImage: `url(${project.thumUrl})` }}
                ></div>
                <h3>{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {projects.map((project, i) =>
        i < 1 ? (
          <div className="overlay" id={`detail-${i}`} key={i}>
            <div className="detail row">
              <div className="detail-bg col-6">
                <div className="detail-bg-title">
                  <h3>{project.title}</h3>
                </div>
                <div
                  className="detail-bg-img"
                  style={{ backgroundImage: `url(${project.thumUrl})` }}
                ></div>
              </div>
              <div className="detail-desc col-6">
                <div className="detail-desc-title">
                  <h3>DETAILS</h3>
                </div>
                <div className="detail-desc-info">
                  <p>{project.des}</p>
                  <p>Frontend: {project.fe}</p>
                  <p>Backend: {project.be}</p>
                  <p>
                    Demo: <a href={project.demo}>{project.demo}</a>
                  </p>
                  <p>
                    GitHub: <a href={project.git}>{project.git}</a>
                  </p>
                </div>
              </div>
              <div className="close-btn" onClick={() => handleClose(i)}>
                <i className="bx bx-x"></i>
              </div>
            </div>
          </div>
        ) : (
          <div className="overlay" id={`detail-${i}`} key={i}>
            <div className="detail row">
              <div className="detail-bg col-6">
                <div className="detail-bg-title">
                  <h3>{project.title}</h3>
                </div>
                <div
                  className="detail-bg-img"
                  style={{ backgroundImage: `url(${project.thumUrl})` }}
                ></div>
              </div>
              <div className="detail-desc col-6">
                <div className="detail-desc-title">
                  <h3>DETAILS</h3>
                </div>
                <div className="detail-desc-info">
                  <p>{project.des}</p>
                  <p>Framework: {project.Framework}</p>
                  <p>Tools: {project.Tools}</p>
                </div>
              </div>
              <div className="close-btn" onClick={() => handleClose(i)}>
                <i className="bx bx-x"></i>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default portfolio;
