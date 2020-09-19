import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService, Account } from '../account';
import { LoginModule } from './login.module';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() login: string;
  // tslint:disable-next-line:no-input-rename
  @Input() senha: string;

  loginf: string;
  senhaf: string;
  usuarioLogado: string;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginf = '';
    this.senhaf = '';
  }

  logar(): void {
      this.accountService.login(this.login, this.senha);
  }
}
