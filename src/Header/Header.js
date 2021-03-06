import React from 'react'
import mart from '../assets/mart.png'

import './Header.css'

function Header() {
  return (
    <div className="header__container">
        <div className='header__container--text--container'>
            <div className='header__container--text'>
                <h1>Convenience</h1>
                <h1>forever.</h1>
                <h1>Freshness</h1>
                <h1><span className='header__container--text--red'>never.</span></h1>
            </div>
        </div>
        <div className='header__container--img'>
            <img className='header__container--img--mart' src={mart} alt='liquore store'/>
        </div>
        
    </div>
  )
}

export default Header