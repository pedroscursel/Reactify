// Tools
import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import LogoImage from '../../images/spotify.png'

const Header = () => {
  return (
    <Link to="/dashboard">
      <img src={ LogoImage } alt="Spotify Logo" className="logo" />
    </Link>
  )
}

export default Header
