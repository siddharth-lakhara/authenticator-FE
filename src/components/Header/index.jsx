import React from 'react';
import './Header.css';

const Header = ({ history }) => (
  <div className="header">
    <div>
    Welcome !
    </div>
    <div className="ghost" />
    <button type="button" onClick={() => { history.push('/login'); }} className="loginButton">
      Log in
    </button>
    <button type="button" onClick={() => { history.push('/register'); }} className="registerButton">
      Sign up
    </button>
  </div>
);

export default Header;
