import React, { useEffect, useState } from "react";
import img1 from "../../images/imgi_1_poert1.png";
import img2 from "../../images/imgi_2_port2.png";
import img3 from "../../images/imgi_3_port3.png";
import { Link } from "react-router-dom";
import { flushSync } from "react-dom";

export default function Portfolio() {
  const images = [
    {
      name: img1,
      id: 1,
    },
    {
      name: img2,
      id: 2,
    },
    {
      name: img3,
      id: 3,
    },
    {
      name: img1,
      id: 4,
    },
    {
      name: img2,
      id: 5,
    },
    {
      name: img3,
      id: 6,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(null);
  const handleClose = () => {
    setSelectedImg(null);
  };
  return (
    <>
      <div className="portfolio-content text-center">
        <h1 className="text-uppercase">portfolio component</h1>
        <div className="icon mb-2">
          <i className="fa-solid fa-star"></i>
        </div>

        <div className="container">
          <div className="row g-5">
            {images.map((image) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={image.id}>
                  <div className="position-relative img-container">
                    <div>
                      <img
                        src={image.name}
                        alt="animated"
                        className="w-100 rounded"
                      />
                    </div>
                    <Link
                      className="layer position-absolute text-decoration-none"
                      onClick={() => {
                        setSelectedImg(image.name);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`window-img w-100 h-100 position-fixed z-3 top-0 d-flex align-items-center justify-content-center ${
          selectedImg ? "" : "d-none"
        }`}
        onClick={handleClose}
      >
        <img src={selectedImg} />
      </div>
    </>
  );
}
