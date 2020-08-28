import React from 'react'
import {useDispatch} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {NativeSelect, FormControl} from '@material-ui/core'

import {fetchAsyncGetCountry} from '@/store/reducer/covidGlobalSlice'
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
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => dispatch(fetchAsyncGetCountry(event.target.value))
        }>
        <option value=''>全世界</option>
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
