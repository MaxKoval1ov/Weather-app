import {
  Component,
  HostListener,
  OnChanges,
  OnInit,
} from '@angular/core';
import { concatMap, from, interval, map, mergeMap, toArray } from 'rxjs';

import { WeatherCardInfo } from './models/card.model';
import { ImageService } from './services/image.service';
import { LocalStorageService } from './services/local-storage.service';
import { WeaterService } from './services/weather.service';

const developerImage = {
  urls: {
    small: 'assets/default.png',
    full: 'name',
    regular: '',
    raw: '',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  constructor(
    private lss: LocalStorageService,
    private weatherService: WeaterService,
    private imageService: ImageService,
  ) {
    this.cities = this.lss.getItem('cities');
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27 && this.modal) {
      this.modal = false;
    }
  }

  modal = false;

  cities: string[] = [];

  citiesInfo!: WeatherCardInfo[];

  // cities$ = interval(2000).pipe(
  //   mergeMap(() =>
  //     from(this.lss.getItem('cities')).pipe(
  //       mergeMap((city) =>
  //         this.weatherService
  //           .getWeatherInfo(city)
  //           .pipe(
  //             mergeMap((info) =>
  //               this.imageService
  //                 .getImageUrl(city)
  //                 .pipe(map((image) => ({ info, image })))
  //             )
  //           )
  //       ),
  //       toArray()
  //     )
  //   )
  // );

  cities$ = interval(2000).pipe(
    concatMap(() =>
      from(this.lss.getItem('cities')).pipe(
        concatMap((city) =>
          this.weatherService
            .getWeatherInfo(city)
            .pipe(map((val) => ({ info: val, image: developerImage })))
        ),
        toArray()
      )
    )
  );

  ngOnInit(): void {
    this.cities$.subscribe((val) => {
      console.log(val);
      this.citiesInfo = val;
    });
    console.log();
  }

  ngOnChanges() {
    console.log('Change heppened');
  }

  addCity(name: string): void {
    console.log('Add city');
    this.cities = [...this.cities, name];
    this.lss.setItem('cities', this.cities);
  }

  deleteCity(name: string): void {
    console.log('Delete city');
    this.cities = this.cities.filter((el) => el != name);
    this.lss.setItem('cities', this.cities);
  }
}
