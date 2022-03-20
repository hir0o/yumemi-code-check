import { useEffect, useState, VFC } from 'react'
import { fetchPrefectures } from '../lib/fetchPrefectures'
import Checkbox from './Checkbox'

const Prefectures: VFC = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])

  useEffect(() => {
    fetchPrefectures()
      .then((res) => {
        setPrefectures(res.result)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="prefectures">
      <h2>都道府県一覧</h2>
      {prefectures.map(({ prefCode, prefName }) => (
        <Checkbox key={prefCode} title={prefName} name={String(prefCode)} />
      ))}
    </div>
  )
}

export default Prefectures
