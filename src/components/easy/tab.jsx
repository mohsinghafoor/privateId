import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, IconButton } from "@material-ui/core";
import img from "../../assets/watchsm.png";
import docimg from "../../assets/docimg.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000000",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
  },
  imgbox: {
    width: "100%",

    background: "#000000",
    [theme.breakpoints.only("xs")]: {
      height: 260,
    },
  },
  img: {
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      width: "95%",
    },
  },
  bottombox: {
    background: "#000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: 220,
  },
  heading: {
    width: 553,
    height: 65,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 30,
    marginLeft: 20,
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 35,
      fontSize: 20,
      marginTop: 30,
      marginLeft: 15,
    },
  },
  text: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 26,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
    maxWidth: 700,
    height: 73,
    lineHeight: "30px",
    marginLeft: 20,

    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 45,
      fontSize: 13,
      marginLeft: 15,
    },
  },
  btnbox: {
    width: 550,
    display: "flex",
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 20,
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      marginLeft: 15,
    },
  },
  iconbtn: {
    width: 168,
    height: 43,
    fontSize: 16,
    background: "#383838",
    borderRadius: 0,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    /* or 26px */
    color: "#FFFFFF",
    marginRight: 20,

    [theme.breakpoints.only("xs")]: {
      width: 115,
      height: 35,
      fontSize: 9,
      marginRight: 10,
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

    [theme.breakpoints.only("sm")]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: 20,
      height: 20,
    },
  },
  docimg: {
    marginRight: 10,
    marginTop: -5,
    [theme.breakpoints.only("sm")]: {
      width: 20,
      height: 25,
    },
    [theme.breakpoints.only("xs")]: {
      width: 20,
      height: 25,
    },
  },
}));

export default function EasyTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.imgbox}>
        <img src={img} alt="Man using laptop" className={classes.img} />
      </Box>

      <Box className={classes.bottombox}>
        {" "}
        <Box className={classes.heading}>Easy to Integrate</Box>
        <Box className={classes.text}>
          Includes everything you need to get started. Your first 50,000
          requests are free.
        </Box>
        {/* <Box className={classes.btnbox}>
          <IconButton className={classes.iconbtn}>
            <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
          </IconButton>
          <IconButton className={classes.iconbtn}>
            <img src={docimg} className={classes.docimg} alt="" /> Read Docs
          </IconButton>
        </Box> */}
      </Box>
    </div>
  );
}
