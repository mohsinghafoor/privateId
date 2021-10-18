import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DecenterlizedPad from "./tab";
import DecenterlizedWeb from "./web";
import VoiceAuthenticationTab from "./tab";
import VoiceAuthenticationWeb from "./web";
import VoiceAuthenticationIpad from "./ipad";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function VoiceAuthentication() {
  const classes = useStyles();
  const theme = useTheme();
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {isMobile ? (
        <VoiceAuthenticationTab />
      ) : isPad ? (
        <VoiceAuthenticationIpad />
      ) : (
        <VoiceAuthenticationWeb />
      )}
    </div>
  );
}
