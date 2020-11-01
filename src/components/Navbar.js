import { Anchor, Heading, Nav } from 'grommet'
import { Gamepad, Home } from 'grommet-icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <Header>
            <Nav alignSelf='start'>
                <Link to='/'>
                  <Anchor 
                    href='#'
                    label='Home'
                    icon={<Home />}
                  />  
                </Link>
                <Link to='/play'>
                    <Anchor 
                        href='#'
                        label='Play'
                        icon={<Gamepad />}
                    />
                </Link>
            </Nav>

            <Nav>
                <Heading level={4}>{props.user}</Heading>
            </Nav>
        </Header>
    )
}

Navbar.defaultProps = {
    user: ''
}