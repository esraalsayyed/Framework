import React from "react";

export default function Footer() {
  return (
    <>
      <div className="contact-info py-4 text-center">
        <div className="container">
          <div className="row text-white py-5 g-4">
            <div className="col-sm-4">
              <div>
                <h3 className="text-uppercase">location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-sm-4">
              <h3 className="text-uppercase">around the web</h3>
              <ul className="icons d-flex list-unstyled justify-content-center gap-2">
                <li>
                  <div className="social">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                </li>
                <li>
                  <div className="social">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                </li>
                <li>
                  <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </li>
                <li>
                  <div className="social">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <h3 className="text-uppercase">about freelance</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-rights text-center py-3 text-white">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
