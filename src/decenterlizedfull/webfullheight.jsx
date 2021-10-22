import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton } from "@material-ui/core";
import background from "../assets/decenterlizedback.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import img from "../assets/34.png";
import logo from "../assets/logo 2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundSize: "100% 100%",
  },
  gradiant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    background:
      "linear-gradient(90.51deg, #181818 17.05%, rgba(0, 0, 0, 0) 89.3%)",
  },

  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1280,
  },
  text: {
    width: 505,
    height: 138,
    // marginTop: 90,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "120%",
    /* or 36px */
    textAlign: "left",
    color: "#D1D1D1",
    [theme.breakpoints.only("md")]: {
      width: 500,
    },
  },
  btnbox: {
    width: 225,
    display: "flex",
    justifyContent: "flex-start",
  },
  iconbtn: {
    width: 225,
    height: 57,
    background: "#383838",
    borderRadius: 0,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "120%",
    /* or 26px */
    color: "#FFFFFF",
    "&:hover": {
      background: "#383838",
    },
  },
  playbtn: {
    width: 38,
    height: 38,
    color: "#C4C4C4",
    marginRight: 5,
    marginTop: -5,
  },
  rightgrid: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
    // flexDirection: "column",
    // alignItems: "center",
  },
  leftgrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    [theme.breakpoints.only("md")]: {
      alignItems: "flex-start",
    },
  },
  img: {
    height: 515,
    // width: 552,

    [theme.breakpoints.only("md")]: {
      marginLeft: "-10rem",
      width: 555,
    },
  },
  logobox: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    width: "100%",
  },
  logo: {
    position: "absolute",
    marginTop: 30,
    marginLeft: "-30rem",
    [theme.breakpoints.only("md")]: {
      marginLeft: "-22rem",
    },
  },
}));

export default function DecenterlizedFullHeight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gradiant}>
        <Box className={classes.logobox}>
          <img src={logo} className={classes.logo} alt="" />
        </Box>
        <Grid container className={classes.main}>
          <Grid item lg={6} md={6} className={classes.leftgrid}>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Box className={classes.text}>
                Decentralized biometrics for a secure, private and delightful
                customer experience
              </Box>
              <IconButton className={classes.iconbtn}>
                <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
              </IconButton>
            </Box>
          </Grid>
          <Grid item lg={6} md={4} className={classes.rightgrid}>
            <img src={img} className={classes.img} alt="" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
