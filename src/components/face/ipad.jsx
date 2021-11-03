import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import background from "../../assets/facebackmd.png";
import img from "../../assets/faceimg1.png";
import badge from "../../assets/voicebadge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundSize: "100% 100%",
  },
  gradiant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
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
    width: 700,
    height: 15,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "left",
    color: "#FFFFFF",
    marginTop: 100,
    marginLeft: -150,
    marginBottom: -100,
  },

  cardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 490,
    marginTop: 10,
    marginLeft: 80,
  },

  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 239,
    height: 220,
    background: "#434242",
  },
  badge: {
    width: 80,
    height: 40,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  heading: {
    maxWidth: 90,
    height: 54,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 18,
    lineHeight: "131.5%",
    /* or 18px */
    textAlign: "left",
    color: "#FFFFFF",
  },

  text: {
    maxWidth: 224,
    height: 100,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 16px */
    textAlign: "left",
    color: "#FFFFFF",
  },

  subheading: {
    maxWidth: 174,
    marginTop: -5,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 16px */
    textAlign: "left",
    marginBottom: 10,
    color: "#FFFFFF",
  },
  img: {
    height: 650,
  },

  box: {
    position: "absolute",
    marginRight: "12rem",
    marginBottom: "15rem",
    width: 200,
    height: 200,
    border: "2px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
  },
  leftgrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "80vh",
  },
  rightgrid: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

export default function FaceIpad() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gradiant}>
        <Box className={classes.main}>
          <Box className={classes.mainheading}>
            FACE + VOICE AUTHENTICATION SOLUTIONS
          </Box>
          <Grid className={classes.leftgrid}>
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
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>ACCOUNT RECOVERY</Box>

                <Box className={classes.text}>
                  Protect an unlimited number of user accounts and eliminate
                  password resets.
                </Box>
              </Box>

              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>FACE CAPTCHA</Box>

                <Box className={classes.text}>
                  Determine if a live human face is in front of the camera in
                  10ms. Runs instantly on browser without installation.
                </Box>
              </Box>
            </Box>
            <Box className={classes.cardbox}>
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

          <Box className={classes.rightgrid}>
            <img src={img} className={classes.img} alt="" />
            {/* <Box className={classes.box} /> */}
          </Box>
        </Box>
      </div>
    </div>
  );
}
