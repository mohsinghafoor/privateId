import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    // color: "black",
    fontSize: 12,
    fontFamily: "Axiforma",
    fontWeight: 600,
    backgroundColor: "#CBCBCB",
    [theme.breakpoints.up("xl")]: {
      fontSize: 20,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 10,
    },
  },
  body: {
    fontSize: 12,
    fontFamily: "Axiforma",
    fontWeight: 600,
    [theme.breakpoints.only("xs")]: {
      fontSize: 10,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 20,
    },
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 37,
    "&:nth-of-type(even)": {
      backgroundColor: "#CBCBCB",
    },
  },
}))(TableRow);

function createData(description, request) {
  return { description, request };
}

const rows = [
  createData("Metadata Storage /User /Month", "$0.001"),
  createData("Remote Onboarding / KYC", "$0.15"),
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 5,
  },
  table: {
    width: 548,
    background: "white",
    [theme.breakpoints.up("xl")]: {
      width: 700,
    },
    [theme.breakpoints.only("md")]: {
      width: 435,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  headingbox: {
    width: 548,
    height: 47,
    background: "#000000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    [theme.breakpoints.up("xl")]: {
      width: 700,
    },
    [theme.breakpoints.only("md")]: {
      width: 435,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  heading: {
    width: 265,
    height: 14,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */

    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 20,
      width: 340,
    },
    [theme.breakpoints.only("md")]: {
      width: 260,
      fontSize: 14,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      fontSize: 10,
    },
  },
  rate: {
    width: 280,
    height: 14,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */

    color: "#FFFFFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: 20,
    },
  },
  row: {
    height: 37,
  },
  request: {
    paddingLeft: 50,
    [theme.breakpoints.only("md")]: {
      paddingLeft: 0,
    },
  },
}));

export default function Table1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.headingbox}>
        <Box className={classes.heading}>FACE & VOICE AUTHENTICATION </Box>
      </Box>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.row}>
            <StyledTableCell align="left">Each Request</StyledTableCell>
            <StyledTableCell align="left">$0.001</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} className={classes.row}>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left">{row.request}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
