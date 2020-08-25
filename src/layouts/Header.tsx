import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {AppBar, Toolbar, Typography} from "@material-ui/core"

import {makeStyles} from "@material-ui/core/styles"

import {useSelector} from "react-redux"
import {selectData} from "../features/covid/covidSlice"
import {selectDaily} from "../features/covid_country/covidCountrySlide";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  subtitle: {
    fontSize: `12px`
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
    <AppBar position="absolute">
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
          <Link to={"/"} className={classes.link}>
            DashBoard
          </Link>
          <Link to={"/country"} className={classes.link}>
            Country
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header