import React, { useState } from "react";
import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const containerClass = `container ${isDarkMode ? "dark-mode" : "light-mode"}`;

  return (
    <div className={containerClass}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <MainComponent />
      <Footer />
    </div>
  );
};

export default App;
