import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFound } from '../../../shared/components/not-found/not-found';

@Component({
  selector: 'app-country-page-component',
  imports: [DecimalPipe, NotFound],
  templateUrl: './countryPageComponent.html',

})
export class countryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code');
  countryService = inject(CountryService);

  countryResource = rxResource ({
    params: () => ({ code: this.countryCode}),
    stream: ({ params }) => {
      return this.countryService.searchPaisByInformacion(params.code!);
    }
  })

 }