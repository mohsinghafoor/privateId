import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, IconButton } from "@material-ui/core";
import img from "../../assets/watch.png";
import docimg from "../../assets/docimg.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#080809",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  main: {
    maxWidth: 1920,
  },
  img: {
    height: 780,
    [theme.breakpoints.only("md")]: {
      width: 651,
      height: 490,
      marginRight: "-8rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: 605,
      height: 400,
    },
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 205,
    },
  },
  heading: {
    maxWidth: 575,
    height: 73,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 50,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("lg")]: {
      width: 455,
      height: 65,
      fontSize: 44,
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
    width: 500,
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 26,
    lineHeight: "32px",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("lg")]: {
      width: 453,
      height: 53,
      fontSize: 24,
      lineHeight: "28px",
    },
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 45,
      fontSize: 13,
      marginLeft: 20,
    },
  },
  btnbox: {
    width: 470,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.only("sm")]: {
      width: 350,
      marginLeft: 20,
    },
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

export default function EasyWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={7}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <img src={img} alt="Man using laptop" className={classes.img} />
        </Grid>
        <Grid
          item
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box className={classes.heading}>Easy to Integrate</Box>
          <Box className={classes.text}>
            Includes everything you need to get started. First 50,000 requests
            are free.
          </Box>
          {/* <Box className={classes.btnbox}>
            <IconButton className={classes.iconbtn}>
              <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
            </IconButton>
            <IconButton className={classes.iconbtn}>
              <img src={docimg} className={classes.docimg} alt="" /> Read Docs
            </IconButton>
          </Box> */}
        </Grid>
      </Grid>
    </div>
  );
}
