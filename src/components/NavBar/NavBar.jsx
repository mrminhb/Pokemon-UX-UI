import React from 'react'

import './NavBar.css'

import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-bar">
        <div className="left">
            <img src="/assets/pokeball-transparent-png-2.png" alt="" />
            <h1>Pokémon Party Builder</h1>
        </div>
        <div className="right">
            <Link to="/" className="nav-item">
                <img src="/assets/house_icon.png" alt="" className="home" />
                <h2>Home</h2>
            </Link>
            <Link to="/party" className="nav-item">
                <img src="/assets/party_icon.png" alt="" className="zoom" />
                <h2>Party</h2>
            </Link>
            <Link to="/login" className="nav-item" >
                <img src="/assets/login_icon.png" alt="" className="flipping_icon" />
                <h2>Login</h2>
            </Link>
            <Link to="/register" className="nav-item">
                <img src="/assets/register_icon.png" alt="" />
                <h2>Register</h2>
            </Link>
        </div>
    </div>
  )
}

export default NavBar