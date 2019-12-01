import { createReducer, on } from '@ngrx/store';
import { Alert } from './alert.model';
import { addAlert, removeAlert, removeAllAlerts } from './alerts.actions';

export interface AlertState {
    alerts: Alert[]
}

export const initialAlertsState: AlertState = {
    alerts: []
};

export const alertsReducer = createReducer(

    initialAlertsState,

    on(addAlert, (state, action) => {
        console.log("Add new alert");
        return {
            alerts: [...state.alerts, action.alert]
        }
    }),

    on(removeAllAlerts, (state) => {
        return {
            alerts: []
        }
    }),

    on(removeAlert, (state, action) => {
        console.log("Removing alert");
        return {
            alerts: [...state.alerts.filter(alert => alert !== action.alert)]
        }
    })


);