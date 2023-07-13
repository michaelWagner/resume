import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const json = require('./resume.json');

ReactDOM.render(
  <React.StrictMode>
    <App resumeJson={json} />
  </React.StrictMode>,
  document.getElementById('root')
);
