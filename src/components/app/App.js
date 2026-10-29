import React, { useState } from "react";
import Header from "../header/Header";
import BreedList from "../breed-list/BreedList";
import Footer from "../footer/Footer";
import { breeds } from "../../data/breeds";
import "./App.css";

function App() {
  const [allBreeds] = useState(breeds);

  const handleOpenBreed = (breed) => {
    console.log("Клик по породе:", breed.name);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h2 className="catalog-title">Каталог пород</h2>
        <BreedList breeds={allBreeds} onOpenBreed={handleOpenBreed} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
