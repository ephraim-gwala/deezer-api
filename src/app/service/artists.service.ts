import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private searchUrl = 'https://api.deezer.com/search?q=';

  constructor(private http: HttpClient) { }

  search(value: any) {
    const apiURL = this.searchUrl + value;
    let promise = new Promise((resolve, reject) => {
      this.http.get(apiURL)
          .toPromise()
          .then(
              res => { // Success
                console.log(res);
              }
          );
    });
    return promise;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
