import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide2 from "../../assets/img/slider2.jpg";
import Slide3 from "../../assets/img/slider3.jpg";
import Slide4 from "../../assets/img/slider4.jpg";
import Slide5 from "../../assets/img/slider5.jpg";
const carousel = props => {
  return(
    <div className="carousel">
      <Carousel autoPlay showThumbs={false} infiniteLoop={true} showArrows={false} >
        <div>
          <img src={Slide2} alt="" />
        </div>
        <div>
          <img src={Slide3} alt="" />
        </div>
        <div>
          <img src={Slide4} alt="" />
        </div>
        <div>
          <img src={Slide5} alt="" />
        </div>
      </Carousel>
    </div>
    )
};
export default carousel;