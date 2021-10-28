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
    width: "100%",
  },
  main: {
    maxWidth: 1280,
  },
  img: {
    height: "100%",
    filter: "drop-shadow(22px -15px 21px rgba(0, 0, 0, 0.25))",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      // height: 260,
      marginBottom: -4,
    },
  },
  sqr: {
    position: "absolute",
    marginLeft: "1.7rem",
    marginTop: "8rem",
    width: 170,
    height: 170,
    border: "3px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1.2rem",
      marginTop: "7rem",
      width: 160,
      height: "14%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0.5rem",
      marginTop: "4.5rem",
      width: "28%",
      height: "14%",
    },
  },
  heading: {
    width: 600,
    height: 70,
    fontSize: 32,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,

    textDecoration: "underline",
    lineHeight: "37px",
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 30,
    [theme.breakpoints.only("sm")]: {
      maxWidth: 500,
      height: 50,
      fontSize: 32,
      marginTop: 30,
      marginLeft: 20,
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: 50,
      fontSize: 18,
      marginTop: 30,
      marginLeft: 20,
    },
  },
  text: {
    maxWidth: 950,
    height: 120,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    marginLeft: 20,
    lineHeight: "27px",
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      maxWidth: 740,
      height: 100,
      fontSize: 20,
      marginTop: 30,
      marginLeft: 20,
    },
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
    width: "90%",
    marginBottom: 30,
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: 20,
    },
  },
  input: {
    width: 650,
    height: 30,
    background: "none",
    border: 0,
    borderBottom: "2px solid white",
    color: "white",
    outline: 0,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "138.5%",
    /* identical to box height, or 19px */

    color: "#999999",
    [theme.breakpoints.only("sm")]: {
      width: 450,

      fontSize: 18,
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%",
    },
  },
  btn: {
    width: 200,
    height: 40,
    background: "#383838",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "120%",
    /* or 14px */
    borderRadius: 0,
    marginLeft: 10,
    textTransform: "capitalize",
    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      width: 140,

      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      width: "30%",
      fontSize: 10,
    },
  },
  btmtext: {
    maxWidth: 900,
    height: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
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
  imgbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    width: "100%",
  },
  upperbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "60vh",
    width: "100%",
  },
  lowerbox: {
    width: "100%",
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export default function OrderTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Box className={classes.imgbox}>
          <Box className={classes.upperbox}>
            <img src={img} alt="Girl Picture" className={classes.img} />
            <Box className={classes.sqr} />
          </Box>
        </Box>
        <Box className={classes.lowerbox}>
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
        </Box>
      </div>
    </div>
  );
}
