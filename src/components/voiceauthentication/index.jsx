import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/voicebackground.png";
import img from "../../assets/voiceimg.png";
import badge from "../../assets/voicebadge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    alignItems: "center",
    maxWidth: 1280,
  },
  img: {
    width: 464,
    height: 560,
  },
  cardbox: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: 480,
    marginTop: 20,
  },
  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    width: 230,
    height: 219,

    background: "#545454",
    border: "6px solid #B4B4B4",
    boxSizing: "border-box",
  },
  badge: {
    width: 69,
    height: 32,
    marginLeft: 10,
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
    marginBottom: 20,
  },
  text: {
    maxWidth: 174,
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
  blackline: {
    position: "absolute",
    width: 1000,
    height: 145,
    marginTop: "21rem",
    marginLeft: "15rem",
    background: "#000000",
    borderRadius: 204,
    display: "flex",
    alignItems: "center",
  },
  linetext: {
    width: 352,
    height: 117,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "131.5%",
    /* or 39px */
    marginLeft: 40,
    marginTop: 30,
    color: "#FFFFFF",
  },
}));

export default function VoiceAuthentication() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={7}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <img src={img} className={classes.img} alt="voice image" />
        </Grid>
        <Box className={classes.blackline}>
          <Box className={classes.linetext}>
            VOICE SOLUTIONS FOR AMAZON CONNECT®
          </Box>
        </Box>
        <Grid item lg={5}>
          <Box className={classes.cardbox} style={{ marginTop: -230 }}>
            <Box className={classes.sqr}>
              <img src={badge} className={classes.badge} alt="" />
              <Box className={classes.heading}>
                Voice Auth  for Amazon Connect®
              </Box>
              <Box className={classes.line} />
              <Box className={classes.text}>
                Continuously authenticate an unlimited number of callers every 3
                seconds in IVR or live calls using 1:n speaker recognition.
              </Box>
            </Box>
            <Box className={classes.sqr}>
              <img src={badge} className={classes.badge} alt="" />
              <Box className={classes.heading}>
                Voice Pop  for Amazon Connect®
              </Box>
              <Box className={classes.line} />
              <Box className={classes.text}>
                Instantly open a caller’s unified Customer Profile using 1:n
                speaker recognition with one second of the caller’s voice.
              </Box>
            </Box>
          </Box>
          <Box className={classes.cardbox}>
            <Box className={classes.sqr}>
              <img src={badge} className={classes.badge} alt="" />
              <Box className={classes.heading}>
                Voice Pop  for Amazon Connect®
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
                Voice Pop  for Amazon Connect®
              </Box>
              <Box className={classes.line} />
              <Box className={classes.text}>
                Instantly open a caller’s unified Customer Profile using 1:n
                speaker recognition with one second of the caller’s voice.
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
