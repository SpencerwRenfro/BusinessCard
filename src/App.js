import { Routes, Route } from "react-router-dom";

import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import "./App.css";
function App() {
  return (
    <div className="">
    <div className="lg:p-16  container mx-auto">
      <div className="">
        <Routes>
          <Route path="/" element={<CardFront />} />
          <Route path="/Back" element={<CardBack />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
