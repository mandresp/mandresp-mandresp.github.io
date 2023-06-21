import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <h1>
        marcelo <span className="Andres">andrés pérez</span>
      </h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
