import { Component } from '@angular/core';
import { SearchComponent } from "../../../shared/components/search-component/search-component";
import { TableComponent } from "../../../shared/components/table-component/table-component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchComponent, TableComponent],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent { 
  onSearch(value:string){
    console.log(value);
    
  }
  
}
