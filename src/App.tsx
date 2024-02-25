import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  const [name, setName] = useState("Quoc Cuong");
  const listName: string[] = ["Nam", "Hung", "Tu"];
  const handleChangeName = () => {
    setName("Nguyen Quoc Cuong Ne");
  };
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
