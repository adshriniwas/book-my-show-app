import React, { useContext, useEffect, useState } from "react";
import MovieLayoutHoc from "../layout/MovieLayoutHoc";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.context";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import { NextArrow, PrevArrow } from "../components/HeroCarousel/Arrows.Component";


const MoviePage = () => {

  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const {movie, setMovie} = useContext(MovieContext);

  const {id} = useParams();
  const movieCastOptions = {
    method: 'GET',
    url: `movie/${id}/credits`,
    headers: {
      accept: 'application/json',
    }
  };

  const similarMoviesOptions = {
    method: 'GET',
    url: `movie/${id}/similar`,
    headers: {
      accept: 'application/json',
    }
  };

  const recommendedMoviesOptions = {
    method: 'GET',
    url: `movie/${id}/recommendations`,
    headers: {
      accept: 'application/json',
    }
  };

  const movieOptions = {
    method: 'GET',
    url: `movie/${id}`,
    headers: {
      accept: 'application/json',
    }
  };

  useEffect(()=>{
    const requestCast = async ()=>{
      const getCast = await axios.request(movieCastOptions);
      setCast(getCast.data.cast)
    }

    requestCast().catch((error) => {
      console.error('Error:', error);
    });
  },[id]);

  useEffect(()=>{
    const requestSimilarMovies = async ()=>{
      const getSimilarMovies = await axios.request(similarMoviesOptions);
      setSimilarMovies(getSimilarMovies.data.results);
    }
    requestSimilarMovies().catch((error) => {
      console.error('Error:', error);
    });
    
  },[id]);

  useEffect(()=>{
    const requestRecommededMovies = async ()=>{
      const getRecommendedMovies = await axios.request(recommendedMoviesOptions);
      setRecommendedMovies(getRecommendedMovies.data.results);
    }
    requestRecommededMovies().catch((error) => {
      console.error('Error:', error);
    });
    
  },[id]);

  useEffect(()=>{
    const requestMovie = async ()=>{
      const getMovie = await axios.request(movieOptions);
      setMovie(getMovie.data);
    }
    requestMovie().catch((error) => {
      console.error('Error:', error);
    });
    
  },[id]);

  

  return (
    <>
    {/* <MovieHero/> */}
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Cast Sliders */}
        <div className="my-8">
          <PosterSlider
            title="Similar Movies"
            posters={similarMovies}
            isDark={false}
          />
        </div>

        {/* recommended movies Slider */}
        <div className="my-8">
          <hr />
        </div>

        <PosterSlider
          title="Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
