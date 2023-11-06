export interface stock {
    stockCode: string
    stockName: string
    valueOwned: number
    sharesOwned: number
    price: number
    recommendation: string
    nationalExchange: string
    todaySChange: number
    owned: boolean
    buyPrice: number
    buyDate: string
}

export interface nationalExchange{
    name: string
    todaysgainLoss: number
    todaysGainLossPercentage: number
    currentValue: number
}

export interface myHoldings{
    sharesOwned: number
    ETFsOwned: number
    amountInvested: number
    averageAmountInvestedPerShare: number
    stocksOwnedInCode: Array<string>
    stocksOwnedInName: Array<string>
    TotalValueHistorical: Array<number>
    totalGainLossToday: number
}

export interface transaction{
    type: string
    buySellDividendValue: number
    buySellDividendStockCode: string
    buySellDividendStockName: string
}