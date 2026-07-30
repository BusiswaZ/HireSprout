import React from "react";
import {Link} from 'react-router-dom'

function Navbar()
{
    return(
      <nav class="navbar navbar-expand-lg shadow-sm">
  <div class="container">
    
    <Link to="/" className="navbar-brand">
    <div className="logo-text">
        <span className="logo-hire">Hire</span>
        <span className="logo-sprout">Sprout</span>
    </div>

    <small className="logo-tagline">
        Connecting Talent
    </small>
</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
         
          <Link to ="/" className="nav-link">Home</Link>
        </li>
        <li class="nav-item">
           <Link to ="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item dropdown">

    <a
        className="nav-link dropdown-toggle"
        href="/#"
        id="pagesDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
        Explore
    </a>

    <ul className="dropdown-menu" aria-labelledby="pagesDropdown">

        <li>
            <Link className="dropdown-item" to="/how-it-works">
                How It Works
            </Link>
        </li>

        <li>
            <Link className="dropdown-item" to="/features">
                Features
            </Link>
        </li>

        <li>
            <Link className="dropdown-item" to="/benefits">
                Benefits
            </Link>
        </li>

    </ul>

</li>
        <li class="nav-item">
           <Link to ="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  

    );
}
export default Navbar;