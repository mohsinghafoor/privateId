import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DecenterlizedFullHeight from "./webfullheight";
import DecenterlizedPad from "./tabfullheight";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function DecenterlizedFull() {
  const classes = useStyles();
  const theme = useTheme();
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      {
        /* {isMobile ? (
        <DecenterlizedMobile />
      ) : */ isPad ? <DecenterlizedPad /> : <DecenterlizedFullHeight />
      }
    </div>
  );
}
