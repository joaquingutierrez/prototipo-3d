import React, { useState } from "react";
import { Link } from "react-router-dom";


const Search = () => {

    const [tag, setTag] = useState('')

    const searchEngine = () => {
        const searchInput = document.getElementById('searchInput').value
        setTag(searchInput)
    }

    return (
        <form className="d-flex" role="search">
            <input onChange={searchEngine} id="searchInput" className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
            <Link to={'/search/' + tag}>
                <button className="btn btn-success" type="submit">Buscar</button>
            </Link>
        </form>
    )
}

export default Search