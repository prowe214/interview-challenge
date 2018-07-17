export interface IRow {
    adGroupId: string,
    adGroupName: string,
    adNetworkType: string,
    avgCpc: number,
    avgPosition: number,
    campaignName: string,
    campaignStatus: string,
    clicks: number,
    conversions: number,
    cost: number,
    ctr: number,
    customerId: string,
    date: string,
    dayOfWeek: string,
    device: string,
    hourOfDay: number,
    impressions: number,
    maxImpressions: number,
    searchImpressionShare: number,
}

export interface IState {
    colsData: IColumns[],
    isLoaded: boolean,
    rowsData: IRow[],
}

export interface IColumns {
    data: any[],
    name: string,
}
