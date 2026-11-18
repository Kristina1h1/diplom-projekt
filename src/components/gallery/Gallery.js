import React, { useState } from "react";
import video1 from "../../assets/gallery-video.mp4";
import video2 from "../../assets/gallery-video2.mp4";
import video3 from "../../assets/gallery-video3.mp4";
import video4 from  "../../assets/gallery-video4.mp4";

import "./Gallery.css";

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const media = [
        { src: video1, caption: "Утро начинается с маленького чуда"},
        { src: video2, caption: "Хозяин кресла" },
        { src: video3, caption: "На страже порядка" },
        {src: video4, caption: "Битва с игрушкой"}
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <p className="eyebrow" style={{ textAlign: "center" }}>Атмосфера</p>
                <h2 className="section-title">Жизнь выпускников</h2>

                <div className="gallery-carousel">
                    <button className="gallery-btn left" onClick={prevSlide}>❮</button>

                    <div className="gallery-slide">
                        <video
                            src={media[currentIndex].src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="gallery-media"
                        />
                        <div className="gallery-caption">
                ❤️ {media[currentIndex].caption}
            </div>
                    </div>

                    <button className="gallery-btn right" onClick={nextSlide}>❯</button>
                </div>

                <div className="gallery-dots">
                    {media.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;