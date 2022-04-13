import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherInfo } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeaterService {
  // https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${api}&units=metric

  private apiKey = '134ca763a5090357312f8fce79a87ab2';

  constructor(private http: HttpClient) {}

  getWeatherInfo(city: string, lang = 'en'): Observable<WeatherInfo> {
    return this.http.get<WeatherInfo>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${this.apiKey}&units=metric`,
    );
  }
}
