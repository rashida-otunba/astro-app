import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignList from "./pages/SignList"
import Home from "./pages/Home";
import Form from "./pages/Form"
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="Signlist" element={<SignList />}/>
        <Route path="Form" element={<Form />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
