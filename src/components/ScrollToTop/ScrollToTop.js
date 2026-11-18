import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;

    return (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Наверх">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 13c-3.5 0-7 3-7 6.5 0 2 1.5 3.5 3.5 3.5 1.5 0 2.5-1 3.5-1s2 1 3.5 1c2 0 3.5-1.5 3.5-3.5 0-3.5-3.5-6.5-7-6.5z" />
                <circle cx="6" cy="9" r="2.5" />
                <circle cx="10" cy="5" r="2.5" />
                <circle cx="14" cy="5" r="2.5" />
                <circle cx="18" cy="9" r="2.5" />
            </svg>
        </button>
    );
}

export default ScrollToTop;