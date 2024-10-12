import { Component, inject } from '@angular/core';
import { CarService } from '../../data/services/car.service';
import { Car } from '../../data/intefaces/car.interface';
import { CarCardComponent } from '../../common-ui/car-card/car-card.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [CarCardComponent],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss',
})
export class CatalogPageComponent {
  carServise = inject(CarService);
  cars: Car[] = [];

  constructor() {
    this.carServise
      .getCars()
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        this.cars = data;

        console.log(data);
      });
  }
}
