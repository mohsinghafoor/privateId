import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import img from "../../assets/exempt.png";
const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "radial-gradient(71.13% 327.64% at -2.5% 28.87%, #404040 16.46%, #252525 100%)",
    height: "100vh",
  },
  heading: {
    maxWidth: 625,
    height: 102,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "120%",
    /* or 48px */

    color: "#FFFFFF",
    textAlign: "left",
  },
  text: {
    maxWidth: 625,
    height: 77,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
  },
  privacy: {
    maxWidth: 625,
    height: 44,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    color: "#FFFFFF",
    textAlign: "left",
  },
  img: {
    width: 544,
    height: 517,
  },
}));

export default function Exempt() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          lg={6}
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
        <Grid item lgs={6}>
          <img src={img} alt="" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}
