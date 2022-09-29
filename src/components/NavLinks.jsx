import React from "react";
import { NavLink } from "react-router-dom";
import './styles/NavLinks.css'

const NavLinks = ({ categorias }) => {
    return (
        <nav className="navLinks">
            {categorias.map((categoria) => <NavLink key={categoria.id} to={categoria.path} className="styleNone nav-item">{categoria.name}</NavLink>)}
        </nav>
    )
}

export default NavLinks