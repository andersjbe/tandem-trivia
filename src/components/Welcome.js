import { Box, Button, Heading, Paragraph, TextInput, Text, Anchor } from 'grommet'
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
            pad='small'
        >
            <Heading level={2}>
                {
                    currentUser ?
                        `Welcome, ${currentUser}!` :
                        'Welcome!'
                }
            </Heading>

            <Paragraph>
                Hi there! I'm Ben Anderson, and this app is a trivia game I made for my application to Tandem. You can learn more about me <Anchor href='https://andersjbe.github.io/' target='_blank' color='#ff694e'>here</Anchor>, otherwise look below to start playing the game. Good Luck!
            </Paragraph>

            {
                currentUser ?
                    <Link to='/play'>
                        <Button
                            label='Play'
                            color='#ff694e'
                        />
                    </Link>
                    :
                    <>
                        <Text margin='small'>Sign in to play:</Text>
                        <TextInput
                            width='small'
                            placeholder='username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        { username.length > 0 ?
                            <Button
                                color='#ff694e'
                                margin='small'
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

