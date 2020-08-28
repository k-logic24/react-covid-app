import React from 'react'
import {useSelector} from 'react-redux'

import {selectData} from '@/store/reducer/covidGlobalSlice'
import CovidGlobal from '@/components/template/covid_global'

const Global = () => {
  const data = useSelector(selectData)
  const selectDatas = [
    {
      name: `感染者`,
      class: `infected`,
      data: data.confirmed.value
    },
    {
      name: `回復者`,
      class: `recovered`,
      data: data.recovered.value
    },
    {
      name: `死亡者`,
      class: `deaths`,
      data: data.deaths.value
    }
  ]
  
  return (
    <>
      <CovidGlobal selectDatas={selectDatas}/>
    </>
  )
}

export default Global
