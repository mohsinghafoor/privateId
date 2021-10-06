import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import img from "../../assets/engimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#161616",
  },
  main: {
    flexGrow: 1,
    maxWidth: 1380,
  },
  img: {
    width: 811,
    height: 546,
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
    width: 410,
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
        <Grid item lg={8}>
          <img src={img} className={classes.img} alt="" />
        </Grid>
        <Grid
          item
          lg={2}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box className={classes.heading}>ENGINEERED BY PRIVATE IDENTITY®</Box>
          <Box className={classes.text}>
            Private Identity LLC is a Washington DC-based software company. Our
            small team of top computer scientists, cryptologists and ML
            engineers converged on a solution to fully homomorphic encryption in
            early 2018 and was granted patents in 2019 and 2020. The societal
            good achieved with homomorphic encryption is full privacy.
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
