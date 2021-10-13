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
      height: 102,
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
      height: 98,
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
  },
  img: {
    height: 600,
    [theme.breakpoints.only("md")]: {
      width: 460,
      height: 497,
      marginLeft: 0,
    },
  },
}));

export default function ExemptWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={6}
          md={6}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img src={img} alt="" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}
