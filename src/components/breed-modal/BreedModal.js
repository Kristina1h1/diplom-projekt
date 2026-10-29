import React, { useEffect } from "react";
import "./BreedModal.css";

function BreedModal({ breed, onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);
    if (!breed) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-image">
                    <div className="image-placeholder">🐱</div>
                </div>

                <div className="modal-info">
                    <h2>{breed.name}</h2>
                    <p className="modal-origin"> {breed.origin}</p>
                    <div className="modal-grid">
                        <div>
                            <span>Размер</span>
                            <strong>{breed.size}</strong>
                        </div>
                        <div>
                            <span>Вес</span>
                            <strong>{breed.weight}</strong>
                        </div>
                        <div>
                            <span>Жизнь</span>
                            <strong>{breed.lifespan}</strong>
                        </div>
                        <div>
                            <span>Шерсть</span>
                            <strong>{breed.wool}</strong>
                        </div>
                    </div>

                    <div className="modal-desc">
                        <h3>О породе</h3>
                        <p>{breed.description}</p>
                    </div>

                    <div className="modal-temperament">
                        <strong>Характер:</strong> {breed.temperament}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BreedModal;
