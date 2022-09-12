import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png'
import './NavBar.css'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NavBar = () => {
    return (
        <>
            <Row>
                <Navbar className="bg-color" expand="lg">
                    <Container fluid>
                        <Col className="titulo-nav">
                            <Navbar.Brand href="#home">
                                <img className="logo" src={logo} alt="Logo de Prototipo 3D" />
                                Prototipo 3D
                            </Navbar.Brand>
                        </Col>
                        <Col xs={6}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mx-auto">
                                        <Nav.Link href="#Accesorios" className="nav-item">Accesorios</Nav.Link>
                                        <Nav.Link href="#Veladores" className="nav-item">Veladores</Nav.Link>
                                        <Nav.Link href="#Juguetes" className="nav-item">Juguetes</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                        </Col>
                        <Col className="cart-search-nav">
                            <CartWidget />
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                                <button className="btn btn-success" type="submit">Buscar</button>
                            </form>
                        </Col>
                    </Container>
                </Navbar>
            </Row>
        </>
    )
}

export default NavBar