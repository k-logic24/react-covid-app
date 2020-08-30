import React from 'react'
import {Container} from '@material-ui/core'
import {Route} from 'react-router-dom'

import Header from './Header'
import {makeStyles} from '@material-ui/core/styles'
import Global from '@/pages/Global'
import Local from '@/pages/Local'
import Footer from '@/layouts/Footer'

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
        <Route exact path='/' component={Global}></Route>
        <Route exact path='/local' component={Local}></Route>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
