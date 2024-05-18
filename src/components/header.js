import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
        <div className="container-fluid">
          <a className="navbar-brand text-white">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Link</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/signUp">Sign Up</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-white">Action</a></li>
                  <li><a className="dropdown-item">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              
            </form>
          </div>
        </div>
      </nav>
    );
  };

export default Header