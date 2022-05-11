import { useLocation } from "react-router-dom";
import React from "react";
import zodiacs from "../data.json";

export default function FormSubmission({ addForm }) {
  const { state } = useLocation();
  console.log("state", state);
  console.log(state);

  //finds the months from the zodiac list

//   zodiacs.map((zodiac) => {
//     // console.log(zodiac.month);
//     // console.log(zodiac.month);
//     let month = zodiac.month;
//     let sign = zodiac.sign;
//     let gloss = zodiac.gloss;
//     // console.log(month);
//     // console.log(sign);
//     // console.log(gloss);

//     //for loop example

//     // for (let i = 0; i <= zodiacs.length - 1; i++) {
//     //   for (let j = 0; j <= zodiacs[i].date.length - 1; j++) {
//     //     //this is the second array
//     //     // console.log(zodiacs[i].date[j]); //current object then the .date array ; [j can print the first date and the second date]
//     //     console.log(zodiacs[i].date[j].start); //this is the 321
//     //     return zodiacs[i].date[j];
//     //   }
//     //   console.log(`i am a loop!` + zodiacs[i]);
//     // }

//     let submitValue = Number(state.month) + Number(state.date);
//     console.log(submitValue);

// //     let startDate = zodiac.date.map((date) => {
// //       // console.log(date.start)
// //       return date.start;
// //     });
// // console.log("startDate", startDate)
// //     if (startDate == submitValue) {
      
// //       return sign;
// //     }

    
   
//     // if (state.date ===zodiacs[i].date[j].start){
//     //   return zodiac.sign
//     // }
//   });
let submitValue = Number(state.month) + Number(state.date);
    // console.log(submitValue);
  const zodiacSign=zodiacs.filter(x => { //if this is true it will return one item 
    // console.dir(x)
    // console.log (+x.date[0].start)
    // console.log(+x.date[0].start)
    // console.log(date[0].end)
    // console.log(submitValue);
   if( +x.date[0].start <= submitValue && +x.date[0].end >= submitValue){
     return x
   }
  })[0]
console.log(zodiacSign)

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
