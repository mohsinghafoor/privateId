import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button } from "@material-ui/core";
// import background from "../../assets/fastbackmobile.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import img from "../../assets/girl1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2A2A2A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
  },
  main: {
    maxWidth: 1280,
    display: "flex",
    justifyContent: "center",
    height: "100vh",
  },
  lowerbox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    background: "#2A2A2A",
    height: "30vh",
    [theme.breakpoints.only("sm")]: {
      marginBottom: 70,
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
    },
  },
  heading: {
    width: "90%",
    height: 55,
    fontSize: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    /* or 48px */
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 40,
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 55,
      fontSize: 24,
      // marginBottom: 20,
    },
  },

  text: {
    width: "90%",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 26,
    lineHeight: "120%",
    /* or 22px */
    textAlign: "left",
    color: "#FFFFFF",
    height: 120,
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      fontSize: 16,
      height: 100,
      // marginBottom: 20,
    },
  },
  upperbox: {
    width: "100%",
  },
  imgbox: {
    // backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    width: "100%",
    height: "70vh",
    [theme.breakpoints.down("xs")]: {
      height: "60vh",
    },
  },
  sqr: {
    position: "absolute",
    marginRight: "-1rem",
    marginTop: "-20rem",
    width: 160,
    height: 160,
    border: "2px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.only("md")]: {
      marginBottom: "3rem",
      width: 220,
      height: 220,
      marginLeft: "-5.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-2.2rem",
      marginTop: "-4.5rem",
      width: 100,
      height: 100,
    },
  },
  img: {
    [theme.breakpoints.only("md")]: {
      width: "70%",
      marginBottom: -27,
    },
    [theme.breakpoints.only("sm")]: {
      height: 650,
      marginBottom: -20,
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: -25,
      width: "100%",
    },
  },

  gradiant: {
    background: "rgba(0, 0, 0, 0.55)",
    height: "70vh",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50vh",
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
  },
  mailbox: {
    width: "90%",
    display: "flex",
    height: 60,
  },
  input: {
    width: "75%",
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
  },
  btmtext: {
    width: "90%",
    height: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "138.5%",
    /* or 17px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      fontSize: 12,
      height: 60,
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
      <Box className={classes.imgbox}>
        <div className={classes.gradiant}>
          <Box className={classes.upperbox}>
            <img src={img} alt="Girl with mask on" className={classes.img} />
          </Box>
        </div>
      </Box>
      <Box className={classes.lowerbox}>
        <Box className={classes.heading}>Order Private ID®</Box>
        <Box className={classes.text}>
          Decentralized biometrics for a secure, private and delightful customer
          experience
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
        {/* <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>Local, Cloud & Continuous Auth</Box>
        </Box>
        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>No Biometric Templates</Box>
        </Box>

        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>Extreme Accuracy & Speed</Box>
        </Box>

        <Box className={classes.itembox}>
          <ArrowForwardIcon className={classes.icon} />
          <Box className={classes.text}>
            Runs on Browsers, Phones, Platforms & Clouds
          </Box>
        </Box> */}
      </Box>
    </div>
  );
}
