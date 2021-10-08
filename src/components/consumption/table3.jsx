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

function createData(description, request) {
  return { description, request };
}

const rows = [
  createData("Enhanced Customer Profile Merge", "$0.25000"),
  createData("Augmented Customer Profile Merge", "$0.45000"),
];

const useStyles = makeStyles({
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

export default function Table3() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.headingbox}>
        <Box className={classes.heading}>VOICEMERGE</Box>
      </Box>
      <Table className={classes.table} aria-label="customized table">
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
