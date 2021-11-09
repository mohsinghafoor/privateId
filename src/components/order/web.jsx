import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import img from "../../assets/girl1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(55.01% 307.1% at 88.52% 16.49%, #545454 0%, #292929 80.76%)",
    minHeight: "100vh",
    width: "100%",
  },
  main: {
    maxWidth: 2180,
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
  },
  img: {
    height: 700,
    // marginLeft: 50,
    filter: "drop-shadow(22px -15px 21px rgba(0, 0, 0, 0.25))",
    // width: 552,
    [theme.breakpoints.up("xl")]: {
      height: 1000,
    },
    [theme.breakpoints.only("md")]: {
      height: 700,
    },
  },
  sqr: {
    position: "absolute",
    marginBottom: "26.8rem",
    marginLeft: 20,
    width: 155,
    height: 150,
    border: "3px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.up("xl")]: {
      width: 220,
      height: 210,
      marginBottom: "38rem",
      marginLeft: 25,
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "-17.2rem",
      width: 160,
      height: 170,
      marginRight: "10.9rem",
    },
  },
  heading: {
    width: 260,
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      width: 420,
      fontSize: 50,
      height: 100,
    },
    [theme.breakpoints.only("md")]: {
      height: 77,
      maxWidth: 255,
    },
  },
  text: {
    width: 497,
    height: 140,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "25px",
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      width: 750,
      fontSize: 30,
      height: 180,
      lineHeight: "32px",
    },
    [theme.breakpoints.only("md")]: {
      height: 116,
    },
  },
  mailbox: {
    display: "flex",
    height: 70,
    [theme.breakpoints.only("md")]: {
      height: 50,
    },
    [theme.breakpoints.up("xl")]: {
      height: 90,
    },
  },
  input: {
    width: 365,
    height: 30,
    background: "none",
    border: 0,
    borderBottom: "2px solid white",
    color: "white",
    outline: 0,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "138.5%",
    /* identical to box height, or 19px */

    color: "#999999",
    [theme.breakpoints.up("xl")]: {
      width: 500,
      height: 35,
      fontSize: 22,
    },
    [theme.breakpoints.only("md")]: {
      width: 316,
    },
  },
  btn: {
    width: 120,
    height: 30,
    background: "#383838",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 10,
    lineHeight: "120%",
    /* or 14px */
    borderRadius: 0,
    marginLeft: 10,
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      width: 200,
      height: 40,
      fontSize: 18,
    },
    [theme.breakpoints.only("md")]: {
      width: 137,
      height: 25,
      fontSize: 12,
    },
  },
  btmtext: {
    width: 507,
    height: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "138.5%",
    /* or 17px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      width: 750,
      fontSize: 18,
      height: 60,
    },
  },
  span: {
    textDecoration: "underline",
    color: "white",
    marginLeft: 5,
    marginRight: 5,
  },
  rightgrid: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    minHeight: "100vh",
    [theme.breakpoints.only("md")]: {
      justifyContent: "flex-end",
    },
  },
  leftgrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function OrderWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item lg={6} md={6} className={classes.leftgrid}>
          <Box>
            <Box className={classes.heading}>Order Private ID®</Box>
            <Box className={classes.text}>
              Private ID® is currently available to a limited number of
              organizations per geographic area. Orders will be fulfilled on a
              first-come, first-served basis.
            </Box>
            <form className={classes.mailbox}>
              {/* <Box className={classes.label}>Enter Email:</Box> */}
              <input
                type="text"
                className={classes.input}
                placeholder="Enter Email"
              />
              <Button className={classes.btn}>Join the Waitlist</Button>
            </form>
            <Box className={classes.btmtext}>
              By pressing Join, I agree to receive communications from Private
              Identity and to the
              <a href="#" className={classes.span}>
                Privacy Policy
              </a>
              and
              <a href="#" className={classes.span}>
                Terms of Service.
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={6} lg={5} md={5} className={classes.rightgrid}>
          <img src={img} alt="Girl Picture" className={classes.img} />
          {/* <Box className={classes.sqr} /> */}
        </Grid>
      </Grid>
    </div>
  );
}
