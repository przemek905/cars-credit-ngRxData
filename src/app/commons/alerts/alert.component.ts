import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Alert, AlertType } from './alert.model';
import { removeAlert } from './alerts.actions';
import { AlertState } from './alerts.reducer';
import { alertsSelector } from './alerts.selectors';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent {
    alerts$: Observable<Alert[]>;

    constructor(private store: Store<AlertState>) { 
        this.alerts$ = store.pipe(select(alertsSelector));
    }

    removeAlert(alert: Alert) {
        this.store.dispatch(removeAlert({alert: alert}));
    }

    cssClass(alert: Alert) {
        if (!alert) {
            return;
        }

        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
}