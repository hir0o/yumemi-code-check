import { Chart as ChartJS, registerables } from 'chart.js'
import { VFC } from 'react'
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
        datasets,
      }}
      options={{
        plugins: {
          legend: {
            position: 'right',
            align: 'start',
            labels: {
              padding: 10,
              font: {
                size: 12,
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: '年度',
              align: 'end',
              font: {
                size: 20,
              },
            },
            grid: {
              display: false,
            },
            labels: Array.from({ length: 18 }, (_, i) => i * 5 + 1960).map(
              (year) => `${year}年`
            ),
          },
          y: {
            title: {
              display: true,
              text: '人口数',
              align: 'end',
              font: {
                size: 20,
              },
            },
            grid: {
              display: false,
            },
            ticks: {
              display: true,
            },
            suggestedMin: 100000,
            suggestedMax: 600000,
          },
        },
      }}
    />
  )
}

export default Chart
