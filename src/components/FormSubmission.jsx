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
let submitValue = Number(state.month) + Number(state.date); //321 = 300+21

    console.log(submitValue);
  const zodiacSign=zodiacs.filter(x => { //if this is true it will return one item 
    // console.dir(x)
    // console.log (+x.date[0].start)
    // console.log(+x.date[0].start)
    // console.log(date[0].end)
    // console.log(submitValue);

    // if( +x.date[0].start <= submitValue && +x.date[0].end >= submitValue){}
//create a function to convert string to numbers that can be incremented through the date range and once numbers appear then you can 
let startDate= parseInt(+x.date[0].start) 
console.log(startDate)
let endDate= parseInt(+x.date[0].end) 



   if(  startDate >= submitValue  || endDate >= submitValue   ){
    console.log(x)
    return x
   }
  
  })[0]
console.log(zodiacSign)
console.log(zodiacSign.sign)

  return (
    <div>
      <div style={{ color: "#fff" }}>
        <p>your sign is {zodiacSign.sign}</p>
        <p>your element is {zodiacSign.element}</p>

     
      </div>
    </div>
  );
}
