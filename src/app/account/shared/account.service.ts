import { Injectable } from '@angular/core';
import { AccountModule } from '../account.module';
import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAccount(username: string, password: string): boolean {
    this.http.get(this.API_URL + '/account');
    return true;
  }
}
