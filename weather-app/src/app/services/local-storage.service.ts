import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  getCities(): string[] {
    return this.getItem('cities');
  }

  getLoadingState() {
    return this.getItem('isLoading');
  }

  setLoadignTrue():void {
    this.setItem('isLoading', true);
  }

  setLoadingFalse() {
    this.setItem('isLoading', false);
  }
}
