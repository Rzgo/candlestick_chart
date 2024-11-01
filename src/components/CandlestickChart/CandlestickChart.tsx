import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { getKlinesInfo } from '../../shared/api/endpoints'
import { KlineIndex } from '../../shared/api/types'
import Select from 'react-select'
import { SYMBOL, candlestickChartOptions, selectOptions } from './constants'
import { ISelectOption } from './types'

import styles from './styles.module.css'

export const CandlestickChart: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentData, setCurrentData] = useState<ApexAxisChartSeries>([])
  const [interval, setInterval] = useState<ISelectOption>(selectOptions[5])

  useEffect(() => {
    const fetchCandleData = async () => {
      setLoading(true)

      const payload = { symbol: SYMBOL, interval: interval.value }

      await getKlinesInfo(payload)
        .then((res) => {
          const preparedData = res.data.map((item: any) => ({
            x: new Date(item[KlineIndex.OpenTime]),
            y: [
              parseFloat(item[KlineIndex.Open]),
              parseFloat(item[KlineIndex.High]),
              parseFloat(item[KlineIndex.Low]),
              parseFloat(item[KlineIndex.Close]),
            ],
          }))

          setCurrentData([{ data: preparedData }])
        })
        .catch((err) => console.error('Error fetching candle data:', err))
        .finally(() => setLoading(false))
    }

    fetchCandleData()
  }, [interval])

  const handleChange = (selectedOption: ISelectOption | null) => {
    selectedOption && setInterval(selectedOption)
  }

  return (
    <div className={styles.root}>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.wrapper}>
          <Select
            className={styles.select}
            defaultValue={interval}
            onChange={handleChange}
            options={selectOptions}
          />
          <ReactApexChart
            options={candlestickChartOptions}
            series={currentData}
            type="candlestick"
            height={350}
          />
        </div>
      )}
    </div>
  )
}
