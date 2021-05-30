import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesPage from "./pages/MoviesPage";

const App = () => {
  return (
    <div>
      <Header>
        <MoviesPage />
      </Header>
      <Footer />
    </div>
  );
};

export default App;
