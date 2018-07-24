import React from 'react';
import './Header.css';

const Header = ({ props }) => (
  <div className="header">
    <div>
    Welcome !
    </div>
    <div className="ghost" />
    <button type="button" className="loginButton">
      Log in
    </button>
    <button type="button" className="registerButton">
      Sign up
    </button>
  </div>
);

export default Header;
