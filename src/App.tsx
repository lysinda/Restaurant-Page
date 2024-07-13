import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app bg-leaves-bg-image text-lavender-blush">
      <Header page={page} setPage={setPage} />
      <div className="content">
        {page === "home" && <Home />}
        {page === "menu" && <Menu />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
