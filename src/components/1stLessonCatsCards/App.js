import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Cards from "./Cards";

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
