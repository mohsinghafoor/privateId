import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#353535",
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  },
  upprquote: {
    position: "absolute",
    marginTop: "-25rem",
    marginLeft: "70rem",
    width: 71,
    height: 287,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 180,
    lineHeight: "159.5%",
    /* or 287px */

    letterSpacing: "-0.085em",

    color: "#E4E4E4",
  },
  lwrquote: {
    position: "absolute",
    marginTop: "20rem",
    marginLeft: "-75rem",
    width: 71,
    height: 287,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 180,
    lineHeight: "159.5%",
    /* or 287px */

    letterSpacing: "-0.085em",

    color: "#E4E4E4",
    transform: "rotate(180deg)",
  },
}));

export default function Carosoul() {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay={true}
      afterChange={onChange}
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
    </Carousel>
  );
}
