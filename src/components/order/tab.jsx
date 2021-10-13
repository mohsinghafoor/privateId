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
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      height: 604,
    },
    width: "100%",
  },
  main: {
    maxWidth: 1280,
  },
  img: {
    height: 620,
    filter: "drop-shadow(22px -15px 21px rgba(0, 0, 0, 0.25))",
    [theme.breakpoints.down("xs")]: {
      width: 340,
      height: 374,
      marginBottom: -4,
      marginLeft: 20,
    },
  },
  sqr: {
    position: "absolute",
    marginLeft: "12.5rem",
    marginTop: "-30rem",
    width: 175,
    height: 189,
    border: "3px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "7.3rem",
      marginTop: "-20rem",
      width: 135,
      height: 149,
    },
  },
  heading: {
    width: 237,
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    textDecoration: "underline",
    lineHeight: "37px",
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      width: 187,
      height: 50,
      fontSize: 20,
      marginTop: 10,
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
      maxWidth: 330,
      height: 139,
      marginLeft: 5,
    },
  },
  mailbox: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 550,
    marginBottom: 30,
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      marginLeft: 5,
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
      maxWidth: 230,
    },
  },
  btn: {
    width: 153,
    height: 35,
    background: "#383838",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "120%",
    /* or 14px */
    borderRadius: 0,
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 80,
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
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      fontSize: 12,
      marginLeft: 5,
      marginBottom: 20,
    },
  },
  span: {
    textDecoration: "underline",
    color: "white",
    marginLeft: 5,
    marginRight: 5,
  },
}));

export default function OrderTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <img src={img} alt="Girl Picture" className={classes.img} />
        <Box className={classes.sqr} />

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
