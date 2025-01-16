import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/DefaultLayoutHoc";
import axios from "axios";

import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";

const topRatedMoviesOptions = {
  method: 'GET',
  url: 'movie/top_rated',
  headers: {
    accept: 'application/json',
  }
};

const popularMoviesOptions = {
  method: 'GET',
  url: 'movie/popular',
  headers: {
    accept: 'application/json',
  }
};

const upcomingMoviesOptions = {
  method: 'GET',
  url: 'movie/upcoming',
  headers: {
    accept: 'application/json',
  }
};

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiereMovies, setPremiereMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  

  useEffect(()=>{
    const requestTopRatedMovies = async ()=>{
      const getTopRatedMovies = await axios.request(topRatedMoviesOptions)
      setRecommendedMovies(getTopRatedMovies.data.results)
    }
    requestTopRatedMovies();
  },[]);

  useEffect(()=>{
    const requestPopularMovies = async ()=>{
      const getPopularMovies = await axios.request(popularMoviesOptions)
      setPremiereMovies(getPopularMovies.data.results)
    }
    requestPopularMovies();
  },[]);

  useEffect(()=>{
    const requestUpcomingMovies = async ()=>{
      const getUpcomingMovies = await axios.request(upcomingMoviesOptions)
      setOnlineStreamEvents(getUpcomingMovies.data.results)
    }
    requestUpcomingMovies();
  },[]);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="rupay" className="w-full h-full" />
          </div>
          <PosterSlider
            title="Premieres"
            subtitle="Brand new releases every friday"
            posters={premiereMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online streaming events"
          subtitle="online stream events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
