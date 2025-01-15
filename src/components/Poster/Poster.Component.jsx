import React from "react";
import { Link } from "react-router-dom";
const Poster = (props) => {
  return(
  <>
    <Link to={`/movie/${props.data.id}`}>
      <div className="flex flex-col mx-2">
        <div className="h-40 md:h-80">
          <img className="w-full h-full rounded-lg object-cover" src={`https://image.tmdb.org/t/p/original${props.data.backdrop_path}`} />
        </div>
        <h3 className={`text-center text-lg font-bold mt-2 ${props.isDark ? "text-white" : "text-black"}`}>{props.data.original_title}</h3>
      </div>
    </Link>
  </>
  )
};

export default Poster;
