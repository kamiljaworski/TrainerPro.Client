import IProductForMealDto from "./IProductForMealDto";
import Days from "../../../shared-js/enums/Days";

export default interface IMealDto {
    name: string,
    day: Days,
    products: IProductForMealDto[],
    kcal?: number,
}
