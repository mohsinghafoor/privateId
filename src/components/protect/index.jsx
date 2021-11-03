import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ProtectsPad from "./tab";
import ProtectsWeb from "./web";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Protects() {
  const classes = useStyles();
  const theme = useTheme();
  const isPad = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {isPad ? <ProtectsPad /> : <ProtectsWeb />}
    </div>
  );
}
