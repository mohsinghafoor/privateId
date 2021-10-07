import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import img from "../../assets/mobile.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#525252",
    marginTop: -40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1380,
  },
  circle: {
    width: 427,
    height: 436,
    background:
      "linear-gradient(117.06deg, #C9C9C9 -9.15%, rgba(201, 201, 201, 0) 70.04%)",
    borderRadius: 267.5,
  },
  img: {
    position: "absolute",
    width: 250,
    height: 453,
  },
  cardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 680,
    marginTop: 10,
  },
  sqr: {
    width: 216,
    height: 58,
    background: "#434242",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    maxWidth: 170,
    height: 28,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */
    textAlign: "left",
    color: "#FFFFFF",
  },
}));

export default function FacialRecognition() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={4}
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
          lg={6}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Box>
            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>1:n Face & Voice Recognition</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>
                  Fully Homomorphic Encryption (FHE)
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>Scales Globally</Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>
                  Continuous Auth Every 3 Seconds
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>
                  Privacy Preserving Machine Learning
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>Developer Support</Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>Passive Liveness</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>
                  IEEE 2410 Standard for Biometric Privacy
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>Touchless UX</Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>99.80% Accurate</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>WebAssembly / C++</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>Touchless UI</Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <Box className={classes.text}>Fair, EthicalUnbiased AI</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>UNLIMITED User Base</Box>
              </Box>
              <Box className={classes.sqr}>
                <Box className={classes.text}>Online & Offline</Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
