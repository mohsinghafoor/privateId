import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, Box } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",

    background: "#656565",
  },
  heading: {
    width: 120,
    height: 29,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "133%",
    color: "white",
    /* or 29px */
    [theme.breakpoints.down("xs")]: {
      width: 100,
      fontSize: 14,
    },
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // justifyContent: "center",
  },

  details: {
    height: 39,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 10,
    lineHeight: "13px",
    textAlign: "left",
    color: "#FFFFFF",
    marginTop: -20,
    [theme.breakpoints.down("xs")]: {
      width: 330,
      height: 50,
      fontSize: 10,
    },
  },
  // parent: {
  //   width: 150,
  // },
  expandedPanel: {
    color: "#BLAck",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "#656565",
    },
  },

  accordian: {
    background: "#656565",
  },
  icon: {
    width: 23,
    height: 23,
    marginTop: -10,
    color: "white",
    float: "left",
  },
  dflex: {
    display: "flex",
    alignItems: "center",
    height: 15,
  },
  bulletPoint: {
    backgroundColor: "#545454",
    width: "10px",
    height: "10px",
    borderRadius: 20,
  },
  service: {
    width: 200,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "131.5%",
    /* or 18px */
    textAlign: "left",
    color: "#FFFFFF",
  },
  detailsbox: {
    height: 130,
    marginTop: -30,
  },
}));

export default function FooterAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.parent}>
        <Accordion
          elevation={0}
          className={classes.accordian}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box className={classes.heading} pl={1}>
              COMPANY
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box ml={5} className={classes.detailsbox}>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint} />
                <Box className={classes.service} ml={1}>
                  About Us
                </Box>
              </Box>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint}></Box>
                <Box className={classes.service} ml={1}>
                  Privacy Policy
                </Box>
              </Box>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint}></Box>
                <Box className={classes.service} ml={1}>
                  Terms of Use
                </Box>
              </Box>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint}></Box>
                <Box className={classes.service} ml={1}>
                  Intellectual Property
                </Box>
              </Box>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint}></Box>
                <Box className={classes.service} ml={1}>
                  sales@private.id
                </Box>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          className={classes.accordian}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box className={classes.heading} pl={1}>
              SUPPORT
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box ml={6} className={classes.detailsbox}>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint} />
                <Box className={classes.service} ml={1}>
                  API Docs
                </Box>
              </Box>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint}></Box>
                <Box className={classes.service} ml={1}>
                  Issue Tracker
                </Box>
              </Box>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint}></Box>
                <Box className={classes.service} ml={1}>
                  Stack Overflow
                </Box>
              </Box>
              <Box className={classes.dflex} mt={2}>
                <Box className={classes.bulletPoint}></Box>
                <Box className={classes.service} ml={1}>
                  support@private.id
                </Box>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          className={classes.accordian}
          classes={{
            expanded: classes.expandedPanel,
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box className={classes.heading} pl={2}>
              SMALL PRINT
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.summary}>
            <Box className={classes.details} ml={3}>
              © 2021 Private Identity LLC All Rights Reserved. Private ID and
              Private Identity are registered trademarks of Private Identity.
              All other trademarks, service marks, trade names, trade dress,
              product names and logos are the property of their respective
              owners.
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
