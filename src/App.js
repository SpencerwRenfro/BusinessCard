import { Routes, Route } from "react-router-dom";

import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import "./App.css";
function App() {
  return (
    <div className="backgroundImage" style={{height: '100vh'}}>
      <div className="">
        <Routes>
          <Route path="/" element={<CardFront />} />
          <Route path="/Back" element={<CardBack />} />
        </Routes>
      </div>
      {/* <div class="bg-slate-100 flex justify-center">
        <div className="hover card w-96 col-start-1 bg-slate-800 inline-block">
            <figure className="px-10 pt-10 ">
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="text-xl font-bold text-salmonLight">
                Floral Design 1
              </h1>
              <p>{}</p>
            </div>
        </div>
        <div className="hover card w-96 col-start-1 bg-slate-800 inline-block">
            <figure className="px-10 pt-10 ">
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="text-xl font-bold text-salmonLight">
                Floral Design 1
              </h1>
              <p>{}</p>
            </div>
        </div>
        <div className="hover card w-96 col-start-1 bg-slate-800 inline-block">
            <figure className="px-10 pt-10 ">
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="text-xl font-bold text-salmonLight">
                Floral Design 1
              </h1>
              <p>{}</p>
            </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
