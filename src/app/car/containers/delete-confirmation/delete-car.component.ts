import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../models/car';
import { CarEntityService } from '../../store/services/car-entity.service';
import { AlertService } from 'src/app/commons/alerts';

@Component({
    selector: 'delete-car',
    templateUrl: './delete-car.component.html'
})
export class DeleteCarComponent {

    car: Car;

    constructor(private dialogRef: MatDialogRef<DeleteCarComponent>,
        @Inject(MAT_DIALOG_DATA) data, 
        private carEntityService: CarEntityService,
        private alertService: AlertService) {
        this.car = data.car;
    }


    deleteCar() {
        this.carEntityService.delete(this.car.number)
        .subscribe(
            result => {
                console.log("Car success delete with ID: ", result);
                this.dialogRef.close();
            },
            error => {
                this.alertService.error("Error on delete");
                console.log("ERROR while delte car: ", error);
            }
        )
        
    }

    close() {
        this.dialogRef.close();
    }

}