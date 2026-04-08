import { Component } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/search-component/search-component';


@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, ],
  templateUrl: './by-country-page.html',
})
export class ByCountryPageComponent { }
