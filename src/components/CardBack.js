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
import logo from "../images/logo.png";

import "../App.css";

function CardFront() {
  return (
    <div
      className="mx-auto cardBackground lg:rounded-lg lg:border-2 lg:border-white md:pb-10"
      // style={{position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}}
    >
      {/* <div className="flex justify-evenly">
        <div className="">
          <img
            src={profile}
            className=""
            style={{ borderRadius: "50%", border: "solid 3px white",width: '100px', height: '100px' }}
            alt="headshot"
          />
        </div>
        <div className="col-span-6 col-start-6 lg:col-start-7 lg:col-span-2 pt-5">
          <h1 className="text-xl lg:text-3xl font-bold text-salmon">Jane Smith</h1>
          <h2 className="text-lg lg:text-3xl  text-salmon">Floral Designer</h2>
        </div>
      </div> */}
      <div className="grid grid-cols-12 gap-3 md:gap-6 py-10 items-center">
        <div className="col-span-12 md:col-start-3 md:col-span-3 lg:col-start-3 lg:col-span-3 flex items-center">
          <img
            //   src="https://gravatar.com/avatar/645ad8dc88b181886f74644b9866f080"
            src={profile}
            className="w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto"
            style={{ borderRadius: "50%", border: "solid 3px white" }}
            alt="headshot"
          />
        </div>
        <div className="col-span-12 md:col-start-6 md:col-span-5 lg:col-span-6 lg:col-start-6 flex flex-col lg:flex-row gap-6 md:gap-3 lg:gap-0">
          <div class="flex flex-col text-center md:text-left">
            <h1 className="text-4xl md:text-2xl lg:text-3xl font-bold text-salmon">
              Jane Smith
            </h1>
            <h2 className="text-4xl md:text-2xl lg:text-3xl text-salmon">
              Floral Designer
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-xl rounded-lg relative mx-auto p-5 md:w-2/3  lg:w-11/12 max-h-1/3 block lg:flex lg:justify-around gap-20">
        {/* <div className="flex flex-col justify-items-center lg:col-start-1 lg:col-span-4 text-salmon ">
          <div className="flex gap-4 hover w-11/12 lg:w-10/12 p-3">
            <img className="w-10" src={instagram} alt="social" />
            <p className="lg:text-2xl">Instagram/janesmith</p>
          </div>
          <div className="flex gap-4 hover w-11/12 lg:w-10/12  p-3">
            <img className="w-10" src={facebook} alt="social" />
            <p className="lg:text-2xl">Facebook/janesmith</p>
          </div>
          <div className="flex gap-4 hover w-11/12 lg:w-10/12 p-3">
            <img className="w-10" src={pinterest} alt="social" />
            <p className="lg:text-2xl">Pinterest/janesmith</p>
          </div>
          <div className="flex gap-4 lg:my-5 hover w-11/12 lg:w-10/12 p-3">
            <img className="w-10" src={deviant} alt="social" />
            <p className="lg:text-2xl">Pinterest/janesmith</p>
          </div>
          <div className="flex gap-4  hover w-11/12 lg:w-10/12 p-3">
            <img className="w-10" src={behance} alt="social" />
            <p className="lg:text-2xl">Pinterest/janesmith</p>
          </div>
        </div> */}

            <p className="hide text-center pb-10">All my social handles</p>

        <div className="flex flex-col  items-start text-salmon gap-8 ml-10 lg:ml-0 pb-10">
          <div className="flex flex-row hover p-1 gap-10 lg:gap-3">
            <img className="w-10" src={instagram} alt="social" />
            <p className="lg:text-2xl">Instagram/janesmith</p>
          </div>
          <div className="flex flex-row hover p-1 gap-10 lg:gap-3">
            <img className="w-10" src={facebook} alt="social" />
            <p className="lg:text-2xl">Facebook/janesmith</p>
          </div>
          <div className="flex flex-row hover p-1 gap-10 lg:gap-3">
            <img className="w-10" src={pinterest} alt="social" />
            <p className="lg:text-2xl">Pinterest/janesmith</p>
          </div>
          <div className="flex flex-row hover p-1 gap-10 lg:gap-3">
            <img className="w-10" src={deviant} alt="social" />
            <p className="lg:text-2xl">deviantart/janesmith</p>
          </div>
          <div className="flex flex-row hover p-1 gap-10 lg:gap-3">
            <img className="w-10" src={behance} alt="social" />
            <p className="lg:text-2xl">behance/janesmith</p>
          </div>
        </div>

        <div className="grid grid-rows-3  grid-flow-col  gap-4 border-2 border-gray h-1/2">
          <div className="row-span-3">
            <img
              src={qrCode}
              alt="qr code"
              className="mt-10 ml-2  lg:w-60 lg:h-60 lg:m-3"
            />
          </div>
          <div className="row-span-1">
            <h1 className="font-bold text-sm lg:text-2xl">Jane Smith</h1>
            <p className="text-sm lg:text-lg">janesmith@example.com</p>
          </div>
          <div className="row-span-1">
            <p className="pt-5 lg:text-xl">
              Scan QR code to checkout my website for more information!
            </p>
          </div>
        </div>

        {/* <div
          className="col-span-11 xl:col-start-7 x:col-span-6 rounded-lg mt-10 mx-2 lg:my-5 border-2"
          style={{ border: "solid 1px gray", height: "200px" }}
        >
          <div className="flex gap-4 lg:gap-8">
            <img
              src={qrCode}
              alt="qr code"
              className="mt-10 ml-2 w-20 h-20 lg:w-40 lg:h-40 lg:m-3"
            />
            <div className="pt-8">
              <h1 className="font-bold text-sm lg:text-2xl">Jane Smith</h1>
              <p className="text-sm lg:text-lg">janesmith@example.com</p>
              <p className="pt-5 lg:text-xl">
                Scan QR code to checkout my website for more information!
              </p>
            </div>
          </div>
        </div> */}
        {/*
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
        </button> */}
      </div>
    </div>
  );
}

export default CardFront;
