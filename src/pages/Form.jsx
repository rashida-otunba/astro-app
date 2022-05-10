import React from "react";
import { useState } from "react";
import { Container, Card, CardContent} from "@mui/material";
import NavBar from "../components/NavBar"
import "./Form.css";
import zodiacs from "../data.json";


export default function Form({ addForm }) {
  const [formInfo, setFormInfo] = useState({
    name: "",
    month: "",
    date: "",
  });

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value }); //setFormInfo is used to update the current object using the spread operator
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    //log the formInfo state to the browser
    event.preventDefault();
    console.log(formInfo);
    setFormInfo({ name: "", month: "", date: "" });
  };

  const monthFind=()=>{
    if (formInfo.month===zodiacs.month){
      return alert("same month")

    }
  }

  return (
    // <Container className="form-container">
      // <Card 
      // sx={{ minWidth: 175, marginY:40 }}
      // >
      // <CardContent>
      <>
      <NavBar />
        <form onSubmit={handleSubmit}>
          <label for="name">Name:</label>
          <input
            type="text"
            value={formInfo.name}
            name="name"
            onChange={handleChange}
          />

          <label for="month">Birth Month:</label>
          <select
            name="month"
            value={formInfo.month}
            onChange={handleChange}
            type="text"
          >
            <option onChange={handleChange} value="January">
              January
            </option>
            <option onChange={handleChange} value="February">
              February
            </option>
            <option onChange={handleChange} value="March">
              March
            </option>
            <option onChange={handleChange} value="April">
              April
            </option>
            <option onChange={handleChange} value="May">
              May
            </option>
            <option onChange={handleChange} value="June">
              June
            </option>
            <option onChange={handleChange} value="July">
              July
            </option>
            <option onChange={handleChange} value="August">
              August
            </option>
            <option onChange={handleChange} value="September">
              September
            </option>
            <option onChange={handleChange} value="October">
              October
            </option>
            <option onChange={handleChange} value="November">
              November
            </option>
            <option onChange={handleChange} value="December">
              December
            </option>
          </select>

          <label for="date">Birth Date:</label>
          <select
            name="date"
            value={formInfo.date}
            type="number"
            onChange={handleChange}
          >
            <option onChange={handleChange} value="1">
              1
            </option>
            <option onChange={handleChange} value="2" type="number">
              2
            </option>
            <option onChange={handleChange} value="3" type="number">
              3
            </option>
            <option onChange={handleChange} value="4">
              4
            </option>
            <option onChange={handleChange} value="5">
              5
            </option>
            <option onChange={handleChange} value="6">
              6
            </option>
            <option onChange={handleChange} value="7">
              7
            </option>
            <option onChange={handleChange} value="8">
              8
            </option>
            <option onChange={handleChange} value="9">
              9
            </option>
            <option onChange={handleChange} value="10">
              10
            </option>
            <option onChange={handleChange} value="11">
              11
            </option>
            <option onChange={handleChange} value="12">
              12
            </option>
            <option onChange={handleChange} value="13">
              13
            </option>
            <option onChange={handleChange} value="14">
              14
            </option>
            <option onChange={handleChange} value="15">
              15
            </option>
            <option onChange={handleChange} value="16">
              16
            </option>
            <option onChange={handleChange} value="17">
              17
            </option>
            <option onChange={handleChange} value="18">
              18
            </option>
            <option onChange={handleChange} value="19">
              19
            </option>
            <option onChange={handleChange} value="20">
              20
            </option>
            <option onChange={handleChange} value="21">
              21
            </option>
            <option onChange={handleChange} value="22">
              22
            </option>
            <option onChange={handleChange} value="23">
              23{" "}
            </option>
            <option onChange={handleChange} value="24">
              24
            </option>
            <option onChange={handleChange} value="25">
              25
            </option>
            <option onChange={handleChange} value="26">
              26
            </option>
            <option onChange={handleChange} value="27">
              27
            </option>
            <option onChange={handleChange} value="28">
              28
            </option>
            <option onChange={handleChange} value="29">
              29
            </option>
            <option onChange={handleChange} value="30">
              30
            </option>
            <option onChange={handleChange} value="31">
              31
            </option>
          </select>

          <input type="submit" value="Submit" 
          // onClick={handleChange} 
          />
        </form>
        </>
        // </CardContent>
      // </Card>
      
    // </Container>
    //classname or unique key is needed for this
    //map over JSOn based on the state based on the input onthe form
    //use useHooks inside form.js
  );
}
