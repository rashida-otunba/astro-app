import { Container, Button } from "@mui/material";
// import "..App.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home = () => (
 
 <Container className="background-container">

    <NavBar />

    <main className="home-container">
      <div className="main-container">
      <div>
        <h1 className="main-title">astro.</h1>
      </div>
      <div>
        <h2>personalized astrology info based on your birthdate.</h2>
      </div>
      <div>
        <Button 
      
        sx={{backgroundColor: "black", fontColor:"white"}}
        >
          <Link className="link-style" to="form">find your sign.</Link>
        </Button>
      </div>
      </div>
    </main>
  
  </Container>
);

export default Home;
