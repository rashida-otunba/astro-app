import React from "react";
import { useState } from "react";
import { Container, Card, CardContent } from "@mui/material";
import NavBar from "../components/NavBar";
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

    const monthFinder = //finds the months from the zodiac list 
      zodiacs.map((zodiac) => {
        // console.log(zodiac.month);
      
           return zodiac.month
      
      });
      console.log(`this is the month finder ${monthFinder}`)

      const signFinder= //finds the sign from the list 
      zodiacs.map((zodiac) => {
        // console.log(zodiac.month);
        return zodiac.sign;
      });
      console.log(`this is the signlist: ${signFinder}`)
  //for loop example 
for (let i=0; i<=zodiacs.length-1; i++){
  for (let j=0; j<=zodiacs[i].date.length-1;j++){//this is the second array 
  console.log(zodiacs[i].date[j])//current object then the .date array ; [j can print the first date and the second date]
  }console.log(`i am a loop!`+ zodiacs[i])
}

  };

  return (
    // <Container className="form-container">
    // <Card
    // sx={{ minWidth: 175, marginY:40 }}
    // >
    // <CardContent>
    <>
      <NavBar />
      <div>
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
          type="number"
        >
          <option onChange={handleChange} value="100">
            January
          </option>
          <option onChange={handleChange} value="200">
            February
          </option>
          <option onChange={handleChange} value="300">
            March
          </option>
          <option onChange={handleChange} value="400">
            April
          </option>
          <option onChange={handleChange} value="500">
            May
          </option>
          <option onChange={handleChange} value="600">
            June
          </option>
          <option onChange={handleChange} value="700">
            July
          </option>
          <option onChange={handleChange} value="800">
            August
          </option>
          <option onChange={handleChange} value="900">
            September
          </option>
          <option onChange={handleChange} value="1000">
            October
          </option>
          <option onChange={handleChange} value="1100">
            November
          </option>
          <option onChange={handleChange} value="1200">
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

        <input
          type="submit"
          value="Submit"
          // onClick={handleChange}
        />
      </form>
      </div>
    </>
    // </CardContent>
    // </Card>

    // </Container>
    //classname or unique key is needed for this
    //map over JSOn based on the state based on the input onthe form
    //use useHooks inside form.js
  );
}
