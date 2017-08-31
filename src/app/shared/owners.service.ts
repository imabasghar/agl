import { environment } from './../../environments/environment';
import { Owner } from './owner.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OwnersService {
  private get ownersEndpoint(): string {
    return `${environment.apiEndPoint}/people.json`;
  }
  constructor(private http: Http) {

  }

  /**
   * Gets list of owners along with their pets
   */
  getOwners(): Observable<Array<Owner>> {
    return this.http.get(this.ownersEndpoint)
      .map((response: any) => response.json());
  }
}
