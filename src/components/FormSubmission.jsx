import { useLocation } from "react-router-dom";
import React from "react";
import zodiacs from "../data.json";
import { Grid, Typography } from "@mui/material";
import "./FormSubmission.css";
import NavBar from "./NavBar";

export default function FormSubmission({ addForm }) {
  const { state } = useLocation();
  // console.log("state", state);
  // console.log(state);

  let submitValue = Number(state.month) + Number(state.date); //321 = 300+21
  console.log(state)
  console.log(submitValue);

  const zodiacSign = zodiacs.filter((x) => {
    //create a function to convert string to numbers that can be incremented through the date range and once numbers appear then you can
    let startDate = parseInt(+x.date[0].start);
    // console.log(startDate);
    let endDate = parseInt(+x.date[0].end);
    // console.log(endDate);

    if (startDate  >=submitValue   || endDate  >= submitValue) {
      //if this is true it will return one item
      // console.log(x);
      return x;
    }

    // return console.log(x);
  })[0];
  // console.log(zodiacSign);
  // console.log(zodiacSign.sign);

  return (
    <>
      <NavBar />

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
        <Grid
          container={true}
          sx={{
            // m: 10,
            height: "auto",
            // width: "60vh",
            borderRadius: "10px",
            backgroundColor: "#0e1f40",
            mx: "auto",
            width: "35%",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "#fff" }}>
            <p>
              {" "}
              your sign is: <br /> <b> {zodiacSign.sign}</b>
            </p>
            {/* <p>your sign is<b> {zodiacSign.sign}</b></p> */}
            <p>
              your element is <br />
              <b> {zodiacSign.element}</b>
            </p>
            <p>
              common traits for your sign are
              <b>
                <ul>
                  <li> {zodiacSign.keywords[0]}</li>
                  <li> {zodiacSign.keywords[1]}</li>
                  <li> {zodiacSign.keywords[2]}</li>
                </ul>
              </b>
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
