import React, { useState } from "react";
import Slider from "react-slick";
import HeroSlider from "react-slick";
import { NextArrow } from "./Arrows.Component";
import { PrevArrow } from "./Arrows.Component";

const initImages = [
  {
    adult: false,
    backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
    genre_ids: [16, 878, 28],
    id: 610150,
    original_language: "ja",
    original_title: "ドラゴンボール超 スーパーヒーロー",
    overview:
      "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
    popularity: 5953.989,
    poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
    release_date: "2022-06-11",
    title: "Dragon Ball Super: Super Hero",
    video: false,
    vote_average: 8,
    vote_count: 1426,
  },
  {
    adult: false,
    backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
    genre_ids: [53],
    id: 985939,
    original_language: "en",
    original_title: "Fall",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
    popularity: 6731.327,
    poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    video: false,
    vote_average: 7.4,
    vote_count: 346,
  },
];

const HeroCarousel = () => {
  const [images, setImages] = useState(initImages);

  var settingsLG = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="lg:hidden slider-container">
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full h-56 md:h-80 py-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block slider-container">
        <HeroSlider {...settingsLG}>
          {images.map((image) => {
            return (
              <div className="w-full h-96 px-2 py-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
