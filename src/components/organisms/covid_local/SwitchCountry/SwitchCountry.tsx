import React from 'react'
import {useDispatch} from 'react-redux'
import {NativeSelect, FormControl} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import {fetchAsyncGetDaily} from '@/store/reducer/covidLocalSlide'
import {countries} from '@/utils/variables'

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
        {countries.map(({en, ja}, index) => (
          <option key={index} value={en}>
            {ja}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default SwitchCountry
