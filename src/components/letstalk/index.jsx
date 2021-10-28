import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import emailjs from "emailjs-com";
import background from "../../assets/letstalkback.png";
import img from "../../assets/talkimg.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundSize: "100% 100%",
  },
  main: {
    maxWidth: 1280,
    [theme.breakpoints.down("sm")]: {
      height: 600,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  textbox: {
    // marginTop: "-15rem",
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
    marginTop: 40,
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      height: 33,
      marginTop: 80,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      width: 210,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  img: {
    height: 184,
    [theme.breakpoints.down("md")]: {
      width: 180,
      height: 130,
    },
    [theme.breakpoints.down("sm")]: {
      width: 310,
      height: 208,
      marginTop: "-25rem",
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0rem",
      width: 200,
      height: 144,
    },
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
    marginLeft: "1rem",
    [theme.breakpoints.only("md")]: {
      width: 327,
      height: 331,
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      width: 488,
      height: 331,
      marginTop: "3rem",
      marginLeft: "-19rem",
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      width: "85%",
      height: 331,
      marginTop: "3rem",
      marginLeft: "-12.2rem",
    },
  },
  inputbox: {
    height: 60,

    [theme.breakpoints.down("md")]: {
      height: 50,
    },
    [theme.breakpoints.only("xs")]: {
      width: "80%",
    },
  },
  msginput: {
    [theme.breakpoints.only("xs")]: {
      width: "80%",
    },
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
    [theme.breakpoints.only("md")]: {
      width: 285,
      height: 33,
    },
    [theme.breakpoints.only("sm")]: {
      width: 425,
      height: 33,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: 33,
    },
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
    [theme.breakpoints.only("md")]: {
      width: 285,
      height: 93,
    },
    [theme.breakpoints.only("sm")]: {
      width: 425,
      height: 93,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: 93,
    },
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
  leftgrid: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  rightgrid: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  massage: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 10,
  },
}));

export default function LetsTalk() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    emailjs
      .sendForm(
        "service_bzsah6a",
        "template_aqy5rrb",
        e.target,
        "user_ANsS2m1U6X5tLv44aTOIp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={classes.root}>
      <Box className={classes.textbox}>
        <Box className={classes.heading}>Let's Talk</Box>
        <Box className={classes.text}>Start a conversation.</Box>
      </Box>
      <Grid container className={classes.main}>
        <Grid item lg={6} md={6} className={classes.leftgrid}>
          <img src={img} className={classes.img} alt="" />
        </Grid>
        <Grid item lg={5} md={6} className={classes.rightgrid}>
          <form className={classes.form} onSubmit={sendEmail}>
            <Box className={classes.inputbox}>
              <input
                type="text"
                name="name"
                className={classes.input}
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {name.length > 0 && name.length < 3 && (
                <Box className={classes.massage}>
                  Name must have minimum three characters
                </Box>
              )}
            </Box>
            <Box className={classes.inputbox}>
              <input
                type="email"
                className={classes.input}
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {email.length > 0 && !email.includes("@") && (
                <Box className={classes.massage}>Please enter valid email</Box>
              )}
            </Box>
            <Box className={classes.inputbox}>
              <input
                type="text"
                className={classes.input}
                placeholder="Telephone"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {phone.length > 0 && phone.length < 12 && (
                <Box className={classes.massage}>Please enter valid number</Box>
              )}
            </Box>
            <Box className={classes.msginput}>
              {" "}
              <input
                type="text"
                placeholder="Message"
                name="massage"
                className={classes.msg}
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
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
