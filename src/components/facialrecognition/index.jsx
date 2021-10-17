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
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      height: 630,
    },
    [theme.breakpoints.only("md")]: {
      height: 400,
    },
    [theme.breakpoints.only("sm")]: {
      height: 850,
    },
    [theme.breakpoints.up("xs")]: {
      height: 830,
    },
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1280,
    // background:
    //   "linear-gradient(89.45deg, rgba(0, 0, 0, 0) 23.65%, rgba(0, 0, 0, 0.9) 52.99%)",
  },
  circle: {
    width: 427,
    height: 436,
    background:
      "linear-gradient(117.06deg, #C9C9C9 -9.15%, rgba(201, 201, 201, 0) 70.04%)",
    borderRadius: 267.5,
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 333,
    },
  },
  img: {
    position: "absolute",
    height: 453,
    [theme.breakpoints.only("xs")]: {
      width: 190,
      height: 353,
    },
  },
  cardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 445,
    marginTop: 10,
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 50,
    },
  },
  sqr: {
    width: 216,
    height: 58,
    background: "#434242",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      width: 155,
      height: 50,
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
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
      maxWidth: 140,
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
          <Box>
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
