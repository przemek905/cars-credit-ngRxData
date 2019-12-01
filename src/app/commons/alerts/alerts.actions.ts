import { createAction, props } from '@ngrx/store';
import { Alert } from './alert.model';


export const addAlert = createAction(
    "[Alerts] Add Alert",
    props<{alert: Alert}>()
);

export const removeAlert = createAction(
    "[Alerts] Remove Alert",
    props<{alert: Alert}>()
);

export const removeAllAlerts = createAction(
    "[Alerts] Remove All Alerts"
);

