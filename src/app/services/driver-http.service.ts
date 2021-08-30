import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DriverModel } from '../models/driver.model';
import { ServerResponse } from '../models/server-response';
import { Handler } from '..//../app/exeption/Handler';
import { environment } from '../../environments/environment';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class DriverHttpService {
  API_URL_PRIVATE: string = environment.API_URL_PRIVATE;
  API_URL_PUBLIC: string = environment.API_URL_PUBLIC;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ServerResponse> {
    const url = this.API_URL_PUBLIC + 'drivers';
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => response),
      catchError(Handler.render)
    );
  }

  getOne(id: number): Observable<ServerResponse> {
    const url = this.API_URL_PUBLIC + 'drivers/' + id;
    return this.httpClient.get<ServerResponse>(url)
    .pipe(
      map((response) => response),
      catchError(Handler.render)
    );
  }

  store(driver: DriverModel): Observable<ServerResponse> {
    const url = this.API_URL_PUBLIC + 'drivers';
    return this.httpClient.post<ServerResponse>(url, driver)
    .pipe(
      map((response) => response),
      catchError(Handler.render)
    );
  }


  update(id: number | undefined, driver: DriverModel): Observable<ServerResponse> {
    const url = this.API_URL_PUBLIC + 'drivers/' + id;
    return this.httpClient.put<ServerResponse>(url, driver)
    .pipe(
      map((response) => response),
      catchError(Handler.render)
    );
  }

  delete(id: number | undefined): Observable<ServerResponse> {
    const url = this.API_URL_PUBLIC + 'drivers/' + id;
    return this.httpClient.delete<ServerResponse>(url)
    .pipe(
      map((response) => response),
      catchError(Handler.render)
    );
  }
}
