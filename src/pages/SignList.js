import { Grid, Typography } from "@mui/material";
import zodiacssigns from "../data-null.json";
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
        padding={12}
        className="sign-container"
        sx={{ 
         m:0.5, alignItems:"center", justifyContent:"center"}}
      >
          {zodiacssigns.map((zodiac, index) => (
            <SignCard zodiac={zodiac} key={index} />
          ))}
      </Grid>
    </div>
  );
};

export default SignList;
