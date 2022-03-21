import { Chart as ChartJS, registerables } from 'chart.js'
import { memo, VFC } from 'react'
import { Line } from 'react-chartjs-2'
import { usePopurationDataset } from '../hooks/usePopurationDataset'

ChartJS.register(...registerables)

type Props = {
  selectPrefecture: Prefecture[]
}

const Chart: VFC<Props> = ({ selectPrefecture }) => {
  const datasets = usePopurationDataset(selectPrefecture)

  return (
    <Line
      data={{
        labels: [
          '1960年',
          '1965年',
          '1970年',
          '1975年',
          '1980年',
          '1985年',
          '1990年',
          '1995年',
          '2000年',
          '2005年',
          '2010年',
          '2015年',
          '2020年',
          '2025年',
          '2030年',
          '2035年',
          '2040年',
        ],
        datasets,
      }}
    />
  )
}

export default memo(Chart)
