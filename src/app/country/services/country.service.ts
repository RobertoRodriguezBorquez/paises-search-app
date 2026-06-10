import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const URL_API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCachePais = new Map<string, Country[]>();
   private queryCacheRegion = new Map<string, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if (this.queryCacheCapital.has(query)){
      return of (this.queryCacheCapital.get(query)?? []);
    }



   
    return this.http.get<RESTCountry[]>(`${URL_API}/capital/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((resp) => this.queryCacheCapital.set(query, resp)),
      catchError((err) => {
        return of([]);
      }),
    );
  }

  searchByRegion(region: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${URL_API}/region/${region}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((resp) => this.queryCacheRegion.set(region, resp)),

      catchError((err) => {
        return throwError(() => new Error('No se encontro datos con esa region'));
      }),
    );
  }

  searchByPais(pais: string): Observable<Country[]> {
    if (this.queryCachePais.has(pais)){
      return of (this.queryCachePais.get(pais)?? []);
    }

    return this.http.get<RESTCountry[]>(`${URL_API}/name/${pais}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((resp) => this.queryCachePais.set(pais, resp)),
      catchError((err) => {
        return of([]);
      }),
    );
  }

  searchPaisByInformacion(code: string) {
    return this.http.get<RESTCountry[]>(`${URL_API}/alpha/${code}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError((err) => {
        return throwError(() => new Error(`No se encontró información para el código: ${code}`));
      }),
    );
  }
}
