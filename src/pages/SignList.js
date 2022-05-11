import { Grid, Typography } from "@mui/material";
import zodiacs from "../data.json";
import "./SignList.css";
import SignCard from "../components/SignCard";
import NavBar from "../components/NavBar";

const SignList = () => {
  return (
    <div>
      <NavBar />
      <Typography
        variant="h2"
        component="h2"
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          marginY: 5,
          fontFamily: "Plus Jakarta Sans",
        }}
        className="header-sign"
      >
        Zodiac Signs
      </Typography>
      <Grid
        container={true}
        xs={12}
        // marginY={6}
        // marginX={6}
        padding={12}
        className="sign-container"
        sx={{ 
          // borderColor: "blue",
         m:0.5, alignItems:"center", justifyContent:"center"}}
      >
        {/* {zodiacs.map((zodiac) => ( */}
        {/* <Typography variant="h2" component="h2">
              {zodiac.sign}
            </Typography> */}

        {/* <Grid item={true} xs={3} sx={{backgroundColor: "orange",}} containerspacing={0} > */}
          {zodiacs.map((zodiac, index) => (
            <SignCard zodiac={zodiac} key={index} />
          ))}
        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default SignList;
