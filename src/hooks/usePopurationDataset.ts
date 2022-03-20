import { useEffect, useState } from 'react'
import { fechPopuration } from '../lib/fetchPopuration'
import { usePrevious } from './usePrevious'

type Dataset = {
  label: string
  data: Popuration['value'][]
  backgroundColor: string
}

export const usePopurationDataset = (selectPrefecture: Prefecture[]) => {
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

  return datasets
}
