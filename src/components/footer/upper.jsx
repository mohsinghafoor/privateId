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
    // height: 260,
    // minHeight: 300,
  },
  main: {
    maxWidth: 1380,
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
  },
  dflex: {
    display: "flex",
    alignItems: "center",
    height: 15,
  },
  bulletPoint: {
    backgroundColor: "#545454",
    width: "8px",
    height: "8px",
    borderRadius: 20,
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
  },
  text: {
    maxWidth: 314,
    height: 162,
    textAlign: "left",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 10,
    lineHeight: "18px",
    /* or 18px */

    color: "#FFFFFF",
  },
  container: {
    padding: 60,
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
            </Box>
          </Grid>

          <Grid item md={4}>
            <Box className={classes.parent}>
              <Box className={classes.title}>SUPPORT</Box>
              <Box ml={6}>
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
            </Box>
          </Grid>

          <Grid item md={4}>
            <Box className={classes.parent}>
              <Box className={classes.title}>SMALL PRINT</Box>
              <Box mt={2} ml={1} className={classes.text}>
                © 2021 Private Identity LLC All Rights Reserved. Private ID and
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
