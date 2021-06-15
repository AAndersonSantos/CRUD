import './Logo.css'
import logo from '../../img/logo2.png'
import React from 'react'
import {Link} from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>