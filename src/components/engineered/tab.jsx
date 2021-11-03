import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import img from "../../assets/devolpers.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "#353535",
    minHeight: "100vh",
    marginTop: -13,
    [theme.breakpoints.up("lg")]: {},
  },
  main: {
    flexGrow: 1,
    maxWidth: 1280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      height: 700,
    },
  },

  img: {
    [theme.breakpoints.only("md")]: {
      height: "90%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
  },
  heading: {
    maxWidth: "90%",
    height: 60,
    fontFamily: " Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "131.5%",
    /* or 53px */
    textAlign: "left",
    color: "#FFFFFF",
    marginTop: 30,
    [theme.breakpoints.only("sm")]: {
      width: 530,
      height: 46,
      fontSize: 24,
      marginTop: 40,
    },
    [theme.breakpoints.only("xs")]: {
      width: "70%",
      fontSize: 18,
      height: 66,
      marginTop: 30,
      marginLeft: 20,
    },
  },
  span: {
    fontSize: 22,
    color: "darkgray",
    marginLeft: 2,
    marginTop: -10,
    [theme.breakpoints.only("md")]: {
      fontSize: 40,
    },
  },
  text: {
    fontFamily: "Axiforma",
    fontStyle: " normal",
    fontWeight: 300,
    lineHeight: "131.5%",
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: 26,
    width: 880,
    height: 200,
    [theme.breakpoints.only("sm")]: {
      width: 490,
      height: 115,
      fontSize: 16,
      marginBottom: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      fontSize: 10,
      marginBottom: 50,
      marginLeft: 20,
    },
  },
  imgbox: {
    width: "100%",
    minHeight: "50vh",
    background: "#292929",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    [theme.breakpoints.only("md")]: {
      height: "70vh",
    },
  },
  bottombox: {
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.only("md")]: {
      height: "30vh",
    },
  },
}));

export default function EngineeredTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.imgbox}>
        <img src={img} className={classes.img} alt="" />
      </Box>

      <Box className={classes.bottombox}>
        <Box className={classes.heading}>
          ENGINEERED BY PRIVATE IDENTITY<span className={classes.span}>®</span>
        </Box>
        <Box className={classes.text}>
          Private Identity LLC is a Washington DC-based software company. Our
          small team of top computer scientists, cryptologists and ML engineers
          converged on a solution to fully homomorphic encryption in early 2018
          and was granted patents in 2019 and 2020. The societal good achieved
          with homomorphic encryption is full privacy.
        </Box>
      </Box>
    </div>
  );
}
