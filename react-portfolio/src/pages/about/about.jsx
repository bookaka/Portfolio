import React from 'react'
import './about.scss'

import HeaderPage from '../../components/Header-page/HeaderPage.jsx'

import infoP from '../../assets/info/info'
import { html, css, sass, javascript, responsive, react, redux, git, axios,cpp,mongodb,nodejs,python,sql } 
from '../../assets/skills/skills.js'

const skills = [
  {
    name: 'html',
    path: html
  },
  {
    name: 'css',
    path: css
  },
  {
    name: 'sass',
    path: sass
  },
  {
    name: 'javascript',
    path: javascript
  },
  {
    name: 'responsive web',
    path: responsive
  },
  {
    name: 'react',
    path: react
  },
  {
    name: 'redux',
    path: redux
  },
  {
    name: 'axios',
    path: axios
  },
  {
    name: 'nodejs',
    path: nodejs
  },
  {
    name: 'mongodb',
    path: mongodb
  },
  {
    name: 'sql server',
    path: sql
  },
 
  {
    name: 'python',
    path: python
  },
  {
    name: 'c++',
    path: cpp
  },

  {
    name: 'git',
    path: git
  },
]

const edu = [
  {
    time: '2017-2020',
    name: 'Binh Long specialized high school',
    major: '',
  },
  {
    time: '2020- Currently',
    name: 'University of Natural Sciences, Ho Chi Minh City',
    major: 'Major: Information Technology',

  }
]

function about() {
  window.scrollTo(0, 0)
  return (
    <>
      <div className="slide"></div>
      <div className="section about" data-aos="fade-up">
        <HeaderPage tl1="About" tl2="Me" tlBig="Resume"/>
        <div className="container">
          <div className="info row">
            <div className="infos col-6">
              <h1>PERSONAL INFOS</h1>
              <ul className="info-list "data-aos="fade-up-right">
                <li> <span>Firt Name: </span> {infoP.FisrtName}</li>
                <li> <span>Last Name: </span> {infoP.LastName}</li>
                <li> <span>Birthday: </span> {infoP.Birthday}</li>
                <li> <span>Sex: </span> {infoP.Sex}</li>
                <li> <span>Address: </span> {infoP.Address}</li>
                <li> <span>Phone: </span> {infoP.Phone}</li>
                <li> <span>Email: </span> {infoP.Email}</li>
                <li> <span>Linkedin: </span><a href={infoP.Linkedin}>{infoP.Linkedin}</a></li>
                <li> <span>Github: </span> <a href={infoP.Git}>{infoP.Git}</a></li>
              </ul>
            </div>
            <div className="edus col-6">
              <h1>EDUCATION</h1>
              <div className="edus-list"data-aos="fade-up-left">
                {edu.map((edu, i) => (
                  <div className="edus-list__item " key={i}>
                    <div className="icon">
                      <i className='bx bxs-briefcase' ></i>
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
              <h1>MY SKILLS</h1>
            </div>
            <div className="skill-list">
              {
                skills.map((skill,i)=>(
                  <div className="skill-item" key={i} data-aos="fade-up">
                    <div className="skill-item__bg">
                      <div className="skill-item__bg-img" style={{backgroundImage: `url(${skill.path})`}}></div>
                    </div>
                    <p className='skill-item__title'>{skill.name}</p>
                  </div>
                ))
              }
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default about