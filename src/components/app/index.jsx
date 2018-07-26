import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App-main">
        <Header history={this.props.history} />
        <div className="App">
          Front page content
        </div>
        <Footer />
      </div>


    );
  }
}

export default App;
