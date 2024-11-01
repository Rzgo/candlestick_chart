import { ApexOptions } from 'apexcharts'

export const SYMBOL = 'BTCUSDT'

export const candlestickChartOptions: ApexOptions = {
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
}

export const selectOptions = [
  { value: '1m', label: '1 min' },
  { value: '3m', label: '3 min' },
  { value: '5m', label: '5 min' },
  { value: '15m', label: '15 min' },
  { value: '30m', label: '30 min' },
  { value: '1h', label: '1 hour' },
  { value: '2h', label: '2 hour' },
  { value: '4h', label: '4 hour' },
  { value: '6h', label: '6 hour' },
  { value: '8h', label: '8 hour' },
  { value: '12h', label: '12 hour' },
  { value: '1d', label: '1 day' },
]
