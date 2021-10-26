import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/voicebackground.png";
import img from "../../assets/voiceimg1.png";
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
    background:
      "  linear-gradient(85.54deg, rgba(0, 0, 0, 0) -8.44%, rgba(44, 44, 44, 0.9) 38.88%)",
    width: "100%",
  },
  main: {
    display: "flex",
    alignItems: "center",
    maxWidth: 1280,
  },
  img: {
    height: 620,
    [theme.breakpoints.up("xl")]: {
      height: 1000,
      marginLeft: -300,
    },
  },
  mainheading: {
    width: 650,
    height: 41,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "131.5%",
    /* or 39px */

    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      marginTop: -300,
      marginRight: -100,
      fontSize: 40,
      width: 900,
      height: 61,
    },
  },
  cardbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    [theme.breakpoints.up("xl")]: {
      marginRight: -100,
    },
  },
  uppercardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 720,
    marginTop: 20,
    [theme.breakpoints.up("xl")]: {
      width: 870,
    },
  },
  lowercardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 475,
    marginTop: 20,
    [theme.breakpoints.up("xl")]: {
      width: 575,
    },
  },
  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    width: 230,
    height: 219,
    background: "#434242",
    [theme.breakpoints.up("xl")]: {
      width: 280,
      height: 270,
    },
  },
  badge: {
    width: 69,
    height: 32,
    marginLeft: 10,
    marginBottom: 5,
    [theme.breakpoints.up("xl")]: {
      width: 80,
      height: 40,
    },
  },
  heading: {
    maxWidth: 180,
    height: 44,
    marginLeft: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */
    textAlign: "left",
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 22,
      maxWidth: 240,
      height: 70,
    },
  },

  text: {
    maxWidth: 174,
    height: 105,
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
      fontSize: 16,
      maxWidth: 240,
      height: 120,
    },
  },
  span: {
    fontWeight: "bold",
    marginLeft: 3,
  },
}));

export default function VoiceAuthenticationWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gradiant}>
        <Grid container className={classes.main}>
          <Grid
            item
            lg={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              minHeight: "100vh",
            }}
          >
            <img src={img} className={classes.img} alt="voice image" />
          </Grid>
          <Grid
            item
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Box className={classes.mainheading}>
              VOICE SOLUTIONS FOR AMAZON CONNECT
            </Box>
            <Box className={classes.cardbox}>
              <Box className={classes.uppercardbox}>
                <Box className={classes.sqr}>
                  <img src={badge} className={classes.badge} alt="" />
                  <Box className={classes.heading}>
                    Voice<span className={classes.span}>Auth</span>
                    <br /> for Amazon Connect®
                  </Box>

                  <Box className={classes.text}>
                    Continuously authenticate an unlimited number of callers
                    every 3 seconds in IVR and live calls using 1:n speaker
                    recognition.
                  </Box>
                </Box>
                <Box className={classes.sqr}>
                  <img src={badge} className={classes.badge} alt="" />
                  <Box className={classes.heading}>
                    Voice<span className={classes.span}>Search</span>
                    <br /> for Amazon Connect®
                  </Box>

                  <Box className={classes.text}>
                    Search and review an unlimited number of Recorded Calls.
                  </Box>
                </Box>
                <Box className={classes.sqr}>
                  <img src={badge} className={classes.badge} alt="" />
                  <Box className={classes.heading}>
                    Voice<span className={classes.span}>POP</span>
                    <br /> for Amazon Connect®
                  </Box>

                  <Box className={classes.text}>
                    Instantly open a caller’s unified Customer Profile with one
                    second of the caller’s voice.
                  </Box>
                </Box>
              </Box>
              <Box className={classes.lowercardbox}>
                <Box className={classes.sqr}>
                  <img src={badge} className={classes.badge} alt="" />
                  <Box className={classes.heading}>
                    Enhanced<span className={classes.span}>Merge</span>
                    <br /> for Amazon Connect®
                  </Box>

                  <Box className={classes.text}>
                    Automatically find and intelligently merge duplicate
                    Customer Profiles using 1:n speaker recognition with 3rd
                    party data.
                  </Box>
                </Box>
                <Box className={classes.sqr}>
                  <img src={badge} className={classes.badge} alt="" />
                  <Box className={classes.heading}>
                    Augmented<span className={classes.span}>Merge</span>
                    <br /> for Amazon Connect®
                  </Box>

                  <Box className={classes.text}>
                    Enhanced Merge, plus appends additional profile information
                    for greater personalization, fraud avoidance and targeted
                    marketing.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
