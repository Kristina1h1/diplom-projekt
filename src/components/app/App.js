import React, { useState } from "react";
import Header from "../header/Header";
import Filters from "../filters/Filters";
import BreedList from "../breed-list/BreedList";
import BreedModal from "../breed-modal/BreedModal";
import Footer from "../footer/Footer";
import { breeds } from "../../data/breeds";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState("Все");

  const [selectedBreed, setSelectedBreed] = useState(null);

  const handleOpenBreed = (breed) => {
    setSelectedBreed(breed);
  };

  const handleCloseModal = () => {
    setSelectedBreed(null);
  };

const filteredBreeds = breeds.filter((breed) => {
    const matchesSearch = breed.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = selectedSize === "Все" || breed.size === selectedSize;
    return matchesSearch && matchesSize;
  });
  
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h2 className="catalog-title">Каталог пород</h2>
        
        <Filters 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <BreedList breeds={filteredBreeds} onOpenBreed={handleOpenBreed} />
      </main>
      <Footer />
      <BreedModal breed={selectedBreed} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
