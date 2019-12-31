import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../public/stylesheets/navbar.css";
import RegisterModal from "./auth/registerModal.component";
import LogOut from "./auth/logout.component";
import LoginModal from "./auth/loginModal.component";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../actions/auth.actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

import store from "../store";

class NavbarComponent extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  componentDidMount() {
    store.dispatch(loadUser());
    this.interval = setInterval(() => {
      store.dispatch(loadUser());
    }, 60000); //check if the user is logged in every minute
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isAuth, user } = this.props.auth; //get everything from authreducer, what we defined there, user.. auth etc.

    const authLinks = (
      <Fragment>
        <li className="navbar-text">
          {user ? `Signed in as: ${user.name}!` : ""}
        </li>
        <li className="navbar-item">
          <Link to="/user" className="nav-link">
            Profile
          </Link>
        </li>
        <li>
          <LogOut />
        </li>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <li>
          <RegisterModal />
        </li>
        <li>
          <LoginModal />
        </li>
      </Fragment>
    );

    return (
      <Navbar className="navbar navbar-dark navbar-expand-lg">
        <NavLink href="/" className="navbar-brand">
          MicroBlog
        </NavLink>
        <div className="collapse navbar-collapse">
          <Nav className="navbar-nav mr-auto">
            <NavItem>
              <NavLink href="/posts" className="nav-link">
                All Posts
              </NavLink>
            </NavItem>
            {isAuth ? (
              <NavItem>
                <NavLink href="/followed" className="nav-link">
                  Followed Posts
                </NavLink>
              </NavItem>
            ) : null}
          </Nav>
        </div>
        <ul className="navbar-nav mr-auto ">
          {isAuth ? authLinks : guestLinks}
        </ul>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth //from reducer
});
//connect to store -> data to mapstatetoprops
//actions we want to use as second paranthesis
export default connect(mapStateToProps, null)(NavbarComponent);
