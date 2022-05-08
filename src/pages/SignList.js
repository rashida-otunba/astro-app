import { Container, Grid, Typography, Card } from "@mui/material";
import zodiacs from "../data.json";
import "./SignList.css";

const SignList = () => {
    
    return (
  
   <div>
      <Typography variant="h2" component="h2">
            Zodiac Signs
          </Typography>
    <Container sx={{ marginY: 10, 
    marginX: 23}}>
      {zodiacs.map((zodiac) => (
        <>
        

          <Grid container spacing={0}
          
          >
            <Typography variant="h2" component="h2">
               {zodiac.sign}
               
              </Typography>

          </Grid>
        </>
      ))}
    </Container>
  </div>
   
)};

export default SignList;
