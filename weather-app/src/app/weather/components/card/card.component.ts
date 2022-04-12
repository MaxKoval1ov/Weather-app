import { Component, Input } from '@angular/core';
import { WeatherInfo } from 'src/app/models/weather.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class WeatherCard {
  isLiked = false;

  @Input()
    item!: WeatherInfo;

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }
}
