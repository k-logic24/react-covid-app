import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Grid} from '@material-ui/core'

import {fetchAsyncGet, fetchAsyncGetDaily} from '@/store/reducer/covidGlobalSlice'
import SwitchCountry from '@/components/organisms/covid_global/SwitchCountry/SwitchCountry'
import Chart from '@/components/organisms/covid_global/Chart/Chart'
import PieChart from '@/components/organisms/covid_global/PieChart/PieChart'
import Cards from '@/components/molecules/Cards'

type Props = {
  name: string
  class: string
  data: number
}[]

const CovidGlobal: React.FC<{selectDatas: Props}> = ({selectDatas}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncGet())
    dispatch(fetchAsyncGetDaily())
  }, [dispatch])
  
  return (
    <>
      <div className='container'>
        <SwitchCountry />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={1} justify='center'>
            {selectDatas
              ? selectDatas.map((item) => <Cards key={item.name} item={item}/>)
              : null
            }
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Chart />
        </Grid>
        <Grid item xs={12} md={5}>
          <PieChart />
        </Grid>
      </Grid>
    </>
  )
}

export default CovidGlobal
