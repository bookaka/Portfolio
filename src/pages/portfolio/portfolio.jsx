import React from "react";
import "./portfolio.scss";
import HeaderPage from "../../components/Header-page/HeaderPage";
import {
  music,
  Portfolio,
  SetSail,
  movie,
  Oldie,
  ShopEcommerce,
} from "../../assets/portfolio/portfolio.js";

const projects = [
  {
    title: "Music Player",
    thumUrl: music,
    des: "Build a music application using HTML, CSS, and JavaScript, including basic functions such as play/pause, shuffle, repeat, and song selection",
    demo: "https://bookaka.github.io/Music-player",
    git: "https://github.com/bookaka/Music-player",
    fe: "HTML, CSS, Javascript",
    be: "Do not use",
  },
  {
    title: "SetSail Page",
    thumUrl: SetSail,
    des: "Build a user interface based on the SetSail website, using HTML, CSS, and JavaScript.",
    demo: "https://bookaka.github.io/Wed-SetSail",
    git: ":https://github.com/bookaka/Wed-SetSail",
    fe: " HTML, CSS, Javascrip",
    be: "Do not use",
  },
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
    title: "Oldie App",
    thumUrl: Oldie,
    des: "Build a second-hand marketplace website, where I will handle the backend development using Node.js. The user and product information will be stored in MongoDB, and the images will be stored using Cloudinary for storage.",
    demo: "https://oldie.vercel.app/",
    git: "https://github.com/bookaka/Oldie",
    fe: "HTML, CSS, React",
    be: "Nodejs, MongoDB, Cloudify",
  },
  {
    title: "My Portfolio",
    thumUrl: Portfolio,
    des: "Build a personal website to showcase my professional profile, skills, and the projects I have worked on.",
    demo: "https://trandinh-portfolio.netlify.app/",
    git: "https://github.com/bookaka/Portfolio",
    fe: "HTML, SCSS, React",
    be: "Do not use",
  },
  {
    title: "Shop Ecommerce",
    thumUrl: ShopEcommerce,
    des: "Build a website to sell clothes, where you can post and manage products and orders. Users can access, view and purchase products",
    demo: "Comming Soon",
    git: "https://github.com/bookaka/ShopEcommerce",
    fe: "Comming Soon",
    be: "Nodejs, MongoDB, Cloudify, Redis",
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
      {projects.map((project, i) => (
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
      ))}
    </>
  );
}

export default portfolio;
