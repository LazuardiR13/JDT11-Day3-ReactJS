import { Carousel } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Carousel autoplay className="m-5">
      <div>
        <h3 className="content-style">
          <img src="https://picsum.photos/200/?random=6" alt="lorem ipsum" />
        </h3>
      </div>
      <div>
        <h3 className="content-style">
          <img src="https://picsum.photos/200?random=3" alt="lorem ipsum" />
        </h3>
      </div>
      <div>
        <h3 className="content-style">
          <img src="https://picsum.photos/200/?random=1" alt="lorem ipsum" />
        </h3>
      </div>
      <div>
        <h3 className="content-style">
          <img src="https://picsum.photos/200/?random=2" alt="lorem ipsum" />
        </h3>
      </div>
    </Carousel>
  );
};

export default Banner;
