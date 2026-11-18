import React from "react";
import { images } from "../../data/images";
import "./Kittens.css";


function Kittens({ kittens, onOpenCat }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
    };

    return (
        <section id="kittens" className="kittens-section">
            <div className="container">
                <p className="eyebrow" style={{ textAlign: "center" }}>Доступны сейчас</p>
                <h2 className="section-title">Котята на продажу</h2>

                <div className="kittens-grid">
                    {kittens.map((kitten) => (
                        <div key={kitten.id} className="kitten-card" onClick={() => onOpenCat(kitten)}>
                            <div className="kitten-image">
                                <img src={images[kitten.image]} alt={kitten.name} />
                                <span className={`kitten-status ${kitten.status}`}>
                                    {kitten.status === "available" ? "Свободен" : "Бронь"}
                                </span>
                            </div>
                            <div className="kitten-info">
                                <h3>{kitten.name}</h3>
                                <p className="kitten-birth">Дата рождения: {kitten.birth}</p>
                                <p className="kitten-price">{formatPrice(kitten.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Kittens;