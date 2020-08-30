import React from 'react'
import {Container, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    padding: '1rem 0',
    marginTop: '2rem'
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div>
      <Container className={classes.container}>
        <Typography>&copy; 2020 covid-live</Typography>
      </Container>
    </div>
  )
}

export default Footer
