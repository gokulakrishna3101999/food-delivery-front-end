import { API_URL_RL } from "src/app/constants/url";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private apiUrl = API_URL_RL + '/restaurant/get';

    constructor(private http: HttpClient) {}

    getAllRestaurants(): Observable<any> {
        return this.http.get<any>(this.apiUrl).pipe(
            catchError((error) => {
                console.error('Error fetching restaurant data:', error);
                throw error;
            })     
        );
    }
}