import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Car } from '../intefaces/car.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  http = inject(HttpClient);
  baseUrl = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

  constructor() {}

  getCars() {
    return this.http.get<Car[]>(this.baseUrl + 'cars');
  }
}
