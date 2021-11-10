import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import background from "../../assets/fastbackmobile.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import img from "../../assets/fastimg1.png";

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
      minHeight: "25vh",
    },
  },
  heading: {
    width: 860,
    height: 65,
    fontSize: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 40,
    [theme.breakpoints.only("sm")]: {
      width: "100%",
      height: 65,
      fontSize: 32,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: 45,
      fontSize: 18,
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
    width: 820,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "30px",
    /* or 22px */
    textAlign: "left",
    color: "#FFFFFF",
    marginBottom: 40,
    [theme.breakpoints.only("sm")]: {
      width: "100%",
      height: 65,
      fontSize: 18,
      lineHeight: "28px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      fontSize: 12,
      lineHeight: "20px",
      marginBottom: 0,
    },
  },
  imgbox: {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    width: "100%",
    minHeight: "70vh",
    [theme.breakpoints.down("xs")]: {
      minHeight: "70vh",
    },
  },
  sqr: {
    position: "absolute",
    marginLeft: "-3rem",
    marginTop: "-8rem",
    width: 160,
    height: 160,
    border: "2px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.only("md")]: {
      marginBottom: "3rem",
      width: 220,
      height: 220,
      marginLeft: "-5.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-2.2rem",
      marginTop: "-4.5rem",
      width: 100,
      height: 100,
    },
  },
  img: {
    [theme.breakpoints.only("md")]: {
      height: 1100,
      marginBottom: -30,
    },
    [theme.breakpoints.only("sm")]: {
      height: 650,
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
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "70vh",
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
            {/* <Box className={classes.sqr} /> */}
          </Box>
        </div>
      </Box>
      <Box className={classes.rightbox}>
        <Box className={classes.heading}>Local, Cloud and Continuous Auth</Box>
        <Box className={classes.text}>
          Using 1-way fully homomorphic encryption (FHE), Private ID provides
          local authentication, cloud authentication and continuous
          authentication services with no biometric template. Users authenticate
          locally in 10ms and on the cloud in 300ms.
        </Box>
      </Box>
    </div>
  );
}
