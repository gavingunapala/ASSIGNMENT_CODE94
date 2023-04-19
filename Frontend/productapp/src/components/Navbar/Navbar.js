import React from 'react';
import '../../styles/Navbar.css';
import myImage from '../../assert/img/bluecolor.jpg';

const Navbar = () => {
  return (
    <>
      <div class="topnav">
        <div class="topnav-right">
          <a href="#search"><li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Admin
              </a>
            </li></a>
          <a href="#about"><img src={myImage} alt="Admin avatar" className="rounded-circle " width="30" height="30" /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
