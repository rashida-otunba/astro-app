import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import SignList from "./pages/SignList"
import Home from "./pages/Home";
import Form from "./pages/Form";
import FormSubmission from "./components/FormSubmission"
import React from "react";
import NavBar from "./components/NavBar"

function App() {
const [form, updateForm]=useState([]);
  // this creates an array state to store the submitted form data

const addForm=(form)=>{
  updateForm ([...form, updateForm]);
}
console.log(form)

  return (
    <BrowserRouter>
      <Routes>
   
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="Signlist" element={<SignList />}/>
        <Route path="Form" element={<Form addForm={addForm} />}/>
        <Route path="FormSubmission" element={<FormSubmission form={form} />}/> 
        {/* stored data enters here to send to FormSubmission */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
