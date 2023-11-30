import React from "react";
import { Link } from "react-router-dom";

import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import pinterest from "../images/pinterest.svg";
import deviant from "../images/deviantart.svg";
import behance from "../images/behance.svg";
import qrCode from "../images/qr-code.png";
import flipButton from "../images/flip-icon.svg";
import profile from "../images/profile.png";
import floralOne from "../images/floral-design-1.jpg";
import floralTwo from "../images/floral-design-2.jpg";
import floralThree from "../images/floral-design-3.jpg";
import logo from "../images/logo.png";

import "../App.css";

function CardBack() {
  const latin =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor fermentum ante. Suspendisse ....";
  return (
    <div
      className="container mx-auto px-20 pb-20 cardBackground rounded-lg"
      style={{ height: "750px" }}
    >
      <div className="grid grid-cols-12 py-10 ">
        <div className="col-start-2 justify-center relative">
          <img
            //   src="https://gravatar.com/avatar/645ad8dc88b181886f74644b9866f080"
            src={profile}
            className=""
            style={{ borderRadius: "50%", border: "solid 3px white" }}
            alt="headshot"
          />
          <img
            className="w-12 logo-container position-absolute"
            src={logo}
            alt="floral logo"
          />
        </div>
        <div className="col-start-4 col-span-2 pt-5 ">
          <h1 className="text-3xl font-bold text-salmon">Jane Smith</h1>
          <h2 className="text-3xl  text-salmon">Floral Designer</h2>
        </div>
        <div className="col-start-9 pt-5">
          <div className="flex gap-8">
            <img className="w-10" src={instagram} alt="icon" />
            <img className="w-10" src={facebook} alt="icon" />
            <img className="w-10" src={pinterest} alt="icon" />
            <img className="w-10" src={deviant} alt="icon" />
            <img className="w-10" src={behance} alt="icon" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg relative mx-auto p-5">
        <div className="grid grid-cols-12 gap-8 ">
          <div className="grid grid-cols-12 col-span-12 lg:col-span-4 hover p-5 lg:p-10 gap-4">
            <div className="col-span-3 lg:col-span-12 ">
              <img src={floralOne} alt="flower" className=" h-44 w-48" />
            </div>
            <div className="col-span-6 lg:col-span-12 grid grid-cols-12">
              <h1 className="text-xl font-bold text-salmonLight col-span-12">
                Floral Design 1
              </h1>
              <p className="col-span-12">{latin}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-12 lg:col-span-4 hover p-5 lg:p-10 gap-4">
            <div className="col-span-3 lg:col-span-12 ">
              <img src={floralOne} alt="flower" className=" h-44 w-48" />
            </div>
            <div className="col-span-6 lg:col-span-12 grid grid-cols-12">
              <h1 className="text-xl font-bold text-salmonLight col-span-12">
                Floral Design 2
              </h1>
              <p className="col-span-12">{latin}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-12 lg:col-span-4 hover p-5 lg:p-10 ">
            <div className="col-span-3 lg:col-span-12 ">
              <img src={floralOne} alt="flower" className=" h-44 w-48" />
            </div>
            <div className="col-span-6 lg:col-span-12 grid grid-cols-12">
              <h1 className="text-xl font-bold text-salmonLight col-span-12">
                Floral Design 3
              </h1>
              <p className="col-span-12">{latin}</p>
            </div>
          </div>
        </div>
        <button className="image-container position-absolute ">
          <Link to="/Back">
            <div className="grid grid-cols-12  h-10 rounded-lg ">
              <div
                style={{ backgroundColor: "#CA6D81" }}
                className="col-start-12 ml-20 h-12 w-12  rounded-lg"
              >
                <img
                  className="w-8 mx-auto m-2"
                  src={flipButton}
                  alt="icon with arrow"
                />
              </div>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default CardBack;
