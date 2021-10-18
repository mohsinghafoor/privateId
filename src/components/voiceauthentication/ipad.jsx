import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/voicebackgroundmd.png";
import img from "../../assets/voiceimg.png";
import badge from "../../assets/voicebadge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 763,

    backgroundSize: "100% 100%",
  },
  gradiant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "  linear-gradient(85.54deg, rgba(0, 0, 0, 0) -8.44%, rgba(44, 44, 44, 0.9) 38.88%)",
    width: "100%",
    height: "100%",
  },
  main: {
    display: "flex",
    alignItems: "center",
    maxWidth: 1280,
  },
  img: {
    width: 433,
    height: 573,
    marginBottom: -190,
  },
  mainheading: {
    width: 650,
    height: 51,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "131.5%",
    /* or 39px */

    color: "#FFFFFF",
  },
  cardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 455,
    marginTop: 10,
  },
  lowercardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 475,
    marginTop: 20,
  },
  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    width: 219,
    height: 190,

    background: "#434242",
  },
  badge: {
    width: 69,
    height: 32,
    marginLeft: 10,
    marginBottom: 5,
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
    maxWidth: 194,
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
  },
  span: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 3,
  },
}));

export default function VoiceAuthenticationIpad() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gradiant}>
        <Grid container className={classes.main}>
          <Grid
            item
            md={5}
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img src={img} className={classes.img} alt="voice image" />
          </Grid>
          <Grid
            item
            md={6}
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
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>
                  Voice <span className={classes.span}>Auth</span> <br /> for
                  Amazon Connect®
                </Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Continuously authenticate an unlimited number of callers every
                  3 seconds in IVR or live calls using 1:n speaker recognition.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>
                  Voice <span className={classes.span}>Search</span> <br /> for
                  Amazon Connect®
                </Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Search and review an unlimited number of Recorded Calls using
                  1:n speaker identification.
                </Box>
              </Box>
            </Box>
            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>
                  Voice <span className={classes.span}>POP</span> <br /> for
                  Amazon Connect®
                </Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Instantly open a caller’s unified Customer Profile using 1:n
                  speaker recognition with one second of the caller’s voice.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>
                  Enhanced <span className={classes.span}>Merge</span> <br />{" "}
                  for Amazon Connect®
                </Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Automatically find and intelligently merge duplicate Customer
                  Profiles using 1:n speaker recognition with 3rd party data.
                </Box>
              </Box>
            </Box>

            <Box className={classes.cardbox}>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>
                  Augmented <span className={classes.span}>Merge</span> <br />{" "}
                  for Amazon Connect®
                </Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Enhanced Merge, plus appends additional profile information
                  for greater personalization, fraud avoidance and targeted
                  marketing.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
