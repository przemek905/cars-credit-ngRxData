import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './containers/car.component';
import { CarEntityService } from './store/services/car-entity.service';
import { CarDataService } from './store/services/car-data.service';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { entityConfig } from './store/entity-metadata';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: "http://localhost:8081",
//   timeout: 3000, // request timeout
// }

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  providers: [
    CarEntityService,
    CarDataService,
    // { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class CarModule {
  constructor(private eds: EntityDefinitionService, 
    private entityDataService: EntityDataService,
    private carDataService: CarDataService
    ) {
      eds.registerMetadataMap(entityConfig);
      entityDataService.registerService('Car', carDataService);
    }
 }
