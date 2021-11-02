import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton } from "@material-ui/core";
import background from "../../assets/decenterlizedback.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import img from "../../assets/decenterlizedimg.png";
import logo from "../../assets/logo 2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundSize: "100% 100%",
  },
  gradiant: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    background:
      "linear-gradient(90.51deg, #181818 17.05%, rgba(0, 0, 0, 0) 89.3%)",
  },

  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 2180,
    height: "100vh",
  },
  textbox: {
    [theme.breakpoints.only("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
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
    [theme.breakpoints.up("xl")]: {
      fontSize: 55,
      width: 905,
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 44,
      width: "95%",
    },
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
    alignItems: "flex-end",
    // justifyContent: "flex-start",
    // flexDirection: "column",
    // alignItems: "center",
    height: "100vh",
    [theme.breakpoints.only("md")]: {
      // marginLeft: "-30rem",
      height: "60%",
      justifyContent: "center",
      alignItems: "flex-end",
    },
  },
  leftgrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // height: "100vh",
    [theme.breakpoints.only("md")]: {
      // marginLeft: "-30rem",
      height: "40%",
    },
  },
  img: {
    [theme.breakpoints.up("xl")]: {
      width: "100%",
    },

    [theme.breakpoints.only("lg")]: {
      marginLeft: "-7rem",
      height: 700,
    },
    [theme.breakpoints.only("md")]: {
      // marginLeft: "-30rem",
      height: "100%",
    },
  },
  logo: {
    position: "absolute",
    marginTop: 40,
    marginLeft: 20,
    [theme.breakpoints.up("xl")]: {
      marginTop: 60,
      marginLeft: 10,
      width: 300,
      height: 60,
    },
    [theme.breakpoints.only("md")]: { marginLeft: 40 },
  },
  a: {
    textDecoration: "none",
    width: 100,
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
          <Grid item lg={6} md={12} className={classes.leftgrid}>
            <Box className={classes.textbox}>
              <Box className={classes.text}>
                Decentralized biometrics for a secure, private and delightful
                customer experience
              </Box>
              {/* <a
                className={classes.a}
                target="_blank"
                href="https://www.youtube.com/watch?v=5iYEhEiOlrI"
              >
                <IconButton className={classes.iconbtn}>
                  <PlayCircleFilledIcon className={classes.playbtn} /> Watch
                  Video
                </IconButton>
              </a> */}
            </Box>
          </Grid>
          <Grid item lg={6} md={12} className={classes.rightgrid}>
            <img src={img} className={classes.img} alt="" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
