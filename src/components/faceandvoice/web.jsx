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
    width: 640,
    height: 58,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 38,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    padding: "20px 5px 0px 20px",
    [theme.breakpoints.up("xl")]: {
      width: 900,
      fontSize: 52,
      height: 85,
    },
    [theme.breakpoints.only("md")]: {
      width: 432,
      height: 105,
      fontSize: 36,
      marginTop: 40,
    },
  },

  text: {
    width: 635,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "26px",
    /* or 22px */
    textAlign: "left",
    color: "#FFFFFF",
    padding: "0px 5px 10px 20px",
    [theme.breakpoints.up("xl")]: {
      width: 900,
      fontSize: 30,
      lineHeight: "34px",
    },
    [theme.breakpoints.only("md")]: {
      width: 640,
      fontSize: 22,
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
      height: 650,
      marginBottom: -21,
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
    alignItems: "center",
  },
  textbox: {
    background: "#2A2A2A",
  },
}));

export default function FastWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gradiant}>
        <Grid container className={classes.main}>
          <Grid item xl={6} lg={5} className={classes.leftgrid}>
            <Box className={classes.imgbox}>
              <img src={img} alt="Girl with mask on" className={classes.img} />
              {/* <Box className={classes.sqr} /> */}
            </Box>
          </Grid>
          <Grid item xl={6} lg={7} className={classes.rightgrid}>
            <Box className={classes.textbox}>
              <Box className={classes.heading}>
                Local, Cloud and Continuous Auth
              </Box>
              <Box className={classes.text}>
                Using 1-way fully homomorphic encryption (FHE), Private ID
                provides local authentication, cloud authentication and
                continuous authentication services with no biometric template.
                Users authenticate locally in 10ms and on the cloud in 300ms.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
