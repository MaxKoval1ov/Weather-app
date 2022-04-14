import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  concatMap,
  from,
  fromEvent,
  interval,
  map,
  Subscription,
  toArray,
} from 'rxjs';

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
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private lss: LocalStorageService,
    private weatherService: WeaterService,
    private imageService: ImageService
  ) {
    this.cities = this.lss.getItem('cities');
  }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.keyCode === 27 && this.modal) {
  //     this.modal = false;
  //   }
  // }

  modal = false;

  shouldReload = false;

  cities: string[] = [];

  citiesInfo!: WeatherCardInfo[];

  private subscription = Subscription.EMPTY;

  private intervalSub = Subscription.EMPTY;

  private keySub = Subscription.EMPTY;

  // cities$ = interval(2000).pipe(
  //   map(() => this.lss.getItem('cities')),
  //   concatMap((val) =>
  //     from(val).pipe(
  //       concatMap((city) =>
  //         this.weatherService
  //           .getWeatherInfo(city)
  //           .pipe(
  //             concatMap((info) =>
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

  handleEscape = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    map((event) => {
      if (event.key == 'Escape' && this.modal == true) this.modal = false;
    })
  );

  cities$ = new BehaviorSubject<string[]>([]).pipe(
    map(() => this.lss.getItem('cities')),
    concatMap((val: string[]) =>
      from(val).pipe(
        concatMap((name: string) =>
          this.weatherService
            .getWeatherInfo(name)
            .pipe(map((value) => ({ info: value, image: developerImage })))
        ),
        toArray()
      )
    )
  );

  citiesInerval$ = interval(2000).pipe(
    map(() => this.lss.getItem('cities')),
    concatMap((val: string[]) =>
      from(val).pipe(
        concatMap((name: string) =>
          this.weatherService
            .getWeatherInfo(name)
            .pipe(map((value) => ({ info: value, image: developerImage })))
        ),
        toArray()
      )
    )
  );

  ngOnInit(): void {
    this.reSub();
    this.keySub = this.handleEscape.subscribe();
    this.shouldReload = this.lss.getLoadingState();
    console.log(this.shouldReload);
    if (this.shouldReload) this.startReloading();
    else this.lss.setLoadingFalse();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.keySub.unsubscribe();
  }

  reSub(): void {
    this.subscription.unsubscribe();
    this.subscription = this.cities$.subscribe((val) => {
      console.log(val);
      this.citiesInfo = val;
    });
  }

  addCity(name: string): void {
    console.log('Add city');
    this.cities = [...this.cities, name];
    this.lss.setItem('cities', this.cities);
    this.reSub();
  }

  deleteCity(name: string): void {
    console.log('Delete city');
    this.cities = this.cities.filter((el) => el != name);
    this.lss.setItem('cities', this.cities);
    this.reSub();
  }

  stopReloading() {
    this.shouldReload = false;
    this.lss.setLoadingFalse();
    this.intervalSub.unsubscribe();
  }

  startReloading() {
    this.shouldReload = true;
    this.lss.setLoadignTrue();
    this.intervalSub = this.citiesInerval$.subscribe((val) => {
      console.log(val);
    });
  }
}
