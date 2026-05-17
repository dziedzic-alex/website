import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
