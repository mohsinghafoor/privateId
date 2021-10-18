import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, IconButton } from "@material-ui/core";
import img from "../../assets/watchsm.png";
import docimg from "../../assets/docimg.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2A2A2A",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: 632,
    [theme.breakpoints.only("xs")]: {
      height: 450,
    },
  },
  imgbox: {
    width: "100%",
    height: 425,
    background: "#000000",
    [theme.breakpoints.only("xs")]: {
      height: 260,
    },
  },
  img: {
    width: 603,
    height: 425,

    [theme.breakpoints.only("xs")]: {
      width: 370,
      height: 280,
    },
  },
  bottombox: {
    background: "#2A2A2A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: 300,
  },
  heading: {
    maxWidth: 475,
    height: 73,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("sm")]: {
      width: 409,
      height: 45,
      fontSize: 24,
      marginLeft: 20,
      marginTop: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 35,
      fontSize: 20,
      marginTop: 30,
      marginLeft: 20,
    },
  },
  text: {
    width: 405,
    height: 85,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("sm")]: {
      width: 553,
      height: 53,
      fontSize: 16,
      lineHeight: "24px",
      marginLeft: 20,
    },
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 45,
      fontSize: 13,
      marginLeft: 20,
    },
  },
  btnbox: {
    width: 350,
    marginLeft: 20,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 20,
    [theme.breakpoints.only("xs")]: {
      width: 320,
      marginLeft: 20,
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
    [theme.breakpoints.only("sm")]: {
      width: 168,
      height: 43,
      fontSize: 16,
    },
    [theme.breakpoints.only("xs")]: {
      width: 148,
      height: 40,
      fontSize: 12,
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
    [theme.breakpoints.only("sm")]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: 27,
      height: 27,
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
          Includes everything you need to get started. First 5,000 requests are
          free.
        </Box>
        <Box className={classes.btnbox}>
          <IconButton className={classes.iconbtn}>
            <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
          </IconButton>
          <IconButton className={classes.iconbtn}>
            <img src={docimg} className={classes.docimg} alt="" /> Read Docs
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}
