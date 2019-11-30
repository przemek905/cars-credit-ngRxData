import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Car } from '../../models/car';
import { CarEntityService } from '../../store/services/car-entity.service';

@Component({
    selector: 'delete-car',
    templateUrl: './delete-car.component.html'
})
export class DeleteCarComponent {

    car: Car;

    constructor(private dialogRef: MatDialogRef<DeleteCarComponent>,
        @Inject(MAT_DIALOG_DATA) data, 
        private carEntityService: CarEntityService) {
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
                console.log("ERROR while delte car: ", error);
            }
        )
        
    }

    close() {
        this.dialogRef.close();
    }

}