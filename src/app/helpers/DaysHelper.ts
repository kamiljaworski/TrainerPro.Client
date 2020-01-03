import Days from "../../shared-js/enums/Days";

export function dayToNumber(day: Days) {
    switch (day) {
        case Days.Monday:
            return 0;
        case Days.Tuesday:
            return 1;
        case Days.Wednesday:
            return 2;
        case Days.Thursday:
            return 3;
        case Days.Friday:
            return 4;
        case Days.Saturday:
            return 5;
        case Days.Sunday:
            return 6;
        default:
            break;
    }
}

export function numberToDay(number: number | undefined) {
    switch (number) {
        case 0:
            return Days.Monday;
        case 1:
            return Days.Tuesday;
        case 2:
            return Days.Wednesday;
        case 3:
            return Days.Thursday;
        case 4:
            return Days.Friday;
        case 5:
            return Days.Saturday;
        case 6:
            return  Days.Sunday;
        default:
            break;
    }
    return 0;
}