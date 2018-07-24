import React from 'react';
import './login.css';

class Login extends React.Component {
  state = {
    userName: '',
    password: '',
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit = () => {

  }

  render() {
    const { userName, password } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <div className="login">
        <div className="login-border">
          <div className="login-login">
            LOGIN
          </div>
          <div className="login-inputItems">
            <div className="login-userName">
              <div className="login-text">User name:</div>
              <input className="login-inputFields" name="userName" value={userName} type="text" onChange={onChange} />
            </div>
            <div className="login-password">
              <div className="login-text">Password:</div>
              <input className="login-inputFields" name="password" value={password} type="password" onChange={this.onChange} />
            </div>
            <button type="button" onClick={onSubmit} className="login-submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
