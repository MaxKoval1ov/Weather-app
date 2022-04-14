import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherCardInfo } from 'src/app/models/card.model';
import {
  faSun,
  faCloudShowersWater,
  faCloud,
  faSnowboarding,
  faDroplet,
  faTemperature0,
  faArrowUp,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class WeatherCard implements OnInit {
  //icons
  icon = faSun;

  droplet = faDroplet;

  temp = faTemperature0;

  preassure = faArrowUp;

  xmark = faXmark;
  //icons

  item!: WeatherCardInfo;

  ngOnInit(): void {}

  @Output() deleteEvent = new EventEmitter<string>();

  handleDelete(name: string) {
    this.deleteEvent.emit(name);
  }

  @Input()
  set cardState(value: WeatherCardInfo) {
    this.item = value;
    console.log(value.info.weather[0]);
    switch (value.info.weather[0].main) {
      case 'Clear':
        {
          this.icon = faSun;
        }
        break;
      case 'Rain':
        {
          this.icon = faCloudShowersWater;
        }
        break;
      case 'Snow':
        {
          this.icon = faSnowboarding;
        }
        break;
      case 'Clouds':
        {
          this.icon = faCloud;
        }
        break;
    }
  }
}
