import { useLocation } from "react-router-dom";
import React from "react";
import zodiacs from "../data.json";

export default function FormSubmission({ addForm }) {
  const { state } = useLocation();
  console.log("state", state);
  console.log(state);

  let submitValue = Number(state.month) + Number(state.date); //321 = 300+21

  console.log(submitValue);
  const zodiacSign = zodiacs.filter((x) => {
    
    //create a function to convert string to numbers that can be incremented through the date range and once numbers appear then you can
    let startDate = parseInt(+x.date[0].start);
    console.log(startDate);
    let endDate = parseInt(+x.date[0].end);

    if (startDate >= submitValue || endDate >= submitValue) {//if this is true it will return one item
      console.log(x);
      return x;
    }
    // return x;
  })[0];
  console.log(zodiacSign);
  console.log(zodiacSign.sign);

  return (
    <div>
      <div style={{ color: "#fff" }}>
        <p>your sign is {zodiacSign.sign}</p>
        <p>your element is {zodiacSign.element}</p>
      </div>
    </div>
  );
}
