import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherInfo } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeaterService {
  // https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${api}&units=metric

  apiKey = '134ca763a5090357312f8fce79a87ab2';

  private weatherURL =
    'https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=134ca763a5090357312f8fce79a87ab2&units=metric';

  constructor(private http: HttpClient) {}

  getWeatherInfo(city: string, lang = 'en'): Observable<WeatherInfo> {
    return this.http.get<WeatherInfo>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${this.apiKey}&units=metric`,
    );
  }
}
