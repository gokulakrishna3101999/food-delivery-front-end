import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { API_BASE_URL } from 'src/app/constants/url';

@Injectable({
    providedIn: 'root'
})
export class FoodItemService {

    private apiUrl = API_BASE_URL+'/foodCatalogue/restaurant/get/';

    constructor(private http: HttpClient) { }

    getFoodItemsByRestaurant(id:number): Observable<any> {
        return this.http.get<any>(this.apiUrl+id).pipe(
            catchError((error) => {
              console.error('Error fetching food items:', error);
              return throwError(() => new Error('Error fetching food items. Please try again later.'));
            })
          );
      }
}