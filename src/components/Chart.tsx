import { Chart as ChartJS, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useEffect, useState, VFC } from 'react'
import { usePrevious } from '../hooks/usePrevious'
import { fechPopuration } from '../lib/fetchPopuration'

type Props = {
  selectPrefecture: Prefecture[]
}

type Dataset = {
  label: string
  data: Popuration['value'][]
  backgroundColor: string
}

ChartJS.register(...registerables)

const Chart: VFC<Props> = ({ selectPrefecture }) => {
  const prevSelectPrefectures = usePrevious(selectPrefecture)
  const [datasets, setDatasets] = useState<Dataset[]>([])

  useEffect(() => {
    if (!prevSelectPrefectures) return
    const setArray = new Set([...prevSelectPrefectures, ...selectPrefecture])

    const newSelectPrefecture = [...setArray].find(
      (prefecture) => !prevSelectPrefectures.includes(prefecture)
    )
    const deleteSelectPrefecture = [...setArray].find(
      (prefecture) => !selectPrefecture.includes(prefecture)
    )

    if (newSelectPrefecture) {
      fechPopuration(newSelectPrefecture.prefCode)
        .then((res) => {
          setDatasets((prev) => [
            ...prev,
            {
              label: newSelectPrefecture.prefName,
              data: res.map((pop) => pop.value),
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215 // FFFFFF(16)
              ).toString(16)}`,
            },
          ])
        })
        .catch((err) => {
          console.error(err)
        })
    } else if (deleteSelectPrefecture) {
      setDatasets((prev) =>
        prev.filter((pref) => pref.label !== deleteSelectPrefecture.prefName)
      )
    }
  }, [selectPrefecture, prevSelectPrefectures])

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

export default Chart
