import React from "react";


import { Link } from "react-router-dom";

import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import pinterest from "../images/pinterest.svg";
import deviant from "../images/deviantart.svg";
import behance from "../images/behance.svg";
import qrCode from "../images/qr-code.png";
import flipButton from "../images/flip-icon.svg";
import profile from '../images/profile.png'
import logo from '../images/logo.png'

import "../App.css";

function CardFront() {
  return (
    <div
      className="container  mx-auto px-10 lg:px-20 pb-10 cardBackground rounded-lg"

    >

      <div className="grid grid-cols-12">
        <div className="col-span-3 col-start-1  lg:col-span-1 lg:col-start-5 lg:justify-center relative">
          <img
            // src="https://gravatar.com/avatar/645ad8dc88b181886f74644b9866f080"
            src={profile}
            style={{ borderRadius: "50%", border: "solid 3px white",width: '100px', height: '100px' }}
            alt="headshot of spencer renfro"
          />
          <img className="w-12 logo-container position-absolute" src={logo} alt='floral logo'/>
        </div>
        <div className="col-span-6 col-start-6 lg:col-start-7 lg:col-span-2 pt-5 ">
        <h1 className="text-xl lg:text-3xl font-bold text-salmon">Jane Smith</h1>
            <h2 className="text-lg lg:text-3xl  text-salmon">
              Floral Designer
            </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 pb-10 mt-10 lg:my-10 bg-white relative shadow-xl rounded"
        >
        <div className="lg:m-6 col-span-12 lg:col-start-1 lg:col-span-2 text-salmon">
          <div className="flex gap-4 lg:my-5 hover w-72 p-3">
            <img className="w-10" src={instagram} alt="social"/>
            <p className="lg:text-2xl">Instagram/janesmith</p>
          </div>
          <div className="flex gap-4 lg:my-5 hover w-72 p-3">
            <img className="w-10" src={facebook} alt="social" />
            <p className="lg:text-2xl">Facebook/janesmith</p>
          </div>
          <div className="flex gap-4 lg:my-5  hover w-72 p-3">
            <img className="w-10" src={pinterest} alt="social" />
            <p className="lg:text-2xl">Pinterest/janesmith</p>
          </div>
          <div className="flex gap-4 lg:my-5 hover w-72 p-3">
            <img className="w-10" src={deviant} alt="social" />
            <p className="lg:text-2xl">Pinterest/janesmith</p>
          </div>
          <div className="flex gap-4 lg:my-5 hover w-72 p-3">
            <img className="w-10" src={behance} alt="social" />
            <p className="lg:text-2xl">Pinterest/janesmith</p>
          </div>
        </div>

        <div
          className="w-full mx-2 lg:my-5 col-span-11 lg:col-start-7 lg:col-span-5 rounded-lg mt-10"
          style={{ border: "solid 1px gray", height: '200px' }}
        >
          <div className="flex gap-4 lg:gap-8">
            <img src={qrCode} alt="qr code" className="mt-10 ml-2 w-20 h-20 lg:w-40 lg:h-40 lg:m-3" />
            <div className="pt-8">
               <h1 className="font-bold text-sm lg:text-2xl">Jane Smith</h1>
               <p className="text-sm lg:text-lg">janesmith@example.com</p>
              <p className="pt-5 lg:text-xl">
                Scan QR code to checkout my website for more information!
              </p>
            </div>
          </div>

        </div>
            <button className="image-container position-absolute ">
            <Link to="/">
            <div className="grid grid-cols-12  h-10 rounded-lg ">
            <div
                style={{ backgroundColor: "#CA6D81" }}
                className="col-start-12  h-12 w-12  rounded-lg"
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

export default CardFront;
