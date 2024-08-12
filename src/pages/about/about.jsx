import React from "react";
import "./about.scss";

import HeaderPage from "../../components/Header-page/HeaderPage.jsx";

import infoP from "../../assets/info/info";
import {
  GA,
  GSC,
  Ahrefs,
  ScreamingFrogSEO,
  Smush,
  YoastSEO,
  Github,
  Gitlab,
} from "../../assets/skills/tools.js";

import {
  HTML,
  CSS,
  JS,
  PHP,
  Hubspot,
  C,
  Python,
} from "../../assets/skills/programming-language.js";

import { Nodejs, Reactjs, Wordpress } from "../../assets/skills/framework.js";

const tools = [
  { name: "Google Analytics", path: GA },
  { name: "Google Search Console", path: GSC },
  { name: "Ahrefs", path: Ahrefs },
  { name: "Screaming Frog SEO", path: ScreamingFrogSEO },
  { name: "Smush", path: Smush },
  { name: "Yoast SEO", path: YoastSEO },
  { name: "Github", path: Github },
  { name: "Gitlab", path: Gitlab },
];

const programmingLanguage = [
  { name: "HTML", path: HTML },
  { name: "CSS", path: CSS },
  { name: "JS", path: JS },
  { name: "PHP", path: PHP },
  { name: "Hubspot", path: Hubspot },
  { name: "C", path: C },
  { name: "Python", path: Python },
];

const frameworks = [
  { name: "Nodejs", path: Nodejs },
  { name: "Reactjs", path: Reactjs },
  { name: "Wordpress", path: Wordpress },
]

const edu = [
  {
    time: "2017-2020",
    name: "Binh Long specialized high school",
    major: "",
  },
  {
    time: "2020- 2024",
    name: "University of Natural Sciences, Ho Chi Minh City",
    major: "Major: Information Technology",
  },
];

function about() {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="slide"></div>
      <div className="section about" data-aos="fade-up">
        <HeaderPage tl1="About" tl2="Me" tlBig="Resume" />
        <div className="container">
          <div className="info row">
            <div className="infos col-6">
              <h2>PERSONAL INFOS</h2>
              <ul className="info-list " data-aos="fade-up-right">
                <li>
                  {" "}
                  <span>First Name: </span> {infoP.FisrtName}
                </li>
                <li>
                  {" "}
                  <span>Last Name: </span> {infoP.LastName}
                </li>
                <li>
                  {" "}
                  <span>Birthday: </span> {infoP.Birthday}
                </li>
                <li>
                  {" "}
                  <span>Sex: </span> {infoP.Sex}
                </li>
                <li>
                  {" "}
                  <span>Address: </span> {infoP.Address}
                </li>
                <li>
                  {" "}
                  <span>Phone: </span> {infoP.Phone}
                </li>
                <li className="max-width">
                  {" "}
                  <span>Email: </span>
                  <a href={`mailto:${infoP.Email}`}>{infoP.Email}</a>
                </li>
                <li className="max-width">
                  {" "}
                  <span>Linkedin: </span>
                  <a href={infoP.Linkedin}>{infoP.Linkedin}</a>
                </li>
                <li className="max-width">
                  {" "}
                  <span>Github: </span> <a href={infoP.Git}>{infoP.Git}</a>
                </li>
              </ul>
            </div>
            <div className="edus col-6">
              <h2>EDUCATION</h2>
              <div className="edus-list" data-aos="fade-up-left">
                {edu.map((edu, i) => (
                  <div className="edus-list__item " key={i}>
                    <div className="icon">
                      <i className="bx bxs-briefcase"></i>
                    </div>
                    <span className="time">{edu.time}</span>
                    <h3>{edu.name} </h3>
                    <p>{edu.major}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-title">
              <h2 className="title">WORK EXPERIENCE</h2>
            </div>
            <div className="container">
              <div className="experiences row">
                <div className="experience  col-12">
                  <div className="experience__header" data-aos="fade-up">
                    <div className="experience__header__name">
                      <div className="icon">
                        <i className="bx bxs-briefcase"></i>
                      </div>
                      <h2>ITC Group</h2>
                    </div>
                    <div className="experience__header__time">
                      <span className="time">Jul 2023 - Now:</span>
                      <span className="position"> Fullstack Developer</span>
                    </div>
                  </div>
                  <div className="experience__desc" data-aos="fade-up">
                    <p>
                      During my time in this role, I gained extensive experience
                      in building and optimizing websites using both WordPress
                      and HubSpot. My focus has always been on creating a solid
                      foundation for SEO success, from initial website structure
                      to ongoing technical improvements. I've become proficient
                      in utilizing various tools to regularly monitor and
                      address any SEO-related issues. Additionally, I've
                      implemented website security configurations to ensure data
                      protection and prevent vulnerabilities.
                    </p>
                    <p>
                      My responsibilities also include developing form
                      management functionalities and backup solutions.
                      Currently, I manage two websites (one on HubSpot, one on
                      WordPress), where I handle daily tasks like building new
                      features, refining the UI based on user feedback, and
                      managing SEO and Google Ads campaigns.
                    </p>
                    <p>
                      I'm confident in my ability to keep your website
                      performing at its best, both in terms of user experience
                      and search visibility. Let's discuss how I can contribute
                      to your online success!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-title">
              <h2 className="title gap">TOOLS</h2>
            </div>
            <div className="skill-list border">
              {tools.map((skill, i) => (
                <div className="skill-item" key={i} data-aos="fade-up">
                  <div className="skill-item__bg">
                    <div
                      className="skill-item__bg-img"
                      style={{ backgroundImage: `url(${skill.path})` }}
                    ></div>
                  </div>
                  <p className="skill-item__title">{skill.name}</p>
                </div>
              ))}
            </div>

            <div className="skill-title">
              <h2 className="title gap">PROGRAMMING LANGUAGE</h2>
            </div>
            <div className="skill-list border">
              {programmingLanguage.map((skill, i) => (
                <div className="skill-item" key={i} data-aos="fade-up">
                  <div className="skill-item__bg">
                    <div
                      className="skill-item__bg-img"
                      style={{ backgroundImage: `url(${skill.path})` }}
                    ></div>
                  </div>
                  <p className="skill-item__title">{skill.name}</p>
                </div>
              ))}
            </div>

            <div className="skill-title">
              <h2 className="title gap">FRAMEWORK</h2>
            </div>
            <div className="skill-list border">
              {frameworks.map((skill, i) => (
                <div className="skill-item" key={i} data-aos="fade-up">
                  <div className="skill-item__bg">
                    <div
                      className="skill-item__bg-img"
                      style={{ backgroundImage: `url(${skill.path})` }}
                    ></div>
                  </div>
                  <p className="skill-item__title">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
