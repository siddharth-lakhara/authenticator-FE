import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './App.css';

class App extends React.Component {
  state = {
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token !== null) {
      const request = {
        method: 'POST',
        headers: { Authorization: token },
      };
      fetch('/info', request)
        .then((res) => {
          res.json().then((reply) => {
            this.updateState(reply);
          });
        });
    }
  }

  updateState = ({
    firstName, lastName, userName, email,
  }) => {
    this.setState({
      firstName, lastName, userName, email,
    });
  }

  render() {
    const token = window.localStorage.getItem('token');
    const {
      userName, email, firstName, lastName,
    } = this.state;
    return (
      <div className="App-main">
        <Header history={this.props.history} />
        <div className="App">
          {
              token === null
                ? (
                  <div className="App-content">
                  You are viewing this page because you are not logged in<br />
                  Click on the login/Signup button to login or register<br />
                  This page will show your information once you are logged in<br />
                  The information will be fetched from back-end. Your identity will be JWT token<br />
                  </div>
                )
                : (
                  <div className="App-content">
                  You are successfully logged in <br />
                  Decoded JWT token information as sent from BE is as follows:<br />
                    <div className="App-information">
                      <div className="text-label"><strong>User Name:</strong> {userName}</div>
                      <div className="text-label"><strong>Email:</strong> {email}</div>
                      <div className="text-label"><strong>First Name:</strong> {firstName}</div>
                      <div className="text-label"><strong>Last Name:</strong> {lastName}</div>
                    </div>
                  </div>
                )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
