import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Series } from './Series';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  @Injectable({
    providedIn: 'root'
  })
  export class SeriesService {
    private apiUrl = environment.baseUrl + 'series.json';
  
    constructor(private http: HttpClient) { }
  
    getSeries(): Observable<Series[]> {
      return this.http.get<Series[]>(this.apiUrl);
    }

}
