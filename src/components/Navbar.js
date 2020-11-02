import { Anchor, Box, Heading, Header, Nav, DropButton, Text, Footer, Button } from 'grommet'
import { Gamepad, Home } from 'grommet-icons'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Navbar(props) {
    const userScore = props.users[props.user] ? props.users[props.user] : 0

    const history = useHistory()

    const logOut = () => {
        props.setUser('')
        window.localStorage.setItem('andersjbe/trivia', JSON.stringify({ ...props.users, currentUser: '' }))
        history.push('/')
    }

    return (
        <Header direction='row' pad='xsmall' background='#380925'>
            <Nav alignSelf='center' direction='row'>
                <Link to='/'>
                    <Anchor
                        color='#edae9f'
                        href='#'
                        label='Home'
                        icon={<Home />}
                    />
                </Link>
                <Link to='/play'>
                    <Anchor
                        color='#edae9f'
                        href='#'
                        label='Play'
                        icon={<Gamepad />}
                    />
                </Link>
            </Nav>

            <Heading level={3} alignSelf='center' textAlign='sta' color='#edae9f' margin='none'>Tandem Trivia</Heading>

            {
                props.user ?
                    <DropButton
                        color='#ff694e'
                        alignSelf='center'
                        label={<Text color='#edae9f'>{props.user}</Text>}
                        dropAlign={{ top: 'bottom', right: 'right' }}
                        dropContent={<Box pad='xsmall'>
                            <Heading margin='xsmall' level={6}>High Score:</Heading>
                            <Text>{userScore}</Text>
                            <Footer>
                                <Button
                                    label='Log Out'
                                    onClick={() => logOut()}
                                />
                            </Footer>
                        </Box>}
                    />
                    : <Box />
            }
        </Header>
    )
}

Navbar.defaultProps = {
    user: ''
}