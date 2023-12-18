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
    <div className="mx-auto px-20 cardBackground rounded-lg pb-20">
      <div className="grid grid-cols-12 gap-6 py-10 items-center">
        <div className="col-start-2 col-span-2 flex items-center">
          <img
            //   src="https://gravatar.com/avatar/645ad8dc88b181886f74644b9866f080"
            src={profile}
            className="w-3/4 mx-auto"
            style={{ borderRadius: "50%", border: "solid 3px white" }}
            alt="headshot"
          />
        </div>
        <div className="col-span-4">
          <div class="flex flex-col">
            <h1 className="text-xl lg:text-3xl font-bold text-salmon">Jane Smith</h1>
            <h2 className="text-xl lg:text-3xl text-salmon">Floral Designer</h2>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-row items-center justify-end gap-4">
            <img className="rounded-lg p-1 h-10 w-10 hover cursor-" src={instagram} alt="icon" />
            <img className="rounded-lg p-1 h-10 w-10 hover cursor-pointer" src={facebook} alt="icon" />
            <img className="rounded-lg p-1 h-10 w-10 hover cursor-pointer" src={pinterest} alt="icon" />
            <img className="rounded-lg p-1 h-10 w-10 hover cursor-pointer" src={deviant} alt="icon" />
            <img className="rounded-lg p-1 h-10 w-10 hover cursor-pointer" src={behance} alt="icon" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg relative mx-auto p-5">
        <div className="grid grid-cols-12 gap-8 ">
          <div className="grid grid-cols-12 col-span-12 lg:col-span-4 hover cursor-pointer p-5 lg:p-10 gap-4">
            <div className="col-span-3 lg:col-span-12 ">
              <img src={floralOne} alt="flower" className=" h-44 w-48" />
            </div>
            <div className="col-span-6 lg:col-span-12 grid grid-cols-12">
              <h1 className="text-xl font-bold text-salmonLight col-span-12">
                Floral Design 1pointer
              </h1>
              <p className="col-span-12">{latin}</p>
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-12 lg:col-span-4 hover cursor-pointer p-5 lg:p-10 gap-4">
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
          <div className="grid grid-cols-12 col-span-12 lg:col-span-4 hover cursor-pointer p-5 lg:p-10 ">
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
