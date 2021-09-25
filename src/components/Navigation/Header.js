import React from "react";
import {Link} from 'react-router-dom';

const Header = (props) => {

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top"><img src="images/city.png" alt="..." /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="/">Address Book</Link></li>
                </ul>
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            </ul>
            </div>
        </div>
    </nav>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    )
}

export default Header;