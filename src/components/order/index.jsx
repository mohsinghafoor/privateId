import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import img from "../../assets/girl.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(64.32% 318.09% at 81.51% 11.17%, #000000 0%, #474747 100%)",
    height: "100vh",
    width: "100%",
  },
  main: {
    maxWidth: 1380,
  },
  img: {
    width: 486,
    height: 522,
    filter: "drop-shadow(22px -15px 21px rgba(0, 0, 0, 0.25))",
  },
  sqr: {
    position: "absolute",
    marginLeft: "16rem",
    marginTop: "-25rem",
    width: 174,
    height: 179,
    border: "3px solid rgba(248, 248, 248, 0.6)",
    boxSizing: "border-box",
    [theme.breakpoints.only("md")]: {
      marginLeft: "10.3rem",
    },
  },
  heading: {
    width: 260,
    height: 60,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",
    color: "#FFFFFF",
  },
  text: {
    width: 497,
    height: 120,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "25px",
    textAlign: "left",
    color: "#FFFFFF",
  },
  mailbox: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 500,
    marginBottom: 30,
  },
  label: {
    width: 113,
    marginTop: 10,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "25px",
    color: "#FFFFFF",
  },
  input: {
    width: 252,
    height: 30,
    background: "none",
    border: 0,
    borderBottom: "2px solid white",
    color: "white",
    outline: 0,
    fontSize: 15,
  },
  btn: {
    width: 120,
    height: 30,
    background: "#383838",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 10,
    lineHeight: "120%",
    /* or 14px */
    borderRadius: 0,
    color: "#FFFFFF",
  },
  btmtext: {
    width: 481,
    height: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "138.5%",
    /* or 17px */
    textAlign: "left",
    color: "#FFFFFF",
  },
}));

export default function Order() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item lg={6}>
          <img src={img} alt="Girl Picture" className={classes.img} />
          <Box className={classes.sqr} />
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box className={classes.heading}>Order Private ID ®</Box>
          <Box className={classes.text}>
            Private ID® is currently available to a limited number of
            organizations per geographic area. Orders will be fulfilled on a
            first-come, first-served basis.
          </Box>
          <form className={classes.mailbox}>
            <Box className={classes.label}>Enter Email:</Box>
            <input type="text" className={classes.input} placeholder="email" />
            {/* <TextField
              className={classes.email}
              InputProps={{
                className: classes.input,
              }}
            /> */}
            <Button className={classes.btn}>Join the Waitlist</Button>
          </form>
          <Box className={classes.btmtext}>
            By pressing Join, I agree to receive communications from Private
            Identity and to the Privacy Policy and Terms of Service.
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
