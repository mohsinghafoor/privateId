import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import background from "../../assets/fastbackmobile.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import img from "../../assets/fastimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2A2A2A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    maxWidth: 1280,
    display: "flex",
    justifyContent: "center",
  },
  rightbox: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#2A2A2A",
    minHeight: "30vh",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 70,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "50vh",
    },
  },
  heading: {
    width: 550,
    height: 115,
    fontSize: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 40,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: 95,
      fontSize: 24,
    },
  },
  itembox: {
    display: "flex",
    alignItems: "center",
    height: 45,
    [theme.breakpoints.only("xs")]: {
      height: 45,
    },
  },
  text: {
    width: 650,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 28,
    lineHeight: "120%",
    /* or 22px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      fontSize: 16,
    },
  },
  imgbox: {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    width: "100%",
    minHeight: "70vh",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50vh",
    },
  },
  sqr: {
    position: "absolute",
    marginLeft: "-5.5rem",
    marginTop: "-12rem",
    width: 250,
    height: 250,
    border: "3px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-1.8rem",
      marginTop: "-4.5rem",
      width: 110,
      height: 100,
    },
  },
  img: {
    [theme.breakpoints.only("md")]: {
      height: 1000,
      marginBottom: -27,
    },
    [theme.breakpoints.only("sm")]: {
      height: 750,
      marginBottom: -20,
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: -25,
      width: "100%",
    },
  },
  icon: {
    color: "#FFFFFF",
    marginRight: 5,
    width: 35,
    height: 35,
    [theme.breakpoints.only("xs")]: {
      width: 25,
      height: 25,
    },
  },
  gradiant: {
    background: "rgba(0, 0, 0, 0.55)",
    minHeight: "70vh",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50vh",
    },
  },
  upperbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function FastTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.imgbox}>
        <div className={classes.gradiant}>
          <Box className={classes.upperbox}>
            <img src={img} alt="Girl with mask on" className={classes.img} />
            <Box className={classes.sqr} />
          </Box>
        </div>
      </Box>
      <Box className={classes.rightbox}>
        <Box className={classes.heading}>
          Face + Voice + Fingerprint Recognition
        </Box>
        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>No Biometric Templates</Box>
        </Box>

        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>Extreme Accuracy & Speed</Box>
        </Box>

        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>
            Runs on Browsers, Phones, Platforms & Clouds
          </Box>
        </Box>
      </Box>
    </div>
  );
}
