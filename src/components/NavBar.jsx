import React from "react";
import logo from '../assets/logo.png'
import './styles/NavBar.css'
import CartWidget from './CartWidget'
import Search from './Search'
import { Link } from "react-router-dom";
import NavLinks from './NavLinks'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    const categorias = [
        { id: 0, name: 'Accesorios', path: '/category/accesorios' },
        { id: 1, name: 'Veladores', path: '/category/veladores' },
        { id: 2, name: 'Juguetes', path: '/category/juguetes' }
    ]

    return (
        <>
            <Navbar className="bg-color" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="d-flex align-items-center">
                        <Link to="/">
                            <img className="logo" src={logo} alt="Logo de Prototipo 3D" />
                        </Link>
                        <Link to="/" className="styleNone">
                            <h2>Prototipo 3D</h2>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="w-100 mx-auto">
                            <NavLinks categorias={categorias} />
                        </Nav>
                        <Link to="/cart" className="styleNone">
                            <CartWidget />
                        </Link>
                        <Search />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar