import React from 'react'
import { Link } from 'react-router-dom';


export const Sidebar = () => {
  return <>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  <a href className="brand-link">
    <img src alt="Admin Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light" />
  </a>
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a className="d-block">User name</a>
        <a href="#">
          User Role
        </a>
      </div>
    </div>
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            <i className="nav-icon fas fa-users" />
            <p>Products</p>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</aside>


        </>

}
