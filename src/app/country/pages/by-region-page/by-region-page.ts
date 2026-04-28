import { Component, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryList } from '../../components/country-list/country-list';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { SearchInputComponent } from '../../../shared/components/search-component/search-component';

interface RegionMap {
  [key: string]: string[];
}

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPageComponent {
  private countryService = inject(CountryService);

  region = signal('');
  selectedRegion = signal<string | null>(null);
  subregions = signal<string[]>([]);

  readonly regionMap: RegionMap = {
    Africa: ['Northern Africa', 'Sub-Saharan Africa'],
    Americas: ['North America', 'Central America', 'South America', 'Caribbean'],
    Asia: ['Central Asia', 'Eastern Asia', 'Southern Asia', 'Southeastern Asia', 'Western Asia'],
    Europe: ['Northern Europe', 'Eastern Europe', 'Southern Europe', 'Western Europe'],
    Oceania: ['Australia and New Zealand', 'Melanesia', 'Micronesia', 'Polynesia'],
  };

  countryResource = rxResource({
    params: this.region,
    stream: ({ params }: { params: string }) => {
      if (!params) return of([]);
      // Assuming searchByRegion can also handle subregions if the API supports it.
      // If not, we might need a dedicated searchBySubregion method in CountryService.
      return this.countryService.searchByRegion(params);
    },
  });

  onRegionSelected(region: string | null) {
    this.selectedRegion.set(region);
    if (region && this.regionMap[region]) {
      this.subregions.set(this.regionMap[region]);
    } else {
      this.subregions.set([]);
    }
    this.region.set(region || ''); // When a region is selected, search by region
  }

  onSubregionSelected(subregion: string | null) {
    // When a subregion is selected, search by subregion directly
    this.region.set(subregion || '');
  }
}
