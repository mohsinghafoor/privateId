import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import background from "../../assets/faceback.png";
import img from "../../assets/faceimg.png";
import badge from "../../assets/voicebadge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 552,
    backgroundSize: "100% 100%",
  },
  gradiant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90.61deg, rgba(23, 23, 23, 0.9) 58.83%, rgba(0, 0, 0, 0) 127.48%)",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 1280,
  },
  mainheading: {
    width: 685,
    height: 39,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "131.5%",
    /* or 39px */
    textTransform: "uppercase",

    color: "#FFFFFF",
  },
  headingbox: {
    width: 810,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 660,
    marginTop: 20,
    marginLeft: 80,
  },
  cardbox1: {
    display: "flex",
    justifyContent: "space-between",
    width: 435,
    marginTop: 20,
    marginLeft: 80,
  },
  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 209,
    height: 190,
    background: "#434242",
  },
  badge: {
    width: 69,
    height: 32,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
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
  },
  line: {
    width: 75,
    height: 2,
    marginLeft: 10,
    marginLeft: 10,
    background: "#C4C4C4",
    marginBottom: 10,
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
  },

  subheading: {
    maxWidth: 174,
    marginTop: -10,
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
  },
  img: {
    width: 497,
    height: 529,
    marginBottom: -23,
  },
  blackline: {
    position: "absolute",
    width: 1076,
    height: 145,
    background: "#000000",
    borderRadius: 204,
    marginLeft: "-37rem",
    marginTop: "10rem",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  linetext: {
    width: 233,
    height: 117,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "131.5%",
    /* or 39px */
    textAlign: "left",
    textTransform: "uppercase",

    color: "#FFFFFF",
    marginTop: 50,
    marginRight: 70,
  },
  box: {
    position: "absolute",
    marginRight: "9rem",
    marginBottom: "11rem",
    width: 175,
    height: 175,
    border: "2px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
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
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
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
                <Box className={classes.heading}>Phone Unlock</Box>

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
                <Box
                  className={classes.heading}
                  style={{ maxWidth: 167, height: 30 }}
                >
                  VERIFIED IDENTITY
                </Box>
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
            md={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <img src={img} className={classes.img} alt="" />
            <Box className={classes.box} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
