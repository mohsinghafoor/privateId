import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import img from "../../assets/engimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#353535",
    height: "100%",
    [theme.breakpoints.up("lg")]: {},
  },
  main: {
    flexGrow: 1,
    maxWidth: 1280,
  },
  img: {
    height: 600,
  },
  heading: {
    width: 445,
    height: 121,
    fontFamily: " Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "131.5%",
    /* or 53px */
    textAlign: "left",
    color: "#FFFFFF",
  },
  text: {
    width: 513,
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: " normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "131.5%",
    textAlign: "left",
    color: "#FFFFFF",
  },
}));

export default function Engineered() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={6}
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <img src={img} className={classes.img} alt="" />
        </Grid>
        <Grid
          item
          lg={5}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <Box className={classes.heading}>
              ENGINEERED BY PRIVATE IDENTITY®
            </Box>
            <Box className={classes.text}>
              Private Identity LLC is a Washington DC-based software company.
              Our small team of top computer scientists, cryptologists and ML
              engineers converged on a solution to fully homomorphic encryption
              in early 2018 and was granted patents in 2019 and 2020. The
              societal good achieved with homomorphic encryption is full
              privacy.
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
