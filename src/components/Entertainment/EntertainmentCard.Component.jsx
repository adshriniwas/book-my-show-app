import React, { useState } from "react";
import Slider from "react-slick";

const EntertainmentImages = [
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTI1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTgwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTQ1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/upskill-collection-202211140440.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/interactive-games-collection-202211140440.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTM1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png",
  "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-ODArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/adventure-fun-collection-202211140440.png",
];

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="mx-3">
        <img
          className="w-full h-full rounded-lg"
          src={props.source}
          alt="Entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = (props) => {
  const [EntertainmentImgs, setEntertainmentImgs] =
    useState(EntertainmentImages);

  const settings = {
    infinite: false,
    autoplay: false,
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
      <Slider {...settings}>
        {EntertainmentImgs.map((image) => {
          return <EntertainmentCard source={image} />;
        })}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
