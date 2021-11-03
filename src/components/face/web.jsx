import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import background from "../../assets/faceback.png";
import img from "../../assets/faceimg1.png";
import badge from "../../assets/voicebadge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "100% 100%",
    minHeight: "100vh",
  },
  gradiant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
    background:
      "linear-gradient(90.61deg, rgba(23, 23, 23, 0.9) 58.83%, rgba(0, 0, 0, 0) 127.48%)",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 1920,
    minHeight: "100vh",
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1920,
    },
  },
  mainheading: {
    width: 660,
    height: 39,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "131.5%",
    /* or 39px */
    textTransform: "uppercase",

    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 36,
      width: 900,
    },
  },
  headingbox: {
    width: 900,
    marginLeft: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: 1040,
      marginBottom: 30,
    },
  },
  cardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 660,
    marginTop: 20,
    marginLeft: 80,
    [theme.breakpoints.up("xl")]: {
      width: 1030,
      marginLeft: -50,
    },
  },
  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 209,
    height: 190,
    background: "#434242",
    [theme.breakpoints.up("xl")]: {
      width: 330,
      height: 310,
    },
  },
  badge: {
    width: 69,
    height: 32,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
    [theme.breakpoints.up("xl")]: {
      width: 100,
      height: 50,
      marginTop: 0,
    },
  },
  heading: {
    maxWidth: 90,
    height: 44,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 24,
      height: 74,
      maxWidth: 100,
    },
  },
  text: {
    maxWidth: 174,
    height: 100,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "131.5%",
    /* or 16px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 18,
      height: 130,
      maxWidth: 230,
    },
  },
  heading1: {
    maxWidth: 90,
    height: 44,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 24,
      height: 94,
    },
  },
  subheading: {
    maxWidth: 174,
    marginTop: 0,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "131.5%",
    /* or 16px */
    textAlign: "left",
    color: "#FFFFFF",
    height: 25,
    [theme.breakpoints.up("xl")]: {
      position: "absolute",
      marginTop: 7,
      fontSize: 16,
      maxWidth: 224,
      marginBottom: 10,
    },
  },
  img: {
    height: 700,
    [theme.breakpoints.up("xl")]: {
      height: 1000,
    },
  },

  box: {
    position: "absolute",
    marginRight: "12rem",
    marginBottom: "16rem",
    width: 235,
    height: 215,
    border: "2px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.up("xl")]: {
      marginRight: "19rem",
      marginBottom: "24rem",
      width: 285,
      height: 285,
    },
  },
}));

export default function FaceWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gradiant}>
        <Grid container className={classes.main}>
          <Grid
            item
            md={7}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box className={classes.headingbox}>
              <Box className={classes.mainheading}>
                FACE + VOICE AUTHENTICATION SOLUTIONS
              </Box>
            </Box>
            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>PHONE UNLOCK</Box>

                <Box className={classes.text}>
                  Unlock devices and provide MFA for an unlimited number of user
                  accounts with continuous decentralized biometric
                  authentication.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>CONTINUOUS AUTHENTICATION</Box>

                <Box className={classes.text}>
                  1:N Identify, 1:1 verify and authenticate using face (with
                  facemask) and voice recognition.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>ACCOUNT RECOVERY</Box>

                <Box className={classes.text}>
                  Protect an unlimited number of user accounts and eliminate
                  password resets.
                </Box>
              </Box>
            </Box>
            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>FACE CAPTCHA</Box>

                <Box className={classes.text}>
                  Determine if a live human face is in front of the camera in
                  10ms. Runs instantly on browser without installation.
                </Box>
              </Box>

              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>VOICE CAPTCHA</Box>

                <Box className={classes.text}>
                  Determine if a live human is speaking in the microphone in
                  10ms. Runs instantly on browsers without installation.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading1}>VERIFIED IDENTITY</Box>
                <Box className={classes.subheading}>
                  for Identity Providers (IdPs)
                </Box>

                <Box className={classes.text}>
                  Compare two or more face images (with or without a facemask)
                  with passive liveness in 100ms without PII. Built for identity
                  providers.
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            md={5}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <img src={img} className={classes.img} alt="" />
            {/* <Box className={classes.box} /> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
