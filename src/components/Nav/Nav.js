import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.scss";

const Nav = (props) => (
  <nav>
    <ul>
      <li>
        <Link className="nav-link" to="/home">
          {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
          {props.user.id ? "Home" : "Login / Register"}
        </Link>
      </li>

      {/* Show this Link if a user is an Admin */}
      {props.user.admin && (
        <li>
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
      )}

      {/* Always show this link since the about page is not protected */}
      <li>
        <Link className="nav-link" to="/about">
          Information
        </Link>
      </li>

      <li>
        <Link className="nav-link" to="/vegetables">
          Vegetables
        </Link>
      </li>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <li>
          <a href="#" onClick={() => props.dispatch({ type: "LOGOUT" })}>
            Logout
          </a>
        </li>
      )}
    </ul>
  </nav>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
