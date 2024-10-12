import { Component, Input } from '@angular/core';
import { Car } from '../../data/intefaces/car.interface';
import { FavoriteIconComponent } from '../../../../public/assets/svg/favorite-icon/favorite-icon.component';
import { LineIconComponent } from '../../../../public/assets/svg/line-icon/line-icon.component';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [FavoriteIconComponent, LineIconComponent],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {
  @Input() car!: Car;

  // constructor() {
  //   const [, city, country] = this.car.address.split(', ');
  //   this.car = { ...this.car, city, country };
  // }
}
