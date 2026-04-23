import { Component, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryList } from '../../components/country-list/country-list';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPageComponent {
  private countryService = inject(CountryService);
  region = signal('Americas');

  countryResource = rxResource({
    params: this.region,
    stream: ({ params }: { params: string }) => {
      if (!params) return of([]);
      return this.countryService.searchByRegion(params);
    },
  });
}
