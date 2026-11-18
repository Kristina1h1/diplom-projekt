import React from "react";
import "./Hero.css";
import heroCat from "../../assets/images/cat.jpg";

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-inner">

                <div className="hero-content">
                    <p className="eyebrow">Питомник с 2015 года</p>
                    <h1>Ориентальные кошки —<br />элегантность в каждой линии</h1>
                    <p className="hero-lead">
                        Чистокровные котята с документами и здоровой генетикой. Мы растим их с любовью и глубоким уважением к породе.
                        Мы поможем вам найти идеального компаньона.
                    </p>
                    <a href="#cats" className="btn-primary">Смотреть наших питомцев</a>
                </div>

                <div className="hero-image">
                    <img
                        src={heroCat}
                        alt="Ориентальная кошка"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;