import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

class Test extends React.Component {
  state = {
    code: '',
    error: '',
    message: '',
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token !== null) {
      const request = {
        method: 'POST',
      };
      fetch('/info', request)
        .then((res) => {
          res.json().then((reply) => {
            console.log('Response: ', reply);
            this.updateState(reply);
          });
        });
    }
  }

  updateState = (reply) => {
    this.setState({
      code: reply.statusCode,
      error: reply.error,
      message: reply.message,
    });
  }

  render() {
    const token = window.localStorage.getItem('token');
    const {
      code, error, message,
    } = this.state;
    return (
      <div className="App-main">
        <Header history={this.props.history} />
        <div className="App">
          {
            token === null
              ? (
                <div className="App-content">
                  Please Log in
                </div>
              )
              : (
                <div className="App-content">
                  Response from BE: <br />
                  statusCode: {code} <br />
                  error: {error} <br />
                  message: {message} <br /><br />
                  You can also see this message in console
                </div>
              )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Test;
