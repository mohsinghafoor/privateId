import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import img from "../../assets/exempt.png";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2A2A2A",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      height: 600,
    },
  },
  bottombox: {
    background: "#2A2A2A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "95%",
    height: 215,
    [theme.breakpoints.up("xs")]: {
      marginBottom: 30,
    },
  },
  heading: {
    maxWidth: 573,
    height: 52,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    lineHeight: "120%",
    /* or 48px */
    marginTop: 40,
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 62,
      fontSize: 20,
    },
  },
  span: {
    fontWeight: 800,
    marginRight: 5,
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
    marginLeft: 7,
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
    marginLeft: 5,
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
  imgbox: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    background:
      "radial-gradient(71.13% 327.64% at -2.5% 28.87%, #404040 16.46%, #252525 100%)",
    [theme.breakpoints.only("xs")]: {
      height: 330,
    },
  },
  img: {
    height: 548,
    height: 486,

    [theme.breakpoints.only("xs")]: {
      width: 300,
      height: 330,
      marginLeft: 0,
    },
  },
}));

export default function ExemptTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box container className={classes.imgbox}>
        <img src={img} alt="" className={classes.img} />
      </Box>
      <Box className={classes.bottombox}>
        <Box className={classes.heading}>
          “ <span className={classes.span}>EXEMPT </span> FROM GDPR, CCPA, BIPA
          AND HIPPA”
        </Box>
        <Box className={classes.text}>
          One-way fully homomorphic encryption (FHE) for private identity
          assertion and authentication guarantees compliant systems do not incur
          GDPR, CCPA, BIPA or HIPAA privacy law obligations.
        </Box>
        <Box className={classes.privacy}>
          - IEEE 2410-2021 Standard for Biometric Privacy
        </Box>
      </Box>
    </div>
  );
}
