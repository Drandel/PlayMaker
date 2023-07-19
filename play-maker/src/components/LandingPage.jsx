import React from 'react'
import { Link } from 'react-router-dom'
import vballCourt from '../assets/vball_court.jpg'

function LandingPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex">
          <Link to="/" className="navbar-brand">PlayMaker</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto p-2">
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="showcase">
              <img src={vballCourt} alt="Logo"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2>Welcome to PlayMaker</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat malesuada enim non rutrum. Suspendisse potenti. 
              Proin eget lobortis arcu, vel scelerisque dolor. Duis auctor tristique aliquet. 
              In tristique dolor vitae lectus tristique, nec euismod nulla tristique. 
              Integer id leo sed sapien malesuada convallis. 
              Suspendisse sed sollicitudin ipsum, id volutpat justo. 
            </p>
            <p>
              Nunc eu purus libero. Mauris scelerisque felis at est interdum eleifend. 
              Nam ultrices erat sit amet orci lobortis efficitur. 
              Sed sit amet nibh ac turpis fermentum efficitur a sit amet ante. 
              Sed id justo semper, dapibus mauris eget, aliquam felis. 
              Aenean vulputate elit nec nibh tincidunt gravida. 
              Phasellus pharetra rutrum urna, ut efficitur velit.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
