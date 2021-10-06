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
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1380,
  },
  text: {
    width: 505,
    height: 138,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "120%",
    /* or 36px */
    textAlign: "left",
    color: "#D1D1D1",
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
  img: {
    width: 557,
    height: 558,
  },
  logo: {
    position: "absolute",
    marginTop: "-15rem",
    marginLeft: "-35rem",
  },
}));

export default function Decenterlized() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <img src={logo} className={classes.logo} alt="" />
        <Grid
          item
          lg={5}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <Box className={classes.text}>
            Decentralized biometrics for a secure, private and delightful
            customer experience
          </Box>
          <IconButton className={classes.iconbtn}>
            <PlayCircleFilledIcon className={classes.playbtn} /> Watch Video
          </IconButton>
        </Grid>
        <Grid
          item
          lg={5}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <img src={img} className={classes.img} alt="" />
        </Grid>
      </Grid>
    </div>
  );
}
