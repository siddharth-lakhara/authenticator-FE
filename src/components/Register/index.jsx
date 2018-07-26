import React from 'react';
import InputItems from '../InputItems';
import './register.css';

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
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
    const {
      firstName, lastName, email, userName, password,
    } = this.state;
    const payload = {
      firstName,
      lastName,
      email,
      userName,
      password,
    };
    const request = {
      method: 'POST',
      body: JSON.stringify(payload),
    };
    fetch('/register', request)
      .then((res) => {
        const code = res.status;
        res.json().then((reply) => {
          if (code !== 200) {
            window.alert(reply.message);
          } else {
            window.alert(reply.message);
            this.props.history.push('/login');
          }
        });
      });
  }

  render() {
    const {
      firstName, lastName, email, userName, password,
    } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <div className="login">
        <div className="register-border">
          <div className="login-login">
              Register
          </div>
          <div className="login-inputItems">
            <InputItems
              name="firstName"
              value={firstName}
              title="First name"
              type="text"
              onChange={onChange}
            />
            <InputItems
              name="lastName"
              value={lastName}
              title="Last name"
              type="text"
              onChange={onChange}
            />
            <InputItems
              name="email"
              value={email}
              title="email"
              type="text"
              onChange={onChange}
            />
            <InputItems
              name="userName"
              value={userName}
              title="User name"
              type="text"
              onChange={onChange}
            />
            <InputItems
              name="password"
              value={password}
              title="Password"
              type="password"
              onChange={onChange}
            />
            <button type="button" onClick={onSubmit} className="login-submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
