import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  GetGameData():Observable<any>
  {
    //read in the outside url to get the information about the games
    return this.http.get('https://jsonblob.com/api/jsonblob/26c1273b-b67a-11eb-b540-91d830c59b77');
  }
}
