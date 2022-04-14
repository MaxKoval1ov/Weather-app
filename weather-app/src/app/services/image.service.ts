import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IImage } from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  // https://api.unsplash.com/photos/random?orientation=landscape&query=${this.theme}&client_id=${key}
  private apiKey = '0u1ob4yEYnpvNQTzvT6fq7FTHH6u_k8c8bA2PyS_72c';

  constructor(private http: HttpClient) {}

  getImageUrl(name: string): Observable<IImage> {
    return this.http.get<IImage>(
      `https://api.unsplash.com/photos/random?orientation=landscape&query=${name}&client_id=${this.apiKey}`
    );
  }
}
