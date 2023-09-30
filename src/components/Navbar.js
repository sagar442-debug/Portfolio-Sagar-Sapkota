<<<<<<< HEAD
=======
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [ham, setHam] = useState(false);

  const onClickHam = () => {
    if (ham === true) {
      setHam(false);
    } else {
      setHam(true);
    }
  };

  return (
    <>
      
      <div className="font-poppins text-white justify-between">
        <div
          className={`flex justify-between sm:hidden  ${
            ham === true ? "border-b border-slate-700" : ""
          }`}
        >
          <h1 className="cursor-pointer text-2xl font-semibold  ">Portfolio</h1>
          <div onClick={onClickHam} className="hamLogo cursor-pointer">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        {ham === true ? (
          <div className="Navbar space-y-3 ">
            <ul className="text-white space-y-2 mt-2 text-xl">
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Technologies</a>
              </li>
              <li>
                <a href="/">About me</a>
              </li>
            </ul>
            <div className="logos flex space-x-2">
              <a href="https://twitter.com">
                <FontAwesomeIcon className="h-7" icon={faSquareTwitter} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon className="h-7" icon={faSquareFacebook} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon className="h-7" icon={faSquareInstagram} />
              </a>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="hidden font-poppins text-white sm:flex sm:justify-between sm:items-center  ">
          <h1 className="font-semibold text-xl cursor-pointer box-shadow  shadow-white ">Portfolio</h1>
          <ul className="text-white flex space-x-14 ">
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Technologies</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
          <div className="logos flex space-x-4">
            <a href="https://twitter.com">
              <FontAwesomeIcon className="h-7" icon={faSquareTwitter} />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon className="h-7" icon={faSquareFacebook} />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon className="h-7" icon={faSquareInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 54e7f93 (Changes to the navbar)
