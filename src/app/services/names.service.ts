import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class NamesService {

    constructor(
        private _http: HttpClient
        
    ) {
        
      }

    getNames(url: String) {
        return this._http.get(url+'');
    }
}
