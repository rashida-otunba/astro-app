import { Container, Grid, Typography,  } from "@mui/material";
import zodiacs from "../data.json";
import "./SignList.css";
import SignCard from "../components/SignCard";

const SignList = () => {
  return (
    <div>
    
      <Typography variant="h2" component="h2"
      
        sx={{
            display: "flex",
            justifyContent: "center",
            color:"white",
            marginY: 5
          }}
      
      className="header-sign"
      >
        Zodiac Signs
      </Typography>
      <Container className="sign-container" 
      sx={{
    
           
           }}>
        {/* {zodiacs.map((zodiac) => ( */}
          <>
            {/* <Typography variant="h2" component="h2">
              {zodiac.sign}
            </Typography> */}

            <Grid container spacing={0}
              className="sign-items"
            >
              {zodiacs.map((zodiac, index) => (
                <SignCard 
                zodiac={zodiac} key={index}
              
                 />
              ))}
            </Grid>
          </>
         )
       
      </Container>
    </div>
     )
}

export default SignList;
