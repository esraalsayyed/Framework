import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <div className="contact-content text-center">
        <h1 className="text-uppercase">contact section</h1>
        <div className="icon">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="d-flex flex-column align-items-center m-auto position-relative form">
          <div className="group position-relative">
            <label
              htmlFor="userName"
              className={`position-absolute ${userName ? " " : "d-none"}`}
            >
              userName :
            </label>
            <input
              id="userName"
              placeholder="userName"
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <div className="group position-relative">
            <label
              htmlFor="userAge"
              className={`position-absolute ${userAge ? " " : "d-none"}`}
            >
              userAge :
            </label>
            <input
              id="userAge"
              placeholder="userAge"
              type="text"
              className="form-control"
              value={userAge}
              onChange={(e) => {
                setUserAge(e.target.value);
              }}
            />
          </div>
          <div className="group position-relative">
            <label
              htmlFor="userEmail"
              className={`position-absolute ${userEmail ? " " : "d-none"}`}
            >
              userEmail :
            </label>
            <input
              id="userEmail"
              placeholder="userEmail"
              type="email"
              className="form-control"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>

          <div className="group position-relative">
            <label
              htmlFor="userPassword"
              className={`position-absolute ${userPassword ? " " : "d-none"}`}
            >
              userPassword :
            </label>
            <input
              id="userPassword"
              placeholder="userPassword"
              type="password"
              className="form-control"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>

          <button className="btn">send Message</button>
        </div>
      </div>
    </>
  );
}
