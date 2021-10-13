import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DecenterlizedPad from "./tab";
import DecenterlizedWeb from "./web";
import ExemptTab from "./tab";
import ExemptWeb from "./web";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Exempt() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {isMobile ? <ExemptTab /> : <ExemptWeb />}
    </div>
  );
}
