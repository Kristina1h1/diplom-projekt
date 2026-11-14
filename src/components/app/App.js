import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Filters from "../filters/Filters";
import BreedList from "../breed-list/BreedList";
import BreedModal from "../breed-modal/BreedModal"; 
import MatchGame from "../match-game/MatchGame";
import Footer from "../footer/Footer";
import { breeds } from "../../data/breeds";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("catalog");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState("Все");
  const [selectedBreed, setSelectedBreed] = useState(null);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("catFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("catTheme");
    return savedTheme || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    localStorage.setItem("catTheme", theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("catFavorites", JSON.stringify(favorites));
  }, [favorites]);

const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleOpenBreed = (breed) => {setSelectedBreed(breed);};
  const handleCloseModal = () => {setSelectedBreed(null);};


const handleToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id)); // Убираем
    } else {
      setFavorites([...favorites, id]); // Добавляем
    }
  };

const filteredBreeds = breeds.filter((breed) => {
    const matchesSearch = breed.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = selectedSize === "Все" || breed.size === selectedSize;
    const matchesFavorite = !showOnlyFavorites || favorites.includes(breed.id);
    return matchesSearch && matchesSize && matchesFavorite;
  });
  
  return (
    <div className="App">
      <Header currentPage={currentPage} 
      setPage={setCurrentPage} 
      theme={theme} 
      toggleTheme={toggleTheme} 
      />
      
      <main className="main-content">
        {currentPage === "catalog" ? (
          <>
            <h2 className="catalog-title">Каталог пород</h2>
            <Filters 
              searchTerm={searchTerm} setSearchTerm={setSearchTerm}
              selectedSize={selectedSize} setSelectedSize={setSelectedSize}
              showOnlyFavorites={showOnlyFavorites} setShowOnlyFavorites={setShowOnlyFavorites}
            />
            <BreedList breeds={filteredBreeds} onOpenBreed={handleOpenBreed}favorites={favorites}
              onToggleFavorite={handleToggleFavorite} />
          </>
        ) : (
          <>
            <h2 className="catalog-title">Подбор породы</h2>
            <MatchGame breeds={breeds} onOpenBreed={handleOpenBreed} />
          </>
        )}
      </main>
      <Footer />
      <BreedModal breed={selectedBreed} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
