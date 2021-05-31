import React from "react";
import Layout from "./components/Layout";
import MoviesPage from "./pages/MoviesPage";

const App = () => {
  return (
    <div>
      <Layout>
        <MoviesPage />
      </Layout>
    </div>
  );
};

export default App;
