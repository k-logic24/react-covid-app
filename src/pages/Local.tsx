import React from 'react'
import {useSelector} from 'react-redux'

import CovidLocal from '@/components/template/covid_local'
import {selectDaily} from '@/store/reducer/covidLocalSlide'

const Local: React.FC = () => {
  const daily = useSelector(selectDaily)
  const dailyDatas = [
    {
      name: `感染者`,
      class: `infected`,
      data: daily[daily.length - 1].Confirmed
    },
    {
      name: `回復者`,
      class: `recovered`,
      data: daily[daily.length - 1].Recovered
    },
    {
      name: `死亡者`,
      class: `deaths`,
      data: daily[daily.length - 1].Deaths
    }
  ]

  return (
    <>
      <CovidLocal dailyDatas={dailyDatas}/>
    </>
  )
}

export default Local
