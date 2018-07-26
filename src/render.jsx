import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './render.css';

const render = () => {
  ReactDOM.render(<Routes />, document.getElementById('root'));
};

export default render;
