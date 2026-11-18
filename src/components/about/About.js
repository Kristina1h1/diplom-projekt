import React from "react";
import "./About.css";

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <p className="eyebrow" style={{ textAlign: "center" }}>О нас</p>
                <h2 className="section-title">Питомник, где рождается красота</h2>

                <div className="about-grid">
                    {/* Карточка 1 */}
                    <div className="about-card">
                        <div className="about-icon">🏆</div>
                        <h3>Титулы</h3>
                        <p>Наши питомцы регулярно участвуют в международных выставках и становятся чемпионами WCF и FIFe.</p>
                    </div>

                    {/* Карточка 2 */}
                    <div className="about-card">
                        <div className="about-icon">🧬</div>
                        <h3>Генетика</h3>
                        <p>Все производители протестированы на HCM, PKD и другие генетические заболевания.</p>
                    </div>

                    {/* Карточка 3 */}
                    <div className="about-card">
                        <div className="about-icon">❤️</div>
                        <h3>Забота</h3>
                        <p>Котята растут в доме, полностью социализированы, привиты по возрасту и окружены лаской.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;