import { Component, Input, OnInit } from '@angular/core';
import { WeatherCardInfo } from 'src/app/models/card.model';
import {
  faSun,
  faCloudShowersWater,
  faCloud,
  faSnowboarding,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class WeatherCard implements OnInit {
  icon = faSun;

  item!: WeatherCardInfo;

  ngOnInit(): void {}

  isLiked = false;

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
      default: {
      }
    }
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }
}
