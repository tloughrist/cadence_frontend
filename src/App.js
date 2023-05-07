import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home.js";
import Error from "./components/error.js";
import './input.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;

