import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Grommet } from 'grommet';

let userData = {}
if (!localStorage.getItem('andersjbe/trivia')) {
  userData = {
    users: {
      'haXX0r': 1000000,
      'smart_guy': 1000,
      'not-a-bot': 900,
      'actually-a-bot': 300,
      'struggling': 100
    },
    currentUser: null
  }
  localStorage.setItem(JSON.stringify(userData))
} else {
  userData = JSON.parse(localStorage.getItem('andersjbe/trivia'))
}

ReactDOM.render(
  <React.StrictMode>
    <Grommet full>
      <App {...userData} />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
