import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
  const { title, subtitle, posters, isDark } = { ...props };
  const settings = {
    infinite: true,
    speed:500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {posters.map((each, index) => {
          return <Poster data={each} key={index} isDark={isDark} />;
        })}
      </Slider>
    </>
  );
};

export default PosterSlider;
