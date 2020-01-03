import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Fade, Button, Paper } from "@material-ui/core";
import { client } from "../../../infrastructure/api/base/client";
import { tableIcons } from "../../common/tableIcons/tableIcons";
import Days from "../../../../shared-js/enums/Days";
import IMealForUserDto from "../../../models/general/IMealForUserDto";
import { toast } from "react-toastify";

const userMealsApiUrl = "/api/UserMeals/";
const updateMealApiUrl = "/api/Meals";

interface Props {
  username: string;
}
const EditUserMeals: React.FC<Props> = ({ username }) => {
  const [meals, setMeals] = useState<IMealForUserDto[]>(() => {
    const days = Object.values(Days).filter(
      value => typeof value === "string"
    ) as string[];
    return days.map(x => {
      return { day: x as Days } as IMealForUserDto;
    });
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function loadMeals() {
      setIsLoading(true);
      const response = await client.get<IMealForUserDto[]>(
        userMealsApiUrl + username
      );
      if (response.data.length !== 0) {
        setMeals(response.data);
      }

      setIsLoading(false);
    })();
  }, [username]);

  async function handleRowUpdate(meal: any) {
    const currentMeal = meals.find(x => x.day !== meal.day);
    if (currentMeal) {
      const newMeal: IMealForUserDto = {
        userId: currentMeal.userId,
        day: meal.day,
        breakfastMealName: meal.breakfastMealName,
        breakfastMealId: meal.breakfastMealId,
        lunchMealName: meal.lunchMealName,
        lunchMealId: meal.lunchMealId,
        dinnerMealName: meal.dinnerMealName,
        dinnerMealId: meal.dinnerMealId
      };
      let newMeals = meals.filter(x => x.day !== meal.day);
      newMeals.push(newMeal);

      setMeals(newMeals);
    }
  }

  async function submit() {
    setIsLoading(true);
    var mealsToAdd = [...meals];
    mealsToAdd.forEach(element => {
      element.username = username;
    });
    for (let i = 0; i < mealsToAdd.length; i++) {
      await client.post(updateMealApiUrl, mealsToAdd[i]);
    }
    setIsLoading(false);
  }
  return (
    <Fade in={true}>
      <Paper style={{ margin: "30px auto 0 auto", boxShadow: "none" }}>
        <MaterialTable
          style={{ backgroundColor: "black" }}
          title="Modyfikuj posiłki"
          columns={[
            { title: "Dzień", field: "day", editable: "never" },
            { title: "Śniadanie", field: "breakfastMealName" },
            { title: "Obiad", field: "lunchMealName" },
            { title: "Kolacja", field: "dinnerMealName" }
          ]}
          data={meals}
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
              color: "#303f9f"
            },
            pageSize: 7,
            pageSizeOptions: [7]
          }}
          isLoading={isLoading}
        />
        <Button
          onClick={submit}
          variant="contained"
          color="primary"
          style={{ marginTop: 20, marginLeft: "30%", width: "40%" }}
        >
          Zapisz
        </Button>
      </Paper>
    </Fade>
  );
};

export default EditUserMeals;
