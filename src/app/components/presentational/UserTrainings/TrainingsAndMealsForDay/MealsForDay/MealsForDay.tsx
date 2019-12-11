import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
import MealsForDayProps from './MealsForDayProps';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
        backgroundColor: 'black'
    },
    table: {
        minWidth: 650,
    },
});

const MealsForDay: React.FC<MealsForDayProps> = ({ meals }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Meal</TableCell>
                        <TableCell align="right">Kcal</TableCell>
                        <TableCell align="right">Products</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {meals.map(meal => (
                        <TableRow key={meal.name}>
                            <TableCell component="th" scope="row"> {meal.name}</TableCell>
                            <TableCell align="right">{meal.kcal}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default MealsForDay;