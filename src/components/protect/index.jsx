import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button } from "@material-ui/core";
import background from "../../assets/protectbackground.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundSize: "100% 100%",
  },
  main: {
    flexGrow: 1,
    maxWidth: 1280,
    height: 600,
    background:
      "linear-gradient(89.59deg, #000000 6.3%, rgba(0, 0, 0, 0) 79.12%)",
  },
  box: {
    width: 570,
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    width: 550,
    height: 129,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: " 131.5%",
    /* or 53px */
    textAlign: "left",
    color: "#FFFFFF",
  },
  text: {
    width: 589,
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "131.5%",
    /* or 29px */
    textAlign: "left",
    color: "#FFFFFF",
  },
  btn: {
    width: 225,
    height: 57,
    background: "#383838",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "120%",
    /* or 26px */
    borderRadius: 0,
    color: "#FFFFFF",
  },
}));

export default function Protects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className={classes.box}>
            <Box className={classes.heading}>
              PROTECTS YOUR BATTERY AND THE PLANET
            </Box>
            <Box className={classes.text}>
              Energy efficient, low-power PPML uses up to 99.91% less energy
              than similar systems.
            </Box>
            <Button className={classes.btn}>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
