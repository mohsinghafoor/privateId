import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DecenterlizedPad from "./tab";
import DecenterlizedWeb from "./web";
import ConsumptionTab from "./tab";
import ConsumptionWeb from "./web";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Consumption() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {isMobile ? <ConsumptionTab /> : <ConsumptionWeb />}
    </div>
  );
}
