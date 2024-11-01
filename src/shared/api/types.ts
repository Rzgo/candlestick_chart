export interface IGetKlinesRequest {
  symbol: string
  interval: string
}

export enum KlineIndex {
  OpenTime = 0,
  Open = 1,
  High = 2,
  Low = 3,
  Close = 4,
  Volume = 5,
  CloseTime = 6,
  QuoteAssetVolume = 7,
  NumberOfTrades = 8,
  TakerBuyBaseAssetVolume = 9,
  TakerBuyQuoteAssetVolume = 10,
  Ignore = 11,
}

type OpenTime = number
type Open = string
type High = string
type Low = string
type Close = string
type Volume = string
type CloseTime = number
type QuoteAssetVolume = string
type NumberOfTrades = number
type TakerBuyBaseAssetVolume = string
type TakerBuyQuoteAssetVolume = string
type Ignore = string

type IKlinesRow = [
  OpenTime,
  Open,
  High,
  Low,
  Close,
  Volume,
  CloseTime,
  QuoteAssetVolume,
  NumberOfTrades,
  TakerBuyBaseAssetVolume,
  TakerBuyQuoteAssetVolume,
  Ignore
]

export type IGetKlinesResponse = IKlinesRow[]
