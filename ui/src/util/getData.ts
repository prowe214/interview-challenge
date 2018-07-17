const dataUrl = 'http://localhost:3001/data';

// interface IRow {
//     "adGroupId": string,
//     "dayOfWeek": string,
//     "device": string,
//     "hourOfDay": number,
//     "customerId": string,
//     "campaignName": string,
//     "adGroupName": string,
//     "adNetworkType": string,
//     "clicks": number,
//     "impressions": number,
//     "ctr": number,
//     "cost": number,
//     "avgCpc": number,
//     "avgPosition": number,
//     "searchImpressionShare": number,
//     "maxImpressions": number,
//     "campaignStatus": string,
//     "conversions": number,
//     "date": string
// }

export default function getData() {
    console.log('Requesting data from', dataUrl, '...');

    fetch(dataUrl)
        .then( res => res.json() )
        .then( data => console.log(data) )
        .catch( err => console.warn(err) )
}