import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import img from "../../assets/exempt.png";
const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "radial-gradient(71.13% 327.64% at -2.5% 28.87%, #404040 16.46%, #252525 100%)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      height: 600,
    },
  },
  main: {
    maxWidth: 1280,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    maxWidth: 548,
    height: 52,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    lineHeight: "120%",
    /* or 48px */
    marginTop: 30,
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 62,
      fontSize: 20,
    },
  },
  text: {
    width: 550,
    height: 87,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "24px",
    /* or 24px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 138,
      fontSize: 14,
    },
  },
  privacy: {
    maxWidth: 384,
    height: 44,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 44,
      fontSize: 14,
    },
  },
  img: {
    height: 548,
    height: 486,
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 330,
      marginLeft: 0,
    },
  },
}));

export default function ExemptTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box container className={classes.main}>
        <img src={img} alt="" className={classes.img} />
        <Box>
          <Box className={classes.heading}>
            “EXEMPT FROM GDPR, CCPA, BIPA AND HIPPA”
          </Box>
          <Box className={classes.text}>
            One-way fully homomorphic encryption (FHE) for private identity
            assertion and authentication guarantees compliant systems do not
            incur GDPR, CCPA, BIPA or HIPAA privacy law obligations.
          </Box>
          <Box className={classes.privacy}>
            - IEEE 2410-2021 Standard for Biometric Privacy
          </Box>
        </Box>
      </Box>
    </div>
  );
}
