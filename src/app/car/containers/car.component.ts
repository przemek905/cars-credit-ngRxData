import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/commons/default-dialog-config';
import { Car } from '../models/car';
import { CarEntityService } from '../store/services/car-entity.service';
import { DeleteCarComponent } from './delete-confirmation/delete-car.component';
import { AlertService } from 'src/app/commons/alerts';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars$: Observable<Car[]>;
  
  constructor(private carEntityService: CarEntityService,
    private dialog: MatDialog,
    private alertService: AlertService) {
    this.cars$ = carEntityService.entities$;
  }
  
  ngOnInit() {
    this.carEntityService.getAll();
  }

  deleteCar(car: Car) {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {"car": car};
    this.dialog.open(DeleteCarComponent, dialogConfig).afterClosed().subscribe(
      () => this.alertService.success("Delete success")
    );
  }
  
}
