import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row nav-list">
          <li className="mx-1">
            <Link to="/shop">
              <span>Our Products</span>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">
              <span>Order History</span>
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row nav-list">
          <li className="mx-1">
            <Link to="/shop">
              <span>Our Products</span>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">
              <span>Signup</span>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              <span>Login</span>
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div>
    <header className="flex-row px-1 space-between">
      <h1 className="top-stripe-h1">
        <Link to="/">
          <span role="img" aria-label="shopping bag" className="site-title"></span>
          What's Your Beef
        </Link>
      </h1>
    </header>

      <nav>
        {showNavigation()}
      </nav>
    </div>
  );
}

export default Nav;
