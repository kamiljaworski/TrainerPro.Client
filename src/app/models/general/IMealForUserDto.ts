import Days from "../../../shared-js/enums/Days";

export default interface IMealForUserDto {
   userId: string,
   day: Days,
   breakfastMealName: string,
   breakfastMealId: string,
   lunchMealName: string,
   lunchMealId: string,
   dinnerMealName: string,
   dinnerMealId: string,
   username?: string
}
