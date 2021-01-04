/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import Slider from 'react-slick';

import { Modal } from 'antd';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [visible, setVisible] = useState(false);

  const [confirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
  };

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
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <div className="carousel_img">
            <img src="./image/slider3.jpg" alt="Los Angeles" />
            <div className="carousel_video" onClick={showModal}>
              <img
                src="./image/play-video.png"
                data-toggle="modal"
                data-target="#myModal"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="carousel_img">
            <img src="./image/slider2.jpg" alt="Chicago" />
            <div className="carousel_video" onClick={showModal}>
              <img
                src="./image/play-video.png"
                data-toggle="modal"
                data-target="#myModal"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="carousel_img">
            <img src="./image/slider1.png" alt="New York" />
            <div className="carousel_video" onClick={showModal}>
              <img
                src="./image/play-video.png"
                data-toggle="modal"
                data-target="#myModal"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="carousel_img">
            <img src="./image/slider4.png" alt="" />
            <div className="carousel_video" onClick={showModal}>
              <img
                src="./image/play-video.png"
                data-toggle="modal"
                data-target="#myModal"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="carousel_img">
            <img src="./image/slider5.jpg" alt="" />
            <div className="carousel_video" onClick={showModal}>
              <img
                src="./image/play-video.png"
                data-toggle="modal"
                data-target="#myModal"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slider>

      <div className="modal fade" id="myModal">
        <Modal
          footer={null}
          visible={visible}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <div className="modal__video">
            <iframe
              width={800}
              height={503}
              src="https://www.youtube.com/embed/dsOSmQl2yA8"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Carousel;
