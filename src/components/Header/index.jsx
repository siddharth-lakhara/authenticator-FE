import React from 'react';
import './Header.css';

const logout = () => {
  // const token = window.localStorage.getItem('token');
  window.localStorage.removeItem('token');
};

const LoginButton = ({ history }) => (
  <div>
    <button type="button" onClick={() => { history.push('/login'); }} className="loginButton">
      Log in
    </button>
    <button type="button" onClick={() => { history.push('/register'); }} className="registerButton">
      Sign up
    </button>
  </div>
);

const LogoutButton = ({ history }) => (
  <div>
    <button type="button" onClick={() => { logout(); history.push('/login'); }} className="loginButton">
      Log out
    </button>
  </div>
);

const Header = ({ history }) => {
  const token = window.localStorage.getItem('token');
  return (
    <div className="header">
      <div>
        Welcome !
      </div>
      <div className="ghost" />
      {token === null ? <LoginButton history={history} /> : <LogoutButton history={history} /> }
    </div>
  );
};

export default Header;
