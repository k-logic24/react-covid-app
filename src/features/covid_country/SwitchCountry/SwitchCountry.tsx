import React from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import {countries} from '../../../utils/variables'
import {useDispatch} from 'react-redux'
import {fetchAsyncGetDaily} from '../covidCountrySlide'

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}))

const SwitchCountry: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => dispatch(fetchAsyncGetDaily(event.target.value))
        }>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default SwitchCountry
