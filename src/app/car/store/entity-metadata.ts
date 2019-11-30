import { EntityMetadataMap } from '@ngrx/data';
import { Car } from '../models/car';

const entityMetadata: EntityMetadataMap = {
    Car: {
      selectId: (car: Car) => car.number,
      entityDispatcherOptions: {
        optimisticDelete: false
      }
    }
  };
   
  // const pluralNames = { Hero: 'cars' };
   
  export const entityConfig = {
    entityMetadata,
    // pluralNames
  };