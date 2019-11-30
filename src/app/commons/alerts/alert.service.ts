import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from './alert.model';
import { Injectable } from '@angular/core';


@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();

    onAlert(alertId?: string): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.alertId === alertId));
    }

    success(message: string, alertId?: string) {
        this.alert(new Alert({ message, type: AlertType.Success, alertId }));
    }

    error(message: string, alertId?: string) {
        this.alert(new Alert({ message, type: AlertType.Error, alertId }));
    }

    info(message: string, alertId?: string) {
        this.alert(new Alert({ message, type: AlertType.Info, alertId }));
    }

    warn(message: string, alertId?: string) {
        this.alert(new Alert({ message, type: AlertType.Warning, alertId }));
    }

    alert(alert: Alert) {
        this.subject.next(alert);
    }

    clear(alertId?: string) {
        this.subject.next(new Alert({ alertId }));
    }
}