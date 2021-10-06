import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import img from "../../assets/fastimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    maxWidth: 1380,
  },
  heading: {
    width: 602,
    height: 115,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
  },
  text: {
    width: 615,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    textAlign: "left",
    color: "#FFFFFF",
  },
  img: {
    width: 464,
    height: 538,
    filter: " drop-shadow(17px 4px 11px rgba(0, 0, 0, 0.2))",
  },
}));

export default function Fast() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Box className={classes.heading}>
            Fast, Accurate & Private Face + Voice Recognition
          </Box>
          <Box className={classes.text} style={{ height: 35 }}>
            Unlimited user base
          </Box>
          <Box className={classes.text} style={{ height: 75 }}>
            Face recognition maintains full accuracy with makeup, scars, facial
            hair, eyeglasses, sunglasses, face mask, image distortions and
            rotations, and variable hue, saturation and light (HSL).
          </Box>
          <Box className={classes.text} style={{ height: 80 }}>
            Voice recognition maintains full accuracy across background noise,
            signal variations (8-48kHz), variable microphones and
            noise-cancelling algorithms, and variable physiological conditions
            including lack of sleep, smoking and alcohol.
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <img src={img} alt="Girl with mask on" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}
