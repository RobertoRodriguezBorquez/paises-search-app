import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-component.html',
})
export class SearchInputComponent {
  placeholder = input('Buscar ')
  value = output<string>();

  inputValue = signal<string>('');

  debounceEfect = effect ((onCleanup)=>{
    const value = this.inputValue();

    const timeout = setTimeout (()=>{
      this.value.emit(value)
    }, 300);

    onCleanup(()=>{ 
      clearTimeout(timeout)
    })




  })
}

