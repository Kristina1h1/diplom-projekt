import React from "react";
import "./Filters.css";

function Filters({ searchTerm, setSearchTerm, selectedSize, setSelectedSize, showOnlyFavorites, setShowOnlyFavorites }) {
    return (
        <div className="filters-container">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="🔍 Поиск по названию..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="size-buttons">
                {["Все", "маленький", "средний", "крупный"].map((size) => (
                    <button
                        key={size}
                        className={selectedSize === size ? "active" : ""}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size === "Все" ? "Все" : size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                ))}
                <button
                    className={`favorites-toggle ${showOnlyFavorites ? "active" : ""}`}
                    onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                >
                    ❤️ Только избранное
                </button>
            </div>
        </div>
    );
}

export default Filters;