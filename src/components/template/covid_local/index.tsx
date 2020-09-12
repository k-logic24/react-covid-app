import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Grid} from '@material-ui/core'

import {fetchAsyncGetDaily} from '@/store/reducer/covidLocalSlide'
import SwitchCountry from '@/components/organisms/covid_local/SwitchCountry/SwitchCountry'
import Cards from '@/components/molecules/Cards'
import Chart from '@/components/organisms/covid_local/Chart/Chart'
import PieChart from '@/components/organisms/covid_local/PieChart/PieChart'

type Props = {
  name: string
  class: string
  data: number
}[]

const CovidLocal: React.FC<{dailyDatas: Props}> = ({dailyDatas}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncGetDaily(`japan`))
  }, [dispatch])

  return (
    <>
      <div className='container'>
        <SwitchCountry />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Chart />
        </Grid>
        <Grid item xs={12} md={5}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={1} justify='center'>
            {dailyDatas
              ? dailyDatas.map(item => <Cards key={item.name} item={item}/>)
              : null
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CovidLocal
