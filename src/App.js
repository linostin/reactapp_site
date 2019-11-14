import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Cards
        name="Cat Pet"
        imgUrl="http://placekitten.com/400/300"
        phone="(212) 555-3456"
        email="ofworlds@yahoo.com"
      />
    </div>
  );
}

export default App;
