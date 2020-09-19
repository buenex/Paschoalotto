import { AotCompiler } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AccountService, Account } from '../account';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  user: Account;
  href: string;
  ngOnInit(): void {
    this.user = this.accountService.getUsuarioLogado();
    if (this.accountService.checkUser(this.user.usuario) === 'admin') {
      this.href = '/admin-logado';
    } else {
      this.href = '/usuario-logado';
    }
  }

  hasUserLogado(): boolean {
    return this.accountService.checkHasUser();
  }
}
