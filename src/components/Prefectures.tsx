import { styled } from '@linaria/react'
import { useEffect, useState, VFC } from 'react'
import { fetchPrefectures } from '../lib/fetchPrefectures'
import Checkbox from './Checkbox'

const StyledPrefectures = styled.div`
  .prefectures__list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 4px;
  }
`

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
    <StyledPrefectures>
      <h2>都道府県一覧</h2>
      <div className="prefectures__list">
        {prefectures.map(({ prefCode, prefName }) => (
          <Checkbox key={prefCode} title={prefName} name={String(prefCode)} />
        ))}
      </div>
    </StyledPrefectures>
  )
}

export default Prefectures
