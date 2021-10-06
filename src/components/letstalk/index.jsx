import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import background from "../../assets/letstalkback.png";
import img from "../../assets/talkimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    maxWidth: 1380,
  },
  textbox: {
    marginTop: "-8rem",
  },
  heading: {
    width: 201,
    height: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "131.5%",
    /* identical to box height, or 53px */

    color: "#FFFFFF",
  },
  text: {
    width: 233,
    height: 58,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "131.5%",
    /* or 29px */

    color: "#FFFFFF",
  },
  img: {
    width: 208,
    height: 184,
    marginTop: "-3rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 374,
    height: 388.59,
    background: "#FFFFFF",
    borderRadius: 14,
    marginLeft: 30,
    marginTop: "10rem",
  },
  inputbox: {
    height: 60,
  },
  input: {
    width: 326,
    height: 38,
    outline: 0,
    background: "#FFFFFF",
    border: "1px solid #C9C9C9",
    boxSizing: "border - box",
    boxShadow: "0px 15px 9px -6px rgba(199, 199, 199, 0.25)",
    borderRadius: 8,
    paddingLeft: 10,
  },
  msg: {
    width: 326,
    height: 103,
    outline: 0,
    background: "#FFFFFF",
    border: "1px solid #C9C9C9",
    boxSizing: "border - box",
    boxShadow: "0px 15px 9px -6px rgba(199, 199, 199, 0.25)",
    borderRadius: 8,
    paddingLeft: 10,
  },
  btn: {
    width: 148,
    height: 37,
    background: "#383838",
    borderRadius: 8,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: "120%",
    /* or 22px */
    marginTop: 20,
    color: "#FFFFFF",
  },
}));

export default function LetsTalk() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          lg={5}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box className={classes.textbox}>
            <Box className={classes.heading}>Let's Talk</Box>
            <Box className={classes.text}>Start a conversation.</Box>
          </Box>
          <img src={img} className={classes.img} alt="" />
        </Grid>
        <Grid
          item
          lg={5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form className={classes.form}>
            <Box className={classes.inputbox}>
              <input
                type="text"
                className={classes.input}
                placeholder="Name*"
              />
            </Box>
            <Box className={classes.inputbox}>
              <input
                type="email"
                className={classes.input}
                placeholder="Email*"
              />
            </Box>
            <Box className={classes.inputbox}>
              <input
                type="text"
                className={classes.input}
                placeholder="Mobile Number*"
              />
            </Box>
            <Box>
              {" "}
              <input
                type="text"
                placeholder="Message"
                className={classes.msg}
              />
            </Box>
            <button type="submit" className={classes.btn}>
              SEND
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
