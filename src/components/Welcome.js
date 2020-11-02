import { Box, Button, Heading, Paragraph, TextInput, Text } from 'grommet'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Welcome({ currentUser, setCurrentUser, users }) {
    const [username, setUsername] = useState('')
    const history = useHistory()

    const login = () => {
        if (username.length > 0) {
            setCurrentUser(username)
            window.localStorage.setItem('andersjbe/trivia', JSON.stringify({ users, currentUser: username }))
            history.push('/play')
        }
    }

    return (
        <Box
            align='center'
            alignSelf='center'
        >
            <Heading level={1}>
                {
                    currentUser ?
                        `Welcome, ${currentUser}!` :
                        'Welcome!'
                }
            </Heading>

            <Paragraph>
                Hi there! I'm Ben Anderson, and this app is a trivia game I made for my application to Tandem. You can learn more about me here, otherwise you look below to start playing the game. Good Luck!
            </Paragraph>

            {
                currentUser ?
                    <Link to='/play'>
                        <Button
                            label='Play'
                        />
                    </Link>
                    :
                    <>
                        <Text>Sign in to play:</Text>
                        <TextInput
                            placeholder='username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        { username.length > 0 ?
                            <Button
                                label='Play'
                                onClick={() => login()}
                            />
                            : null
                        }
                    </>
            }
        </Box>
    )
}

