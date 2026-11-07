import React from "react";
import BreedCard from "../breed-card/BreedCard";
import "./BreedList.css";

function BreedList({ breeds, onOpenBreed, favorites, onToggleFavorite  }) {
    if (breeds.length === 0) {
        return (
            <div className="empty-state">
                <p>По вашему запросу ничего не найдено.</p>
                <p>Попробуйте изменить фильтры.</p>
            </div>
        );
    }

    return (
        <div className="breed-list">
            {breeds.map((breed) => (
                <BreedCard
                    key={breed.id}
                    breed={breed}
                    onOpen={onOpenBreed}
                    isFavorite={favorites.includes(breed.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
}

export default BreedList;