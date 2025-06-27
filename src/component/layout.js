import React from 'react'
import Header from './header'
import { Container } from 'react-bootstrap'

const Layout = props => (
    <main>
        {props.isHeader && <Header />}
        <Container fluid="md">
            {props.children}
        </Container>
    </main>
)

export default Layout