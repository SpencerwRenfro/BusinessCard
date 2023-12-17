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
      className="mx-auto rounded-lg cardBackground px-5 pb-10 mb-20 md:px-10 lg:w-10/12"
      style={{position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}}
    >
      <div className="grid grid-cols-12 py-10 ">
        <div className="col-span-4 md:col-span-2 lg:col-span-2 justify-center relative">
          <img
            //   src="https://gravatar.com/avatar/645ad8dc88b181886f74644b9866f080"
            src={profile}
            className=""
            style={{ borderRadius: "50%", border: "solid 3px white", height: '100px', width: '100px' }}
            alt="headshot"
          />
          <img
            className="w-12 logo-container position-absolute"
            src={logo}
            alt="floral logo"
          />
        </div>
        <div className="col-span-8 col-start-5 md:col-start-3 md:col-span-3 lg:col-start-3 lg:col-span-4 pt-5 ">
          <h1 className="text-xl lg:text-3xl font-bold text-salmon">Jane Smith</h1>
          <h2 className="text-xl lg:text-3xl  text-salmon">Floral Designer</h2>
        </div>
        <div className="container col-span-6 col-start-5 md:col-start-8 lg:col-start-9 pt-5">
          <div className="flex gap-2 lg:gap-10 ">
            <img style={{height: '35px', width: '35px'}} className="cursor-pointer hover rounded-lg p-1" src={instagram} alt="icon" />
            <img style={{height: '35px', width: '35px'}} className="w-10 cursor-pointer hover rounded-lg p-1" src={facebook} alt="icon" />
            <img style={{height: '35px', width: '35px'}} className="w-10 cursor-pointer hover rounded-lg p-1" src={pinterest} alt="icon" />
            <img style={{height: '35px', width: '35px'}} className="w-10 cursor-pointer hover rounded-lg p-1" src={deviant} alt="icon" />
            <img style={{height: '35px', width: '35px'}} className="w-10 cursor-pointer hover rounded-lg p-1" src={behance} alt="icon" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg  mx-auto px-5 py-4 w-full">
        <div className="inline-block lg:flex">
          <div className="grid grid-cols-12 hover p-5 lg:p-10 gap-4 cursor-pointer">
            <div className="col-span-6 lg:col-span-12">
              <img src={floralOne} alt="flower" className=" h-44 w-48" />
            </div>
            <div className="col-span-6 lg:col-span-12">
              <h1 className="text-xl font-bold text-salmonLight pb-5">
                Floral Design 1
              </h1>
              <p className="col-span-12">{latin}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 hover p-5 lg:p-10 gap-4 cursor-pointer">
            <div className="col-span-6 lg:col-span-12">
              <img src={floralOne} alt="flower" className=" h-44 w-48" />
            </div>
            <div className="col-span-6 lg:col-span-12">
              <h1 className="text-xl font-bold text-salmonLight pb-5">
                Floral Design 2
              </h1>
              <p className="col-span-12">{latin}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 hover p-5 lg:p-10 gap-4 cursor-pointer">
            <div className="col-span-6 lg:col-span-12">
              <img src={floralOne} alt="flower" className=" h-44 w-48" />
            </div>
            <div className="col-span-6 lg:col-span-12">
              <h1 className="text-xl font-bold text-salmonLight pb-5">
                Floral Design 3
              </h1>
              <p className="col-span-12">{latin}</p>
            </div>
          </div>
        </div>
          <Link to="/Back">
            <div className="grid grid-cols-12  h-10 rounded-lg justify-items-end ">
              <div
                style={{ backgroundColor: "#CA6D81" }}
                className="arrowButton col-start-12 h-12 w-12  rounded-lg">
                <img
                  className="w-8 mx-auto m-2"
                  src={flipButton}
                  alt="icon with arrow"
                />
              </div>
            </div>
          </Link>
      </div>
    </div>
  );
}

export default CardBack;
