import React from 'react'
import {Button, makeStyles, Typography, Grid, Paper} from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    background: `green`,
    padding: `3px 50px`,
  },
  typeStyle: {
    color: `blue`
  },
  paperStyle: {
    background: `orange`,
    height: `50px`
  }
})

const MaterialUI: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography
        className={classes.typeStyle}
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
      >
        Hello UI
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
      </Grid>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        TEST BUTTON
      </Button>
    </div>
  )
}

export default MaterialUI
