import { Container, Typography, Button, Grid } from "@mui/material";
import "./Home.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <NavBar />
    <div className="grid-content-wrapper">
    <Container className="home-container"

    >
    
      <Grid>

        <Typography
          variant="h1" //applied style to page; will look like this
          component="h1" //final result tag; will show as h1 in browser
          className="main-title"
        >
          astro.
        </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" component="h2">
            personalized astrology info based on your birthdate.
          </Typography>
        </Grid>
        <Grid>
          <Button variant="outlined">
            <Link to="form">find your sign.</Link>
          </Button>
        </Grid>
 
    </Container>
    </div>
  </div>
);

export default Home;
