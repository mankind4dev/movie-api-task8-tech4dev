import { useState } from "react"; 
import Layout from "./layout";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import News from "./pages/News";
import Genre from "./pages/Genre";
import Explore from "./pages/Explore";

function App() { 

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/genre" element={<Genre />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tv-show" element={<TVShows />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
