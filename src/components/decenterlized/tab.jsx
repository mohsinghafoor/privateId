import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton } from "@material-ui/core";
import background from "../../assets/decenterlizedbacksm.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import img from "../../assets/decenterlizedimg.png";
import logo from "../../assets/logo 1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // minHeight: "100%",
    backgroundSize: "100% 100%",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    background:
      "linear-gradient(180.17deg, #181818 -5.4%, rgba(0, 0, 0, 0) 89.76%)",
  },
  text: {
    maxWidth: 550,
    height: 78,
    marginTop: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "120%",
    /* or 36px */
    textAlign: "left",
    color: "#D1D1D1",
    marginLeft: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      width: "90%",
      height: 90,
      marginLeft: 20,
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
  textbox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    background: "#2A2A2A",
  },
  img: {
    [theme.breakpoints.down("xs")]: {
      height: 270,
      width: 270,
    },
  },
  logo: {
    // position: "absolute",
    marginTop: "1rem",
    height: 43,
    // marginLeft: "-29rem",
  },
}));

export default function DecenterlizedPad() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <img src={logo} className={classes.logo} alt="" />
        <img src={img} className={classes.img} alt="" />
        <Box className={classes.textbox}>
          <Box className={classes.text}>
            Decentralized biometrics for a secure, private and delightful
            customer experience
          </Box>
          <Box className={classes.btnbox}>
            <IconButton className={classes.iconbtn}>
              <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
            </IconButton>
          </Box>
        </Box>
      </div>
    </div>
  );
}
