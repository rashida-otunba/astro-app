import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignList from "./pages/SignList"
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="Signlist" element={<SignList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
