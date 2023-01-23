import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signin from './Signin';

export default function Navbar() {
  return (
    <Router>
    <div>

        {/* <nav class="navbar navbar-expand-md bg-light" role="navigation">

            <a class="navbar-brand" href="./">
                <img src="logo.png" width="70" height="50" alt="" style={{marginLeft:'30px'}}/>
            </a>

            <a class="navbar-brand " href="./" style={{fontSize:'30px', fontFamily:'Lucida Sans Unicode'}}>Star Car Sale</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto" >

                    <li class="nav-item active">
                        <a class="nav-link" href="./Signin.js" >Sign In <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="./Login.js">LogIn</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href=".#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href=".#">Action</a>
                            <a class="dropdown-item" href=".#">Another action</a>

                        <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href=".#">Something else here</a>
                        </div>
                    </li>

                </ul>

                <form class="form-inline my-2 my-lg-1">

                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                </form>
            </div>
        </nav> */}

        <nav class="navbar navbar-expand-sm navbar-light bg-light">

            <a class="navbar-brand" href="./">
                <img src="logo.png" width="70" height="50" alt="" style={{marginLeft:'30px'}}/>
            </a>
            <a class="navbar-brand" href=".#">Star Car Sale</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav">

                <li class="nav-item active">
                    <a class="nav-link" href=".#">Home <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href=".#">Features</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href=".#">Pricing</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link disabled" href=".#">Disabled</a>
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
