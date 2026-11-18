import React from "react";
import CatCard from "./CatCard";
import "./Cats.css";

function Cats({ cats, onOpenCat }) {
    return (
        <section id="cats" className="cats-section">
            <div className="container">
                <p className="eyebrow" style={{ textAlign: "center" }}>Наши производители</p>
                <h2 className="section-title">Гордость питомника</h2>

                <div className="cats-grid">
                    {cats.map((cat) => (
                        <CatCard key={cat.id} cat={cat} onOpen={onOpenCat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cats;