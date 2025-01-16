import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PlayPage from "./pages/PlayPage";
import React from "react";
import axios from "axios";

function App() {

  axios.defaults.baseURL= "https://api.themoviedb.org/3/"
  axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTHORIZATION_TOKEN;
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
