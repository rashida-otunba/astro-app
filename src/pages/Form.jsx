import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import "./Form.css";
import zodiacs from "../data.json";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form({ addForm }) {
  const navigate = useNavigate();
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
    // console.log(formInfo);
    // navigate(`/FormSubmission`, {formInfo})
    navigate("/FormSubmission", { state: formInfo });

    setFormInfo({ name: "", month: "", date: "" });
  };

  return (
    // <Container className="form-container">
    // <Card
    // sx={{ minWidth: 175, marginY:40 }}
    // >
    // <CardContent>
    <>
      <NavBar />
      {/* <div className="form-container"> */}
      <Grid
        container={true}
        sx={{
          justifyContent: "center",
          height: "45vh",

          alignItems: "center",
          justifyContent: "center",
          m: 2,
          //  backgroundColor:"yellow"
        }}
      >
        {/* <div className="form-inner-container"> */}
        <Grid
          container={true}
          sx={{
            // m: 10,
            height: "auto",
            width: "60vh",
            borderRadius: "10px",
            backgroundColor: "#0e1f40",
            mx: "auto",
            width: 200,
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              color: "white",
              marginY: 5,
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            Select Your Birth Date
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container={true} sx={{ alignItems: "center" }}>
              {/* <div> */}
              <ul>
                {/* <Grid item={true}>
                  <li>
                    <label for="name">Name:</label>
                    <input
                      type="text"
                      value={formInfo.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </li>
                </Grid> */}

                {/* </div> */}

                <Grid item={true}>
                  {/* <div> */}
                  <li>
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
                    {/* </div> */}
                  </li>
                </Grid>
                <Grid item={true}>
                  {/* <div> */}
                  <li>
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
                    {/* </div> */}
                  </li>
                </Grid>
                <Grid item={true}>
                  {/* <div> */}
                  <li>
                    <input
                      type="submit"
                      value="Submit"
                      // onClick={handleChange}
                    />
                    <Link to="/FormSubmission"></Link>
                    {/* </div> */}
                  </li>
                </Grid>
              </ul>
            </Grid>
          </form>
          {/* </div> */}
        </Grid>
      </Grid>
      {/* </div> */}
    </>
    // </CardContent>
    // </Card>

    // </Container>
    //classname or unique key is needed for this
    //map over JSOn based on the state based on the input onthe form
    //use useHooks inside form.js
  );
}
