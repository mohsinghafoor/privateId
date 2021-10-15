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
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      height: 600,
    },
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
    justifyContent: "flex-start",
    background: "#2A2A2A",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 70,
    },
  },
  heading: {
    width: 372,
    height: 39,
    fontSize: 24,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 40,
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 49,
      fontSize: 22,
    },
  },
  itembox: {
    display: "flex",
    alignItems: "center",
    height: 35,
  },
  text: {
    width: 400,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: 330,

      fontSize: 16,
    },
  },
  imgbox: {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    width: "100%",
  },
  img: {
    width: 394,
    height: 457,
    marginBottom: -20,
    [theme.breakpoints.only("xs")]: {
      width: 330,
      marginBottom: -20,
      height: 380,
    },
  },
  icon: {
    color: "#FFFFFF",
    marginRight: 5,
    [theme.breakpoints.only("xs")]: {
      width: 25,
      height: 25,
    },
  },
}));

export default function FastTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.imgbox}>
        <img src={img} alt="Girl with mask on" className={classes.img} />
      </Box>

      <Box className={classes.rightbox}>
        <Box className={classes.heading}>Face + Voice Recognition</Box>
        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>Local, Cloud and Continuous Auth</Box>
        </Box>
        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>Touchless + Facemask</Box>
        </Box>
        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}> Extreme Accuracy</Box>
        </Box>
        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>Guaranteed User Privacy</Box>
        </Box>
        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>
            Runs on Browsers, Phones and Clouds
          </Box>
        </Box>
      </Box>
    </div>
  );
}
