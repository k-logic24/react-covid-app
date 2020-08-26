import React from 'react'
import CountUp from "react-countup"
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

import {GiHastyGrave} from 'react-icons/gi'
import {MdLocalHospital} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

import {useSelector} from "react-redux"
import {selectDaily} from "../covidCountrySlide"
import styles from "../../covid/Cards/Cards.module.css"

const useStyles = makeStyles(() => ({
  icon: {
    verticalAlign: `text-top`,
    marginRight: `0.2em`
  },
  unit: {
    fontSize: `0.8rem`,
    marginLeft: `0.1em`
  }
}))

const Cards: React.FC = () => {
  const daily = useSelector(selectDaily)
  const classes = useStyles()

  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={3} component={Card} className={styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital className={classes.icon}/>
              感染者
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Confirmed}
                duration={1.5}
                separator=","
              />
              <span className={classes.unit}>人</span>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <AiFillLike className={classes.icon}/>
              回復者
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Recovered}
                duration={1.5}
                separator=","
              />
              <span className={classes.unit}>人</span>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <GiHastyGrave className={classes.icon}/>
              死亡者
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Deaths}
                duration={1.5}
                separator=","
              />
              <span className={classes.unit}>人</span>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
