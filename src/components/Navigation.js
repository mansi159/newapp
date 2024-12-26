import React from 'react'
import './Navigation.css'
import logo from './logo.png'
import HamburgerDrawer from './HamburgerDrawer'

const Navigation = ({setCategory}) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Navigation