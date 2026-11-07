import React from "react";
import "./Header.css";

function Header({ currentPage, setPage }) {
    return (
        <header className="header">
            <div className="header-top">
                <h1>Котопедия</h1>
                <p>Твой гид по породам кошек</p>
            </div>
            <nav className="header-nav">
                <button
                    className={currentPage === "catalog" ? "active" : ""}
                    onClick={() => setPage("catalog")}
                >
                    Каталог
                </button>
                <button
                    className={currentPage === "match" ? "active" : ""}
                    onClick={() => setPage("match")}
                >
                    Подобрать кота
                </button>
            </nav>
        </header>
    );
}

export default Header;