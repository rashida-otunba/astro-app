import Paper from "@mui/material/Paper";
import {
  Grid,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "./SignCard.css";

const theme = createTheme({
  components: {
    muiTypography: {
      variants: [
        {
          props: {
            variant: "h3",
          },
          style: {
            fontSize: 14,
            border: "yellow",
          },
        },
      ],
    },
  },
});

const SignCard = ({ zodiac }) => {
  //variant is how it will look
  //component is what html element it will be <h2>
  return (
    <Grid item xs={3} className="sign-grid">
      <ThemeProvider
        theme={theme}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={1}
          className="sign-grid-element-ind"
          sx={{ backgroundColor: "#E7DED8" }}
        >
          {/* <img src={zodiac.unicode_symbol} 
          alt="zodiac symbol" className="img" /> */}
          <Box paddingX={0}>
            {/* adds padding to both x and y axis  */}

            <Box
              paddingX={0.5}
              sx={{
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "black",
                  // backgroundColor: "yellow",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                }}
              >
                {zodiac.sign}
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  // backgroundColor: "orange",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                traits
              </Typography>
              <Typography
                className="list-item"
                variant="h6"
                component="p"
      
                // marginLeft={0}
                sx={{
                  // backgroundColor: "green",
                  display: "flex",
                  // alignItems: "center",
                  justifyContent: "center",
                 
                }}
              >
                <ul>
                  {zodiac.keywords.map((key, index) => (
                    <li>{key}</li>
                  ))}
                </ul>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default SignCard;
