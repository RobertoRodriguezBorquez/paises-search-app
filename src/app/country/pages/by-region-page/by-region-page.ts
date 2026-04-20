import { Component } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPageComponent {
countries(): import("../../interfaces/rest-countries.interfaces").RESTCountry[] {
throw new Error('Method not implemented.');
}
}
