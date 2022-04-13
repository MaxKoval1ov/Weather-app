import { Component, HostListener, OnInit } from '@angular/core';
import { filter, forkJoin, from, map, mergeMap, reduce, switchMap, toArray } from 'rxjs';
import { WeatherCardInfo } from './models/card.model';
import { ImageService } from './services/image.service';

import { LocalStorageService } from './services/local-storage.service';
import { WeaterService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private lss: LocalStorageService,
    private weatherService: WeaterService,
    private imageService: ImageService
  ) {}

  modal = false;

  cities: string[] = [];

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27 && this.modal) {
      this.modal = false;
    }
  }

  cities$ = from(this.lss.getItem('cities')).pipe(
    mergeMap((city) =>
      this.weatherService
        .getWeatherInfo(city)
        .pipe(
          mergeMap((info) =>
            this.imageService
              .getImageUrl(city)
              .pipe(map((image) => ({ info, image })))
          )
        )
    ),
    toArray()
  );

  ngOnInit(): void {
    this.cities = this.lss.getItem('cities');
  }

  addCity(name: string): void {
    this.cities.push(name);
    this.lss.setItem('cities', this.cities);
  }
}
