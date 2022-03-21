import { styled } from '@linaria/react'
import { Dispatch, memo, SetStateAction, useEffect, useState, VFC } from 'react'
import { fetchPrefectures } from '../lib/fetchPrefectures'
import Checkbox from './Checkbox'

type Props = {
  setSelectPrefecture: Dispatch<SetStateAction<Prefecture[]>>
}

const StyledPrefectures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  .prefectures__list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`

const Prefectures: VFC<Props> = ({ setSelectPrefecture }) => {
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

  const handleCheckboxChange =
    (prefName: string, prefCode: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked, name } = e.target

      setSelectPrefecture((prev) => {
        if (checked) return [...prev, { prefName, prefCode }]
        return prev.filter((pref) => pref.prefCode !== Number(name))
      })
    }

  return (
    <StyledPrefectures>
      <h2>都道府県一覧</h2>
      <div className="prefectures__list">
        {prefectures.map(({ prefCode, prefName }) => (
          <Checkbox
            key={prefCode}
            title={prefName}
            name={String(prefCode)}
            onChange={handleCheckboxChange(prefName, prefCode)}
          />
        ))}
      </div>
    </StyledPrefectures>
  )
}

export default memo(Prefectures)
