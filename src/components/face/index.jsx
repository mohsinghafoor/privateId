import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DecenterlizedPad from "./tab";
import DecenterlizedWeb from "./web";
import FaceTab from "./tab";
import FaceWeb from "./web";
import FaceIpad from "./ipad";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Face() {
  const classes = useStyles();
  const theme = useTheme();
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>{isMobile ? <FaceTab /> : <FaceWeb />}</div>
  );
}
