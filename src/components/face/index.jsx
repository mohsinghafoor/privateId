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
    height: "100vh",
    backgroundSize: "100% 100%",
    marginTop: -22,
  },
  main: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 1280,
  },
  sqr: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 230,
    height: 219,
    background: "#545454",
    border: "6px solid #B4B4B4",
    boxSizing: "border-box",
  },
  badge: {
    width: 69,
    height: 32,
    marginLeft: 5,
    marginTop: 10,
  },
  heading: {
    maxWidth: 100,
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
  parentbox: {
    position: "absolute",
  },
  uppercardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 475,
    marginLeft: 80,
  },
  lowercardbox: {
    display: "flex",
    justifyContent: "space-between",
    width: 720,
    marginTop: 20,
    marginLeft: 80,
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
  },
  img: {
    width: 437,
    height: 526,
  },
  blackline: {
    position: "absolute",
    width: 1076,
    height: 145,
    background: "#000000",
    borderRadius: 204,
    marginLeft: "-37rem",
    marginTop: "5rem",
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
}));

export default function Face() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Box className={classes.blackline}>
          <Box className={classes.linetext}>Face Security Solutions</Box>
        </Box>
        <Grid
          item
          md={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <Box className={classes.parentbox}>
            <Box className={classes.uppercardbox}>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>1:N FACE RECOGNITION</Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Identify, 1:1 verify and authenticate using face recognition
                  with face mask in 300ms without PII.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>ACCOUNT RECOVERY</Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Protect an unlimited number of user accounts and eliminate
                  password resets with automated biometric account recovery.
                </Box>
              </Box>
            </Box>
            <Box className={classes.lowercardbox}>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>FACE CAPTCHA</Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Determines if a live human face is in front of the camera in
                  10ms. Run instantly on any browser with no installation.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>VERIFIED IDENTITY</Box>
                <Box className={classes.subheading}>
                  for Identity Providers (IdPs)
                </Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Compare two or more face images (with or without a mask) with
                  passive liveness in 100ms without PII. Built for identity
                  providers.
                </Box>
              </Box>
              <Box className={classes.sqr}>
                <img src={badge} className={classes.badge} alt="" />
                <Box className={classes.heading}>CONTINUOUS UNLOCK</Box>
                <Box className={classes.line} />
                <Box className={classes.text}>
                  Instantly open a caller’s unified Customer Profile using 1:n
                  speaker recognition with one second of the caller’s voice.
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          md={8}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <img src={img} className={classes.img} alt="" />
        </Grid>
      </Grid>
    </div>
  );
}
