import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/search-component/search-component';
import { CountryService } from '../../services/country.service';
import { CountryList } from '../../components/country-list/country-list';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent,CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPageComponent {
  
  countryService = inject(CountryService);
  pais = signal('');

  countryResource = rxResource({
    params: this.pais,
    stream: ({ params }: { params: string }) => {
      if (!params) return of([]);
      return this.countryService.searchByPais(params);
    },
  });
}
