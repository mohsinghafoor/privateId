import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import background from "../../assets/fastbackweb.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import img from "../../assets/fastimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
    height: "100%",
  },
  main: {
    maxWidth: 1280,
    display: "flex",
    justifyContent: "center",
  },
  rightbox: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
    },
  },
  heading: {
    width: 602,
    height: 75,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("md")]: {
      width: 372,
      height: 115,
      marginTop: 40,
    },
    [theme.breakpoints.only("sm")]: {
      width: 372,
      height: 49,
      fontSize: 24,
    },
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 49,
      fontSize: 22,
    },
  },
  itembox: {
    display: "flex",
    alignItems: "center",
    height: 40,
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
  sqr: {
    position: "absolute",
    marginBottom: "14rem",
    marginLeft: "-3rem",
    width: 135,
    height: 130,
    border: "3px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.only("md")]: {
      marginBottom: "10rem",
      width: 115,
      height: 115,
      marginRight: "-0.5rem",
    },
  },
  img: {
    height: 538,
    width: 464,
    filter: " drop-shadow(17px 4px 11px rgba(0, 0, 0, 0.2))",
    marginBottom: -43,
    [theme.breakpoints.only("md")]: {
      width: 394,
      height: 455,
      marginBottom: -61,
    },
    [theme.breakpoints.only("xs")]: {
      width: 330,
      marginBottom: 20,
      height: 400,
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.only("md")]: {
      width: 394,
      height: 457,
    },
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
          <Grid
            item
            md={6}
            className={classes.leftgrid}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img src={img} alt="Girl with mask on" className={classes.img} />
            <Box className={classes.sqr} />
          </Grid>
          <Grid item md={6} className={classes.rightgrid}>
            <Box className={classes.rightbox}>
              <Box className={classes.heading}>Face + Voice Recognition</Box>
              <Box className={classes.itembox}>
                <ArrowForwardIcon className={classes.icon} />
                <Box className={classes.text}>No Biometric Templates</Box>
              </Box>
              <Box className={classes.itembox}>
                <ArrowForwardIcon className={classes.icon} />
                <Box className={classes.text}>
                  {" "}
                  Face Recognition with Facemask
                </Box>
              </Box>
              <Box className={classes.itembox}>
                <ArrowForwardIcon className={classes.icon} />
                <Box className={classes.text}>Extreme Accuracy</Box>
              </Box>
              <Box className={classes.itembox}>
                <ArrowForwardIcon className={classes.icon} />
                <Box className={classes.text}>Guaranteed Privacy</Box>
              </Box>
              <Box className={classes.itembox}>
                <ArrowForwardIcon className={classes.icon} />
                <Box className={classes.text}>
                  Runs on Browsers, Phones and Clouds
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
