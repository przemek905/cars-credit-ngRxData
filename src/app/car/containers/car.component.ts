import { Component, OnInit } from '@angular/core';
import { CarEntityService } from '../store/services/car-entity.service';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars$: Observable<Car[]>;
  
  constructor(private carEntityService: CarEntityService) {
    this.cars$ = carEntityService.entities$;
  }
  
  ngOnInit() {
    this.carEntityService.getAll();
  }
  
}
