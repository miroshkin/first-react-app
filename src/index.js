import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const title = React.createElement (
  'h1',
  {id: 'main-title', title: 'This is a title'},
  'My first react element'
);

const desc = React.createElement(
  'p',
  null,
  'I just learned new React feature'
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

console.log(title);

ReactDOM.render(
  header,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
