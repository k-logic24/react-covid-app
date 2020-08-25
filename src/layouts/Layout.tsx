import React from 'react'
import {Container} from '@material-ui/core'
import {Route} from 'react-router-dom'

import Header from './Header'
import {makeStyles} from '@material-ui/core/styles'
import Home from '../pages/Home'

const useStyles = makeStyles(() => ({
  content: {
    marginTop: 85
  },
}))

const Layout: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.content}>
        <Route exact path='/' component={Home}></Route>
      </Container>
    </>
  )
}

export default Layout
