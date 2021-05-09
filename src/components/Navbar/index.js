import React from "react";

function Navbar({ ascending, sortHandler, searchHandler }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">Employee Directory</div>

      <form className="form-inline">
        <button className="btn btn-outline-success mr-5 px-5 font-weight-bold" type="button" onClick={sortHandler}>
          Sort By Name {ascending ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>

        <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={searchHandler} />
      </form>
    </nav>
    );
}

export default Navbar;
