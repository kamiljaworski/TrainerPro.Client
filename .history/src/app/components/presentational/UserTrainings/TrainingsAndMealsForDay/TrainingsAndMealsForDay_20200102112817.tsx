import {
  Paper,
  Fade,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TrainingsAndMealsForDayProps from "./TrainingsAndMealsForDayProps";
import TrainingsForDay from "./TrainingsForDay/TrainingsForDay";
import ITrainingDto from "../../../../models/general/ITrainingDto";
import {
  getUserTrainingsForDay,
  getUserMealsForDay
} from "../../../../services/generalService";
import MealsForDay from "./MealsForDay/MealsForDay";
import IMealDto from "../../../../models/general/IMealDto";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

const TrainingsAndMealsForDay: React.FC<TrainingsAndMealsForDayProps> = ({
  day,
  isExpandedTrainings,
  setIsExpandedTrainings,
  isExpandedMeals,
  setIsExpandedMeals
}) => {
  const [trainings, setTrainings] = useState<ITrainingDto[]>([]);
  const [meals, setMeals] = useState<IMealDto[]>([]);
  const classes = useStyles();

  useEffect(() => {
    (async function load() {
      const trainings = await getUserTrainingsForDay(1, day);
      const meals = await getUserMealsForDay(1, day);
      setTrainings(trainings.data);
      setMeals(meals.data);
    })();
  }, [day]);

  return (
    <Fade in={true} timeout={500}>
      <Paper square style={{ width: "100%" }}>
        <div className={classes.root}>
          <ExpansionPanel expanded={isExpandedTrainings}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              onClick={() => setIsExpandedTrainings(!isExpandedTrainings)}
            >
              <Typography className={classes.heading}>Treningi</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TrainingsForDay trainings={trainings} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={isExpandedMeals}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              onClick={() => setIsExpandedMeals(!isExpandedMeals)}
            >
              <Typography className={classes.heading}>Posiłki</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <MealsForDay meals={meals} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Paper>
    </Fade>
  );
};

export default TrainingsAndMealsForDay;
