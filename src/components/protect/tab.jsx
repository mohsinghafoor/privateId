import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button } from "@material-ui/core";
import background from "../../assets/protectbacksm.png";
import background1 from "../../assets/engsm.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundSize: "100% 100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${background1})`,
    },
  },
  gradiant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
    background:
      "linear-gradient(89.59deg, #000000 6.3%, rgba(0, 0, 0, 0) 79.12%)",
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(85.54deg, rgba(0, 0, 0, 0) -8.44%, rgba(44, 44, 44, 0.9) 88.88%)",
    },
  },

  main: {
    flexGrow: 1,
    maxWidth: 1280,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
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
    [theme.breakpoints.only("sm")]: {
      width: 420,
      fontSize: 30,
      height: 90,
      marginLeft: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      fontSize: 18,
      height: 60,
      marginLeft: 20,
    },
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
    [theme.breakpoints.only("sm")]: {
      width: 526,
      fontSize: 16,
      height: 60,
      marginLeft: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      fontSize: 12,
      height: 50,
      marginLeft: 20,
      lineHeight: "20px",
    },
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
    textTransform: "capitalize",
    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      width: 187,
      fontSize: 22,
      height: 48,
      marginLeft: 30,
    },
    [theme.breakpoints.only("xs")]: {
      width: 100,
      fontSize: 10,
      height: 30,
      marginLeft: 20,
    },
  },
}));

export default function ProtectsPad() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div className={classes.gradiant}> */}
      <Grid container className={classes.main}>
        <Grid
          item
          lg={7}
          md={9}
          sm={10}
          xs={11}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "50vh",
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
