import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">Employee Directory</div>

            <form class="form-inline">
                <button class="btn btn-outline-success mr-5 px-5 font-weight-bold" type="button">View All</button>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}

export default Navbar;
