import React from 'react'

import './Login.css'

import { Link } from 'react-router-dom'

function Login() {
  return (
    <div id="login-page-ctn">
        <div id="form-container">
            <div id="title">
                <img src="/assets/gif_1.gif" alt="" className="invert" />
                <h2>Welcome!</h2>
                <img src="/assets/gif_1.gif" alt="" />
            </div>
            <form action="">
                <div className="field">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" />
                </div>
                <button id="login-btn" type="submit">
                    <span>Log in!</span>
                </button>
            </form>
            <span>Don't have an account? Register<Link to="/register"> here</Link>
            </span>
        </div>
    </div>
  )
}

export default Login