import React from 'react';
import { Link } from 'react-router-dom';
import useLogout from '../../utils/Logout';

const Navbar = () => {
  const logout = useLogout()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="#">
          E-Commerce
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="add-products">
                Add Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="update-products">
                Update Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="profile">
                Profile
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-danger" onClick={logout} type="submit">
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
