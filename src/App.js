import logo from './logo.svg';
import './App.css';
import questionData from './data/Apprentice_TandemFor400_Data.json'
import { useEffect, useState } from 'react';
import { Header, Main } from 'grommet';
import {BrowserRouter} from 'rea'
import { Switch } from 'react-router-dom';

function App({ users, currentUser }) {
  


  return (
    <div className="App">
      <Header></Header>
      <Main>
        <BrowserRouter>
          <Switch>

          </Switch>
        </BrowserRouter>
      </Main>
    </div>
  );
}

export default App;
