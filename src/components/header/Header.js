import React from "react";
import "./Header.css";

function Header({ currentPage, setPage, theme, toggleTheme }) {
    return (
        <header className="header">
            <div className="header-top">
                <div>
                    <h1>Котопедия</h1>
                    <p>Твой гид по породам кошек</p>
                </div>
                <button className="theme-toggle" onClick={toggleTheme} title="Сменить тему">
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
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