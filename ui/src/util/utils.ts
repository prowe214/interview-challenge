import { IRow } from './../Types/Types';

/**
 * Utility function for turning 'camelCase' to 'Title Case'
 * 
 * @param str string
 */
export function toTitleCase(str: string) {
    const result = str.replace( /([A-Z])/g, " $1" );
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

    return finalResult;
}

/**
 * Utility function for sorting data by hourOfDay property
 * 
 * @param arr array of objects of type IRow
 */
export function sortByHour(arr: IRow[]) {
    return arr.sort( (a, b) => {
        return a.hourOfDay - b.hourOfDay;
    })
}

