import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

import {useSelector} from 'react-redux'
import {selectData} from '../features/covid/covidSlice'
import {selectDaily} from '../features/covid_country/covidCountrySlide'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontWeight: `bold`,
    fontSize: `1.4rem`,
    lineHeight: 1
  },
  subtitle: {
    fontWeight: `normal`,
    fontSize: `.8rem`
  },
  link: {
    color: `#fff`,
    fontSize: `14px`,
    '&:first-of-type': {
      marginRight: `1em`
    }
  }
}))

const Header: React.FC = () => {
  const location = useLocation()
  const pathname = location.pathname
  const classes = useStyles()
  const data = useSelector(selectData)
  const daily = useSelector(selectDaily)

  return (
    <AppBar position={'absolute'}>
      <Toolbar>
        <Typography className={classes.title}>
          Covid-19 Live<br />
          <span className={classes.subtitle}>
            -{
            pathname === '/'
              ? data && new Date(data.lastUpdate).toDateString()
              : daily.length && new Date(daily[daily.length - 1].Date).toDateString()
          }
          </span>
        </Typography>
        <Typography>
          <Link to={'/'} className={classes.link}>
            概要一覧
          </Link>
          <Link to={'/country'} className={classes.link}>
            国別時系列
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
