import { Component, OnInit } from '@angular/core';
import {Account, AccountService } from '../account';

@Component({
  selector: 'app-admin-logado',
  templateUrl: './admin-logado.component.html',
  styleUrls: ['./admin-logado.component.css']
})
export class AdminLogadoComponent implements OnInit {
  user: Account;
  users: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.user =  this.accountService.getUsuarioLogado();
    console.log(this.accountService.getAllUser());
    this.users = JSON.parse('');
  }
}
