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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: 600,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  textbox: {
    // [theme.breakpoints.up("xl")]: {
    //   maxWidth: 500,
    // },
  },
  heading: {
    width: 201,
    height: 63,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "131.5%",
    /* identical to box height, or 53px */
    marginTop: 40,
    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      fontSize: 40,
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
      height: 33,
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
    [theme.breakpoints.only("sm")]: {
      fontSize: 24,
      height: 160,
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  img: {
    // position: "absolute",
    height: "20%",
    marginTop: "-28rem",
    // height: 144,
    [theme.breakpoints.only("sm")]: {
      height: 200,
      marginTop: "-38rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFFFFF",
    borderRadius: 14,
    width: "85%",
    height: 361,
    position: "absolute",
    [theme.breakpoints.only("sm")]: {
      height: 450,
      width: 450,
    },
  },
  inputbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    width: "95%",
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 50,
    },
  },
  msginput: {
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 110,
    },
  },
  input: {
    width: "90%",
    height: 47,
    outline: 0,
    background: "#FFFFFF",
    border: "1px solid #C9C9C9",
    boxSizing: "border - box",
    boxShadow: "0px 15px 9px -6px rgba(199, 199, 199, 0.25)",
    borderRadius: 8,
    fontFamily: "Axiforma",
    paddingLeft: 10,

    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: 33,
    },
  },

  msg: {
    width: "90%",
    height: 103,
    outline: 0,
    background: "#FFFFFF",
    border: "1px solid #C9C9C9",
    boxSizing: "border - box",
    fontFamily: "Axiforma",
    boxShadow: "0px 15px 9px -6px rgba(199, 199, 199, 0.25)",
    borderRadius: 8,
    paddingLeft: 10,

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
    [theme.breakpoints.only("sm")]: {
      width: 190,
      height: 47,
      fontSize: 22,
    },
  },

  massage: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 10,
  },
}));

export default function LetsTalkMobile() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzsah6a",
        "template_aqy5rrb",
        e.target,
        "user_ANsS2m1U6X5tLv44aTOIp"
      )
      .then((res) => {});

    // fetch("https://apidevel.private.id/trueid/v1.1/contact_us", {
    //   name: "Srie Raam",
    //   email_address: "adnan1naeem@gmail.com",
    //   phone_number: "+12066561175",
    //   message:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   api_key: "00000000000000001962",
    //  }).then(
    //   (result) => {
    //     alert(result);
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };
  return (
    <div className={classes.root}>
      <Box className={classes.textbox}>
        <Box className={classes.heading}>Let's Talk</Box>
        <Box className={classes.text}>Start a conversation.</Box>
      </Box>
      <Box className={classes.main}>
        <img src={img} className={classes.img} alt="" />

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
            <textarea
              type="text"
              placeholder="Message"
              name="message"
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
      </Box>
    </div>
  );
}
