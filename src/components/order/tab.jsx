import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import img from "../../assets/girl.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(55.01% 307.1% at 88.52% 16.49%, #545454 0%, #292929 80.76%)",
    minHeight: "100vh",
    [theme.breakpoints.up("lg")]: {
      height: 604,
    },
    width: "100%",
  },
  main: {
    maxWidth: 1280,
  },
  img: {
    width: "100%",
    filter: "drop-shadow(22px -15px 21px rgba(0, 0, 0, 0.25))",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // height: 260,
      marginBottom: -4,
    },
  },
  sqr: {
    position: "absolute",
    marginLeft: "1rem",
    marginTop: "-18rem",
    width: 145,
    height: 139,
    border: "2px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0.3rem",
      marginTop: "-7.5rem",
      width: 70,
      height: 70,
    },
  },
  heading: {
    width: 237,
    height: 70,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    textDecoration: "underline",
    lineHeight: "37px",
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: 50,
      fontSize: 18,
      marginTop: 30,
      marginLeft: 20,
    },
  },
  text: {
    maxWidth: 555,
    height: 120,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    marginLeft: 20,
    lineHeight: "25px",
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: 119,
      lineHeight: "22px",
      marginLeft: 20,
      fontSize: 10,
    },
  },
  mailbox: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 550,
    marginBottom: 30,
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: 20,
    },
  },
  input: {
    width: 387,
    height: 30,
    background: "none",
    border: 0,
    borderBottom: "2px solid white",
    color: "white",
    outline: 0,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "138.5%",
    /* identical to box height, or 19px */

    color: "#999999",
    [theme.breakpoints.down("xs")]: {
      width: "65%",
    },
  },
  btn: {
    width: 143,
    height: 34,
    background: "#383838",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "120%",
    /* or 14px */
    borderRadius: 0,
    textTransform: "capitalize",
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      width: "30%",
      fontSize: 10,
    },
  },
  btmtext: {
    maxWidth: 555,
    height: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    marginLeft: 20,
    lineHeight: "138.5%",
    /* or 17px */
    textAlign: "left",
    color: "#FFFFFF",
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
      fontSize: 10,
      marginLeft: 20,
      marginBottom: 20,
    },
  },
  span: {
    textDecoration: "underline",
    color: "white",
    marginLeft: 5,
    marginRight: 5,
  },
  upperbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function OrderTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Box className={classes.upperbox}>
          <img src={img} alt="Girl Picture" className={classes.img} />
          <Box className={classes.sqr} />
        </Box>
        <Box className={classes.heading}>Order Private ID ®</Box>
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
      </div>
    </div>
  );
}
