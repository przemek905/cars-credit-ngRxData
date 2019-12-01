import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlertState } from './alerts.reducer';


export const selectAlertsState =
    createFeatureSelector<AlertState>("alerts");


export const alertsSelector = createSelector(
    selectAlertsState,
    alerts =>  alerts.alerts
);

