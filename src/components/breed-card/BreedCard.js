import React from "react";
import "./BreedCard.css";

function BreedCard({ breed, onOpen, isFavorite, onToggleFavorite }) {
    return (
        <div className="breed-card">

            <div className="breed-card-image" onClick={() => onOpen(breed)}>
                {/* Пока здесь заглушка, настоящие фото подключим позже */}
                <div className="image-placeholder">🐱</div>
            </div>

            <div className="breed-card-info">
                <div className="breed-header">
                    <h3 onClick={() => onOpen(breed)}>{breed.name}</h3>
                    <button
                        className={`fav-btn ${isFavorite ? "active" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(breed.id);
                        }}
                    >
                        {isFavorite ? "❤️" : "🤍"}
                    </button>
                </div>
                <p className="breed-origin">{breed.origin}</p>
                <div className="breed-tags">
                    <span>{breed.size}</span>
                    <span>{breed.wool}</span>
                </div>
            </div>
        </div>
    );
}

export default BreedCard;