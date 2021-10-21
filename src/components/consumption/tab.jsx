import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton } from "@material-ui/core";
import Table1 from "./table1";
import Table2 from "./table2";
import img from "../../assets/tableimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    background: "#464646",
    [theme.breakpoints.up("lg")]: {
      height: 600,
    },
  },
  main: {
    maxWidth: 1280,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      height: 500,
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
    width: 252,
    height: 116,
    marginTop: 30,
    marginBottom: 40,
    [theme.breakpoints.only("xs")]: {
      width: 250,
      height: 120,
    },
  },
  btnbox: {
    width: 549,
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginTop: 10,
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
    marginBottom: 30,
  },
}));

export default function ConsumptionTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <img src={img} className={classes.img} alt="" />
        <Table1 />
        <Table2 />
        <Box className={classes.btnbox}>
          <IconButton className={classes.btn}>
            Click here for details.
          </IconButton>
        </Box>
      </div>
    </div>
  );
}
