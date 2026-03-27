import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'country-top-menu',
  imports: [RouterLinkActive, RouterLinkWithHref],
  styles:'./top-menu-component.css ',
  templateUrl: './top-menu-component.html',
})
export class TopMenuComponent { }
