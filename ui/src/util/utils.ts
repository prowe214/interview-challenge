import { IRow } from './../Types/Types';

export function toTitleCase(str: string) {
    const result = str.replace( /([A-Z])/g, " $1" );
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

    return finalResult;
}

export function sortByHour(arr: IRow[]) {
    return arr.sort( (a, b) => {
        return a.hourOfDay - b.hourOfDay;
    })
}

