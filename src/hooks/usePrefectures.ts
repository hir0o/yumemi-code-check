import { useEffect, useState } from 'react'
import { fetchPrefectures } from '../lib/fetchPrefectures'

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])

  useEffect(() => {
    fetchPrefectures()
      .then((res) => {
        setPrefectures(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return prefectures
}
