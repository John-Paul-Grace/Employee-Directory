import React from "react";

function Navbar({ ascending, handler }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">Employee Directory</div>

      <form className="form-inline">
        <button className="btn btn-outline-success mr-5 px-5 font-weight-bold" type="button" onClick={handler}>
          Name {ascending ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button> 
        <button className="btn btn-outline-success mr-5 px-5 font-weight-bold" type="button">View All</button>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    );
}

export default Navbar;
