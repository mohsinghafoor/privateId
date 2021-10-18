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
    width: 438,
    height: 230,
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
}));

export default function ConsumptionWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid
          item
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Table1 />
          <Table2 />
          <Box className={classes.btnbox}>
            <IconButton className={classes.btn}>
              Click here for details.
            </IconButton>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <img src={img} className={classes.img} alt="" />
        </Grid>
      </Grid>
    </div>
  );
}
