import { Component } from '@angular/core';
import {  SearchInputComponent } from "../../../shared/components/search-component/search-component";
import { TableComponent } from "../../../shared/components/table-component/table-component";

@Component({
  selector: 'app-by-capital-page',
  imports: [ TableComponent, SearchInputComponent],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent { 
 
  
}
