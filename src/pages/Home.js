import { Container, Typography, Button } from "@mui/material";
import "./Home.css";
import NavBar from "../components/NavBar";
import {Link} from 'react-router-dom'

const Home = () => (
  <div>
    <Container 
    className="home-container">
      <NavBar />
      <Typography
        variant="h1" //applied style to page; will look like this
        component="h1" //final result tag; will show as h1 in browser
      className="main-title"
      >
        astro.
      </Typography>

      <Typography variant="h5" component="h2">
        personalized astrology info based on your birthdate.
      </Typography>

      <Button variant="outlined"><Link to ="form">find your sign.</Link></Button>
    </Container>
  </div>
);

export default Home;
