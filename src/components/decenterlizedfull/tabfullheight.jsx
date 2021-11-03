import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton } from "@material-ui/core";
import background from "../../assets/decenterlizedbacksm.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import img from "../../assets/decsm.png";
import logo from "../../assets/logo 1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundSize: "100% 100%",
    height: 1320,
    [theme.breakpoints.only("sm")]: {
      height: 1024,
    },
    [theme.breakpoints.only("xs")]: {
      height: "100vh",
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    background:
      "linear-gradient(180.17deg, #181818 -5.4%, rgba(0, 0, 0, 0) 89.76%)",
    height: 1320,
    [theme.breakpoints.only("sm")]: {
      height: 1024,
    },
    [theme.breakpoints.only("xs")]: {
      height: "100vh",
    },
  },
  textbox: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "7rem",
    background: " rgba(0, 0, 0, 0.5)",
    height: 150,
    [theme.breakpoints.only("sm")]: {
      height: 250,
    },
    [theme.breakpoints.only("xs")]: {
      height: 130,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  },
  text: {
    maxWidth: "80%",
    height: 78,
    marginTop: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 36px */
    textAlign: "left",
    color: "#D1D1D1",
    marginLeft: 30,
    [theme.breakpoints.only("md")]: {
      fontSize: 35,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 18,
      height: 48,
    },
  },
  btnbox: {
    width: 590,
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
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
    marginLeft: 30,
    lineHeight: "120%",
    /* or 26px */
    color: "#FFFFFF",
    marginBottom: 30,

    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 150,
      height: 40,
      marginLeft: 20,
    },
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
    [theme.breakpoints.down("xs")]: {
      width: 25,
      height: 25,
    },
  },

  img: {
    [theme.breakpoints.only("md")]: {
      height: 1100,
    },
    [theme.breakpoints.only("sm")]: {
      height: 930,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  logo: {
    [theme.breakpoints.only("xs")]: {
      height: 30,
    },
    [theme.breakpoints.only("md")]: {
      height: 70,
    },
    marginTop: "2rem",
    height: 53,
    // marginLeft: "-29rem",
  },
  logobox: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.only("xs")]: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 180,
    },
    [theme.breakpoints.only("md")]: {
      marginBottom: 100,
    },
  },

  bottombox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
  },
}));

export default function DecenterlizedPad() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Box className={classes.logobox}>
          <img src={logo} className={classes.logo} alt="" />
        </Box>
        <Box className={classes.bottombox}>
          <Box className={classes.textbox}>
            <Box className={classes.text}>
              Decentralized biometrics for a secure, private and delightful
              customer experience
            </Box>
          </Box>
          <img src={img} className={classes.img} alt="" />
        </Box>
      </div>
    </div>
  );
}
