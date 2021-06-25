import './Header.css'
import Logo from '../../img/header.png'

import React from 'react'

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__name">
            <h1 className="header__title">How the scenes fit together</h1>
            <p className="header__text">Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
          </div>
          <img src={Logo} alt="Logo" className="header__logo" />
        </div>
      </div>
    </div>
  )
}
