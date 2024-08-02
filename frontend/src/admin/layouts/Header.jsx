import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return <>
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu"  role="button"><i className="fas fa-bars" /></a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen"  role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown">
        <i className="fa fa-cog" />
      </a>
      <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
        <Link className="dropdown-item">
          <i className="fa fa-user mr-2" /> Profile
        </Link>
        <div className="dropdown-divider" />
        <Link className="dropdown-item">
          <i className="fa fa-key mr-2" /> Change Password
        </Link>
        <div className="dropdown-divider" />
        <Link className="dropdown-item">
          <i className="fa fa-sign-out-alt mr-2" /> Logout
        </Link>
        <form id="logout-form" action="" method="POST" style={{display: 'none'}}></form>
      </div>
    </li>
  </ul>
</nav>


        </>
}
