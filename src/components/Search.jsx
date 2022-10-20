import React from "react";



const Search = () => {

    return (
        <form className="d-flex" role="search">
            <input id="searchInput" className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
            <button className="btn btn-success" type="submit">Buscar</button>
        </form>
    )
}

export default Search