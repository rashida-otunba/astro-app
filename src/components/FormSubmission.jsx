import { useLocation } from "react-router-dom";
import React from "react";
import zodiacs from "../data.json";
import { Grid, Typography } from "@mui/material";
import "./FormSubmission.css";
import NavBar from "./NavBar";

export default function FormSubmission({ addForm }) {
  const { state } = useLocation();

  let submitValue = Number(state.month) + Number(state.date); //321 = 300+21
  console.log(state);
  console.log(submitValue);

  const zodiacSign = zodiacs.filter((x) => {
    //create a function to convert string to numbers that can be incremented through the date range and once numbers appear then you can
    let startDate = parseInt(+x.date[0].start);
    let endDate = parseInt(+x.date[0].end);

    if (startDate >= submitValue || endDate >= submitValue) {
      //if this is true it will return one item
      return x;
    }
  })[0];

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
              {state.name} your sign is: <br /> <b> {zodiacSign.sign}</b>
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
