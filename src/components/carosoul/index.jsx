import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
function onChange(a, b, c) {
  console.log(a, b, c);
}

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#353535",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    marginBottom: -30,
  },
  dflex: {
    maxWidth: 934,
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  text: {
    maxWidth: 934,
    height: 166,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "159.5%",
    /* or 35 */
    textAlign: "left",
    color: "#D3D3D3",
    [theme.breakpoints.only("md")]: {
      maxWidth: 782,
      height: 186,
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: 548,
      height: 146,
      fontSize: 16,
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: 330,
      height: 136,
      fontSize: 12,
    },
  },
  author: {
    width: 350,
    height: 73,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "159.5%",
    /* or 29px */
    textAlign: "left",
    color: "#DADADA",
    [theme.breakpoints.only("md")]: {
      maxWidth: 565,
      height: 73,
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: 523,
      height: 73,
      fontSize: 16,
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: 230,
      height: 66,
      fontSize: 12,
    },
  },

  author1: {
    width: 200,
    height: 33,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "159.5%",
    /* or 29px */
    textAlign: "left",
    color: "#DADADA",
    [theme.breakpoints.only("sm")]: {
      maxWidth: 180,
      height: 30,
      fontSize: 16,
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: 160,
      height: 20,
      fontSize: 12,
    },
  },
  designation: {
    width: 200,
    height: 33,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "159.5%",
    /* or 29px */
    textAlign: "left",
    color: "#DADADA",
    [theme.breakpoints.only("sm")]: {
      maxWidth: 180,
      height: 30,
      fontSize: 16,
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: 160,
      height: 20,
      fontSize: 12,
    },
  },
  upprquote: {
    position: "absolute",
    marginTop: "-25rem",
    marginLeft: "65rem",
    width: 71,
    height: 287,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "159.5%",
    /* or 287px */
    letterSpacing: "-0.085em",
    color: "#E4E4E4",
    [theme.breakpoints.only("md")]: {
      marginTop: "-25rem",
      marginLeft: "55rem",
      width: 51,
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "-20rem",
      marginLeft: "34rem",
      width: 41,
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "-15rem",
      marginLeft: "20rem",
      fontSize: 90,
      width: 31,
    },
  },
  lwrquote: {
    position: "absolute",
    marginTop: "20rem",
    marginLeft: "-67rem",
    width: 71,
    height: 287,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "159.5%",
    /* or 287px */

    letterSpacing: "-0.085em",

    color: "#E4E4E4",
    transform: "rotate(180deg)",
    [theme.breakpoints.only("md")]: {
      marginTop: "20rem",
      marginLeft: "-55rem",
      width: 51,
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "15rem",
      marginLeft: "-33rem",
      width: 41,
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "11rem",
      marginLeft: "-20rem",

      width: 31,
    },
  },
}));

export default function Carosoul() {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay={false}
      afterChange={onChange}
      NextIcon={<ArrowRightIcon />}
      PrevIcon={<ArrowLeftIcon />}
      activeIndicatorIconButtonProps={{
        style: {
          color: "black", // 2
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "black",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: "8px", // 1
          color: "#C4C4C4",
          width: "20px",
          height: "6px", // 3
          marginTop: -120,
        },
      }}
    >
      <div className={classes.main}>
        <FormatQuoteIcon className={classes.upprquote} />
        <Box className={classes.dflex}>
          <Box className={classes.text}>
            “Private ID is the best-in-class biometric authentication
            technology. It is pioneering in that it preserves user privacy and
            is an efficient implementation of homomorphic encryption. The
            solution is rooted in sound science. I highly recommend using this
            groundbreaking secure and privacy preserving biometric
            authentication.”
          </Box>
          <Box className={classes.author}>
            Dr. Tyrone Grandison, CTO, MStreetX Former Deputy CDO, US Department
            of Commerce.
          </Box>
        </Box>
        <FormatQuoteIcon className={classes.lwrquote} />
      </div>
      <div className={classes.main}>
        <FormatQuoteIcon className={classes.upprquote} />
        <Box className={classes.dflex}>
          <Box className={classes.text}>
            PLLAY and Private Identity provide players with continuous,
            frictionless high-security authentication with the right technology
            right now. There is no other authentication experience like this
            with no UI and no learning curve. Fantastic.
          </Box>
          <Box className={classes.author1}>Shawn Gunn, CEO</Box>
          <Box className={classes.designation}> PLLAY Labs</Box>
        </Box>
        <FormatQuoteIcon className={classes.lwrquote} />
      </div>
      <div className={classes.main}>
        <FormatQuoteIcon className={classes.upprquote} />
        <Box className={classes.dflex}>
          <Box className={classes.text}>
            “We are excited to work with Private Identity to provide private
            face and voice recognition for our clients. Their team is a pleasure
            to work with, our customers appreciate their advanced technology,
            and their solutions integrate easily in our architecture.”
          </Box>
          <Box className={classes.author1}>Dave Coxe,CEO </Box>
          <Box className={classes.designation}>ID DataWeb</Box>
        </Box>
        <FormatQuoteIcon className={classes.lwrquote} />
      </div>
    </Carousel>
  );
}
