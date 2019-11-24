import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Car } from '../../models/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class CarDataService extends DefaultDataService<Car> {
    private host: string = "http://localhost:8081";

    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Car', http, httpUrlGenerator);
    }

    getAll(): Observable<Car[]> {
        return this.http.get<Car[]>(this.host + "/cars");
    }
}