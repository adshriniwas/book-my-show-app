import React, { useState } from "react";
import Slider from "react-slick";

const initImages = [
  {
    image:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1720507931638_sundeepsharmaweb.jpg",
  },
  {
    image:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1720007270139_monsoonwebbanner.jpg",
  },
  {
    image:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1720522164226_srweb.jpg",
  },
  {
    image:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg",
  },
];

const HeroCarousel = () => {
  const [images, setImages] = useState(initImages);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="lg:hidden slider-container">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full h-56 md:h-80 py-3">
                <img
                  src={image.image}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="hidden lg:block"></div>
    </>
  );
};

export default HeroCarousel;
