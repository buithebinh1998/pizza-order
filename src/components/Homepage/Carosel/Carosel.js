import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "../../../assets/img/slider1.jpg";
import Slide2 from "../../../assets/img/slider2.jpg";
import Slide3 from "../../../assets/img/slider3.jpg";
import Slide4 from "../../../assets/img/slider4.jpg";
const carousel = props => (
  <div className="carousel">
    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
      <div>
        <img src={Slide1} alt="" />
      </div>
      <div>
        <img src={Slide2} alt="" />
      </div>
      <div>
        <img src={Slide3} alt="" />
      </div>
      <div>
        <img src={Slide4} alt="" />
      </div>
    </Carousel>
  </div>
);
export default carousel;