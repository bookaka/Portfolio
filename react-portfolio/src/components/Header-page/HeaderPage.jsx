import React from 'react'
import './HeaderPage.scss'

function HeaderPage(props) {
  
  return (
    <div className="page-header">
      <h1><span>{props.tl1}</span> {props.tl2}</h1>
      <h2>{props.tlBig}</h2>
    </div>
  )
}

export default HeaderPage