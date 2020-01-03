import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import TrainingsForDayProps from "./TrainingsForDayProps";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    backgroundColor: "black"
  },
  table: {
    minWidth: 650
  }
});

const TrainingsForDay: React.FC<TrainingsForDayProps> = ({ trainings }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Treningi</TableCell>
            <TableCell align="right">Powtórzenia</TableCell>
            <TableCell align="right">Serie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trainings.map(training => (
            <TableRow key={training.name}>
              <TableCell component="th" scope="row">
                {" "}
                {training.name}
              </TableCell>
              <TableCell align="right">{training.repeats}</TableCell>
              <TableCell align="right">{training.series}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TrainingsForDay;
