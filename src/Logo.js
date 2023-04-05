import React from 'react'
import logo from './logo.png';
import './Logo.css'

function Logo() {
  return (
    <div>
      <img src={logo} className='logo' alt='Tank Logo'/>
    </div>
  )
}

export default Logo