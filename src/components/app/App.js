import React, { useState, useEffect } from "react";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import About from "../about/About";
import Cats from "../cats/Cats";
import CatModal from "../cats/CatModal";
import { cats } from "../../data/cats";
import Kittens from "../kittens/Kittens";
import { kittens } from "../../data/kittens";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("catTheme") || "light";
    });

    const [selectedCat, setSelectedCat] = useState(null);

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("catTheme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
const handleOpenCat = (cat) => setSelectedCat(cat);
const handleCloseModal = () => setSelectedCat(null);

    return (
        <div className="App">
            <Header theme={theme} toggleTheme={toggleTheme} />

            <main>
                <Hero />
                <About />
                <Cats cats={cats} onOpenCat={handleOpenCat} />
            </main>
            <CatModal cat={selectedCat} onClose={handleCloseModal} />
            <Kittens kittens={kittens} onOpenCat={(kitten) => console.log("Клик по котенку:", kitten.name)} />
            <Gallery />
            <ScrollToTop />
        </div>
    );
}


export default App;