import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import FooterFields from "./upper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#777777",
    paddingTop: 30,
  },
  main: {
    maxWidth: 1280,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 1000,
    height: 63,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 16px */

    textAlign: "center",

    color: "#FFFFFF",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <FooterFields />
      <div className={classes.root}>
        <Box className={classes.main}>
          <Box className={classes.text}>
            © 2021 Private Identity LLC All Rights Reserved. Private ID and
            Private Identity are registered trademarks of Private Identity LLC.
            All other trademarks, service marks, trade names, trade dress,
            product names and logos appearing on this site are the property of
            their respective owners.
          </Box>
        </Box>
      </div>
    </div>
  );
}
