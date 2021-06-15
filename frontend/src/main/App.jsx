import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nave from '../components/template/Nave'
import Footer from '../components/template/Footer'


export default props => 
<BrowserRouter>
    <div className="app">
        <Logo />
        <Nave />
        <Routes />
        <Footer />
    </div>
</BrowserRouter>