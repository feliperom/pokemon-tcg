import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Card, Cards } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  route = 'cards';

  constructor(
    private http: HttpClient
  ) { }

  getAll(param?: any): Observable<Card[]> {
    let params = new HttpParams();

    Object.keys(param).forEach(
      (item) => {
        params = params.set(item, param[item]);
      }
    );

    const url = `${environment.api.url}/${environment.api.version}/${this.route}`;
    return this.http.get(url, { params })
      .pipe(
        map((res: Cards) => res.cards),
        catchError((err: HttpErrorResponse) => {
          return of(null);
        })
      );
  }

  get(id: string): Observable<Card> {
    const url = `${environment.api.url}/${environment.api.version}/${this.route}/${id}`;
    return this.http.get(url)
      .pipe(
        map((res: Card) => res.card),
        catchError((err: HttpErrorResponse) => {
          return of(null);
        })
      );
  }
}
