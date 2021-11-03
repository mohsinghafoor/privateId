import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import img from "../../assets/devolpers.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#353535",
    height: "100vh",
  },
  main: {
    flexGrow: 1,
    maxWidth: 1920,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      height: 700,
    },
  },
  img: {
    height: 1000,
    marginBottom: -3,
    [theme.breakpoints.only("lg")]: {
      height: 650,
      marginBottom: -3,
    },
    [theme.breakpoints.only("md")]: {
      height: 680,
      // width: "100%",
      marginBottom: -3,
      marginRight: -20,
    },
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
    [theme.breakpoints.up("xl")]: {
      fontSize: 50,
      height: 141,
      width: 545,
    },
    [theme.breakpoints.only("md")]: {
      width: 600,
      height: 110,
      fontSize: 40,
      marginTop: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: 230,
      fontSize: 20,
      height: 66,
    },
  },
  span: {
    fontSize: 35,
    color: "darkgray",
    marginBottom: 30,
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
    [theme.breakpoints.up("xl")]: {
      fontSize: 28,
      height: 111,
      width: 700,
    },
    [theme.breakpoints.only("md")]: {
      width: 500,
      height: 200,
      fontSize: 24,
    },
    [theme.breakpoints.only("sm")]: {
      width: 458,
      height: 115,
      fontSize: 16,
      marginBottom: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: 330,
      fontSize: 14,
      marginBottom: 50,
    },
  },
  rightbox: {
    [theme.breakpoints.only("md")]: {
      height: "80vh",
      marginLeft: -100,
    },
  },
}));

export default function EngineeredWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={6}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            // background: "#292929",
            minHeight: "100vh",
          }}
        >
          <Box className={classes.imgbox}>
            <img src={img} className={classes.img} alt="" />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={classes.rightbox}>
            <Box className={classes.heading}>
              ENGINEERED BY PRIVATE IDENTITY
              <span className={classes.span}>®</span>
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
