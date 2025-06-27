import { React, useState } from 'react'
import { logout, isLogin, user } from '../middleware/auth';
import { NavLink, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    const [state, setState] = useState(isLogin())
    const [username, setUsername] = useState(user())

    const handleLogout = () => {
        logout();
        setState(false)
    }

    return (
        <header>

            <div>
                <Navbar expand="lg"  bg="info">
                    <Container fluid>
                        <Navbar.Brand href="/home">
                            LOGO
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink className="nav-link active" to="/home" >Home</NavLink>
                            <NavLink className="nav-link" to="/page-1" >Menu 1</NavLink>
                            <NavLink className="nav-link" to="/page-2" >Menu 2</NavLink>
                        </Nav>
                        <Navbar.Text>
                            User: <a href="#login">{username}</a>
                        </Navbar.Text>
                        <Navbar.Text className="ms-2">
                            {state && <Link className="btn btn-light btn-sm " onClick={() => handleLogout()} to="/">Salir</Link>}
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}

export default Header