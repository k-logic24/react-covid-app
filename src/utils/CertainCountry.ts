import {countries} from './variables'

export default (en: string) => {
  const country = countries.filter(country => country.en === en)
  if (country.length) {
    return country[0].ja
  }
}
