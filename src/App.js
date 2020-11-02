import './App.css';
import { React, useEffect, useState } from 'react';
import { Main } from 'grommet';
import {  Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  const [users, setUsers] = useState({})
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
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
        currentUser: ''
      }
      localStorage.setItem('andersjbe/trivia', JSON.stringify(userData))
    } else {
      userData = JSON.parse(localStorage.getItem('andersjbe/trivia'))
    }
    setUsers(userData.users)
    setCurrentUser(userData.currentUser)
  }, [])

  return (
    <div className="App">
        <Navbar user={currentUser} />
        <Main>
          <Switch>
            <Route
              exact
              path='/play'
              component={() => <Game users={users} setUsers={setUsers} currentUser={currentUser} />}
            />

            <Route
              exact
              path='/'
              component={() => <Welcome currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} />}
            />
          </Switch>
        </Main>
    </div>
  );
}

export default App;
