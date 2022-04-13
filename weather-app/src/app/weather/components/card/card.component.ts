import { Component, Input } from '@angular/core';
import { WeatherCardInfo } from 'src/app/models/card.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class WeatherCard {
  isLiked = false;

  @Input()
    item!: WeatherCardInfo;

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }
}
