import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/voicebackgroundsm.png";
import img from "../../assets/voiceimg1.png";
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
    height: 473,
    width: 482,
    marginBottom: -4,
    [theme.breakpoints.only("xs")]: {
      width: 260,
      height: 260,
    },
  },
  headingbox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 600,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  mainheading: {
    width: 307,
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
      width: 250,
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
    paddingTop: 30,
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
      width: "90%",
      height: 90,
    },
  },
  headingbadgebox: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
  },
  badge: {
    width: 59,
    height: 27,
    marginRight: 10,
    [theme.breakpoints.only("xs")]: {
      width: 50,
      height: 24,
      marginRight: 5,
    },
  },

  heading: {
    width: 465,
    height: 30,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    textAlign: "left",
    lineHeight: "131.5%",
    /* or 21px */
    marginTop: 0,
    color: "#FFFFFF",
    marginLeft: 20,
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      fontSize: 12,
      height: 25,
      height: 35,
      marginLeft: 10,
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
      width: "95%",
      fontSize: 10,
      marginLeft: 10,
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(85.54deg, rgba(0, 0, 0, 0) -8.44%, rgba(44, 44, 44, 0.9) 38.88%)",
  },
}));

export default function VoiceAuthenticationTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.upperbox}>
        <Box className={classes.gradiant}>
          <Box className={classes.headingbox}>
            <Box className={classes.mainheading}>
              VOICE SOLUTIONS FOR AMAZON CONNECT
            </Box>
          </Box>
          <img src={img} className={classes.img} alt="voice image" />
        </Box>
      </Box>

      <Box className={classes.lowerbox}>
        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>
              Voice <span className={classes.span}>Auth</span> for Amazon
              Connect®
            </Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Continuously authenticate an unlimited number of callers every 3
            seconds in IVR and live calls using 1:n speaker recognition.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>
              Voice <span className={classes.span}>Search</span> for Amazon
              Connect®
            </Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Search and review an unlimited number of Recorded Calls.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>
              Voice <span className={classes.span}>Pop</span> for Amazon
              Connect®
            </Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Instantly open a caller’s unified Customer Profile with one second
            of the caller’s voice.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>
              Enhanced <span className={classes.span}>Merge</span> for Amazon
              Connect®
            </Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Automatically find and intelligently merge duplicate Customer
            Profiles using 1:n speaker recognition with 3rd party data.
          </Box>
        </Box>

        <Box className={classes.sqr}>
          <Box className={classes.headingbadgebox}>
            <Box className={classes.heading}>
              Augmented<span className={classes.span}>Merge</span> for Amazon
              Connect®
            </Box>
            <img src={badge} className={classes.badge} alt="" />
          </Box>
          <Box className={classes.text}>
            Enhanced Merge, plus appends additional profile information for
            greater personalization, fraud avoidance and targeted marketing.
          </Box>
        </Box>
      </Box>
    </div>
  );
}
