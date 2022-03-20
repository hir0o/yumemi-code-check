import { useEffect, useState } from 'react'
import './App.css'
import Chart from './components/Chart'
import Prefectures from './components/Prefectures'

const App = () => {
  const [selectPrefecture, setSelectPrefecture] = useState<Prefecture[]>([])

  return (
    <div className="App">
      <Prefectures setSelectPrefecture={setSelectPrefecture} />
      <Chart selectPrefecture={selectPrefecture} />
    </div>
  )
}

export default App
