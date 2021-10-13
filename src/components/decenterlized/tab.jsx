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
    // height: "100%",
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
    maxWidth: 700,
    height: 118,
    marginTop: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "120%",
    /* or 36px */
    textAlign: "left",
    color: "#D1D1D1",
    marginLeft: 40,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      marginLeft: 20,
      height: 90,
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
    marginLeft: 40,
    lineHeight: "120%",
    /* or 26px */
    color: "#FFFFFF",
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      width: 180,
      height: 50,
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
      width: 30,
      height: 30,
    },
  },
  textbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    background: "#2A2A2A",
    width: "100%",
  },
  img: {
    [theme.breakpoints.down("xs")]: { height: 350, width: 330 },
  },
  logo: {
    // position: "absolute",
    marginTop: "1rem",
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
          <IconButton className={classes.iconbtn}>
            <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
          </IconButton>
        </Box>
      </div>
    </div>
  );
}
