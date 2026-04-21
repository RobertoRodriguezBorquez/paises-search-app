import { RESTCountry } from './../interfaces/rest-countries.interfaces';
import { Country } from '../interfaces/country.interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capital,
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagsSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion,
    };
  }
  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map( resp=> CountryMapper.mapRestCountryToCountry(resp));
  }
}
