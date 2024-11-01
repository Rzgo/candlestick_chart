import axios, { AxiosResponse } from 'axios'
import { IGetKlinesRequest, IGetKlinesResponse } from './types'

const url = 'https://api.binance.com/api/v3/klines'

export const getKlinesInfo = async (
  payload: IGetKlinesRequest
): Promise<AxiosResponse<IGetKlinesResponse>> => {
  const { symbol, interval } = payload

  return axios.get(url, {
    params: {
      symbol,
      interval,
      limit: 100,
    },
  })
}
