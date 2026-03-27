import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent
 } from './shared/core/footer/footer';
import { TopMenuComponent } from "./shared/core/top-menu-component/top-menu-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TopMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('paises-search-app');
}
