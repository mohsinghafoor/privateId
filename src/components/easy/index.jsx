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
    height: 600,
  },
  main: {
    maxWidth: 1280,
  },
  img: {
    height: 600,
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
  },
  text: {
    width: 405,
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
  },
  btnbox: {
    width: 470,
    display: "flex",
    justifyContent: "space-between",
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
  docimg: {
    marginRight: 10,
    marginTop: -5,
  },
}));

export default function Easy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={img} alt="Man using laptop" className={classes.img} />
        </Grid>
        <Grid
          item
          lg={5}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box className={classes.heading}>Easy to Integrate</Box>
          <Box className={classes.text}>
            Includes everything you need to get started. First 5,000 requests
            are free.
          </Box>
          <Box className={classes.btnbox}>
            <IconButton className={classes.iconbtn}>
              <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
            </IconButton>
            <IconButton className={classes.iconbtn}>
              <img src={docimg} className={classes.docimg} alt="" /> Watch Video
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
