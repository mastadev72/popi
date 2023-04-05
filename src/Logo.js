import React from 'react'
import logo from './logo.svg';
import './Logo.css'

function Logo() {
  return (
    <div>
      <img src={logo} className='logo' alt='Tank Logo'/>
    </div>
  )
}

export default Logo