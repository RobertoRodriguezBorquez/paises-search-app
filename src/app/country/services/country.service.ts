import { HttpClient } from '@angular/common/http';
import { Injectable , inject} from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { map, Observable } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';



const URL_API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital (query: string): Observable<Country[]>{
    query = query.toLowerCase();
    return this.http.get<RESTCountry [] >(`${URL_API}/capital/${query}`).pipe(
      map( CountryMapper.mapRestCountryArrayToCountryArray ))
    
  }




 }
