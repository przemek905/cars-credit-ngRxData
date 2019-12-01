import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Alert, AlertType } from 'src/app/commons/alerts';
import { addAlert } from 'src/app/commons/alerts/alerts.actions';
import { AlertState } from 'src/app/commons/alerts/alerts.reducer';
import { defaultDialogConfig } from 'src/app/commons/default-dialog-config';
import { Car } from '../models/car';
import { CarEntityService } from '../store/services/car-entity.service';
import { DeleteCarComponent } from './delete-confirmation/delete-car.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars$: Observable<Car[]>;
  
  constructor(private carEntityService: CarEntityService,
    private dialog: MatDialog,
    private store: Store<AlertState>) {
    this.cars$ = carEntityService.entities$;
  }
  
  ngOnInit() {
    this.carEntityService.getAll();
  }

  deleteCar(car: Car) {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {"car": car};
    this.dialog.open(DeleteCarComponent, dialogConfig).afterClosed().subscribe(
      () => this.store.dispatch(addAlert({alert: new Alert({message: "Delete success", type: AlertType.Success})}))
    );
  }
  
}
