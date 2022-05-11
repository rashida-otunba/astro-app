import { useLocation } from "react-router-dom";
import React from "react";
import zodiacs from "../data.json";

export default function FormSubmission({ addForm }) {
  const { state } = useLocation();
  console.log("state", state);
  console.log(state);

  //finds the months from the zodiac list
  zodiacs.map((zodiac) => {
    // console.log(zodiac.month);
    console.log(zodiac.month);
    return zodiac.month;
  });

 //finds the sign from the list
    zodiacs.map((zodiac) => {
      // console.log(zodiac.month);
      return zodiac.sign;
    });
 


  //for loop example

  for (let i = 0; i <= zodiacs.length - 1; i++) {
    for (let j = 0; j <= zodiacs[i].date.length - 1; j++) {
      //this is the second array
      // console.log(zodiacs[i].date[j]); //current object then the .date array ; [j can print the first date and the second date]
      console.log(zodiacs[i].date[j].start); 
      return zodiacs[i].date[j];
    }
    console.log(`i am a loop!` + zodiacs[i]);
  }

  return (
    <div>
      <div style={{ color: "#fff" }}>
        <p>you were born in {state.month}</p>
        <p>{state.date}</p>
        <p>{state.name}</p>
      </div>
    </div>
  );
}
