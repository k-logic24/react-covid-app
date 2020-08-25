import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {Grid} from "@material-ui/core";

import Cards from '../Cards/Cards'
import Chart from '../Chart/Chart'
import PieChart from '../PieChart/PieChart'
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import styles from "./DashBoard.module.css";
import {fetchAsyncGetDaily} from "../covidCountrySlide";

const DashBoard: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncGetDaily(`japan`))
  }, [dispatch])

  return (
    <>
      <div className={styles.container}>
        <SwitchCountry />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Cards />
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

export default DashBoard
