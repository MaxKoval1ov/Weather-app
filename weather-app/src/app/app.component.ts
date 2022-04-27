import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, concatMap, from, fromEvent, interval, map, Observable, Subscription, toArray } from 'rxjs';

import { WeatherCardInfo } from './models/card.model';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private lss: LocalStorageService,
    private weatherService: WeaterService,
    private cdr: ChangeDetectorRef
  ) {
    this.cities = this.lss.getItem('cities');
    if (this.cities == null) {
      this.lss.setItem('cities', []);
      this.cities = [];
    }

    this.shouldReload = this.lss.getLoadingState();
    if (this.shouldReload) this.startReloading();
    else this.lss.setLoadingFalse();

    this.newNameSub = new BehaviorSubject<string[]>(this.cities);

    this.cities$ = this.newNameSub.pipe(
      concatMap((val: string[]) =>
        from(val).pipe(
          concatMap((name: string) =>
            this.weatherService.getWeatherInfo(name).pipe(
              map((value) => {
                console.log(value);
                return { info: value, image: developerImage };
              })
            )
          ),
          toArray()
        )
      )
    );

    this.citiesInterva$ = interval(3000).pipe(
      map(() => {
        this.newNameSub.next(this.cities);
      })
    );

    console.log(this.cities);
  }

  modal = false;

  shouldReload = false;

  cities: string[] = [];

  citiesInfo!: WeatherCardInfo[];

  private subscription = Subscription.EMPTY;

  private intervalSub = Subscription.EMPTY;

  private keySub = Subscription.EMPTY;

  cities$ = new Observable<any>();

  newNameSub: BehaviorSubject<string[]>;

  citiesInterva$ = new Observable<any>();


  handleEscape = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    map((event) => {
      if (event.key == 'Escape' && this.modal == true) this.modal = false;
    })
  );

  ngOnInit(): void {
    this.keySub = this.handleEscape.subscribe();
    this.newNameSub.next(this.cities);
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
      this.cdr.detectChanges();
    });
  }

  addCity(name: string): void {
    console.log(name, 'added');
    this.cities = [...this.cities, name];
    this.lss.setItem('cities', this.cities);
    this.newNameSub.next(this.cities);
  }

  deleteCity(name: string): void {
    this.cities = this.cities.filter((el) => el != name);
    this.lss.setItem('cities', this.cities);
    this.newNameSub.next(this.cities);
  }

  stopReloading() {
    this.shouldReload = false;
    this.lss.setLoadingFalse();
    this.intervalSub.unsubscribe();
  }

  startReloading() {
    this.shouldReload = true;
    this.lss.setLoadignTrue();
    this.intervalSub = this.citiesInterva$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }
}
