import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import MealsForDayProps from "./MealsForDayProps";

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

const MealsForDay: React.FC<MealsForDayProps> = ({ meals }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Posiłek</TableCell>
            <TableCell align="right">Kcal</TableCell>
            <TableCell align="right">Producty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meals.map(meal => (
            <React.Fragment key={meal.name}>
              <TableRow>
                <TableCell component="th" scope="row">
                  {" "}
                  {meal.name}
                </TableCell>
                <TableCell align="right">{meal.kcal}</TableCell>
                <TableCell align="right">
                  <div>
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      color="secondary"
                      variant="outlined"
                      onClick={handleClick}
                    >
                      Pokaż
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {meal.products &&
                        meal.products.map(product => (
                          <MenuItem key={product.name} onClick={handleClose}>
                            {product.name} {product.weight}g
                          </MenuItem>
                        ))}
                    </Menu>
                  </div>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MealsForDay;
