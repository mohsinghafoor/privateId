import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/faceback.png";
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
      height: 340,
    },
  },
  mainheading: {
    width: 515,
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
      width: 220,
      fontSize: 18,
    },
  },
  upperbox: {
    width: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
  },
  lowerbox: {
    background: "#353535",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 20,
  },

  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // alignItems: "center",
    width: 503,
    height: 94,
    marginBottom: 10,
    background: "#434242",
    [theme.breakpoints.only("xs")]: {
      width: 320,
      height: 70,
    },
  },
  badge: {
    width: 59,
    height: 27,
  },
  headingbox: {
    width: 470,
    height: 80,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      width: 300,
      marginTop: 5,
      height: 50,
    },
  },
  heading: {
    width: 359,
    height: 26,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: "131.5%",
    /* or 21px */

    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: 250,
      fontSize: 12,
    },
  },
  augheading: {
    width: 330,
    height: 26,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "131.5%",
    /* or 21px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: 290,
      fontSize: 12,
      height: 30,
    },
  },
  text: {
    maxWidth: 465,
    height: 89,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "131.5%",
    /* or 16px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.only("xs")]: {
      width: 310,
      fontSize: 10,
    },
  },
  span: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 3,
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  gradiant: {
    background: "rgba(23, 23, 23, 0.8)",
  },
}));

export default function FaceTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.upperbox}>
        <Box className={classes.gradiant}>
          <Box className={classes.mainheading}>
            FACE + VOICE AUTHENTICATION SOLUTIONS
          </Box>
          <img src={img} className={classes.img} alt="voice image" />
        </Box>
      </Box>

      <Box className={classes.lowerbox}>
        <Box className={classes.sqr}>
          <Box className={classes.headingbox}>
            <Box className={classes.heading}>Phone Unlock</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>

          <Box className={classes.text}>
            Continuously authenticate an unlimited number of callers every 3
            seconds in IVR or live calls using 1:n speaker recognition.
          </Box>
        </Box>
        <Box className={classes.sqr}>
          <Box className={classes.headingbox}>
            <Box className={classes.heading}>CONTINUOUS AUTHENTICATION</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>

          <Box className={classes.text}>
            Search and review an unlimited number of Recorded Calls using 1:n
            speaker identification.
          </Box>
        </Box>
        <Box className={classes.sqr}>
          <Box className={classes.headingbox}>
            <Box className={classes.heading}>ACCOUNT RECOVERY</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>

          <Box className={classes.text}>
            Instantly open a caller’s unified Customer Profile using 1:n speaker
            recognition with one second of the caller’s voice.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbox}>
            <Box className={classes.heading}>FACE CAPTCHA</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>

          <Box className={classes.text}>
            Automatically find and intelligently merge duplicate Customer
            Profiles using 1:n speaker recognition with 3rd party data.
          </Box>
        </Box>
        <Box className={classes.sqr}>
          <Box className={classes.headingbox}>
            <Box className={classes.heading}>VOICE CAPTCHA</Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>

          <Box className={classes.text}>
            Instantly open a caller’s unified Customer Profile using 1:n speaker
            recognition with one second of the caller’s voice.
          </Box>
        </Box>
        <Box className={classes.sqr}>
          <Box className={classes.headingbox}>
            <Box className={classes.heading}>
              VERIFIED IDENTITY{" "}
              <span className={classes.span}>
                for Identity Providers (IdPs)
              </span>
            </Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>

          <Box className={classes.text}>
            Instantly open a caller’s unified Customer Profile using 1:n speaker
            recognition with one second of the caller’s voice.
          </Box>
        </Box>
      </Box>
    </div>
  );
}
