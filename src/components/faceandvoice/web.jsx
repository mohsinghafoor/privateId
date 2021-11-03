import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import background from "../../assets/fastbackweb.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import img from "../../assets/fastimg1.png";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      height: 553,
    },
  },
  gradiant: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.55)",
    minHeight: "100vh",
  },
  main: {
    maxWidth: 1580,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1920,
    },
  },

  heading: {
    width: 552,
    height: 130,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.up("xl")]: {
      width: 770,
      fontSize: 55,
      height: 145,
    },
    [theme.breakpoints.only("md")]: {
      width: 432,
      height: 105,
      fontSize: 36,
      marginTop: 40,
    },
  },
  itembox: {
    display: "flex",
    alignItems: "center",
    height: 45,
    [theme.breakpoints.up("xl")]: {
      height: 60,
    },
  },
  text: {
    width: 555,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "120%",
    /* or 22px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      width: 900,
      fontSize: 40,
    },
    [theme.breakpoints.only("md")]: {
      width: 640,
      fontSize: 28,
    },
  },
  sqr: {
    position: "absolute",
    marginTop: "-53rem",
    marginLeft: "21rem",
    width: 280,
    height: 280,

    border: "4px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.only("lg")]: {
      marginTop: "-40rem",
      marginLeft: "15rem",
      width: 220,
      height: 220,
      border: "3px solid rgba(248, 248, 248, 0.25)",
    },
  },
  img: {
    height: 1200,
    filter: " drop-shadow(17px 4px 11px rgba(0, 0, 0, 0.2))",
    marginBottom: -36,
    [theme.breakpoints.only("lg")]: {
      height: 800,
      marginBottom: -28,
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
  leftgrid: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: "100vh",
  },
  rightgrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export default function FastWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gradiant}>
        <Grid container className={classes.main}>
          <Grid item lg={6} className={classes.leftgrid}>
            <Box className={classes.imgbox}>
              <img src={img} alt="Girl with mask on" className={classes.img} />
              {/* <Box className={classes.sqr} /> */}
            </Box>
          </Grid>
          <Grid item lg={6} className={classes.rightgrid}>
            <Box className={classes.heading}>
              Face + Voice + Fingerprint Recognition
            </Box>
            <Box className={classes.itembox}>
              <ArrowForwardIcon className={classes.icon} />
              <Box className={classes.text}>Local, Cloud & Continuous Auth</Box>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
