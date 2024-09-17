import React from "react";

import "../componentsCSS/Search.css"

const Search = ({ search, setSearch }) => {
    return (
        <div className="search-box">
        <h4>Pesquisar</h4>
        <input className="search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar" />
    </div>
    )
}


export default Search