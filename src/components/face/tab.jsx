import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/voicebackground.png";
import img from "../../assets/faceimgsm.png";
import badge from "../../assets/voicebadge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    display: "flex",
    alignItems: "center",
    maxWidth: 1280,
  },
  img: {
    width: 600,
    marginBottom: -4,
    [theme.breakpoints.only("sm")]: {
      width: 451,
      marginBottom: -4,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginBottom: 0,
    },
  },
  headingbox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 900,
    marginTop: 30,
    [theme.breakpoints.only("sm")]: {
      width: 600,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  mainheading: {
    width: 850,
    height: 81,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 40,
    lineHeight: "131.5%",
    /* or 39px */
    textAlign: "left",
    padding: "50px 30px 20px 30px",

    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      width: 514,
      height: 41,
      fontSize: 24,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
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
    paddingTop: 50,
    paddingBottom: 30,
  },

  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // alignItems: "center",
    width: "90%",
    height: 114,
    marginBottom: 10,
    background: "#434242",
    [theme.breakpoints.only("sm")]: {
      width: "90%",
      height: 94,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 80,
    },
  },
  sqr1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // alignItems: "center",
    width: "90%",
    height: 114,
    marginBottom: 10,
    background: "#434242",
    [theme.breakpoints.only("sm")]: {
      width: "90%",
      height: 94,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 90,
    },
  },
  badge: {
    width: 70,
    height: 37,
    [theme.breakpoints.only("sm")]: {
      width: 59,
      height: 27,
    },
    [theme.breakpoints.only("xs")]: {
      width: 50,
      height: 24,
      marginRight: 5,
    },
  },

  heading: {
    width: "80%",
    height: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
    textAlign: "left",
    lineHeight: "131.5%",
    /* or 21px */
    marginTop: 0,
    color: "#FFFFFF",
    marginLeft: 20,
    [theme.breakpoints.only("sm")]: {
      width: "80%",
      fontSize: 18,
      height: 30,
      marginLeft: 20,
      marginTop: 10,
    },
    [theme.breakpoints.only("xs")]: {
      width: "80%",
      fontSize: 10,
      height: 20,
      marginLeft: 10,
      marginTop: 0,
    },
  },
  heading1: {
    width: "80%",
    height: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
    textAlign: "left",
    lineHeight: "131.5%",
    /* or 21px */
    marginTop: 0,
    color: "#FFFFFF",
    marginLeft: 20,
    [theme.breakpoints.only("sm")]: {
      width: "80%",
      fontSize: 18,
      height: 30,
      marginLeft: 20,
      marginTop: 10,
    },
    [theme.breakpoints.only("xs")]: {
      width: "80%",
      fontSize: 10,
      height: 30,
      marginLeft: 10,
      marginTop: 0,
    },
  },
  headingbadgebox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  text: {
    maxWidth: "95%",
    height: 45,
    marginLeft: 20,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "131.5%",
    /* or 16px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      maxWidth: 565,
      fontSize: 14,
      marginLeft: 20,
    },
    [theme.breakpoints.only("xs")]: {
      width: "95%",
      fontSize: 10,
      marginLeft: 10,
    },
  },
  span1: {
    fontSize: 14,
    fontWeight: 300,
    marginLeft: 3,
    [theme.breakpoints.only("xs")]: {
      fontSize: 8,
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
  box: {
    position: "absolute",
    marginLeft: "1rem",
    marginTop: "9rem",
    width: 200,
    height: 200,
    border: "2px solid rgba(248, 248, 248, 0.25)",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.5rem",
      marginTop: "6rem",
      width: 150,
      height: 150,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0.5rem",
      marginTop: "10rem",
      width: 120,
      height: 120,
    },
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
          <Box className={classes.box} />
        </Box>
      </Box>

      <Box className={classes.lowerbox}>
        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>PHONE UNLOCK</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Unlock devices and provide MFA for an unlimited number of user
            accounts with continuous decentralized biometric authentication.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>CONTINUOUS AUTHENTICATION</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            1:N Identify, 1:1 verify and authenticate using face (with facemask)
            and voice recognition.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>ACCOUNT RECOVERY</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Protect an unlimited number of user accounts and eliminate password
            resets.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>FACE CAPTCHA</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Determine if a live human face is in front of the camera in 10ms.
            Runs instantly on browser without installation.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>VOICE CAPTCHA</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Determine if a live human is speaking in the microphone in 10ms.
            Runs instantly on browsers without installation.
          </Box>
        </Box>

        <Box className={classes.sqr1}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading1}>
              VERIFIED IDENTITY{" "}
              <span className={classes.span1}>
                for Identity Providers (IdPs)
              </span>
            </Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Compare two or more face images (with or without a facemask) with
            passive liveness in 100ms without PII. Built for identity providers.
          </Box>
        </Box>
      </Box>
    </div>
  );
}
