import React from 'react'
import CountUp from 'react-countup'
import {Card, CardContent, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import {GiHastyGrave} from 'react-icons/gi'
import {MdLocalHospital} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

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

type Props = {
  item: {
    name: string
    class: string
    data: number
  }
}

const Cards: React.FC<Props> = ({item}) => {
  const classes = useStyles()
  const isInfected = item.class === `infected`
  const isRecovered = item.class === `recovered`
  const isDeaths = item.class === `deaths`

  return (
    <Grid item xs={12} md={3} component={Card} className={item.class}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          { isInfected && <MdLocalHospital className={classes.icon}/> }
          { isRecovered && <AiFillLike className={classes.icon}/> }
          { isDeaths && <GiHastyGrave className={classes.icon}/> }
          {item.name}
        </Typography>
        <Typography variant='h5'>
          <CountUp
            start={0}
            end={item.data}
            duration={1.5}
            separator=','
          />
          <span className={classes.unit}>人</span>
        </Typography>
      </CardContent>
    </Grid>
  )
}

export default Cards
