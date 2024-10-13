import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Car } from '../intefaces/car.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  http = inject(HttpClient);
  baseUrl = 'https://65e86dfe4bb72f0a9c4f4ec6.mockapi.io/';

  constructor() {}

  getCars(page: number = 1, limit: number = 12) {
    const params = { page, limit };
    return this.http.get<Car[]>(this.baseUrl + 'cars', { params });
  }

  getCarsWithAddressParts(page: number = 1, limit: number = 12) {
    return this.getCars(page, limit).pipe(
      map((cars) => {
        return cars.map((car) => {
          const addressParts = car.address.split(', ');
          return {
            ...car,
            address: {
              street: addressParts[0],
              city: addressParts[1],
              country: addressParts[2],
            },
          };
        });
      })
    );
  }
}
