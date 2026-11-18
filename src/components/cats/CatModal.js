import React, { useEffect } from "react";
import { images } from "../../data/images";
import "./CatModal.css";

function CatModal({ cat, onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!cat) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-image">
                    <img src={images[cat.image]} alt={cat.name} />
                </div>

                <div className="modal-info">
                    <h2>{cat.name}</h2>
                    <p className="modal-title">{cat.title}</p>

                    <div className="modal-grid">
                        <div>
                            <span>Пол</span>
                            <strong>{cat.gender}</strong>
                        </div>
                        <div>
                            <span>Возраст</span>
                            <strong>{cat.age}</strong>
                        </div>
                        <div>
                            <span>Окрас</span>
                            <strong>{cat.color}</strong>
                        </div>
                    </div>

                    <div className="modal-desc">
                        <h3>О коте</h3>
                        <p>{cat.description}</p>
                    </div>

                    <button className="modal-btn" onClick={onClose}>
                        Связаться с заводчиком
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CatModal;