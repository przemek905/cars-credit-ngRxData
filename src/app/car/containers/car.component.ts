import { Component, OnInit } from '@angular/core';
import { CarEntityService } from '../store/services/car-entity.service';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { MatDialog } from '@angular/material';
import { DeleteCarComponent } from './delete-confirmation/delete-car.component';
import { defaultDialogConfig } from 'src/app/commons/default-dialog-config';
import { debug } from 'util';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars$: Observable<Car[]>;
  
  constructor(private carEntityService: CarEntityService,
    private dialog: MatDialog) {
    this.cars$ = carEntityService.entities$;
  }
  
  ngOnInit() {
    this.carEntityService.getAll();
  }

  deleteCar(car: Car) {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {"car": car};
    this.dialog.open(DeleteCarComponent, dialogConfig);
  }
  
}
