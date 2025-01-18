import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";

function NavSm() {

  const {movie} = useContext(MovieContext);

  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title ?? ""}</h3>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  const {movie} = useContext(MovieContext);
  return (
    <>
      {/* <div className="w-10 h-10">
        <img src="" alt="logo" className="w-full h-full" />
      </div> */}
      <div className="w-full">
          <h3 className="text-white text-xl font-bold">{movie.original_title ?? ""}</h3>
        </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-evenly">
        <div className="ms-3 w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavLg() {
  const {movie} = useContext(MovieContext);
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-3/4 gap-3">
          {/* <div className="w-10 h-10">
            <img src="" alt="logo" className="w-full h-full" />
          </div> */}
          <div className="w-full">
            <h3 className=" text-white text-xl font-bold">{movie.original_title ?? ""}</h3>
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <select className="mx-3 bg-transparent text-white">
            <option>Hospet</option>
          </select>
          <button className="bg-red-600 text-sm px-2 py-1 text-white rounded">Sign in</button>
          <div className="ms-3 w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const MovieNavbar = () => {

  return  (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Small Screen NavBar */}
      {/* >= md its hidden, only visible on small screen size */}
      <div className="md:hidden">
        {/* <div className="sm:flex md:hidden lg:hidden"> */}
        <NavSm />
      </div>

      {/* Medium Screen Size */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      {/* Large Screen Size */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default MovieNavbar;
