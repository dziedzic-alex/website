import { Routes } from "react-router-dom";

import Navbar from "./Navbar";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes></Routes>
    </div>
  );
}

export default App;
