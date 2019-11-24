import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Car } from '../../models/car';

@Injectable()
export class CarEntityService  extends EntityCollectionServiceBase<Car> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Car', serviceElementsFactory);
      }
}