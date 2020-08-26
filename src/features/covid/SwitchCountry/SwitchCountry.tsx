import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {NativeSelect, FormControl} from "@material-ui/core"
import {useDispatch} from "react-redux"

import {countries} from "../../../utils/variables"
import {fetchAsyncGetCountry} from "../covidSlice"

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
        <option value="">Worldwide</option>
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
