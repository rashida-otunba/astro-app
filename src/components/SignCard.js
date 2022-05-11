import Paper from "@mui/material/Paper";
import {
  Grid,
  Box,

  Typography,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

import "./SignCard.css";

const SignCard = ({ zodiac }) => {
  //variant is how it will look
  //component is what html element it will be <h2>
  return (
    <Paper 
      elevation={4}
      className="sign-grid-element-ind"
      sx={{
        //  backgroundColor: "#E7DED8",
        //  backgroundColor: "#5e000c",
         backgroundColor: "#493240",
          m: 2,
    }}
  
      item={true}
      xs={6}
    
    >


        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: "#E7DED8",
            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop:2,
            fontFamily:"Archivo"
          }}
        
        >
          {zodiac.sign}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            color: "black",
            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17
          }}
        >
         element: 
         <Typography
          variant="h5"
          component="h5"
          sx={{
            // color: "black",
            color: "#E7DED8",

            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18
          }}
        >
           {zodiac.element}
        </Typography>
        </Typography>
        <Typography
          sx={{
            color: "black",
            // backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 3,
          }}
        >
          traits
          <Typography
            className="list-item"
            variant="h6"
            component="h6"
            // marginLeft={0}
            sx={
              {
                // backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight:3,
            color: "#E7DED8",
            
              }
            }
          >
            <ul>
              {zodiac.keywords.map((key, index) => (
                <li>{key}</li>
              ))}
            </ul>
          </Typography>
        </Typography>
   
    </Paper>
  );
};

export default SignCard;
