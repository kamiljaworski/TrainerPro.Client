import Days from "../../shared-js/enums/Days";
import Axios from "axios";
import ITrainingDto from "../models/general/ITrainingDto";
import IMealDto from "../models/general/IMealDto";

export const getUserTrainingsForDay = async (userId: number, day: Days) => {
    return await Axios.get<ITrainingDto[]>("/data/UserTrainingsForDay.json");
}

export const getUserMealsForDay = async (userId: number, day: Days) => {
    return await Axios.get<IMealDto[]>("/data/UserMealsForDay.json");
}