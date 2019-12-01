import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlertComponent } from './alert.component';
import { AlertsEffect } from './alerts.effects';
import { alertsReducer } from './alerts.reducer';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('alerts', alertsReducer),
        EffectsModule.forFeature([AlertsEffect])
    ],
    declarations: [AlertComponent],
    exports: [AlertComponent],
})
export class AlertModule { }