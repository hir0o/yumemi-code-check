import { styled } from '@linaria/react'
import { Dispatch, memo, SetStateAction, useCallback, VFC } from 'react'
import { usePrefectures } from '../hooks/usePrefectures'
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
  const prefectures = usePrefectures()

  const handleCheckboxChange = useCallback(
    (prefName: string, prefCode: number) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = e.target

        setSelectPrefecture((prev) => {
          if (checked) return [...prev, { prefName, prefCode }]
          return prev.filter((pref) => pref.prefCode !== Number(name))
        })
      },
    [setSelectPrefecture]
  )

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
