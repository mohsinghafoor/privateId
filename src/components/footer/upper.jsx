import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#656565",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",

    // minHeight: 300,
  },
  main: {
    maxWidth: 1920,
  },
  parent: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    maxWidth: 144,
    height: 24,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "131.5%",
    /* identical to box height, or 24px */
    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      maxWidth: 200,
      fontSize: 30,
      height: 40,
    },
  },
  dflex: {
    display: "flex",
    alignItems: "center",
    height: 15,
    [theme.breakpoints.up("xl")]: {
      height: 25,
    },
  },
  bulletPoint: {
    backgroundColor: "#545454",
    width: "8px",
    height: "8px",
    borderRadius: 20,
    [theme.breakpoints.up("xl")]: {
      width: "12px",
      height: "12px",
    },
  },
  service: {
    // width: 200,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */

    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 20,
    },
  },
  text: {
    maxWidth: 314,
    height: 72,
    textAlign: "left",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 10,
    lineHeight: "18px",
    /* or 18px */

    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 18,
      maxWidth: 450,
      lineHeight: "22px",
      paddingLeft: 10,
    },
  },
  container: {
    padding: "40px 50px",
    [theme.breakpoints.up("xl")]: {
      padding: "40px 0px",
    },
  },
}));

export default function FooterFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container className={classes.main}>
          <Grid item md={4}>
            <Box className={classes.parent}>
              <Box className={classes.title}>COMPANY</Box>
              <Box ml={5}>
                <a
                  style={{ textDecoration: "none" }}
                  href=" https://github.com/openinfer/PrivateIdentity/wiki"
                  target="_blank"
                >
                  {" "}
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint} />
                    <Box className={classes.service} ml={1}>
                      About Us
                    </Box>
                  </Box>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/openinfer/PrivateIdentity/wiki/Privacy-Policy"
                  target="_blank"
                >
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint}></Box>
                    <Box className={classes.service} ml={1}>
                      Privacy Policy
                    </Box>
                  </Box>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/openinfer/PrivateIdentity/wiki/Terms-of-Use"
                  target="_blank"
                >
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint}></Box>
                    <Box className={classes.service} ml={1}>
                      Terms of Use
                    </Box>
                  </Box>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/openinfer/PrivateIdentity/wiki/Intellectual-Property"
                  target="_blank"
                >
                  {" "}
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint}></Box>
                    <Box className={classes.service} ml={1}>
                      Intellectual Property
                    </Box>
                  </Box>
                </a>

                <Box className={classes.dflex} mt={2}>
                  <Box className={classes.bulletPoint}></Box>
                  <Box className={classes.service} ml={1}>
                    sales@private.id
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4}>
            <Box className={classes.parent}>
              <Box className={classes.title}>SUPPORT</Box>
              <Box ml={6}>
                <a style={{ textDecoration: "none" }} href="#" target="_blank">
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint} />
                    <Box className={classes.service} ml={1}>
                      npm install
                    </Box>
                  </Box>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/openinfer/PrivateIdentity/issues"
                  target="_blank"
                >
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint}></Box>
                    <Box className={classes.service} ml={1}>
                      Issue Tracker
                    </Box>
                  </Box>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://stackoverflow.com/questions/tagged/privateid?tab=Newest"
                  target="_blank"
                >
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint}></Box>
                    <Box className={classes.service} ml={1}>
                      Stack Overflow
                    </Box>
                  </Box>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new"
                  target="_blank"
                >
                  {" "}
                  <Box className={classes.dflex} mt={2}>
                    <Box className={classes.bulletPoint}></Box>
                    <Box className={classes.service} ml={1}>
                      support@private.id
                    </Box>
                  </Box>
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4}>
            <Box className={classes.parent}>
              <Box className={classes.title}>SMALL PRINT</Box>
              <Box mt={2} ml={1} className={classes.text}>
                ?? 2021 Private Identity LLC All Rights Reserved. Private ID and
                Private Identity are registered trademarks of Private Identity.
                All other trademarks, service marks, trade names, trade dress,
                product names and logos are the property of their respective
                owners.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
