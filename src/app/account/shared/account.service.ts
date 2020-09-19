import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  API_URL = 'http://localhost:5000/api/';

  constructor(private http: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  login(usuario: string, senha: string) {
    this.http.get(this.API_URL + 'usuario?usuario=' + usuario + '&senha=' + senha).subscribe(
      res => {
        if (res) {
          // tslint:disable-next-line:no-string-literal
          this.getUser(usuario).subscribe(a => sessionStorage['usuario'] = JSON.stringify(a));
        }
    });
    this.redirect(usuario);
  }

  getUser(usuario: string): Observable<Account> {
    return this.http.get<Account>(this.API_URL + 'usuario/' + usuario);

  }

  getAllUser(): Observable<Account[]> {
    console.log(this.http.post<Account[]>(this.API_URL + '?request=all', this.httpOptions))
    return this.http.post<Account[]>(this.API_URL + '?request=all', this.httpOptions);
  }

  redirect(user: string) {
    if (user === 'admin') {
      this.router.navigate(['/admin-logado']);
    } else {
      this.router.navigate(['/usuario-logado']);
    }
  }

  updateUser(usuario: Account): Observable<Account> {
    return this.http.put<Account>(this.API_URL + '/' + usuario.usuario, JSON.stringify(usuario), this.httpOptions);
  }

  deleteUser(usuario: Account): Observable<Account> {
    return this.http.delete<Account>(this.API_URL + '/' + usuario.usuario);
  }

  getUsuarioLogado(): Account {
    console.log(sessionStorage.usuario);
    return JSON.parse(sessionStorage.usuario);
  }

  checkHasUser(): boolean {
    if (sessionStorage.usuario !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  checkUser(user: string): string {
    if (this.checkHasUser()) {
      if (user === 'admin') {
        return 'admin';
      } else {
        return 'user';
      }
    }
    return '';
  }
}
