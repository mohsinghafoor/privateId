import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton } from "@material-ui/core";
import Table1 from "./table1";
import Table2 from "./table2";
import img from "../../assets/tableimglg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#464646",
  },
  main: {
    maxWidth: 1920,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: 550,
    },
  },
  heading: {
    width: 603,
    height: 76,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "131.5%",
    /* or 53px */

    color: "#FFFFFF",
  },
  img: {
    width: 400,
    height: 210,
    [theme.breakpoints.up("xl")]: {
      height: 300,
      width: 600,
    },
    [theme.breakpoints.only("md")]: {
      width: 375,
      height: 197,
    },
  },
  btnbox: {
    width: 548,
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
    [theme.breakpoints.only("md")]: {
      marginTop: 10,
      width: 438,
    },
  },
  btn: {
    width: 173,
    height: 42,
    background: "#383838",
    borderRadius: 0,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "120%",
    /* identical to box height, or 17px */

    color: "#FFFFFF",
  },
  leftgrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.only("md")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  rightgrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.only("md")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export default function ConsumptionWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item md={6} className={classes.leftgrid}>
          <Table1 />
          <Table2 />
          <Box className={classes.btnbox}>
            <a
              href="https://github.com/openinfer/PrivateIdentity/wiki/Private-ID-Pricing"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <IconButton className={classes.btn}>
                Click here for details.
              </IconButton>
            </a>
          </Box>
        </Grid>
        <Grid item md={6} className={classes.rightgrid}>
          <img src={img} className={classes.img} alt="" />
        </Grid>
      </Grid>
    </div>
  );
}
