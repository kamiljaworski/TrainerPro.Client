import Days from "../../../shared-js/enums/Days";

export default interface ITrainingDto {
    name: string,
    repeats: number,
    series: number,
    day: Days
}