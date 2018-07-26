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
    const { userName, password } = this.state;
    const payload = {
      userName,
      password,
    };
    const request = {
      method: 'POST',
      body: JSON.stringify(payload),
    };
    fetch('/login', request)
      .then((res) => {
        const code = res.status;
        res.json().then((reply) => {
          if (code !== 200) {
            window.alert(reply.message);
          } else {
            window.localStorage.setItem('token', reply.token);
            this.props.history.push('/');
          }
        });
      });
  }

  render() {
    const { userName, password } = this.state;
    const { onChange, onSubmit } = this;
    const token = window.localStorage.getItem('token');
    if (token === null) {
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
    return (
      <div className="login">
        <div className="login-border">
         You are already logged in!! <div className="login-goBack" onClick={() => { this.props.history.push('/'); }}>Go back</div>
        </div>
      </div>
    );
  }
}

export default Login;
