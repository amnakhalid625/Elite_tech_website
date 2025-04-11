import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../assets/elitelogo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <section className='container-fluid navbar-container'>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="logo-img" className='logoImg' />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Navigate your next</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Infosys Knowledge Institute</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Investors</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Careers</a>
                  </li>
                </ul>

                <div className='icons'>
                  <IoSearchSharp className='searchIcon' />
                  <GiHamburgerMenu className='hamBurger' />
                </div>
              </div>
            </div>
          </nav>
      </section>
    </>
  )
}

export default Navbar