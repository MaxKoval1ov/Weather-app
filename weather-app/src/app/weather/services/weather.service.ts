import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeaterService {
  private weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=134ca763a5090357312f8fce79a87ab2&units=metric';

  constructor(private http: HttpClient) {}
}
