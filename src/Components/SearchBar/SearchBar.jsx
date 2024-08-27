import React from 'react';
import "./SearchBar.css";

const Navbar = () => {
    return (
        <div className="search-bar">
            <form role="search">
                <input type="search" id="query" placeholder="search..."></input>
            </form>
        </div>
    )
}

export default Navbar