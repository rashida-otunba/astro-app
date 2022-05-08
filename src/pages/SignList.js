import { Container, Grid, Typography, Card } from "@mui/material";
import zodiacs from "../data.json";
import "./SignList.css";
import SignCard from "../components/SignCard";

const SignList = () => {
  return (
    <div>
      <Typography variant="h2" component="h2">
        Zodiac Signs
      </Typography>
      <Container sx={{ marginY: 10, marginX: 23 }}>
        {zodiacs.map((zodiac) => (
          <>
            <Typography variant="h2" component="h2">
              {zodiac.sign}
            </Typography>

            <Grid container spacing={0}>
            {zodiacs.map((zodiac, index) => (
              <SignCard zodiac={zodiac} key={index} />
            ))}

            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default SignList;
