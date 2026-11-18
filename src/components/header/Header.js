import React from "react";
import "./Header.css";

function Header({ theme, toggleTheme }) {
    return (
        <header className="header">
            <div className="container header-inner">

                {/* Логотип с SVG-лапкой */}
                <a href="/" className="logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="logo-icon"
                    >
                        <path d="M12 13c-3.5 0-7 3-7 6.5 0 2 1.5 3.5 3.5 3.5 1.5 0 2.5-1 3.5-1s2 1 3.5 1c2 0 3.5-1.5 3.5-3.5 0-3.5-3.5-6.5-7-6.5z" />
                        <circle cx="6" cy="9" r="2.5" />
                        <circle cx="10" cy="5" r="2.5" />
                        <circle cx="14" cy="5" r="2.5" />
                        <circle cx="18" cy="9" r="2.5" />
                    </svg>
                    Oriental <span>Grace</span>
                </a>

                {/* Меню навигации */}
                <nav className="nav-links">
                    <a href="#about">О питомнике</a>
                    <a href="#cats">Наши кошки</a>
                    <a href="#kittens">Котята</a>
                    <a href="#contact">Контакты</a>
                </nav>

                {/* Кнопка смены темы */}
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Сменить тему">
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>

            </div>
        </header>
    );
}

export default Header;