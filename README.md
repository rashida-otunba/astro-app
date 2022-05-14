Overview 
Astro. is a zodiac sign generator that allows users to input their birthdate and returns a zodiac sign based on the given information. 

Technologies Used
React, MUI, CSS, HTML

Data Structure 
The birthday input form is assigned 12 months of the year with  31 days to choose from. The form assigns each month a number value from 100 to 1300 to represent the months with an additional month to represent the change in signs in the middle of the month of March. The dates are assigned the number value from 1 to 31. The logic in FormSubmission.jsx adds the month and day values together to produce a new number (EX: April 5 will equal the number 405). The logic located in data.json assigns the zodiac signs a number value with a start and end date. This range is what allows the date and month entered by the user to be matched with a sign. 

Roadmap
In the future I would like to add some more information regarding each sign to the JSON to allow users to know more about their zodiac signs and also update the SignCard js to render as a pop up as opposed to a brand new page.