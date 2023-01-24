import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signin from './Signin';

export default function Navbar() {
  return (
    <Router>
    <div>

        <nav class="navbar navbar-expand-md navbar-light bg-light">

            <a class="navbar-brand" href="./">
                <img src="logo.png" width="70" height="50" alt="" style={{marginLeft:'30px'}}/>
            </a>
            <a class="navbar-brand" href="./" style={{fontSize:'30px', fontFamily:'Lucida Sans Unicode'}}>Star Car Sale <span class="sr-only">(current)</span> </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav">

                    <li class="nav-item ">
                        <a class="nav-link" href="./">Catogeries </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="./Signin.js">Signin</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="./Login.js">Login</a>
                    </li>

                </ul>
            </div>
        </nav>

        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/Signin.js' element = {<Signin/>}/>
            <Route path = '/Login.js' element = {<Login/>}/>
        </Routes>

    </div>
    </Router>
  )
}
