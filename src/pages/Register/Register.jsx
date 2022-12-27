import React from 'react'

import './Register.css'

import { Link } from 'react-router-dom'

function Register() {
  return (
    <div id="register-page-ctn">
        <div id="form-container">
            <div id="title">
                <img src="/assets/register2_icon.png" alt="" className="rotate_effect" />
                <h2>Welcome to PokePartyBuilder!</h2>
                <img src="/assets/pokeball-transparent-png-2.png" alt="" />
            </div>
            <form action="">
                <div className="field">
                    <label htmlFor="username">Username:<p>*</p></label>
                    <input type="text" name="username" />
                </div>
                <div className="field">
                    <label htmlFor="email">Email:<p>*</p></label>
                    <input type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password:<p>*</p></label>
                    <input type="password" name="password" />
                </div>
                <div className="field">
                    <label htmlFor="password">Confirm password:<p>*</p></label>
                    <input type="password" name="cPassword" />
                </div>
                <button id="login-btn" type="submit">
                    <span>Join now!</span>
                </button>
            </form>
            <span>Already have an account? Login <Link to="/login">here</Link>
            </span>
        </div>
    </div>

  )
}

export default Register