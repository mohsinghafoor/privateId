import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/voicebackground.png";
import img from "../../assets/faceimg.png";
import badge from "../../assets/voicebadge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  },
  main: {
    display: "flex",
    alignItems: "center",
    maxWidth: 1280,
  },
  img: {
    height: 411,
    width: 439,
    marginBottom: -4,
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 320,
    },
  },
  headingbox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 600,
    [theme.breakpoints.only("xs")]: {
      width: 370,
    },
  },
  mainheading: {
    width: 514,
    height: 41,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
    lineHeight: "131.5%",
    /* or 39px */
    textAlign: "left",
    padding: "50px 30px 20px 30px",

    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: 300,
      fontSize: 18,
    },
  },
  upperbox: {
    width: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerbox: {
    background: "#353535",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 30,
  },

  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // alignItems: "center",
    width: 503,
    height: 94,
    marginBottom: 10,
    background: "#434242",
    [theme.breakpoints.only("xs")]: {
      width: 330,
      height: 80,
    },
  },
  badge: {
    position: "absolute",
    width: 59,
    height: 27,
    marginLeft: "26.4rem",
    marginTop: "-1.4rem",
    [theme.breakpoints.only("xs")]: {
      width: 50,
      height: 24,
      marginLeft: "17rem",
      marginTop: "-1.4rem",
    },
  },

  heading: {
    width: 359,
    height: 30,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 16,
    textAlign: "left",
    lineHeight: "131.5%",
    /* or 21px */
    marginTop: 0,
    color: "#FFFFFF",
    marginLeft: 20,
    [theme.breakpoints.only("xs")]: {
      width: 250,
      fontSize: 12,
      height: 20,
      marginTop: 0,
    },
  },

  text: {
    maxWidth: 465,
    height: 35,
    marginLeft: 20,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "131.5%",
    /* or 16px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: 300,
      fontSize: 10,
    },
  },
  span1: {
    fontSize: 14,
    fontWeight: 300,
    marginLeft: 3,
    [theme.breakpoints.only("xs")]: {
      fontSize: 10,
    },
  },
  gradiant: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(85.54deg, rgba(0, 0, 0, 0) -8.44%, rgba(44, 44, 44, 0.9) 38.88%)",
  },
}));

export default function FaceTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.upperbox}>
        <Box className={classes.gradiant}>
          <Box className={classes.headingbox}>
            <Box className={classes.mainheading}>
              FACE + VOICE AUTHENTICATION SOLUTIONS
            </Box>
          </Box>
          <img src={img} className={classes.img} alt="voice image" />
        </Box>
      </Box>

      <Box className={classes.lowerbox}>
        <Box className={classes.sqr}>
          <img src={badge} className={classes.badge} alt="" />

          <Box className={classes.heading}>Phone Auth</Box>
          <Box className={classes.text}>
            Unlock devices and provide MFA for an unlimited number of user
            accounts with continuous decentralized biometric authentication.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <img src={badge} className={classes.badge} alt="" />
          <Box>
            <Box className={classes.heading}>CONTINUOUS AUTHENTICATION</Box>
          </Box>
          <Box className={classes.text}>
            1:N Identify, 1:1 verify and authenticate using face (with facemask)
            and voice recognition.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <img src={badge} className={classes.badge} alt="" />
          <Box>
            <Box className={classes.heading}>ACCOUNT RECOVERY</Box>
          </Box>
          <Box className={classes.text}>
            Protect an unlimited number of user accounts and eliminate password
            resets with biometric account recovery.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <img src={badge} className={classes.badge} alt="" />
          <Box>
            <Box className={classes.heading}>FACE CAPTCHA</Box>
          </Box>
          <Box className={classes.text}>
            Determines if a live human face is in front of the camera in 10ms.
            Run instantly on any browser with no installation.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <img src={badge} className={classes.badge} alt="" />
          <Box>
            <Box className={classes.heading}>VOICE CAPTCHA</Box>
          </Box>
          <Box className={classes.text}>
            Determines if a live human is speaking in the microphone in 10ms.
            Runs instantly on browsers without installation.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <img src={badge} className={classes.badge} alt="" />
          <Box>
            <Box className={classes.heading}>
              VERIFIED IDENTITY{" "}
              <span className={classes.span1}>
                for Identity Providers (IdPs)
              </span>
            </Box>
          </Box>
          <Box className={classes.text}>
            Compare two or more face images (with or without a mask) with
            passive liveness in 100ms without PII. Built for identity providers.
          </Box>
        </Box>
      </Box>
    </div>
  );
}
