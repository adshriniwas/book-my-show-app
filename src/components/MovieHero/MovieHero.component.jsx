import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");
  const languages = movie.spoken_languages?.map(({ name }) => name).join(", ");
  console.log(genres);

  return (
    <div>
      {/* Mobile and Tablet screen. i.e: small and medium screen  */}
      <div className="lg:hidden relative w-full">
        <div className="w-full flex relative">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="w-full z-10"
          />
          <div
            className="absolute z-20 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(34,34,34,0.8) 24.95%, rgba(34,34,34,0.8) 38.2%, rgba(34,34,34,0.07) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          ></div>
        </div>

        <div className="absolute flex items-center z-30 md:left-[70px] md:top-[70px] top-1/4 left-[20px]">
          <div className="md:h-[300px] md:w-[220px] h-[150px] w-[120px] p-4">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className="w-full h-full rounded-lg bg-cyan-500 shadow-2xl shadow-cyan-500/50"
              alt="Movie Poster"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        <div className="px-4 pt-4">
          <h3>Rating : {movie.vote_average}</h3>
          <h3>Languages: {languages}</h3>
          <h3>Release Date: {movie.release_date}</h3>
          <h3>
            {movie.runtime} min | {genres}
          </h3>
        </div>
        <div className="flex items-center gap-3 md:w-screen px-4 py-4">
          <button className="bg-red-500 py-3 w-full text-white font-semibold rounded-lg">
            Rent: 150$
          </button>
          <button className="bg-blue-500 py-3 w-full text-white font-semibold rounded-lg">
            Buy: 150$
          </button>
        </div>
      </div>

      {/* Large screen size i.e: Laptop  */}
      <div
        className="relative flex items-center hidden w-full lg:block"
        style={{ height: "28rem" }}
      >
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.07) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        >
          <div className="absolute flex items-center gap-10 z-30 left-24 top-8">
            <div className="h-74 h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="w-full h-full rounded-lg"
                alt="Movie Poster"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
