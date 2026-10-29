import React from "react";
import "./BreedCard.css";

function BreedCard({ breed, onOpen }) {
    return (
        <div className="breed-card" onClick={() => onOpen(breed)}>
            <div className="breed-card-image">
                {/* Пока здесь заглушка, настоящие фото подключим позже */}
                <div className="image-placeholder">🐱</div>
            </div>

            <div className="breed-card-info">
                <h3>{breed.name}</h3>
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