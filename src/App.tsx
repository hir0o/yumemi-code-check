import { styled } from '@linaria/react'
import { useState, VFC } from 'react'
import Chart from './components/Chart'
import Prefectures from './components/Prefectures'

const StyledApp = styled.div`
  --container-size: 1240px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-left: calc((100vw - var(--container-size)) / 2);
  padding-right: calc((100vw - var(--container-size)) / 2);
  padding-top: 32px;
  @media screen and (max-width: 1240px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`

const App: VFC = () => {
  const [selectPrefecture, setSelectPrefecture] = useState<Prefecture[]>([])

  return (
    <StyledApp>
      <Prefectures setSelectPrefecture={setSelectPrefecture} />
      <Chart selectPrefecture={selectPrefecture} />
    </StyledApp>
  )
}

export default App
