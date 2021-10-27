import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import img from "../../assets/exempt.png";
const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "radial-gradient(71.13% 327.64% at -2.5% 28.87%, #404040 16.46%, #252525 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minHeight: "100vh",
  },
  main: {
    maxWidth: 1920,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    maxWidth: 470,
    height: 122,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 48px */

    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("md")]: {
      width: 529,
      height: 122,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 48,
      height: 132,
      maxWidth: 600,
    },
  },
  text: {
    width: 625,
    height: 117,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("md")]: {
      width: 487,
      height: 108,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 28,
      height: 182,
      maxWidth: 840,
    },
  },
  privacy: {
    maxWidth: 555,
    height: 44,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
    [theme.breakpoints.only("md")]: {
      width: 431,
      height: 44,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 28,
      height: 42,
      maxWidth: 740,
    },
  },
  img: {
    height: 750,
    [theme.breakpoints.up("xl")]: {
      height: 1000,
    },
    [theme.breakpoints.only("md")]: {
      height: 787,
    },
  },
  span: {
    fontWeight: 800,
  },
}));

export default function ExemptWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={7}
          md={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box>
            <Box className={classes.heading}>
              “<span className={classes.span}>EXEMPT </span> FROM GDPR, CCPA,
              BIPA AND HIPPA”
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
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            minHeight: "100vh",
          }}
        >
          <img src={img} alt="" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}
