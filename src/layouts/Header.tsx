import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography} from "@material-ui/core"
import {useSelector} from "react-redux"
import {selectData} from "../features/covid/covidSlice"
import {makeStyles} from "@material-ui/core/styles"

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
  const classes = useStyles()
  const data = useSelector(selectData)

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography className={classes.title}>
          Covid-19 Live<br />
          <span className={classes.subtitle}>
            -{data && new Date(data.lastUpdate).toDateString()}
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
