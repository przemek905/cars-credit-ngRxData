import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Car } from '../../models/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Update } from '@ngrx/entity';

@Injectable()
export class CarDataService extends DefaultDataService<Car> {
    private host: string = `http://localhost:8081/cars`;

    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Car', http, httpUrlGenerator);
    }

    getAll(): Observable<Car[]> {
        return this.http.get<Car[]>(this.host);
    }

    add(car: Car): Observable<Car> {
        return this.http.post<Car>(this.host, car);
    }

    update(car: Update<Car>): Observable<Car> {
        return this.http.put<Car>(this.host + "/" + car.id, car);
    }

    delete(key: number | string): Observable<number | string> {
        return this.http.delete(`${this.host}/${key}`).pipe(map(() => key));
    }
}