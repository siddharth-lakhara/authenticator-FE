import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/app';
import Routes from './Routes';

const render = () => {
  ReactDOM.render(<Routes />, document.getElementById('root'));
};

export default render;
