import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }

    trending(): Observable<any> {
        return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=f70167de410d875907d6a40df4b45cb2`);
    }

}
