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
    color: "black",
    fontSize: 14,
    fontFamily: "Axiforma",
    fontWeight: 300,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 37,
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(tier, description, request) {
  return { tier, description, request };
}

const rows = [
  createData(1, "Up to 1M Requests / Month", "$0.00100"),
  createData(2, "1M to 10M Requests / Month", "$0.00080"),
  createData(3, "10M to 100M Requests / Month", "$0.00060"),
  createData(4, "Greater than 100M Requests / Month", "$0.00040"),
  createData(5, "Metadata Storage /  Month", "$0.00010"),
];

const useStyles = makeStyles({
  root: {
    marginRight: 20,
  },
  table: {
    width: 432,
    background: "white",
  },
  headingbox: {
    width: 432,
    height: 47,
    background: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  heading: {
    width: 165,
    height: 14,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "131.5%",
    /* or 18px */

    color: "#FFFFFF",
  },
  row: {
    height: 37,
  },
});

export default function Table1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.headingbox}>
        <Box className={classes.heading}>FACE AND VOICE AUTH</Box>
      </Box>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.row}>
            <StyledTableCell>Tier</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} className={classes.row}>
              <StyledTableCell component="th" scope="row">
                {row.tier}
              </StyledTableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left">{row.request}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
