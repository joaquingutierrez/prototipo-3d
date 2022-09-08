import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import logo from '../assets/logo.png'
import './NavBar.css'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-color">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo de Prototipo 3D" className="logo d-inline-block" />
                            Prototipo 3D
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Accesorios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Veladores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Juguetes</a>
                            </li>
                        </ul>
                        <CartWidget />
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                            <button className="btn btn-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar