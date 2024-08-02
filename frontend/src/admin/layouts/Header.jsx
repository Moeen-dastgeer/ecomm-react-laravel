import React from 'react'

export const Header = () => {
  return <>
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="fa fa-cog" />
      </a>
      <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
        <a href="" className="dropdown-item">
          <i className="fa fa-user mr-2" /> Profile
        </a>
        <div className="dropdown-divider" />
        <a href="" className="dropdown-item">
          <i className="fa fa-key mr-2" /> Change Password
        </a>
        <div className="dropdown-divider" />
        <a href="" className="dropdown-item">
          <i className="fa fa-sign-out-alt mr-2" /> Logout
        </a>
        <form id="logout-form" action="" method="POST" style={{display: 'none'}}>@csrf</form>
      </div>
    </li>
  </ul>
</nav>


        </>
}
