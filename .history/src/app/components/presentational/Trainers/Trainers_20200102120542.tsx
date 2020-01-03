import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  MenuItem,
  Button,
  Grid,
  Fade,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import styles from "./Trainers.module.scss";
import IGetTrainersDto from "../../../models/trainer/IUserDto";
import { client } from "../../../infrastructure/api/base/client";
import { toast } from "react-toastify";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    height: "100%",
    margin: "auto auto",
    padding: 15
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "70%",
    marginBottom: 20
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Trainers: React.FC = () => {
  const classes = useStyles();
  const [trainers, setTrainers] = useState<IGetTrainersDto[]>([]);
  const [selected, setSelected] = useState<number>();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelected(event.target.value as any);
  };

  useEffect(() => {
    (async function getTrainers() {
      var _trainers = await client.get<IGetTrainersDto[]>("api/trainer");
      setTrainers(_trainers.data);
    })();
    (async function getAssigned() {
      var trainer = await client.get("api/AssignedTrainer");
      if (trainer.data.result) {
        setSelected(trainer.data.result.id.toString().toUpperCase() as any);
      }
    })();
  }, []);

  async function signToTrainer() {
    if (selected) {
      var response = await client.post("api/AssignedTrainer", {
        trainerId: selected
      });
      if (response.status === 200) {
        toast.success("Pomyślnie zalogowałeś się na konto trenera");
      }
    }
  }

  return (
    <div className={classes.root}>
      <Fade in={true}>
        <Container maxWidth="md" className={styles.container}>
          <Paper className={styles.smartCenter}>
            <FormControl
              className={classes.formControl}
              style={{ marginLeft: "12%" }}
            >
              <InputLabel id="demo-simple-select-label">
                {trainers.length !== 0
                  ? "Proszę wybrać trenera"
                  : "Brak dostępnych trenerów"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selected ? selected : ""}
                onChange={handleChange}
                fullWidth={true}
                disabled={trainers.length === 0}
              >
                {trainers &&
                  trainers.map(x => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.firstName} {x.lastName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Grid item xs={12} className={styles.loginButtonContainer}>
              <Button
                variant="contained"
                color="secondary"
                className={styles.loginButton}
                type="submit"
                onClick={signToTrainer}
              >
                Zapisz się do trenera
              </Button>
            </Grid>
          </Paper>
        </Container>
      </Fade>
    </div>
  );
};

export default Trainers;
