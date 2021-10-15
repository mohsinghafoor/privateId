import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import FooterFields from "./upper";
import FooterAccordion from "./accodian";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%" },
}));

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      {isMobile ? <FooterAccordion /> : <FooterFields />}
    </div>
  );
}
