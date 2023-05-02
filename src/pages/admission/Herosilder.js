import React from "react";
import { useState } from "react";
import Slider from "react-slick";

const Herosilder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
 
  return (
    <>
      <div className="contentslider">
        <Slider {...settings}>
          <div>
              <img className="w-100" src="https://www.sparkadmissions.com/wp-content/uploads/2021/05/College-Admissions-Trends-2020-2021-scaled.jpg" />
          </div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Slider>
      </div>
    </>
  );
};

export default Herosilder;
