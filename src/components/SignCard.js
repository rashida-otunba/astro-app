import Paper from "@mui/material/Paper";
import {
  Grid,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import zodiacs from "../data.json";

const theme = createTheme({
  components: {
    muiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
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
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src={zodiac.unicode_symbol}
            alt="zodiac symbol"
            className="img"
          />
          <Box paddingX={1}>
            {/* adds padding to both x and y axis  */}
            <Typography variant="subtitle1" component="h2">
              {zodiac.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {zodiac.keywords}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            ></Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default SignCard;
