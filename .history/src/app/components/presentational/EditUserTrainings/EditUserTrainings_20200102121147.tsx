import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Fade, Button, Paper } from "@material-ui/core";
import { client } from "../../../infrastructure/api/base/client";
import { tableIcons } from "../../common/tableIcons/tableIcons";
import Days from "../../../../shared-js/enums/Days";
import ITrainingDto from "../../../models/general/ITrainingDto";
import { toast } from "react-toastify";

const userTrainingsApiUrl = "/api/Trainings/";
const updateTrainingApiUrl = "/api/Trainings";

interface Props {
  username: string;
}
const EditUserTrainings: React.FC<Props> = ({ username }) => {
  const [trainings, setTrainings] = useState<ITrainingDto[]>(() => {
    const days = Object.values(Days).filter(
      value => typeof value === "string"
    ) as string[];
    return days.map(x => {
      return { day: x as Days } as ITrainingDto;
    });
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function loadTrainings() {
      setIsLoading(true);
      const response = await client.get<ITrainingDto[]>(
        userTrainingsApiUrl + username
      );
      if (response.data.length !== 0) {
        setTrainings(response.data);
      }

      setIsLoading(false);
    })();
  }, [username]);

  async function handleRowUpdate(training: any) {
    const newTraining: ITrainingDto = {
      day: training.day,
      repeats: parseInt(training.repeats),
      series: parseInt(training.series),
      name: training.name
    };
    let newTrainings = trainings.filter(x => x.day !== training.day);
    newTrainings.push(newTraining);

    setTrainings(newTrainings);
  }

  async function submit() {
    for (let i = 0; i < trainings.length; i++) {
      const element = trainings[i];
      if (!element.name || !element.repeats || !element.series) {
        toast.error("Please fill missing fields");
        return;
      }
    }
    setIsLoading(true);
    var trainingsToAdd = [...trainings];
    trainingsToAdd.forEach(element => {
      element.username = username;
    });
    for (let i = 0; i < trainingsToAdd.length; i++) {
      await client.post(updateTrainingApiUrl, trainingsToAdd[i]);
    }
    setIsLoading(false);
  }
  return (
    <Fade in={true}>
      <Paper style={{ margin: "30px auto 0 auto", boxShadow: "none" }}>
        <MaterialTable
          style={{ backgroundColor: "black" }}
          title="Modyfikuj treningi"
          columns={[
            { title: "Dzień", field: "day", editable: "never" },
            { title: "Trening", field: "name" },
            { title: "Powtórzenia", field: "repeats", type: "numeric" },
            { title: "Serie", field: "series", type: "numeric" }
          ]}
          data={trainings}
          icons={tableIcons}
          editable={{
            onRowUpdate: handleRowUpdate
          }}
          localization={{
            header: {
              actions: ""
            }
          }}
          options={{
            headerStyle: {
              backgroundColor: "black",
              color: "#c51162"
            },
            pageSize: 7,
            pageSizeOptions: [7]
          }}
          isLoading={isLoading}
        />
        <Button
          onClick={submit}
          variant="contained"
          color="secondary"
          style={{ marginTop: 20, marginLeft: "30%", width: "40%" }}
        >
          Zapisz
        </Button>
      </Paper>
    </Fade>
  );
};

export default EditUserTrainings;
