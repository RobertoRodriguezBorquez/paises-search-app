import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../../shared/core/top-menu-component/top-menu-component";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './CountryLayout.html',
})
export class CountryLayoutComponent { }
