import Days from "../../../../../shared-js/enums/Days";


export default interface TrainingsAndMealsForDayProps {
    day: Days;
    isExpandedTrainings: boolean;
    setIsExpandedTrainings: (isExpanded: boolean) => void;
    isExpandedMeals: boolean;
    setIsExpandedMeals: (isExpanded: boolean) => void;
}