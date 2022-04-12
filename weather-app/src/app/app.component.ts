import { Component, HostListener, OnInit } from '@angular/core';

import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private lss: LocalStorageService) {}

  title = 'weather-app';

  modal = true;

  cities: string[] = [];

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27 && this.modal) {
      this.modal = false;
    }
  }

  ngOnInit(): void {
    this.cities = this.lss.getItem('cities');
  }

  addCity(name: string): void {
    this.cities.push(name);
    this.lss.setItem('cities', this.cities);
  }
}
