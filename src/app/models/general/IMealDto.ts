import IProductForMealDto from "./IProductForMealDto";

export default interface IMealDto {
    name: string,
    products: IProductForMealDto[],
    kcal: number,
}
