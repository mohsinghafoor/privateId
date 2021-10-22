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
    backgroundColor: "#FFFFFF",
    // color: "black",
    fontSize: 12,

    fontFamily: "Axiforma",
    fontWeight: 600,
    backgroundColor: theme.palette.action.hover,
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
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#CBCBCB",
    },
  },
}))(TableRow);

function createData(description, request) {
  return { description, request };
}

const rows = [
  createData("Enhanced Amazon Connect® Customer Profile Merge", "$0.20"),
  createData("Augmented Amazon Connect® Customer Profile Merge", "$0.35"),
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 5,
  },
  table: {
    width: 548,
    background: "white",
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
    [theme.breakpoints.only("md")]: {
      width: 435,
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  heading: {
    width: 410,
    height: 14,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */

    color: "#FFFFFF",
    [theme.breakpoints.only("md")]: {
      width: 410,
      fontSize: 14,
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
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
  },

  row: {
    width: 250,
    [theme.breakpoints.only("md")]: {
      width: 420,
      height: 20,
    },
    [theme.breakpoints.only("xs")]: {
      width: 80,
    },
  },
  row1: {
    width: 250,
    paddingLeft: 100,
    [theme.breakpoints.only("md")]: {
      paddingLeft: 70,
      height: 20,
    },
    [theme.breakpoints.only("xs")]: {
      width: 20,
      paddingLeft: 0,
    },
  },
}));

export default function Table2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.headingbox}>
        <Box className={classes.heading}>
          CUSTOMER PROFILE MERGE FOR AMAZON CONNECT®
        </Box>
      </Box>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left" className={classes.row}>
                {row.description}
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.row1}>
                {row.request}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
