import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { Promotion } from '../shared/promotion';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private http: HttpClient) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http
      .get<Promotion[]>(baseURL + 'dishes?featured=true')
      .pipe(map((dishes) => dishes[0]));
  }
}
