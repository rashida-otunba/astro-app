import { Container, Grid, Typography, Card } from "@mui/material";
import zodiacs from "../data.json";
import "./SignList.css"

const SignList = () => <div>
    <Container sx={{ marginY: 5 }}>
    {zodiacs.map((zodiac) => (
        <>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {zodiac.name} Tours
          </Typography>

          <Grid container spacing={5}>
            {zodiac.map((element, index) => (
              <Card zodiac={zodiacs} key={index} />
            ))}
          </Grid>
        </>
      ))}
    </Container>
</div>;

export default SignList;
