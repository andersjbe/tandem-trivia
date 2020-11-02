import './App.css';
import { React, useEffect, useState } from 'react';
import { Anchor, Box, Footer, Main, Nav, Text } from 'grommet';
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import { DocumentUser, Github, Linkedin } from 'grommet-icons';

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
    <>
      <Navbar user={currentUser} users={users} setUser={setCurrentUser} />
      <Main >
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

          <Route 
            path='*'
            component={() => {
              <Box align='center' alignSelf='center'>
                <Heading level={3}>Looks like there's nothing here, why don't you go back to the home page?</Heading>
              </Box>
            }}
          />
        </Switch>
      </Main>
      <Footer id='footer' background='#2c4023' justify='between' direction='row' pad='medium' >
        <Nav direction='row'>
          <Anchor 
          color='#bfc096  '
            label='Github'
            icon={<Github />}
            href='github.com/andersjbe'
            target='_blank'
          />
          <Anchor 
          color='#bfc096  '
            label='LinkedIn'
            icon={<Linkedin />}
            href='https://www.linkedin.com/in/ben-anderson-79964266/'
            target='_blank'
          />
          <Anchor 
          color='#bfc096  '
            label='Portfolio'
            icon={<DocumentUser />}
            href='https://andersjbe.github.io/'
            target='_blank'
          />
        </Nav>

        <Text color='#bfc096  '>&copy; Ben Anderson 2020</Text>
      </Footer>
    </>
  );
}

export default App;
// 717244