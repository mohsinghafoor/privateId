import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import img from "../../assets/mobile.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#525252",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1280,
    minHeight: "100vh",
    // background:
    //   "linear-gradient(89.45deg, rgba(0, 0, 0, 0) 23.65%, rgba(0, 0, 0, 0.9) 52.99%)",
  },
  circle: {
    width: 427,
    height: 436,
    background:
      "linear-gradient(117.06deg, #C9C9C9 -9.15%, rgba(201, 201, 201, 0) 70.04%)",
    borderRadius: 267.5,
    [theme.breakpoints.only("md")]: {
      height: 435,
    },
    [theme.breakpoints.only("xs")]: {
      width: 250,
      height: 250,
    },
  },
  img: {
    position: "absolute",
    height: 453,
    [theme.breakpoints.only("md")]: {
      height: 435,
      width: 238,
    },
    [theme.breakpoints.only("xs")]: {
      width: 150,
      height: 260,
    },
  },
  cardbox: {
    display: "flex",
    width: 445,
    marginTop: 10,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: 50,
      marginTop: 0,
    },
  },
  sqr: {
    width: 216,
    height: 58,
    background: "#434242",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    [theme.breakpoints.only("xs")]: {
      width: 120,
      height: 40,
      marginRight: 5,
    },
  },
  text: {
    maxWidth: 170,
    // height: 28,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    marginLeft: 20,
    /* or 18px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      fontSize: 16,
      maxWidth: 170,
      lineHeight: "21px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 10,
      width: "90%",
      marginLeft: 10,
    },
  },
}));

export default function FacialRecognition() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className={classes.circle} />
          <img src={img} className={classes.img} alt="mobile img" />
        </Grid>
        <Grid
          item
          lg={5}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Box style={{ marginBottom: 20, marginTop: 30 }}>
            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>#Unbiased AI</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>
                  Fully Homomorphic Encryption (FHE)
                </Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>#Continuous Auth</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>
                  Privacy Preserving Machine Learning
                </Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>#Passive Liveness</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>
                  IEEE 2410 Standard for Biometric Privacy
                </Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>#Touchless UI</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>WebAssembly / C++</Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>#Unlimited Users</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>NFC Encrypted Read/Write</Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
