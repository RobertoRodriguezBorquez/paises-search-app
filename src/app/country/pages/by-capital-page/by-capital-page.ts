import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/search-component/search-component';
import { rxResource } from '@angular/core/rxjs-interop';

import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';
import { CountryList } from '../../components/country-list/country-list';
import { Country } from '../../interfaces/country.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, SearchInputComponent],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    params: this.query,
    stream: ({ params }: { params: string }) => {
      if (!params) return of([]);
      return this.countryService.searchByCapital(params);
    },
  });
}

//Peticiones http modo antiguo con subscribe

// isLoading = signal(false);
// isError = signal<string | null>(null);
// countries = signal<Country[]>([]);

// onSearch(query: string) {
//   if (this.isLoading()) return;
//   this.isLoading.set(true);
//   this.isError.set(null);

//   this.countryService.searchByCapital(query).subscribe({
//     next: (countries) => {
//       this.isLoading.set(false);
//       this.countries.set(countries);
//     },
//     error: (err) => {
//       this.isLoading.set(false);
//       this.countries.set([]);
//       this.isError.set(`No se encontro ninguna capital con el nombre: ${query}. `);
//     },
//   });
// }
