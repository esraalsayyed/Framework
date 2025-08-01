import React from "react";
import image1 from "../../images/imgi_1_avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="home-content text-center mypadding">
        <div>
          <img src={image1} alt="a similiing animated man"/>
        </div>
        <h1 className="text-uppercase">Start Framework</h1>
        <div className="icon mb-3">
          <i className="fa-solid fa-star"></i>
        </div>
        <span>Graphic Artist - Web Designer - Illustrator</span>
      </div>
    </>
  );
}
